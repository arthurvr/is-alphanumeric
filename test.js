'use strict';
var assert = require('assert');
var isAlphanumeric = require('./');

it('should check if a string only contains alphanumeric characters', function () {
	['abc', 'éçèà', 'ab114554', '123', 'a', 'ABC'].forEach(function (val) {
		assert.strictEqual(isAlphanumeric(val), true);
	});

	['a b', '{', '}', '_', '-', '$', '*', '😋'].forEach(function (val) {
		assert.strictEqual(isAlphanumeric(val), false);
	});
});

it('should throw when not passing a string', function () {
	assert.throws(function () {
		isAlphanumeric(5);
	});
});
