
//mobile menu functionality.
function toggleNav() {
    const navList = document.getElementById('navlist');
    console.log("You've toggled the mobile nav.")        
    navList.classList.toggle('active');
}

document.addEventListener('click', function (event) {
    // Check if the clicked element is the menu button
    if (event.target && event.target.id === 'navbutt') {
        toggleNav();
    }
});