const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const connectDB = require('../config/db');
const apiRoutes = require('../routes/api');

let app;
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongoServer.getUri();
  await connectDB();
  app = express();
  app.use(express.json());
  app.use('/api', apiRoutes);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

afterEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

describe('Diary API', () => {
  test('POST /api/diary creates entry', async () => {
    const res = await request(app)
      .post('/api/diary')
      .send({
        foodName: 'Apple',
        calories: 100,
        protein: 1,
        carbs: 25,
        fat: 0,
        servingSize: '1 medium',
        image: '',
        date: '2024-01-01'
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('_id');
  });

  test('GET /api/diary/:date returns entries for date', async () => {
    await request(app).post('/api/diary').send({
      foodName: 'Banana',
      calories: 90,
      protein: 1,
      carbs: 23,
      fat: 0,
      date: '2024-02-02'
    });

    const res = await request(app).get('/api/diary/2024-02-02');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].foodName).toBe('Banana');
  });

  test('DELETE /api/diary/:id removes entry', async () => {
    const post = await request(app).post('/api/diary').send({
      foodName: 'Egg',
      calories: 70,
      protein: 6,
      carbs: 1,
      fat: 5,
      date: '2024-03-03'
    });
    const id = post.body._id;
    const del = await request(app).delete(`/api/diary/${id}`);
    expect(del.status).toBe(200);
    const res = await request(app).get('/api/diary/2024-03-03');
    expect(res.body.length).toBe(0);
  });

  test('GET /api/history returns all entries', async () => {
    await request(app).post('/api/diary').send({
      foodName: 'Fish',
      calories: 120,
      protein: 20,
      carbs: 0,
      fat: 3,
      date: '2024-04-04'
    });
    await request(app).post('/api/diary').send({
      foodName: 'Rice',
      calories: 200,
      protein: 4,
      carbs: 45,
      fat: 1,
      date: '2024-04-04'
    });
    const res = await request(app).get('/api/history');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(2);
  });
});
