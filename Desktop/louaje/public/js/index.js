$(document).ready(function() {
    $('.seat').on('click', function() {
        // Get the data attribute to identify the clicked element
        const clickedElement = $(this).data('element');
        
        // Send an AJAX request to the server
        $.ajax({
        type: 'POST',
        url: '/louaje',
        data: { 
            clickedElement: clickedElement,
            class:this.classList[this.classList.length-1],
            nombrePlaces:$(".free").length
        },
        success: function(response) {
            // console.log(response);
        }
        });
    });
});
for (var i=0;i<document.querySelectorAll(".seat").length;i++){
    document.querySelectorAll(".seat")[i].addEventListener("click",function () {
        if (this.classList[this.classList.length-1]=="occ"){
            
            joingnable(this.classList[2])
        }
        else {
            occupe(this.classList[2])
        }
        
        // document.querySelector(".dispo").textContent=document.querySelectorAll(".free").length;
    }
        )
    }
    
function joingnable(cl){
    document.querySelector(`.${cl}`).classList.add("free");
    document.querySelector(`.${cl} p`).textContent="فارغ";
}
function occupe(cl){
    document.querySelector(`.${cl}`).classList.remove("free");
    document.querySelector(`.${cl}`).classList.add("occ");
    document.querySelector(`.${cl} p`).textContent="محاز";
    
}
