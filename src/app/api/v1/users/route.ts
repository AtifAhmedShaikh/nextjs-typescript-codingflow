import { NextRequest, NextResponse } from "next/server";
const usersData = [
  {
    username: "JohnDoe",
    email: "johndoe@example.com",
    password: "password123",
    age: "25",
  },
  {
    username: "JaneSmith",
    email: "janesmith@example.com",
    password: "pass456",
    age: "32",
  },
  {
    username: "MikeJohnson",
    email: "mikejohnson@example.com",
    password: "mikepass",
    age: "40",
  },
  {
    username: "EmilyDavis",
    email: "emilydavis@example.com",
    password: "emily123",
    age: "19",
  },
  {
    username: "ChrisWilson",
    email: "chriswilson@example.com",
    password: "chrispass",
    age: "37",
  },
  {
    username: "SarahBrown",
    email: "sarahbrown@example.com",
    password: "sarahpass",
    age: "28",
  },
  {
    username: "DavidTaylor",
    email: "davidtaylor@example.com",
    password: "davidpass",
    age: "33",
  },
  {
    username: "OliviaClark",
    email: "oliviaclark@example.com",
    password: "oliviapass",
    age: "22",
  },
  {
    username: "MichaelWhite",
    email: "michaelwhite@example.com",
    password: "mike123",
    age: "45",
  },
  {
    username: "SophiaLewis",
    email: "sophialewis@example.com",
    password: "sophiapass",
    age: "30",
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  return NextResponse.json({
    message: "Hi I am from Get route of users ",
    data: usersData,
  });
}

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  return NextResponse.json({
    message: "Hi I am from Get route of users ",
    data: reqBody,
  });
}
