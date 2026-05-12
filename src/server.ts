import { Server } from "node:http";
import app from "./app";
import env from "./config/env";


let server: Server;

const boststrap = async () => {

    try {
        server = app.listen(env.port, () => {
        console.log(`Server is running on port ${env.port}`);
    })
    } catch (error) {
        console.error("Error starting server:", error);
    }
    
}

(async () => {
    await boststrap()
})()


process.on("unhandledRejection", (error) => {
    console.log("Unhandled Rejection Detected");
    if(server){
        server.close(() => {
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
    
});

process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception Detected");
    if(server){
        server.close(() => {
            process.exit(1)
        })
    } else{
        process.exit(1)
    }
    
})


process.on("SIGTERM", () => {
    console.log("SIGTERM received, shutting down gracefully");
    if(server){
        server.close(() => {
            console.log("Server closed gracefully");
            process.exit(0);
        })
    } else {
        process.exit(0);
    }
    
})