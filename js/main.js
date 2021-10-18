$(document).ready(function(){

    $nav = $('.nav');
    $collapseButton = $('.collapse-toggle-container');

    $collapseButton.click(function(){
        $nav.toggleClass('collapse');
    })

});