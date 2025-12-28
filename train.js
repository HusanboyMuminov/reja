//A-TASK:


function letterNumber (letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {  //i = i + 1;
  if (word[i] === letter) { count++; }  
  }
  return count;
}

console.log(letterNumber("m", "muminov"));






















/*
console.log("Jack Ma maslahatlari");
const list = [
"yahshi talaba boling", // 0-20
"togri boshliq tanlang va koproq hato qiling", // 20-30
"uzingizga ishlashingizni boshlang", // 30-40
"siz kuchli bolgan narsalarni qiling", // 40-50
"yoshlarga investitsiya qiling", // 50-60
"endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
if (typeof a !== "number") callback("insert a number", null);

else if (a <= 20) callback(null, list[0]);
else if (a > 20 && a <= 30) callback(null, list[1]);
else if (a > 30 && a <= 40) callback(null, list[2]);
else if (a > 40 && a <= 50) callback(null, list[3]);
else if (a > 50 && a <= 60) callback(null, list[4]);
else {
  callback(null, list[5]);
     }
  }  
console.log("passed here 0");
maslahatBering(25, (err, data) => {
if (err) console,log('ERROR:', err);
console.log('javob:', data);
});
console.log("passed here 1");
*/

/*
//setTimeout core packagela b-n ham foydalanolamiz
function maslahatBering(a, callback) { //Callbackda functionla callbackni parametri bolib keladi  
if (typeof a !== "number") callback("insert a number", null);

else if (a <= 20) callback(null, list[0]);
else if (a > 20 && a <= 30) callback(null, list[1]);
else if (a > 30 && a <= 40) callback(null, list[2]);
else if (a > 40 && a <= 50) callback(null, list[3]);
else if (a > 50 && a <= 60) callback(null, list[4]);
else {
  setTimeout(function (){
    callback(null, list[5]);
  }, 5000);
}
}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
if (err) console,log('ERROR:', err);
else {
console.log("javob:", data);
} //bu yerda function amalga oshirildi, lekin javobi keguncha pasdagi qiymat oldida, 5sekunda jabovni olib keyin oxirida buni chiqazib berdi
});
console.log("passed here 1");
*/

       /*CALLBACK END*/






/*
//Asynchronous functionla haqida
async function maslahatBering(a) { //callback keremas
if (typeof a !== "number") throw new Error("insert a number");
// string yoki number bolmasa, xatolikni throw qiladi boshqa hollarda qiymatni return qiladi
else if (a <= 20) return list[0];
else if (a > 20 && a <= 30) return list[1];
else if (a > 30 && a <= 40) return list[2];
else if (a > 40 && a <= 50) return list[3];
else if (a > 50 && a <= 60) return list[4];
else {
 */ 
  //return list[5];
   //  }
 // }  
/*
  // then/catch >
console.log("passed here 0");
maslahatBering(25)
.then((data) => {
console.log("javob:", data);
}) // console.logni bu yerdayam javobi oxirida berilyapti, sababi synchronous functionla ishlagandan keyin assynchronous functionni natijalari bilan Nodejs ishlay boshlaydi
.catch((err) => {
  console.log("ERROR:", err);
});
console.log("passed here 1");
*/
/*
async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
*/

/*
// setTimeout b-n ishlashi
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve(list[5]);
   }, 5000);
  }); // bunda tepadagi qiymatni srazu beradida, list5ni qiymatini olguncha 5second kutib turadi va qolgan qiymatlani srazu bervoradi 
 } // setTimeout faqat shu functionni ichida turgani u-n faqat shu functionga ta'sir o'tkizoladi, list5 qiymatni qaysi functionda olsa, shu yerda kutib o'tiradi 5 second
}


async function run() {
  let javob = await maslahatBering(65);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
*/



/*
//Asynchronous functionla b-n setInterval ishlatilishi

console.log("Jack Ma maslahatlari");
const list = [
"yahshi talaba boling", // 0-20
"togri boshliq tanlang va koproq hato qiling", // 20-30
"uzingizga ishlashingizni boshlang", // 30-40
"siz kuchli bolgan narsalarni qiling", // 40-50
"yoshlarga investitsiya qiling", // 50-60
"endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {  
if (typeof a !== "number") callback("insert a number", null);
else if (a <= 20) callback(null, list[0]);
else if (a > 20 && a <= 30) callback(null, list[1]);
else if (a > 30 && a <= 40) callback(null, list[2]);
else if (a > 40 && a <= 50) callback(null, list[3]);
else if (a > 50 && a <= 60) callback(null, list[4]);
else {
  setInterval (function () {
    callback(null, list[5]);
  }, 1000);
} // 
}

console.log("passed here 0");
maslahatBering(65, (err, data) => {
if (err) console,log('ERROR:', err);
else {
console.log("javob:", data);
}
});
console.log("passed here 1");
*/
