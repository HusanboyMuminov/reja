console.log("FrontEnd JS ishga tushdi");
function itemTemplate(item) {
    return ` <li class=" list-group-item list-group-info d-flex align-items-center justify-content-between">
        <span class="item-text">${item.reja}</span>
        <div>
          <button 
          data-id="${item._id}" lm 
          class="edit-me btn btn-secondary btn-sm mr-1">
            O'zgartirish
          </button>
          <button  data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
        </div>
        </li> `;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form")
.addEventListener("submit", function (e) {
e.preventDefault();

axios //app.jsda tradional post shaklida yozilgandi, lekin axios modern request bo'lgani uchun modernga o'zgaradi bu yerda 
.post("/create-item", { reja: createField.value })
.then((response) => {
    document
    .getElementById("item-list")
    .insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value= "";
    createField.focus();
})
.catch((err) => {
    console.log("Iltimos qaytadan harakat qiling!");
});
});

document.addEventListener("click", function (e) {
    // console.log(e);
    
    //delete oper
    console.log(e.target);
    if (e.target.classList.contains("delete-me")) {
        // alert("siz delete tugmasini bosdingiz");//fontendwebpageda click bolganda shu ko'rinadi
        if(confirm("Aniq ochirmoqchimisiz?")) {
            //   alert("Yes deb javob beriladi");
        //  } else {
         //    alert("No deb javob beriladi");
            
        axios
        .post("/delete-item", { id: e.target.getAttribute("data-id")})
        .then((response) => {
            console.log(response.data);
            e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
         console.log("Iltimos qaytadan harakat qiling!");
           });

        }
    }
     
    //edit oper
     if (e.target.classList.contains("edit-me")) {
      // let userInput = prompt("O'zgartirish kiriting", "istalgan narsa yoziladi"); //o'zgartirish kiritish u-n, yozgan qiymatni inspect consoleda ko'rishimiz m-n, davomidagi qismga o'zgartirish tugmasi bosilganda shu so'zla chiqib turishi uchun qiymat yoziladi 
       let userInput = prompt("O'zgartirish kiriting", 
        e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );// buni kiritish orqali o'zgartirish linyaga yozilgan so'zni o'zini olib beradi
      if (userInput) {
        axios.post("/edit-item", {
            id: e.target.getAttribute("data-id"),
            new_input: userInput, 
        }) //bu qism data objectimiz hisoblanadi 
        .then(response => {
          console.log(response.data); //bu yerda o'zgartirish u-n mantiq yozganimizda click bossak, terminalda korinadi yangi yozilgan matn
           e.target.parentElement.parentElement.querySelector(
           ".item-text"
           ).innerHTML = userInput; // commentga olgan paytda,eski nomdagi rejani yangi rejaga almashtirmagan hisoblanamiz, va inspect consoleda success ko'ringani bilan webpageda data yangilanmaydi, bu qism ishga tushsa yangilanishni boshlaydi
        })
        .catch((err) => {
           console.log("Iltimos qaytadan harakat qiling!");
       });
    }
   }
});

document.getElementById("clean-all").addEventListener("click", function (){
    axios.post("/delete-all", {delete_all: true }).then(response => {
        //console.log(response.data);
        alert(response.data.state);
        document.location.reload();
    })
});