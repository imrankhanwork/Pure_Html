const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onClick = function() {
    search.classList.toggle('active')
}