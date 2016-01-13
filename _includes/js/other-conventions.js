"use strict"; // Enable strict mode for the entire file

// ----- [ named function expressions ] ----------
var foo = function bar() {
    // bar is accessible inside the function's scope, and
    // will show up in the stack trace. What's not to love?
    // …
}


// ----- [ assignment expressions ] --------------
// By this
if (a = b) {
    // statements
}

// Did you mean this instead?
if (a == b) {
    // statements
}


// ----- [ pluses and minuses ] ------------------
// Bad
// + + could be misread as ++
total = subtotal + +myInput.value;

// Better
total = subtotal + (+myInput.value);

