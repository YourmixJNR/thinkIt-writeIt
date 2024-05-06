import app from "./server.js";
import startDb from "./config/db.js";
import { processEnv } from "./lib/processEnv.js";

// connect to MongoDB
startDb();

// port
const port = `${processEnv.PORT}` || 8000;

// start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));