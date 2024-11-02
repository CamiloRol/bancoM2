const expressJs = require("express")
const cors = require("cors")

const app = expressJs()

app.use(expressJs.static('public'))
app.use(cors())
app.use(expressJs.json())