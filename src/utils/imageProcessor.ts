import sharp from 'sharp';
import { existsSync } from 'fs';
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

  const outputPath = path.join(
    process.cwd(),
    'images',
    'thumb',
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
