(function() {
    'use strict';

    var assert = chai.assert;

    suite('Person', function() {

        test('the work namespace exists', function() {
            assert.ok(window.work, 'the namespace exists');
        });

        test('create persons with proper args', function() {

            var bob = new window.work.Person('Bob', 30000);

            assert.ok( bob, 'bob exists' );
            assert.ok( bob instanceof window.work.Person, 'person objects are from Person' );
            assert.strictEqual( bob.name, 'Bob', 'the name should be assigned to the object' );
            assert.strictEqual( bob.salary, 30000, 'the salary should be assigned to the object' );
            assert.ok( bob.hireDate instanceof Date, 'the hireDate is a Date object' );
            assert.ok( (Date.now() - bob.hireDate.getTime()) < 50, 'auto-assigned date is approximately correct' );

        });

        test('raise method works as expected', function() {

            var bob = new window.work.Person('Bob', 30000);

            assert.ok( bob, 'bob exists' );
            assert.ok( bob instanceof window.work.Person, 'person objects are from Person' );
            assert.strictEqual( bob.salary, 30000, 'the salary should be assigned to the object' );

            bob.raise(10);

            assert.strictEqual( bob.salary, (30000 * 1.1), 'ensure correct salary after raise' );

        });


    });

})();
