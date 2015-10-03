import test from 'ava';
import isAlphanumeric from './';

test('should check if a string only contains alphanumeric characters', t => {
	['abc', 'éçèà', 'ab114554', '123', 'a', 'ABC'].forEach(val => {
		t.is(isAlphanumeric(val), true);
	});

	['a b', '{', '}', '_', '-', '$', '*', '😋'].forEach(val => {
		t.is(isAlphanumeric(val), false);
	});

	t.end();
});

test('should throw when not passing a string', t => {
	t.throws(() => {
		isAlphanumeric(5);
	});

	t.end();
});
