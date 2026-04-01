import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors({
    origin: '["http://localhost:3000", "http://localhost:3001"]',
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Hello from Order Service!');
});

app.listen(PORT, () => {
    console.log(`Order service is running on port ${PORT}`);
});