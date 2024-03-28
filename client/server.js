import express from "express"
import next from "next"
import { createProxyMiddleware } from "http-proxy-middleware"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    if (dev) {
        server.use("/api", createProxyMiddleware({
            target: 'http://localhost:8000/',
            changeOrigin: true,
        }))
    }

    server.all("*", (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log("> Ready on  http://localhost:8000/")
    })

}).catch((err) => {
    console.log("Error", err)
})