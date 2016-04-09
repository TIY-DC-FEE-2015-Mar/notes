
(function() {
    'use strict';

    var assert = chai.assert;

    suite('my-app', function() {

        test('ensure sum works with expected data', function() {

            assert.strictEqual( sum([1, 2, 3]), 6, 'sum works with array of 3 numbers' );
            assert.strictEqual( sum([1, 0, 3]), 4, 'sum works with array that has zeros' );
            assert.strictEqual( sum([]), 0, 'sum works with no array entries' );
            assert.strictEqual( sum([3]), 3, 'sum works with 1 entry' );

        });

        test('ensure sum handles unexpected data args', function() {

            assert.strictEqual( sum(), 0, 'no args results in zero sum' );
            assert.ok( isNaN( sum("foo") ), 'non-array arg results in NaN' );
            assert.ok( isNaN( sum(['a', 'b']) ), 'non-numeric array entries result in NaN' );

        });

        test('ensure sum handles single number (not in array)', function() {

            assert.strictEqual( sum(13), 13, 'single numeric entry works' );

        });

    });


})();
