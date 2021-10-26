$(document).ready(function(){

    $nav = $('.nav');
    $collapseButton = $('.toggle-icon');

    $collapseButton.click(function(){
        $nav.toggleClass('collapse');
    })

});