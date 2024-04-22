function registerHideFunction(hidingElement, notHidingElements, element, hideFunction) {
    hidingElement.addEventListener('click', function () {
        if (element.getAttribute('data-is-clicked') != '') {
            hideFunction();
        }

        else {
            element.removeAttribute('data-is-clicked');
        }
    });

    notHidingElements.forEach(elem => {
        elem.addEventListener('click', function () {
            element.setAttribute('data-is-clicked', '');
        });
    });

    element.addEventListener('click', function () {
        element.setAttribute('data-is-clicked', '');
    });
}

registerHideFunction(document.getElementById('mobile_nav'), [], document.querySelector('#mobile_nav nav'), function () {
    document.getElementById('mobile_nav').style.display = null;
});