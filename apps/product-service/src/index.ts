import express, { Request, Response } from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express';
import { shouldBeUser } from './middleware/auth';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin:["http://localhost:3000", "http://localhost:3001"],
    credentials: true
}))
app.use(express.json());
app.use(clerkMiddleware());

app.get('/health', (req:Request, res:Response) => {
  res.status(200).json({
    status: "success",
    uptime: process.uptime(),
    timeStamp: new Date().toISOString(),
  });
});

app.get('/test', shouldBeUser, (req:Request, res:Response) => {
  res.json({ message: 'Authenticated!', userId: req.userId });
});

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});