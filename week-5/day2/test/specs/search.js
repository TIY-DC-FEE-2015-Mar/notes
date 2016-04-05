(function() {
    'use strict';

    var assert = chai.assert;

    var fixtureHTML = $('#fixtures').html();

    // describe()
    suite('search results', function() {

        // beforeEach()
        setup(function() {
            $('#fixtures').html(fixtureHTML);
        });

        // afterEach()
        teardown(function() {
            console.log('after each test');
        });

        // it('should have results for a valid query')
        test('results show with a valid query for searching', function(doneCallback) {

            assert.strictEqual( $('.results li').length, 0, 'results are empty to start' );
            var returnValue = window.foo.doSearch('jakerella', function testCallback() {
                assert.strictEqual( typeof returnValue, 'undefined', 'on success no return value' );
                assert.ok( $('.results li').length > 0, 'results exist' );
                doneCallback();
            });

        });

        test('no query provided', function() {

            assert.strictEqual( $('.results li').length, 0, 'results are empty to start' );
            var returnValue = window.foo.doSearch();
            assert.strictEqual( returnValue, null, 'null returned on missing argument' );
            assert.strictEqual( $('.results li').length, 0, 'results are empty at the end' );

        });


    });

})();
