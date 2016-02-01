// ----- [ error-first callbacks ] ---------------
fs.readFile('/foo.txt', function (err, data) {
    // If an error occurred, handle it (throw, propagate, etc)
    if(err) {
        console.log('Unknown Error');
        return;
    }
    // Otherwise, log the file contents
    console.log(data);
});
