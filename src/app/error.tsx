"use client";
import React from "react";

const ErrorPage = ({ error, reset }: { error: any; reset: () => void }) => {
  return (
    <div>
      Something went wrong
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default ErrorPage;
