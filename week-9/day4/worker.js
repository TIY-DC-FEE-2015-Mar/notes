
// Revealing Module Pattern

// The FUNCTION is cached, but each call to the function produces a NEW worker, not shared

module.exports = function() {

    return {
        salary: 30000,
        giveRaise: function(raise) {
            this.salary += raise;
        }
    };

};
