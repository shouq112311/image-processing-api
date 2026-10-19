# Image Processing API

An Image Processing API built using Node.js, Express, TypeScript, and Sharp.

## Features

- Resize JPG images using width and height parameters.
- Cache resized images to avoid unnecessary processing.
- Validate query parameters.
- Handle missing images and invalid requests.
- Test the API using Jasmine and SuperTest.

## Installation

Install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

The server runs at:

`http://localhost:3001`

## API Endpoint

**GET** `/api/images`

Required query parameters:

| Parameter | Description |
|---|---|
| filename | Image filename without `.jpg` |
| width | Positive integer representing image width |
| height | Positive integer representing image height |

Example:

`http://localhost:3001/api/images?filename=cat&width=200&height=300`

Original images are stored in `images/full`.

Resized images are saved in `images/thumb`.

## Available Commands

| Command | Description |
|---|---|
| `npm start` | Build and start the server |
| `npm run build` | Compile TypeScript |
| `npm test` | Run Jasmine tests |
| `npm run lint` | Check code using ESLint |
| `npm run format` | Format code using Prettier |

## Error Handling

- `400 Bad Request`: Missing or invalid parameters.
- `404 Not Found`: Requested image does not exist.
- `500 Internal Server Error`: Image processing failed.

## Technologies

- Node.js
- Express
- TypeScript
- Sharp
- Jasmine
- SuperTest
- ESLint
- Prettier