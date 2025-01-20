const app = require("./app");
const connectDatabase = require("./db/Database");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//databse
connectDatabase();

//create server
const server = app.listen(farm - pal - project.vercel.app, () => {
  console.log(
    `Server is running on http://localhost:farm-pal-project.vercel.app`
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`shutting down for ${err.message} `);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
