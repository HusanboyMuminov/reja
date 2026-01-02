console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
//const http = require("http"); //server.js ga ko'chirib olamiz bu qismniyam
//const fs = require("fs"); // fs>core moduleligi sababli chaqirish shartmas

//MongoDB chaqirish
const db = require("./server").db(); //bu qism orqali databasega ma'lumot qoshish o'chirish olish amallarini amalga oshirishimiz m-m

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if(err) {
//         console.log("ERROR:",err);
//     } else {
//         user = JSON.parse(data) //tarjimasi tahlil qilish jsondagi datani hammasiga "" qoyob beradi, ya'ni stringni objectga aylantiradi
//     }
// });
//1 kirish code 
app.use(express.static("public"));  //serverdagi ma'lumotni ochiq ya'ni public qilib beradi va bu qism public folder b-n static boglanadi
app.use(express.json()); // json formatdagi ma'liumotni objectga o'girib berish-vazifa.
app.use(express.urlencoded({extended: true}));//html formdagi datalarni qabul qilish u-n yozilishi shart bu. harid.ejs ni bog'lash uchun bu yerda 

//2 Session code


//3: Views code // tradional usul hisoblanadi // esj orqali backend ichida htmlni yasaymiz
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
/*
app.get("/hello", function (req, res) {
    res.end(`<h1>HELLO WORLD</h1>`); //localhost:3000/hello desak hello world korinadi
});
app.get("/gift", function (req, res) { //localhost:3000/gift desak siz sovgalar bmidasiz korinadi
    res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});
*/
app.post("/create-item", (req, res) => { //shu yerga cre-item ga post qilib beradi
    console.log('user entered /create-item'); //har bir APIga borganda shuni korsatadi
    console.log(req.body);//post>datani olib keladi va databasega shu datani yozadi
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    // if (err) { 
    //     console.log(err);
    //     res.end("something went wrong");
    // } else {
    //     res.end("successfully added");
    // }
console.log(data.ops);
res.json(data.ops[0]);

    });
    });
    // res.json({"success" }); websitega ITni o'rganamiz dib yozsek, terminalda shu gap ko'rinadi
//}): //bu res.json shaklda ma'lumotni qaytarib yuboradi bizga
        
// app.get('/author', (req, res) => {
//     res.render("author", { user: user });
// });

app.get("/", function (req, res) {// get> datani olish u-n, o'qish u-n
    console.log('user entered /'); //har bir APIga borganda shuni korsatadi
   db.collection("plans") //CRUD operatsiyasi shu yerda ishlayapti
   .find()
   .toArray((err, data) => {
    if (err) {
        console.log(err);
        res.end("something went wrong");
    } else {
            // console.log(data);
             res.render("reja", {items: data}); //bu harid harid.esj file b-n bog'lanadi, shu file nomi kiritildi
    }
   });
   
});

// const server = http.createServer(app); //serverga chiqarish vazifasini bajaradi bu qism
// let PORT = 3000;
// server.listen(PORT, function () {
//     console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
// }); //buni yangi ochilgan server.jsga kochiramiz

module.exports = app; //shu app.js dan appni export qilib olamiz