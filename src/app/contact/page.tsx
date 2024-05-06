import Image from "next/image";
import { Metadata } from "next";

interface Todo {
  completed: Boolean;
  title: string;
  userId: string;
}

export const revalidate = 0;

const Contact = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });

  const data: Todo[] = await response.json();
  return (
    <div>
      <h1>Contact</h1>
      {data.map((item: Todo) => {
        return (
          <div>
            <Image
              width={40}
              height={40}
              src={
                "https://plus.unsplash.com/premium_photo-1673624399950-99066a5c9663?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
              }
              alt="Image..."
            />
            <Image
              width={40}
              height={40}
              src={
                "https://images.unsplash.com/photo-1714745454829-a64751d90480?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
              }
              alt="Image..."
            />
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

export const metadata: Metadata = {
  title: "Contact Page Here",
  description: "Contact description...",
};

export default Contact;
