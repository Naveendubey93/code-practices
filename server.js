const {createServer} = require('http');
// const { type } = require('os');
const PORT = '3000';
	createServer((req, res) => {

		console.log(`Server is running on PORT ${PORT}`);
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write("Hello Nodejs")

		//if(req.url === '')
		switch(req.url) {
			case "/":
				const checkData = require('./index');
		}
		res.end()
		// res.statusCode(200).json({"Hello":"Node"});
}).listen(PORT)

// res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');