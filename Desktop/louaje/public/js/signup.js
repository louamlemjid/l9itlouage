$(document).ready(function() {
    // var userNature=document.querySelector('input[name="requestType"]:checked').value;
    const radios=document.querySelectorAll('input[name="requestType"]')
    
    for (let i=0;i<radios.length;i++){
        radios[i].addEventListener("click",(event)=>{
            console.log(event.target.value)
        switch(event.target.value){
            case "passenger":
                document.getElementById("blocPassenger").hidden=false;
                document.getElementById("blocLouage").hidden=true;
                document.getElementById("blocStation").hidden=true;
                break;
            case "louage":
                document.getElementById("blocPassenger").hidden=true;
                document.getElementById("blocLouage").hidden=false;
                document.getElementById("blocStation").hidden=true;
                break;
            case "station":
                document.getElementById("blocPassenger").hidden=true;
                document.getElementById("blocLouage").hidden=true;
                document.getElementById("blocStation").hidden=false;
                break;
        }
        })
    }

    })
function Louage(){
    alert('louage form')
        $.ajax({
            type: 'POST',
            url: '/signup',
            data: {
                newItem: $('#firstNameLouage').val(),
                newItem1: $('#lastNameLouage').val(),
                newItem2: $('#email').val(),
                newItem3: $('#trajet1').val(),
                newItem4: $('#trajet2').val(),
                newItem5: $('#tel').val(),
                password: $('#password').val(),
                matrLeft: $('#matrLeft').val(),
                matrRight: $('#matrRight').val()
                // Add more items as needed
            },
            success: function(response) {
                console.log('Louage added successfully');
        
                // Redirect to a new page after success
                window.location.href = '/login';
            },
            error: function(error) {
                // Handle error
            }
        });  
}
function Passenger(){
    alert('passenger form')
        $.ajax({
            type: 'POST',
            url: '/signuppassage',
            data: {
                newItem: $('#firstNamePassenger').val(),
                newItem1: $('#lastNameLouagePassenger').val(),
                newItem2: $('#email').val(),
                newItem5: $('#tel').val(),
                password: $('#password').val()
                // Add more items as needed
            },
            success: function(response) {
                console.log('Passenger added successfully');
        
                // Redirect to a new page after success
                window.location.href = '/signInPassenger';
            },
            error: function(error) {
                // Handle error
            }
        });  
}
function Station(){
    alert('station form')
        $.ajax({
            type: 'POST',
            url: '/signupstation',
            data: {
                city: $('#city').val(),
                name: $('#name').val(),
                email: $('#email').val(),
                tel: $('#tel').val(),
                password: $('#password').val()
                // Add more items as needed
            },
            success: function(response) {
                console.log('Station added successfully');
        
                // Redirect to a new page after success
                window.location.href = '/signinstation';
            },
            error: function(error) {
                // Handle error
            }
        });
}