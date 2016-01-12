// Module and class names should be upper-camel-case
window.MyModule = { … };

// Function and variable names should be lower-camel-case
function myFunction(parameter1) {
    // Indent four spaces
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
    }

    // Break really long lines at 100 characters, after an operator or comma
    var aReallyLongVariableName = aLudicrouslyLongFunctionName(parameterOne, parameterTwo,
            {
                optionOne: "a",
                optionTwo: "blah"
            });
}
