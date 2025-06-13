import express from "express";
import { PORT } from "./config/env.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import connectToDatabase from "./database/mongodb.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/users", userRouter);

app.use(errorMiddleware);



app.get("/", (req, res) => {
  res.send({ body: "Hello World!" });
});

app.listen(PORT, async () => {
  console.log(`tracking software server is running on http://localhost:${PORT}`);
   await connectToDatabase();
});

export default app;
