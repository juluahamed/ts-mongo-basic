import { User } from '../src/models/user';
// import { ObjectId } from "mongodb";
import { collections } from "./services/database.service";

import { connectToDatabase } from "./services/database.service";

connectToDatabase()
    .then(async () => {
        console.log("We have successfully connected a DB")
        await createUser()
        await getUser()
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

 const createUser = async () => {
    const newUser: User = {
        name: "Julu",
        email: "john.doe@example.com"
    }

    try {
        const result = await collections.users.insertOne(newUser);
        console.log("Created User with Id", result )

    } catch (err) {
        console.log('Error occured while inserting', err)
    }
}


const getUser = async () => {
    const newUser: User = {
        name: "Julu",
        email: "john.doe@example.com"
    }

    try {
        //const query = { _id: new ObjectId(id) }
        const query = {email: "john.doe@example.com"}
        const result = await collections.users.findOne(query) as User;
        console.log("retrieved  User", result )

    } catch (err) {
        console.log('Error occured while retrieving', err)
    }
}


