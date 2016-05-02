var server = require("http").createServer()

server.on("request", function(request, response) {
	console.log("> REQUEST STARTED")
        request.on("data", function() {})
	request.on("end", function() {
		console.log("> REQUEST CLOSED")
		response.writeHead(200, {
			"Content-Type": "text/html"
		})
		response.end("Hello World\n")
		server.close()
	})
	response.on("close", function() {
		console.log("> RESPONSE CLOSED")
	})
})

server.on("close", function() {
	console.log("> SERVER CLOSED")
})

server.on("listening", function() {
	console.log("> SERVER STARTED")
})

server.listen(8080)
