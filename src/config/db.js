import dotenv from "dotenv";
dotenv.config();

import dns from "dns";

import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

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