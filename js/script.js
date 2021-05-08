var white;
var nbapp = document.querySelector("#n-b-app");
var phone = document.querySelector("#phone");

function activeBtn (element) {
    if (element.className == "nav-link"){
        element.classList.add('active');
    }

    setTimeout(
        function () {
            element.classList.remove('active');
        }, 300
    );
}

function blur (elem) {
    
    setTimeout(
        function() {
            elem.blur();
        }, 3000
    );
}

addEventListener('scroll', () => {
    if (pageYOffset >= 80) {
        nbapp.style.top = 0;
    } else {
        nbapp.style.top = '-5rem';
    }
 
    if (pageYOffset >= categoriesAndtariffs.offsetTop - 40 && pageYOffset <= categoriesAndtariffs.offsetTop + categoriesAndtariffs.offsetHeight) {
        white = true;
        nbapp.classList.remove("navbar-dark");
        nbapp.classList.add("navbar-light");
        nbapp.classList.add("bg-white");
        phone.classList.add("text-black");
        phone.classList.remove("text-white");
    } else {
        white = false;
        nbapp.classList.add("navbar-dark");
        nbapp.classList.remove("navbar-light");
        phone.classList.add("text-white");
        phone.classList.remove("text-black");
        nbapp.classList.remove("bg-white");
    }

    if (white == false) {
        if (pageYOffset >= about.offsetTop - 40 && pageYOffset <= about.offsetTop + about.offsetHeight) {
            nbapp.classList.remove("navbar-dark");
            nbapp.classList.add("navbar-light");
            phone.classList.add("text-black");
            nbapp.classList.add("bg-white");
            phone.classList.remove("text-white");
        } else {
            nbapp.classList.add("navbar-dark");
            nbapp.classList.remove("navbar-light");
            phone.classList.add("text-white");
            phone.classList.remove("text-black");
            nbapp.classList.remove("bg-white");
        }
    }
});
