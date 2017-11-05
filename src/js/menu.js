var slideMenu = (function () {
    var me = {},
        menu = document.querySelector('.menu'),
        bars = document.querySelector('.bars'),
        parentNode = document.querySelector("#nav-bar"),
        menuXs = null,
        closeButton = null;

    function onClose(e) {
        e.preventDefault();
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.createNode = function () {
        menuXs = document.createElement("div");
        menuXs.classList.add("menu-xs");
        closeButton = document.createElement('a');
        closeButton.classList.add('menu-xs__close-button');
        closeButton.innerText = 'X';
        parentNode.insertBefore(menuXs, parentNode.children[0]);
        menu.insertBefore(closeButton, menu.children[0]);
    };

    me.open = function () {
        document.body.style.overflowY = 'hidden';
        menu.classList.add('is-visible');
        closeButton = document.querySelector('.menu-xs__close-button');
        closeButton.addEventListener('click', onClose)
    };

    me.close = function () {
        document.body.style.overflowY = 'auto';
        parentNode.removeChild(menuXs);
        menu.removeChild(closeButton);
        menu.classList.remove('is-visible')
    };

    return me;

}());