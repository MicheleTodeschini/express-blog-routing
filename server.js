const express = require('express')

const app = express()

const PORT = 3000

const postRouter = require('./routers/posts')

app.listen(PORT, () => {
    console.log(`Server listenig on port: ${PORT}`);

})

app.use('/api/posts', postRouter)