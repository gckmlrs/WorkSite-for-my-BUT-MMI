document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('#menuToggle input');

    menuToggle.addEventListener('change', function () {
        const menu = document.querySelector('#menu');
        if (this.checked) {
            menu.style.transform = 'translateX(0)';
        } else {
            menu.style.transform = 'translateX(-100%)';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.querySelector('a[href="#go"]');

    btn.addEventListener('click', function(e) {
        e.preventDefault(); 

        var target = document.getElementById('go');

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


  AOS.init();





