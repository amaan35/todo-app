import { Document } from "mongoose";

export interface Todo extends Document{
    name: string
    desc: string
    completed: boolean
}