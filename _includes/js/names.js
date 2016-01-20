// Bad
function _notReallyPrivate() {
    // …
}

function my_function(parameter) {
    // …
}

// Good
function myFunction(parameter) {
    // …
}

// Capitalize functions intended to be constructors used with new
function Vehicle() {
    // …
}

var vehicle = new Vehicle();

/*
** Use the $ prefix to indicate that the variable contains
** a jQuery object
*/
var $listItems = $('.list-item');

/*
** Use all caps for global variables and things you wish
** were constant
*/
var PST_OFFSET = -8;
