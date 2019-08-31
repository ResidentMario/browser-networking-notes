const express = require('express');

const app = express();
let message_queue = Array();

function createRandomEvent() {
    message_queue.push({'message': 'hello world!', 'index': message_queue.length})
}

app.get('/resources', (_, res) => {
    createRandomEvent();
    res.send(JSON.stringify(message_queue));
});
app.get('/', (_, res) => res.sendFile(process.cwd() + '/static/index_short_poll_xhr.html'));
app.get('/snippets/short_poll_xhr_script.js', (_, res) => {
    res.sendFile(process.cwd() + '/short_poll_xhr_script.js')
});

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))