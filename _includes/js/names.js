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
