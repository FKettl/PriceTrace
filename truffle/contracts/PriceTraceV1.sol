// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract PriceTraceV1 {

    struct PriceStatus{
        uint status_id;
        string name;
        uint date;
        uint avg_price;
        uint category_id;
        uint store_id;
    }

    struct Store {
        string name;
        string url;
        uint store_id;
        address userAddress;
        uint level;
    }

    
    struct Prize {
        uint prize_id;
        string name;
        string description;
        uint date;
    }

    struct PrizeUser{
        uint prize_id;
        uint user_id;
        uint date;
    }

    struct Category {
        uint category_id;
        string name;
        string description;
    }

    struct Product {
        uint product_id;
        string name;
        uint price;
        uint store_id;
        uint price_date;
        string description;
        string url;
        string imageurl;
    }

    PriceStatus[] public allPriceStatus;
    Store[] public allStores;
    Prize[] public allPrizes;
    PrizeUser[] public allPrizeUsers;
    Category[] public allCategories;
    Product[] public allProducts;

    
    uint public lastPriceStatusId;
    uint public lastStoreId;
    uint public lastPrizeId;
    uint public lastCategoryId;
    uint public lastProductId;
    mapping(address => Store) user_stores;
    mapping(uint => Store) byid_stores;

    
    function getNewPriceStatusId() public returns (uint) {
        return lastPriceStatusId++;
    }

    function getNewStoreId() public returns (uint) {
        return lastStoreId++;
    }

    function getNewPrizeId() public returns (uint) {
        return lastPrizeId++;
    }


    function getNewCategoryId() public returns (uint) {
        return lastCategoryId++;
    }

    function getNewProductId() public returns (uint) {
        return lastProductId++;
    }


    

    function getUserStore(address _add) public view returns (uint, string memory){
        return (user_stores[_add].store_id, user_stores[_add].name);
    }

    function createPriceStatus(string memory _name, uint _date, uint _avg_price, uint _categoty, uint _store) public {
        PriceStatus memory price = PriceStatus({
          name: _name,
          date: _date,
          avg_price: _avg_price,
          category_id: _categoty,
          store_id: _store,
          status_id: getNewPriceStatusId()
        });
        allPriceStatus.push(price);
    }

    function createStore(string memory _name, string memory _url, address _add) public {
        uint store_id = getNewStoreId();
        Store memory store = Store({
            name: _name,
            url: _url,
            level: 1,
            userAddress: _add,
            store_id: store_id
        });
        allStores.push(store);
        user_stores[_add] = store;
        byid_stores[store_id] = store;
         
    }

    function createPrize(string memory _name, string memory _description, uint _date) public {
        Prize memory prize = Prize({
            name: _name,
            description: _description,
            date: _date,
            prize_id: getNewPrizeId()
        });
        allPrizes.push(prize);
    }

    function createPrizeUser(uint _prize_id, uint _user_id, uint _date) public {
        PrizeUser memory prizeuser = PrizeUser({
            prize_id: _prize_id,
            user_id: _user_id,
            date: _date
        });
        allPrizeUsers.push(prizeuser);
    }

    function createCategory(string memory _name, string memory _description) public {
        Category memory category = Category({
            category_id: getNewCategoryId(),
            name: _name,
            description: _description
        });
        allCategories.push(category);
    }

    function createProduct(string memory _imageurl, string memory _name, uint _price, uint _price_date, string memory _description, string memory _url, address _add) public {
        Product memory product = Product({
            product_id: getNewProductId(),
            name:_name,
            price:_price,
            store_id:user_stores[_add].store_id,
            price_date: _price_date,
            description:_description,
            url:_url,
            imageurl:_imageurl
        });
        allProducts.push(product);
    }

    function getProducts() public view returns (Product[] memory, Store[] memory){
      Product[] memory id = new Product[](lastProductId);
      Store[] memory id_store = new Store[](lastProductId);
      for (uint i = 0; i < lastProductId; i++) {
          Product storage p = allProducts[i];
          id[i] = p;
          id_store[i] = byid_stores[p.store_id];
      }
      return (id, id_store);
    }

    function getStoreById(uint _id) public view returns (Store memory){
      return byid_stores[_id];
    }
  


    function getAveragePriceByCategory(uint _category, uint _start_date) public view returns (uint) {

        uint average_return;
        uint total;

        for (uint i = 0; i < allPriceStatus.length; i++) {
            if( allPriceStatus[i].category_id == _category && allPriceStatus[i].date >= _start_date) {
                average_return = average_return + allPriceStatus[i].avg_price;
                total = total + 1;
            }
        }
        average_return = average_return/total;
        return average_return;

    }

    function getAveragePriceByStore(uint _store, uint _start_date) public view returns (uint[] memory, string[] memory, uint[] memory, uint[] memory, uint[] memory) {

      
        uint[] memory status_id = new uint[](allPriceStatus.length);
        string[] memory name = new string[](allPriceStatus.length);
        uint[] memory date= new uint[](allPriceStatus.length);
        uint[] memory avg_price = new uint[](allPriceStatus.length);
        uint[] memory category_id = new uint[](allPriceStatus.length);

        uint total = 0;
        for (uint i = 0; i < allPriceStatus.length; i++) {
            if( allPriceStatus[i].store_id == _store && allPriceStatus[i].date >= _start_date) {
                status_id[total] = allPriceStatus[i].status_id;
                name[total] = allPriceStatus[i].name;
                date[total] = allPriceStatus[i].date;
                avg_price[total] = allPriceStatus[i].avg_price;
                category_id[total] = allPriceStatus[i].category_id;
                total = total + 1;

            }
        }
        return (status_id, name, date, avg_price, category_id);

    }




}
