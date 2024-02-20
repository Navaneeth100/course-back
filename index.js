// import json server

const jsonserver=require('json-server')

// create server

const server= jsonserver.create()

// create router

const router=jsonserver.router("db.json")

// create middle ware as a parser

const middleware=jsonserver.defaults()

// create port 

const PORT=process.env.PORT ||4789

// middleware use in server

server.use(middleware)
server.use(router)

// run server

server.listen(PORT,()=>{
    console.log(`JSON server started at Port: ${PORT}`);
})