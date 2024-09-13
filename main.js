



var form = document.querySelector("form")
var add = document.querySelector(".add")
var submit = document.querySelector(".submit")
var Name = document.querySelector(".name")
var date = document.querySelector(".date")
var container = document.querySelector(".container")


add.addEventListener("click" , function displayForm() {
    form.style.display = "flex";
})

// create data 

let data = [];
if(localStorage.getItem("list")){
    data = JSON.parse(localStorage.getItem("list"))
    display_notes()
}else{
    data = []
}

// display data 

    function display_notes() {
        
        var item = "";
        container.innerHTML = item
        for(var i = 0 ; i < data.length ; i++){
            item+=`
                    <div class="note">
                <div class="left">
                    <div class="check">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <b>${data[i].title}</b>
                    <span>${data[i].time}</span>
                </div>
                    <button class="delete" onclick='delete_note(${i})' >Delete</button>
            </div>
            `
            container.innerHTML = item
        }

        
            // adding check mark 
            
        
            var x = data.length + 2
            var check = document.querySelectorAll(".check")
            for (let o = 0; o < x; o++) {
                check[o].addEventListener("click" , function checked() {
                check[o].classList.toggle("checked")
                })
            }
        }
    

        submit.addEventListener("click" , function send(e) {
            e.preventDefault();
            form.style.display = "none";
            var list = { title : Name.value , time : date.value }
            data.push( list )
            localStorage.setItem("list" , JSON.stringify( data ))
            display_notes()
        
        })


function delete_note(a) {
    if(data.length>1){
        data.splice( a , 1 )
        localStorage.setItem("list" , JSON.stringify( data ))
    }else{
        data.splice(0)
        localStorage.clear()
    }
    display_notes()
}











