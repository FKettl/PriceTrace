function ItemModal (props) {
  return (
    <>
     <div className="fixed left-0 top-0 right-0 bottom-0 bg-black/50 flex items-center justify-center"
         onClick={() => props.setIsOpen(false)}>
        <div className="w-[80rem] h-[40rem] bg-white">
            <div className="p-10">
                <h4 className="m-0">{props.name}</h4>
            </div>
            <div className="p-10 border-t-[1px] border-solid border-t-[#eee] border-b-[1px] border-b-[#eee] ">
                Preço: {props.price}
            </div>
            <div className="relative h-[10rem] p-10">
                <button onClick={() => props.setIsOpen(false)} className="">BUY</button>
            </div>
        </div>
     </div>
    </>
  );
};

export default ItemModal;