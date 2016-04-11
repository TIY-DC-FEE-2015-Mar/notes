(function(ns) {
    'use strict';

    ns.Manager = function Manager(name, salary, date) {
        var currentManagerBeingCreated = this;

        // ns.Person(name, salary, date);
        ns.Person.call( currentManagerBeingCreated, name, salary, date);

        currentManagerBeingCreated.employees = [];

    };


    // Prototypical / Prototypal inheritance
    // create a blank canvas (object) for the Manager prototype to build on
    // to do so, call Object.create() with the prototype you want to use as the base for our canvas
    ns.Manager.prototype = Object.create(ns.Person.prototype);
    ns.Manager.prototype.constructor = ns.Manager;

    /**
     * Assign a person (employee) to a manager
     * @param  {Person} employee  The employee to assign
     */
    ns.Manager.prototype.assignEmployee = function assignEmployee( employee ) {
        if ( !(employee instanceof ns.Person) ) {
            console.error('That is no person!');
            return;
        }

        this.employees.push( employee );
    };



    window.work = ns;
})(window.work || {});
