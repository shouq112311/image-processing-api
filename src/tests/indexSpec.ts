import request from 'supertest';
import app from '../app';

describe('Image Processing API', () => {
  it('should return 400 if parameters are missing', async () => {
    const response = await request(app).get('/api/images');
    expect(response.status).toBe(400);
  });

  it('should return 200 for a valid image', async () => {
    const response = await request(app).get(
      '/api/images?filename=cat&width=200&height=300',
    );
    expect(response.status).toBe(200);
  });

  it('should return 404 if image does not exist', async () => {
    const response = await request(app).get(
      '/api/images?filename=unknown&width=200&height=300',
    );
    expect(response.status).toBe(404);
  });

  it('should return 400 if width is negative', async () => {
    const response = await request(app).get(
      '/api/images?filename=cat&width=-200&height=300',
    );
    expect(response.status).toBe(400);
  });

  it('should return 400 if height is zero', async () => {
    const response = await request(app).get(
      '/api/images?filename=cat&width=200&height=0',
    );
    expect(response.status).toBe(400);
  });

  it('should return 400 if width is not a number', async () => {
    const response = await request(app).get(
      '/api/images?filename=cat&width=abc&height=300',
    );
    expect(response.status).toBe(400);
  });
});