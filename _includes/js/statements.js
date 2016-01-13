// ----- [ if statements ] -----------------------
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

