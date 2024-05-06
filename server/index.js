import app from "./server.js";
import startDb from "./config/db.js";
import { processEnv } from "./lib/processEnv.js";

// db
startDb();

// port
const port = `${processEnv.PORT}` || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));