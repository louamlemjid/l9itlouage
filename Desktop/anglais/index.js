for (var i=0;i<document.querySelectorAll(".seat").length;i++){
    document.querySelectorAll(".seat")[i].addEventListener("click",function (event) {
        console.log(event.classList)
        if (this.classList[this.classList.length-1]=="rouge"){
            
            joingnable(this)
        }
        else {
            occupe(this)
        }
        
        document.querySelector(".dispo").textContent=document.querySelectorAll(".vert").length;
    }
        )
    }
    document.querySelector(".dispo").textContent="4 ";
function joingnable(cl){
    cl.classList.add("vert");
    cl.textContent="Empty";
}
function occupe(cl){
    
    cl.classList.remove("vert");
    cl.classList.add("rouge");
    cl.textContent="Taken";
    
}
