"use client";

import React, { FormEvent } from "react";
import { handleAction, handleUpdateClick } from "@/actions";

const ServerAction = () => {
  return (
    <div className="p-auto m-auto">
      <form action={handleAction}>
        <input className="border" type="text" name="name" id="" />
        <input className="border" type="email" name="email" id="" />
        <button type="submit">Submit</button>
      </form>
      <button
        className="bg-blue-600 hover:bg-blue-800 rounded-md border"
        onClick={() => {
          handleUpdateClick(1);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default ServerAction;
