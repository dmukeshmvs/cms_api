import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js"
import artifactRoutes from "./routes/artifact.routes.js"
import likeRoutes from "./routes/likes.routes.js"
import commentRoutes from "./routes/comment.routes.js"
import webhookRoutes from "./webhook/webhooks.js"
import cookieParser from "cookie-parser";
import { testing } from "./crons/testing.js";


const app = express();

// Middleware
app.use(cors());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true, limit: "10mb"}));
app.use(morgan("dev"));
app.use(cookieParser());
testing();

app.get("/", (req,res)=>{
    res.status(200).json({
        success: true,
        message: "CMS is Running."
    });
})

app.use("/webhooks",webhookRoutes);
app.use("/auth",authRoutes);
app.use("/artifact",artifactRoutes);
app.use("/likes",likeRoutes);
app.use("/comments",commentRoutes);

export default app;