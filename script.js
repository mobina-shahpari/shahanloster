/*************js box question***************************/
let plusBox=document.querySelectorAll(".plus")
let answer=document.querySelectorAll(".answer")
let box=document.querySelectorAll(".box")
plusBox.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        answer.forEach((show,i)=>{
            if(index==i){
                show.classList.toggle("Active")
                plusBox[index].innerHTML="-"
            }
        })
    })
})
plusBox.forEach((box,index)=>{
    box.addEventListener("dblclick",()=>{
        answer.forEach((show,i)=>{
            if(index==i){
                removed();
                plusBox[i].innerHTML="+"
            }
        })
    })
})

function removed(){
    answer.forEach(hide=>{
        hide.classList.remove("Active")
        plusBox.forEach((plusBox)=>{
            plusBox.innerHTML="+"
        })
    })
}
/********************slider********************************* */
var slideIndex = 1;

function showImage(n){
    var slide=document.getElementsByClassName("slides");
    var dots= document.getElementsByClassName("dots");
    var i;

    if(n > slide.length){
        slideIndex = 1
    }

    if(n < 1){
        slideIndex = slide.length
    }

    for(i=0; i < slide.length; i++){
        slide[i].style.display= "none"
    }
    slide[slideIndex - 1].style.display="block"

    for(i=0; i< dots.length; i++){
        dots[i].classList.remove("active")
    }
    dots[slideIndex -1 ].classList.add("active")

}
showImage(slideIndex)

function plusIndex(n){
    showImage(slideIndex += n)
}
function currentSlide(n){
    showImage(slideIndex = n)
}
/*********************sorse img********************************** */
let image= document.getElementById("image-1")

image.addEventListener("mouseover", function(){
    image.style.width= "100%"
    image.src= "imgs/IMG_4006-768x768.jpg"

})

image.addEventListener("mouseleave", function(){
    image.style.width="100%"
     image.src= "./imgs/IMG_4006-1024x1024.jpg"
})
/************/
let image1= document.getElementById("image-1-1")

image1.addEventListener("mouseover", function(){
    image1.style.width= "100%"
    image1.src= "imgs/IMG_4006-768x768.jpg"

})

image1.addEventListener("mouseleave", function(){
    image1.style.width="100%"
    image1.src= "./imgs/IMG_4006-1024x1024.jpg"
})
/**********/
let image2= document.getElementById("image-2")

image2.addEventListener("mouseover", function(){
    image2.style.width= "100%"
    image2.src= "imgs/IMG_4002-300x300.jpg"

})

image2.addEventListener("mouseleave", function(){
    image2.style.width="100%"
    image2.src= "imgs/IMG_4000-عکس-اصلی-768x768.jpg"
})
/*********************/
let image3= document.getElementById("image-3")

image3.addEventListener("mouseover", function(){
    image3.style.width= "100%"
    image3.src= "imgs/IMG_3844-300x300.jpg"

})

image3.addEventListener("mouseleave", function(){
    image3.style.width="100%"
     image3.src= "./imgs/IMG_3855-عکس-اصلی-300x300.jpg"
})
/******************************notepad************************************/
var list = document.getElementById("list")

        document.addEventListener("DOMContentLoaded" , LSOnLoaded)
        document.getElementById("save-btn").addEventListener("click", newNote)
        list.addEventListener("click", removeNote)

        function newNote(e) {
            e.preventDefault()

            let note = document.getElementById("note").value

            let removeBtn = document.createElement("span")
            removeBtn.appendChild(document.createTextNode("x"))
            removeBtn.classList.add("remove")

            let li = document.createElement("li")
            li.appendChild(document.createTextNode(note))
            li.appendChild(removeBtn)
            list.appendChild(li)
            addToLS(note)
            alert(" saved successfully")

            document.getElementById("note").value = ""
        }

        function addToLS(note) {
            let noteList = getFromLS()
            noteList.push(note)
            localStorage.setItem("notes", JSON.stringify(noteList))
        }

        function getFromLS() {
            let noteList;
            let getFromLS = localStorage.getItem("notes")

            if (getFromLS == null) {
                noteList = []
            } else {
                noteList = JSON.parse(getFromLS)
            }

            return noteList
        }

        function LSOnLoaded() {
            let noteList = getFromLS()

            noteList.forEach(note => {
                let removeBtn = document.createElement("span")
                removeBtn.appendChild(document.createTextNode("x"))
                removeBtn.classList.add("remove")
                let li = document.createElement("li")
                li.appendChild(document.createTextNode(note))
                li.appendChild(removeBtn)
                list.appendChild(li)
            });
        }

        function removeNote(e){
            if(e.target.classList.contains("remove")){
                e.target.parentElement.remove()
            }
            removeFromLS(e.target.parentElement.textContent)
        }

        function removeFromLS(noteContent){
            let noteDelete= noteContent.substring(0, noteContent.length-1) 
            
            let noteList= getFromLS()
            noteList.forEach(function(note, index){
                if(note==noteDelete){
                    noteList.splice(index,1)
                }
            })
            localStorage.setItem("notes", JSON.stringify(noteList))
        }
        /****************nazar person*********************** */
        const slide = document.querySelector('.slider').children;
        const indicator = document.querySelector('.slider-indicator').children;

    for(i = 0;i < indicator.length; i++){
        indicator[i].addEventListener('click', function(){

        for(j=0;j<indicator.length;j++){
            indicator[j].classList.remove('person');
        }
        this.classList.add('person');



        const id = this.getAttribute('data-id');
        for(z=0; z < slide.length; z++){
            slide[z].classList.remove('person');
        }

        slide[id].classList.add('person');


    })
}
        /*********************gallry*****************************/
        const imgBx = document.querySelectorAll('.imgBox');
imgBx.forEach(popup => popup.addEventListener('click', function(){
    popup.classList.toggle("gallry");
}))
/**************************signup*********************************/
let div=document.getElementById("myDiv")
let sign=document.getElementById("signup").addEventListener("click",function(){
    div.style.display="block"
})
let user=document.getAnimations("name").value
let email=document.getElementById("email").value
let name2=document.getAnimations("name2").value
let email2=document.getElementById("email2").value
let btn=document.getElementById("btn-sign")
btn.addEventListener("click",function(){
    if(user!=""&&name2!=""&&email!=""&&email2!=""){
        if(user==name2 && email==email2){
            alert("خوش آمدید")
        }
        else if(user!=name2||email!=email2){
            alert("اطلاعات وارد شده نادرست است")
        }
    }
    else{
        alert("لطفا فیلد ها را پر کنید")
    }
})
let remove=document.getElementById("remove-signup").addEventListener("click",function(){
     div.style.display="none"
})
/***************************cookie******************************************/

        function setCoookie(name, value, exday){
            var d= new Date()   
            d.setTime(d.getTime() + (exday*24*60*60*1000))
            var expires= "expires" + d.toGMTString()

            document.cookie = name + "=" + value + ";" + expires  
        }
        
        function getCookie(name){
            var name= name + "="
            var decodeCookie = decodeURIComponent(document.cookie)   
            console.log(decodeCookie)
            var cook = decodeCookie.split(";") 
            console.log(cook)
            for(var i=0; i < cook.length; i++){
                var c= cook[i]
                console.log(c)
                while(c.charAt(0) == " "){
                    c= c.substring(i)
                    console.log(c)
                }
                if(c.indexOf(name==0)){
                    return c.substring(name.length, c.length)
                }
            }
            return ""
        }

        function checkCookie(){
            var user= getCookie("username")
            console.log(user)
            if(user != ""){
                alert("Welcome again " + user)
            }else{
                user= prompt("Please Enter Your Name: ", "")
                if(user != null && user != ""){
                    setCoookie("username", user, 3)
                }
            }
        }
/***********************sidebar home*************************************/
const sidebar = document.querySelector(".sidebar");
const btns = document.querySelector(".home");
const out=document.getElementById("out")
btns.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    sidebar.style.visibility = "visible";
})
out.addEventListener("click",function(){
    sidebar.style.display="none"

})
/*****************************txt footer*************************************************/
const text = ['طراحی وب',' با تشکر از استاد عزیزم سرکار خانم فاطمه کاظمی ','اولین پروژه جاواسکریپ'];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";


(function type(){

    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

   document.querySelector('.type').textContent = letter;
    console.log(index)
   if(letter.length === currentText.length){
       count++;
       index =0;
   }

   setTimeout(type, 200)

})()
/***************************************sabad kharid**********************************************************/

const countCounter = document.querySelector('.cart__count');
const cartDOM = document.querySelector('.cart__items');
const addToCartBtn = document.querySelectorAll('.btn_add_to_cart');
const totalCount = document.querySelector('.total__counter');
const totalCost = document.querySelector('.total__cost');
const check_out_btn = document.querySelector('.check_out_btn');


let cartItems = (JSON.parse(localStorage.getItem("cart___items")) || []);

document.addEventListener("DOMContentLoaded", loadData)


check_out_btn.addEventListener('click', function(){
    if(confirm('آیا از حذف محصولات در سبد خرید مطمئنید؟')){
        clearCatItems();
    }
  
})

countCounter.addEventListener('click', function () {
    cartDOM.classList.toggle('active')
})

addToCartBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let parentElement = btn.parentElement;
        const product = {
            id: parentElement.querySelector('#product_id').value,
            name: parentElement.querySelector('.product__name').innerText,
            image: parentElement.querySelector('#image').getAttribute('src'),
            price: parentElement.querySelector('.product__price').innerText,
            quantity: 1,
        }

        let IsInCart = cartItems.filter(item => item.id === product.id).length > 0;

        if (!IsInCart) {
            addItemToTheDom(product)
        } else {
            alert('این محصول در سبد خرید موجود است.');
            return
        }


        const cartDOMItems = document.querySelectorAll('.cart__item');

        cartDOMItems.forEach(inItem => {
            if(inItem.querySelector('#product__id').value === product.id){
                increaseItem(inItem, product)
                decreaseItem(inItem, product)
                removeItem(inItem, product)
            }
        })


        cartItems.push(product);
        calculateTotal();
        saveToLocalStorage()
    })
})


function saveToLocalStorage(){
    localStorage.setItem("cart___items", JSON.stringify(cartItems)) 
}


function addItemToTheDom(product) {
    cartDOM.insertAdjacentHTML("afterbegin",`
            <div class="cart__item">
            <input type="hidden" id="product__id" value="${product.id}">
            <img src="${product.image}" id="product__" alt="">
            <h4 class="product__name">${product.name}</h4>
            <a  class="btn__small" action="decrease">&minus;</a>
            <h4 class="product__quantity">${product.quantity}</h4>
            <a class="btn__small" action="increase">&plus;</a>
            <h4 class="product_price">${product.price}</h4>
            <a class="btn__small btn__remove " action="remove">&times;</a>
        </div>
    `)
}


function calculateTotal(){
    let total = 0;
    cartItems.forEach(item => {
        total += item.quantity * item.price
    })
    totalCost.innerText = total;
    totalCount.innerText = cartItems.length
}


function increaseItem(inItem, product){
    inItem.querySelector("[action='increase']").addEventListener('click', function(){
        cartItems.forEach(cartItem => {
            if(cartItem.id === product.id){
                inItem.querySelector('.product__quantity').innerText = ++cartItem.quantity;
                calculateTotal()
                saveToLocalStorage()
            }
        })
    })
}

function decreaseItem(inItem, product){
    inItem.querySelector("[action='decrease']").addEventListener('click', function(){
        cartItems.forEach(cartItem => {
            if(cartItem.id === product.id){
              
                if(cartItem.quantity > 1){
                    inItem.querySelector('.product__quantity').innerText = --cartItem.quantity;
                }else{
                    cartItems = cartItems.filter(newElement => newElement.id !== product.id);
                    inItem.remove();
                }
                calculateTotal()
                saveToLocalStorage()
            }
        })
    })
}

function removeItem(inItem, product){
    inItem.querySelector("[action='remove']").addEventListener('click', function(){
        cartItems.forEach(cartItem => {
            if(cartItem.id === product.id){
              
                    cartItems = cartItems.filter(newElement => newElement.id !== product.id);
                    inItem.remove();
                calculateTotal()
                saveToLocalStorage()
            }
        })
    })
}



function loadData(){
    if(cartItems.length > 0){
        cartItems.forEach(product => {
            addItemToTheDom(product);

            const cartDOMItems = document.querySelectorAll('.cart__item');

            cartDOMItems.forEach(inItem => {
                if(inItem.querySelector('#product__id').value === product.id){
                    increaseItem(inItem, product)
                    decreaseItem(inItem, product)
                    removeItem(inItem, product)
                }
            })
    
        });
        calculateTotal()
        saveToLocalStorage()
    }
}

function clearCatItems(){
    localStorage.clear();
    cartItems= [];
    
    document.querySelectorAll('.cart__item').forEach(item => {
        item.remove();
    })
    calculateTotal()
}