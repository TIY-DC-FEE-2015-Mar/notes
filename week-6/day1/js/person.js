
(function(ns) {
    'use strict';

    // var today = new Date();
    // console.log(typeof today);   // "object"
    // console.log( today instanceof Date );  // true! was "today" created by the Date function?
    // console.log( today instanceof Object );  // true!
    //
    // var obj = new Object();   // long form of: var obj = {};
    // var items = new Array();  // long form of: var items = [];
    //
    // console.log( items instanceof Array );   // true!
    // console.log( items instanceof Object );  // true!
    //
    // var bill = {
    //     name: 'Bill',
    //     hireDate: (new Date()),
    //     salary: 50000,
    //     raise: function raise(percentage) {
    //         this.salary *= (percentage / 100);
    //     }
    // };

    ns.Person = function Person( name, salary, date ) {
        if (name) {
            this.name = name;
        }
        this.salary = salary;
        // if we were given a date, use it, otherwise use right now: new Date()
        this.hireDate = (date) ? new Date(date) : new Date();
    };

    // create a method (function) on the prototype that all Person objects will use
    ns.Person.prototype.raise = function raise(percentage) {
        this.salary *= 1 + (percentage / 100);
    };

    ns.Person.prototype.toString = function toString() {
        return this.name + ', ' + this.salary;
    };

    ns.Person.prototype.name = 'Bubbles';

    // var jordan = new ns.Person( 'Jordan', 50000 );
    // console.log( jordan.name );  // 'Jordan'



    window.work = ns;

})(window.work || {});
