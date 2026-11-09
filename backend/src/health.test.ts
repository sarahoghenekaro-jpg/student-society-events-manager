import request from 'supertest';
import { describe, it, expect, afterAll } from 'vitest';
import { app } from './app';
import { pool } from './db';

afterAll(() => pool.end());

describe('GET /health', () => {
  it('reports the database is up', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok', db: 'up' });
  });
});