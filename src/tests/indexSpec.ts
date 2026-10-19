import request from 'supertest';
import app from '../app';

describe('Image Processing API', () => {
  it('should return 400 if parameters are missing', async () => {
    const Response = await request(app).get('/api/images');
    expect(Response.status).toBe(400);
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
});
