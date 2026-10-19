import express, { Request, Response } from 'express';
import imagesRouter from './routes/images';

const app = express();

app.get('/', (req: Request, res: Response): void => {
  res.send('Image Processing API is running!');
});
app.use('/api/images', imagesRouter);
export default app;
