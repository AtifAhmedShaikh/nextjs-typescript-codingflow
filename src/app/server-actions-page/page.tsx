"use client";
import React, { FormEvent } from "react";
import { handleAction } from "@/actions";

const ServerAction = () => {
  return (
    <div>
      <form action={handleAction}>
        <input className="border" type="text" name="name" id="" />
        <input className="border" type="email" name="email" id="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ServerAction;