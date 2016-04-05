(function(ns) {
    'use strict';

    var repoData;

    function getItemData(query, doSomeStuff) {
        // var results = [];
        // for (var i=0; i<Math.ceil(Math.random() * 10); i++) {
        //     results.push(query + '' + Math.random());
        // }
        // return results;

        if (repoData) {
            doSomeStuff(repoData);
            return;
        }

        $.ajax({
            url: 'https://api.github.com/users/' + query + '/repos',
            dataType: 'json',
            success: function(data) {
                repoData = data;
                doSomeStuff(data);  // will execute myDataCallback
            },
            error: function() {
                doSomeStuff('Oh no! I could not get that data.');
            }
        });
    }

    ns.doSearch = function doSearch(query, callback) {
        if (!query) {
            return null;
        }

        var resultsUI = $('.results');
        getItemData(query, function itemDataCallback(results) {
            if (Array.isArray(results)) {
                // data from the ajax call...
                results.forEach(function addResultsToUI(item) {
                    resultsUI.append('<li>' + item.name + '</li>');
                });
            }
            callback();  // testCallback
        });

    };

    window.foo = ns;

})(window.foo || {});
