

/* var bottoneHamburger = $(".fa-bars");
var closeMenu = $(".fa-times");

var open = false;
bottoneHamburger.click(function () {
    if(open) {
        $(".hamburger-menu").show();
        open = false;
    } else {
        $(".hamburger-menu").hide();
        open = true;
    }
}); 

closeMenu.click(function () {
    if(open) {
        $(".hamburger-menu").hide();
        open = false;
    } else {
        $(".hamburger-menu").show();
        open = true;
    }
});  */

//.hamburger-menu
//.close

/////////////////////////////// VERSIONE GIUSTA SENZA BUG AL CONTRARIO DI QUELLA PRECEDENTE //////////////////////////////////////////
/* 
var bottoneHamburger = $(".fa-bars");
var closeMenu = $(".fa-times");


bottoneHamburger.click(function () {
     $(".hamburger-menu").show();  
}); 

closeMenu.click(function () {
     $(".hamburger-menu").hide();     
}); 

 */
////////////////////////////////////// PROVA PERSONALE //////////////////////////////////////

var openMenu = $(".fa-bars");
var closeMenu = $(".fa-times");


openMenu.click(function() {
    $(".hamburger-menu").show();
});

closeMenu.click(function() {
    $(".hamburger-menu").hide();
});
