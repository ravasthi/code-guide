/*
** Bad
**
** Incomprehensible gobbledygook.
*/
var results=myFunction(parameter1,parameter2),
    obj={property1:[]};
for(var i=0;i<results.length;i++){
    // …
}
var anotherObj={one:"a",two:"b",three:"c"};

/*
** Good
**
** Sooo much better.
*/
// No space between function name and ( for function invocations
// Space around operators and after every comma
var results = myFunction(parameter1, parameter2),
              // Spaces inside {}
    obj     = { property1: [] };

// Space between for and (, and between ) and {
// Space after ; in for
// No space around unary operators like ++ unless it's a word, like typeof
for (var i = 0; i < results.length; i++) {
    // No spaces around . () or []
    obj.property1.append(results[i]);
}

// Space following : in object declarations
var anotherObj = {
    one: "a",
    two: "b",
    three: "c"
};
