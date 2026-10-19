import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';

const processImage = async (
  filename: string,
  width: number,
  height: number,
): Promise<string> => {
  const inputPath = path.join(
    process.cwd(),
    'images',
    'full',
    `${filename}.jpg`,
  );

  const thumbDir = path.join(process.cwd(), 'images', 'thumb');

  mkdirSync(thumbDir, { recursive: true });

  const outputPath = path.join(
    thumbDir,
    `${filename}_${width}_${height}.jpg`,
  );

  if (existsSync(outputPath)) {
    console.log('Image loaded from cache');
    return outputPath;
  }

  console.log('Processing new image');

  await sharp(inputPath).resize(width, height).toFile(outputPath);

  return outputPath;
};

export default processImage;