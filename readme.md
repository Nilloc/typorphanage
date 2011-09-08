Front-end solution for fixing typography on the web including [Widows and Orphans](http://en.wikipedia.org/wiki/Widows_and_orphans).

Currently works cleans up orphans on elements

    $('div').typorphanage();

To manually update after changing text, use:

    $('div').typorphanage('update');

The following options are avaialble so far:

    $('div').typorphanage({
      autoupdate:true,
      orphans:true,
      'elements : ['p','blockquote','caption','cite','article','aside','details','summary','header', 'footer'], // these are the defaults right now
      'customElements'  : [] // array of custom tags to remove orphans from.
    });


## TODO
- CSS3 column support: `-webkit-column-break-after` and `-webkit-column-break-before`