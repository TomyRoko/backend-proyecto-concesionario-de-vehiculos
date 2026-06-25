import dotenv from "dotenv";
dotenv.config();


import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
}
catch (error) {
        console.log("Error al conectar a la base de datos:");
        process.exit(1);
    }
};

export default connectDB;