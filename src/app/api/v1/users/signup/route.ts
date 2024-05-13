import userModel from "@/models/UserModel";
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const requestBody = await request.json()
    const { email, username, password } = requestBody;
    const createdUser = await userModel.create({ email, username, password })
    if (!createdUser) {
        return NextResponse.json({ message: "Error while creating user document " }, { status: 500 })
    }
    const hashToken = await bcrypt.hashSync(createdUser._id, 10)
    //TODO: send email with this token in of url page
    return NextResponse.json({ message: "User has signUp succesfully, verify your account " }, { status: 201 });
}