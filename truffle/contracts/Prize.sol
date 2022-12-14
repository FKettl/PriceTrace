// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Prize is ERC721Enumerable, Ownable{
    using Strings for uint256;
    
    struct Prize {
        string name;
        string description;
        uint date;
        address from;
        address to;
        string localurl;
    }

    mapping(string => uint8) public existingURIs;
    Prize[] public allPrizes;
    uint256 public cost = 0.00001 ether;
    uint256 public maxSupply = 10000;
    uint256 public supply;
    string public baseURI;

    event givePrize(
        uint256 id,
        address indexed from,
        address indexed to,
        uint256 cost,
        string metadataURI,
        uint256 timestamp
    );

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseURI
    ) ERC721(_name, _symbol) {
        supply = 0;
        baseURI = _baseURI;
    }

    function createPrize(string memory _name, string memory _description, uint _date, address _add, string memory _url) payable public {
        require(supply <= maxSupply, "Sorry, all NFTs have been minted!");
        require(msg.value > 0 ether, "Ether too low for minting!");
        require(msg.sender != owner(), "This is not permitted!");

        supply += 1;
        string memory URI = concat(Strings.toString(supply + 1));
        existingURIs[URI] = 1;

        
        Prize memory prize = Prize({
            name: _name,
            localurl:_url,
            description: _description,
            date: _date,
            from: msg.sender,
            to:_add
        });
        allPrizes.push(prize);

        emit givePrize(supply, _add, owner(), msg.value, URI, block.timestamp);
        _safeMint(msg.sender, supply);
    }

    function getAllNFTs() public view returns (Prize[] memory) {
        return allPrizes;
    }
    
    function getAnNFTs(uint256 tokenId) public view returns (Prize memory) {
        return allPrizes[tokenId - 1];
    }

    function concat(string memory str) internal view returns (string memory) {
        return string(abi.encodePacked(baseURI, "", str));
    }

    function getUserNFTS(address _add) public view returns(Prize[] memory){
        Prize[] memory prizes = new Prize[](allPrizes.length);
        uint total = 0;
        for (uint i = 0; i < allPrizes.length; i++) {
            if(allPrizes[i].to == _add) {
                prizes[total] = allPrizes[i];
                total = total + 1;           
            }
        }
        return prizes;
    }






}