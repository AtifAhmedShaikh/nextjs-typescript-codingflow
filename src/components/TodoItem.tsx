const TodoItem = () => {
  return (
    <div className="grid grid-cols-12 border-b items-center place-content-center px-3 mb-5 pb-2">
      <input type="checkbox" className="col-span-1 w-6 h-6 " />
      <p className="text-[14px] col-span-9 font-normal text-ellipsis">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        quasi...
      </p>
      <button className="col-span-2 border-red-800 bg-red-600 hover:bg-red-800 rounded-md p-2 text-gray-100 w-fit h-fit ">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
