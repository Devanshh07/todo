let h1 = document.querySelector("h1");
let inp = document.querySelector("input");
let li = document.querySelectorAll("li");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");


btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value="";
});
