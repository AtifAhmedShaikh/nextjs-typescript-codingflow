interface Todo {
  completed: Boolean;
  title: string;
  userId: string;
}

const Contact = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: Todo[] = await response.json();
  return (
    <div>
      <h1>Contact</h1>
      {data.map((item: Todo) => {
        return (
          <div>
            <p className="text-lg">{item.title}</p>
            <p className="text-md">{item.userId}</p>
            <p className="text-sm">
              {item.completed ? "Completed" : "Pending"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
