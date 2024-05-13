import TodoItem from "@/components/TodoItem";

const UserTodos = () => {
  return (
    <div className="mt-5 h-screen w-100">
      <h3 className="text-center text-4xl my-10">Your Todos Here </h3>
      <div className="w-2/5 border rounded-md h-auto min-h-80 m-auto">
        <div className="w-100 bg-blue-800 text-center grid grid-cols-12 py-2 gap-1 px-2 rounded-md h-14 grid-rows-1">
          <input
            type="text"
            className="col-span-9 border py-1 px-3 rounded-md shadow-md focus:ring-blue-500 ring-1 focus:outline-none ring-blue-1 w-100 "
            placeholder="Enter Todo Title here..."
          />
          <button className="col-span-3 text-xsm  bg-blue-600 hover:bg-blue-500 rounded-md border text-gray-100  border-blue-600">
            Add Todo
          </button>
        </div>
        <button className="hover:bg-green-600 rounded-md border-green-600 border px-3 ml-4 hover:text-gray-100 mt-2">
          Completed
        </button>
        <div className="w-100 px-3 mt-5">
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default UserTodos;
