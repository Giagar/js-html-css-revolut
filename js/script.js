$(document).ready(function() {

    //funziona, ma ogni volta che clicco sul menu dropdown, questo sparisce
    // $("nav .dropdown-inside").click(function() {
    //     $(this).find(".dropdown-menu").toggle();
    // })
    
    //in questo modo il problema di prima non si presenta
    $("nav .dropdown-inside span").click(function() {
        $(this).parent().find(".dropdown-menu").toggle();
    })

    //_bonus
    $("nav .dropdown-inside span").mouseenter(function() {
        $("nav .dropdown-menu").css("display", "none");
        $(this).parent().find(".dropdown-menu").toggle();
    })
    //_/bonus



















})