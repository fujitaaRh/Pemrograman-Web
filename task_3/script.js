const addBtn= document.querySelector(".add")

const input = document.querySelector(".inp-grup")

function removeinput(){
    this.parentElement.remove();
}

function addInput(){
    const name = document.createElement("input");
    name.type="text";
    name.placeholder = "Inputkan Nama Anda";

    const email = document.createElement("input");
    email.type="email";
    email.placeholder ="Inputkan Email Anda";

    const btn = document.createElement("a");
    btn.className = "del";
    btn.innerHTML = "&times";

    btn.addEventListener("click", removeinput);

    const wrapping = document.createElement("div");
    wrapping.className ="warpping";

    input.appendChild(wrapping);
    wrapping.appendChild(name);
    wrapping.appendChild(email);
    wrapping.appendChild(btn);
}

addBtn.addEventListener("click", addInput)