import { ObjectId } from "mongodb";

export interface User {
    name: string;
    email: string;
    id?: ObjectId;
}
