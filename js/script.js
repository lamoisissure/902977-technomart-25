var linkFeedback = document.querySelector('.feedback');
var popupFeedback = document.querySelector('.modal-feedback');
var closeFeedback = popupFeedback.querySelector('.modal-close');
var formFeedback = popupFeedback.querySelector('.feedback-form');
var nameFeedback = popupFeedback.querySelector('.feedback-name');
var mailFeedback = popupFeedback.querySelector('.feedback-mail');
var bodyFeedback = popupFeedback.querySelector('.feedback-body');
var isStorageSupport = true;
var storage = '';
            
try {
    storage = localStorage.getItem('mail');
} catch (err) {
    isStorageSupport = false;
}

linkFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add('modal-show');
    nameFeedback.focus();
    if (storage) {
      mailFeedback.value = storage;
    }
});

closeFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal-show');
});

formFeedback.addEventListener('submit', function (evt) {
    if (!mailFeedback.value || !bodyFeedback.value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem('mail', mailFeedback.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupFeedback.classList.contains("modal-show")) {
            popupFeedback.classList.remove("modal-show");
        }
    }
});


var linkMap = document.querySelector('.map');
var popupMap = document.querySelector('.modal-map');
var closeMap = popupMap.querySelector('.modal-close');

linkMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('modal-show');
});

closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.remove('modal-show');
});   

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show");
        }
    }
});




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
