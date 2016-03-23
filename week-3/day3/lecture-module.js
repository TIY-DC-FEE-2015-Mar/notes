
// IIFE  (JS module)
// Immediately Invokable Function Expression
// I would have NO CODE outside the IIFE

(function(ns) {
    if (!ns) { ns = window.tiy = {}; }

    var x = 5;

    ns.foobar = function foobar(from) {
        console.log('inside foobar');
        console.log(from);
    };

    ns.foobar('mod 1');

    // do some other stuff

})(window.tiy);


// I can't execute an anonymous function down here!!
