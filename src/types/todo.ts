import { Document } from "mongoose";

export interface TypeTodo extends Document{
    name: string
    desc: string
    completed: boolean
}