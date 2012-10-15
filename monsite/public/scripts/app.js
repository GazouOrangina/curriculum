
$(document).ready(function(){
    $('#navigationMenu li .normalMenu').each(function(){
        $(this).before($(this).clone().removeClass().addClass('hoverMenu'));
    });
    $('#navigationMenu li').hover(function(){
        $(this).find('.hoverMenu').stop().animate({marginTop:'0px'},200);
    },
    function(){
        $(this).find('.hoverMenu').stop().animate({marginTop:'-25px'},200);
    });
});

$(document).ready(function(){
    $("#contactmenu").click(function(){
        $("#experiences").fadeOut("slow");
        $("#competences").fadeOut("slow");
        $("#divers").fadeOut("slow");
        $("#formation").fadeOut("slow");
        $("#contact").fadeIn("slow");
    });
});

$(document).ready(function(){
    $("#experiencesmenu").click(function(){
        $("#experiences").fadeIn("slow");
        $("#contact").fadeOut("slow");
        $("#competences").fadeOut("slow");
        $("#divers").fadeOut("slow");
        $("#formation").fadeOut("slow");
    });
});

$(document).ready(function(){
    $("#competencesmenu").click(function(){
        $("#competences").fadeIn("slow");
        $("#contact").fadeOut("slow");
        $("#experiences").fadeOut("slow");
        $("#divers").fadeOut("slow");
        $("#formation").fadeOut("slow");
    });
});

$(document).ready(function(){
    $("#diversmenu").click(function(){
        $("#divers").fadeIn("slow");
        $("#contact").fadeOut("slow");
        $("#experiences").fadeOut("slow");
        $("#competences").fadeOut("slow");
        $("#formation").fadeOut("slow");
    });
});


$(document).ready(function(){
    $("#formationmenu").click(function(){
        $("#formation").fadeIn("slow");
        $("#contact").fadeOut("slow");
        $("#experiences").fadeOut("slow");
        $("#competences").fadeOut("slow");
        $("#divers").fadeOut("slow");
    });
});

$(document).ready(function(){
    $("#identite").click(function(){
        $("#formation").fadeIn("slow");
        $("#contact").fadeIn("slow");
        $("#experiences").fadeIn("slow");
        $("#competences").fadeIn("slow");
        $("#divers").fadeIn("slow");
    });
});