"use server";
import fs from "fs/promises";

export const handleAction = async (e: any) => {
  const object = Object.fromEntries(e.entries());
  console.log(object);
  await fs.writeFile("./src/generated-file.json", JSON.stringify(object), {
    encoding: "utf-8",
    mode: 0o666,
    flag: "w",
  });
};

export const handleUpdateClick = (e: any) => {
  console.log(e);
};
