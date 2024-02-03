for (var i=0;i<document.querySelectorAll(".seat").length;i++){
    document.querySelectorAll(".seat")[i].addEventListener("click",function () {
        if (this.classList[this.classList.length-1]=="rouge"){
            
            joingnable(this.classList[2])
        }
        else {
            occupe(this.classList[2])
        }
        
        document.querySelector(".dispo").textContent=document.querySelectorAll(".vert").length;
    }
        )
    }
    document.querySelector(".dispo").textContent="8 ";
function joingnable(cl){
    document.querySelector(`.${cl}`).classList.add("vert");
    document.querySelector(`.${cl} p`).textContent="فارغ";
}
function occupe(cl){
    document.querySelector(`.${cl}`).classList.remove("vert");
    document.querySelector(`.${cl}`).classList.add("rouge");
    document.querySelector(`.${cl} p`).textContent="محاز";
    
}
