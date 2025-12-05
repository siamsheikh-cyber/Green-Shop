import mongoose from "mongoose";

export async function MongoDBConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connect to mongoDB");


    } catch (error) {
        console.log(error);

    }
}