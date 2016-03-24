
var nodes = document.querySelectorAll('.requirements p');

console.log(nodes);

for(var i=0; i<nodes.length; i++) {
    if (nodes[i].getAttribute('role') === 'contentinfo') {
        console.log(nodes[i].childNodes);

        for(var j=0; j<nodes[i].childNodes.length; j++) {
            if (nodes[i].childNodes[j].tagName === 'A') {
                console.log(nodes[i].childNodes[j].getAttribute('href'));
            }
        }
    }
}

$('.requirements p[role="contentinfo"] a')
    .each(function getHref() {
        console.log(  $(this).attr('href')  );
    });


var newDesigns = [
    {
        linkText: 'Foo',
        link: 'http://foobar.com',
        author: 'Jordan'
    },
    {
        linkText: 'Bar',
        link: 'http://foobar.com',
        author: 'Bob'
    },
    {
        linkText: 'FizzBuzz',
        link: 'http://fizzbuzz.com',
        author: 'Buzzy'
    }
];

newDesigns.forEach(function makeLinks(newLinkData) {

    // var newListItem = document.createElement('li');
    // var theNewAnchorTag = document.createElement('a');
    //
    // newListItem.appendChild(theNewAnchorTag);
    //
    // theNewAnchorTag.classList.add('design-name');
    // theNewAnchorTag.setAttribute('href', newLinkData.link);
    // theNewAnchorTag.innerText = newLinkData.linkText;
    //
    // var byText = document.createTextNode(' by ' + newLinkData.author);
    // newListItem.appendChild( byText );
    //
    // document.querySelector('.design-selection ul').appendChild( newListItem );

    // var newItem = $('<li>')
    //     .append( $('<a>').attr({ href: newLinkData.link, class: 'design-name' }).text(newLinkData.linkText) )
    //     .append(' by ' + newLinkData.author);

    var newAnchor = $('<a>')
        .attr({ href: newLinkData.link, class: 'design-name' })
        .text(newLinkData.linkText);

    var newItem = $('<li>')
        .append( newAnchor )
        .append(' by ' + newLinkData.author);

    $('.design-selection ul')
        .append( newItem );

});

$('.requirements p:not("[role=contentinfo]")')
    .css({ 'color': 'green', backgroundColor: 'blue' });

$('.requirements p:not("[role=contentinfo]")')
    .removeClass('foobar');
    // .addClass(...)
    // .toggleClass(...)
