const http = require("http");
//const app = require("./app");
const mongodb = require("mongodb");
      
//let db;
const connectionString = "mongodb+srv://Henry:iFjVuYHJthXWjjP3@cluster0.ukdnwlk.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
       // console.log(client); //client nimalardan iborat degan savolga javob beradi bu qism terminalda korishimiz mumkin
        module.exports = client; //boshqa joyladayam ishlatish u-n export qilib qoyamiz
       const app = require("./app");
        const server = http.createServer(app); //serverga chiqarish vazifasini bajaradi bu qism
let PORT = 4005;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
}); 
    }
});







