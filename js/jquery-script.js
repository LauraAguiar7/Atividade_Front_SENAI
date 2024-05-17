//efeito de esconder formulário de cadastro

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").sliderToggle("slow");
        $("#section-login").sliderToggle("slow");
        $("#botao-cadastrar").hide();
    });

});