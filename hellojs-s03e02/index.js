const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, _=> console.log('Exemple app listening on port 3000!'))