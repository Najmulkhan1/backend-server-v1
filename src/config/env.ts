import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const env = {
    port: process.env.PORT || 5000,
}

export default env;