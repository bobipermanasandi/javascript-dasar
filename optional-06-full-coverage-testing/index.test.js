import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Fungsi penjumlahan dengan angka positif', () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(10, 20), 30);
});

test('Fungsi penjumlahan dengan angka nol', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 0), 0);
});

test('Fungsi penjumlahan dengan angka negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});

test('Fungsi penjumlahan dengan argumen non-number', () => {
  assert.strictEqual(sum('1', 2), 0);
  assert.strictEqual(sum(1, '2'), 0);
  assert.strictEqual(sum('1', '2'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(5, undefined), 0);
  assert.strictEqual(sum({}, []), 0);
});
