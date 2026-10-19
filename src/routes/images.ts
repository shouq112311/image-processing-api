import { Router, Request, Response } from 'express';
import processImage from '../utils/imageProcessor';
import { existsSync } from 'fs';
import path from 'path';

const imagesRouter = Router();

imagesRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;
  if (!filename || !width || !height) {
    res.status(400).json({
      error: 'Missing required parameters',
    });
    return;
  }

  if (
    typeof filename !== 'string' ||
    typeof width !== 'string' ||
    typeof height !== 'string'
  ) {
    res.status(400).json({
      error: 'Invalid parameter format',
    });
    return;
  }

  if (!/^[a-zA-Z0-9_-]+$/.test(filename)) {
    res.status(400).json({
      error: 'Invalid filename',
    });
    return;
  }

  const imagewidth = Number(width);
  const imageHeight = Number(height);

  if (
    !Number.isInteger(imagewidth) ||
    !Number.isInteger(imageHeight) ||
    imagewidth <= 0 ||
    imageHeight <= 0
  ) {
    res.status(400).json({
      error: 'Width and height must be positive integers',
    });
    return;
  }
  const inputPath = path.join(
    process.cwd(),
    'images',
    'full',
    `${filename}.jpg`,
  );

  if (!existsSync(inputPath)) {
    res.status(404).json({
      error: 'Image not found',
    });
    return;
  }
  try {
    const ImagePath = await processImage(filename, imagewidth, imageHeight);
    res.sendFile(ImagePath);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Failed to process image',
    });
  }
});

export default imagesRouter;
