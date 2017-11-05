(function (menu) {
    var openMenuButton = document.querySelector('.bars');

    if (openMenuButton) {

        openMenuButton.addEventListener('click', function () {

            menu.createNode();
            menu.open();
        })
    }
}(slideMenu));


