var linkAdded = document.querySelectorAll('.add-to-basket');
var popupAdded = document.querySelector('.modal-added');
var closeAdded = popupAdded.querySelector('.modal-close');

for (var i = 0; i < linkAdded.length; i++) {
    linkAdded[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        popupAdded.classList.add('modal-show');
    });
}

closeAdded.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupAdded.classList.remove('modal-show');
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupAdded.classList.contains("modal-show")) {
            popupAdded.classList.remove("modal-show");
        }
    }
});