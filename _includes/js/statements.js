// ----- [ if statements ] -----------------------
// Bad
if (condition) return false;

// Worse
if (condition)
    return false;

// Good: always use braces, even around single statements
if (condition) {
    // statements
}

if (condition) {
    // statements
} else {
    // statements
}

if (condition) {
    // statements
} else if (condition) {
    // statements
} else {
    // statements
}

// ----- [ ternary operator ] --------------------
// Bad
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";

// You will go to hell for this. What does it even mean?
var age = 16;

var url = age > 18 ? (
    alert("OK, you can go."),
    "continue.html"
) : (
    alert("You are much too young!"),
    alert("Sorry :-("),
    "stop.html"
);

location.assign(url);

// Good. Obvious and understandable.
var fee = isMember ? "$2.00" : "$10.00";

// ----- [ for statements ] ----------------------
// type 1
for (initialization; condition; update) {
    // statements
}

// type 2
for (variable in object) {
    if (filter) {
        // statements
    }
}

// Use hasOwnProperty when using for-in loops
for (variable in object) {
    if (object.hasOwnProperty(variable)) {
        // statements
    }
}

// ----- [ while statements ] --------------------
while (condition) {
    // statements
}

// ----- [ do statements ] -----------------------
do {
    // statements
} while (condition);

// ----- [ switch statements ] -------------------
switch (expression) {
case expression:
    // statements
default:
    // statements
}

// ----- [ try statements ] ----------------------
try {
    // statements
} catch (variable) {
    // statements
}

try {
    // statements
} catch (variable) {
    // statements
} finally {
    // statements
}

