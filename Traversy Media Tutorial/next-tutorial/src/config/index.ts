const server =
  process.env.NODE_ENV === "production"
    ? "http://localhost:8000"
    : // Using serve for this since it is a localhost
      "http://localhost:3000";

export default server;
