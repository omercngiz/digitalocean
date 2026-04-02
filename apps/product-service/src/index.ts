import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin:["http://localhost:3000", "http://localhost:3001"],
    credentials: true
}))

app.get('/health', (req:Request, res:Response) => {
  res.status(200).json({
    status: "success",
    uptime: process.uptime(),
    timeStamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Product Service is running on port ${PORT}`);
});