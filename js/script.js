$(document).ready(function() {

    //funziona, ma ogni volta che clicco sul menu dropdown, questo sparisce
    // $("nav .dropdown-inside").click(function() {
    //     $(this).find(".dropdown-menu").toggle();
    // })
    
    //in questo modo il problema di prima non si presenta
    $("nav .dropdown-inside span").click(function() {
        $(this).parent().find(".dropdown-menu").toggle();

        //aggiungo/tolgo classe focus ai menu che contengono i dropdown
        $(this).parent().children("span").toggleClass("focus");
    })

    //_bonus
    //avrei potuto usare hover, ma si creerebbe un effetto fastidioso (come nel sito originale): se clicco per chiudere un menu, poi, muovendomi verso un altro menu, questo si riapre. 
    $("nav .dropdown-inside span").mouseenter(function() {
        $("nav .dropdown-menu").css("display", "none");
        $(this).parent().find(".dropdown-menu").toggle();

        //aggiungo la classe focus ai menu contenenti i dropdown e la tolgo a tutti gli altri
        $("nav .dropdown-inside span").removeClass("focus");
        $(this).addClass("focus");
    })
    //_/bonus

    //left-menu
    //aggiungere la classe focus on hover, ma non se la classe active è già presente
    $("nav .left-menu li a").hover(function() {
        if(!$(this).hasClass("active")) {
            $(this).addClass("focus");
        }
    }, function() {
        $(this).removeClass("focus");
    })



















})