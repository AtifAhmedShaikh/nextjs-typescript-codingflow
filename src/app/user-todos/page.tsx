import TodoItem from "@/components/TodoItem";

const UserTodos = () => {
  return (
    <div className="mt-5 h-screen w-100">
      <h3 className="text-center text-4xl my-10">Your Todos Here </h3>
      <div className="w-2/5 border rounded-md h-auto min-h-80 m-auto">
        <div className="w-100 bg-blue-800 text-center grid grid-cols-12 py-3 gap-2 px-2 rounded-md ">
          <input
            type="text"
            className="col-span-10 border py-1 px-3 rounded-md shadow-md focus:ring-blue-500 ring-1 focus:outline-none ring-blue-1 w-100 "
            placeholder="Enter Todo Title here..."
          />
          <button className="col-span-2  bg-blue-600 hover:bg-blue-500 rounded-md border text-gray-100 text-lg border-blue-600">
            Add Todo
          </button>
        </div>
        <div className="w-100 px-3 mt-5">
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default UserTodos;
