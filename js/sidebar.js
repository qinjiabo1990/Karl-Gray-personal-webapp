function sidebar_open() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('toggle');
    nav.className = 'nav-open';
    toggle.setAttribute('onclick', 'sidebar_close()')
    toggle.innerHTML = '<i class="material-icons">close</i>'
}

function sidebar_close() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('toggle');
    nav.className = 'nav-close';
    toggle.setAttribute('onclick', 'sidebar_open()')
    toggle.innerHTML = '☰'
}
