import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 5100

const app = express()


app.unsubscribe()

app.listen(port, () => console.log(`Server starting at port ${port}`))