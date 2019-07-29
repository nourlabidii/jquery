var text = document.getElementById('text');

function bold(){
    if(text.style.fontWeight=='bold')
    text.style.fontWeight = 'normal';
    else text.style.fontWeight = 'bold'
}
function italique(){
    if(text.style.fontStyle=='italic')
    text.style.fontStyle = 'normal';
    else text.style.fontStyle = 'italic'
}


function und(){
    if(text.style.textDecoration=='underline')
    text.style.textDecoration = 'none';
    else text.style.textDecoration = 'underline'}


    function sizes(){
        text.style.fontSize=document.getElementById('size').value;
    }
    function fontfam(){

        text.style.fontFamily=document.getElementById('ar').value;
    }



    $(document).ready(function() {
        $("#showButton").mouseenter(function(){
            $("#mahdi1").show();
            $("#showButton").css("opacity","0.5")

        })
        $("#showButton").mouseleave(function(){
            $("#mahdi1").hide();
            $("#showButton").css("opacity","1")
        })  
    })
    $(document).ready(function() {
        $("#showButton2").mouseenter(function(){
            $("#mahdi2").show();
            $("#showButton2").css("opacity","0.5")
        })
        $("#showButton2").mouseleave(function(){
            $("#mahdi2").hide();
            $("#showButton2").css("opacity","1")

        })  
    })
    $(document).ready(function() {
        $("#showButton3").mouseenter(function(){
            $("#mahdi3").show();
            $("#showButton3").css("opacity","0.5")
        })
        $("#showButton3").mouseleave(function(){
            $("#mahdi3").hide();
            $("#showButton3").css("opacity","1")

        })  
    })

   