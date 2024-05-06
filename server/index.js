import app from "./server";
import startDb from "./config/db";
import { processEnv } from "./lib/processEnv";

// Connect to MongoDB
startDb();

// port
const port = `${processEnv.PORT}` || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
