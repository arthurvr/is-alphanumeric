'use strict';
var test = require('ava');
var isAlphanumeric = require('./');

test('should check if a string only contains alphanumeric characters', function (t) {
	['abc', 'éçèà', 'ab114554', '123', 'a', 'ABC'].forEach(function (val) {
		t.is(isAlphanumeric(val), true);
	});

	['a b', '{', '}', '_', '-', '$', '*', '😋'].forEach(function (val) {
		t.is(isAlphanumeric(val), false);
	});

	t.end();
});

test('should throw when not passing a string', function (t) {
	t.throws(function () {
		isAlphanumeric(5);
	});

	t.end();
});
