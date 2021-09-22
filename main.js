$(document).ready(function()
{
    $(".eliminaverde").click(function(){
        $(".boxgreen").fadeOut("");
    })

    $(".muestraverde").click(function(){
        $(".boxgreen").fadeIn("");
    })


    $(".eliminarojo").click(function(){
        $(".boxred").fadeOut("");
    })

    $(".muestrarojo").click(function(){
        $(".boxred").fadeIn("");
    })

    $(".eliminaamarillo").click(function(){
        $(".boxyellow").fadeOut("");
    })

    $(".muestraamarillo").click(function(){
        $(".boxyellow").fadeIn("");
    })
  
  
});