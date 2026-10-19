import processImage from '../utils/imageProcessor';
import { existsSync } from 'fs';
import sharp from 'sharp';

describe('Image Processor', () => {
  it('should resize an image and save it', async () => {
    const outputPath = await processImage('cat', 150, 150);

    expect(existsSync(outputPath)).toBe(true);
  });
  it('should resize image to correct dimensions', async () => {
    const outputPath = await processImage('cat', 150, 150);

    const metadata = await sharp(outputPath).metadata();

    expect(metadata.width).toBe(150);
    expect(metadata.height).toBe(150);
  });
});
