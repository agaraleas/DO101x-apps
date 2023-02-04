const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = '<html<b>This is version 2 of the app.</b><br>' + 
               '<i>if you see this I did a good job</i></html>';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
