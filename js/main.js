const navToggleBtn = document.getElementById('nav_toggle_btn')
const navBar = document.getElementById('main_nav')

// EVENT LISTENERS //
navToggleBtn.addEventListener('click', toggleNavBar)


// FUNCTIONS //

// Toggle Navbar
function toggleNavBar()
{
    navToggleBtn.classList.toggle('active')
    navBar.classList.toggle('active')

    updateIcon()
}

// Updates the icon to a cross if the menu is opened, and the bars if it's closed
function updateIcon()
{
    if (navToggleBtn.classList.contains('active'))
    {
        navToggleBtn.classList.remove('fa-bars')
        navToggleBtn.classList.add('fa-times')
    }
    else
    {
        navToggleBtn.classList.add('fa-bars')
        navToggleBtn.classList.remove('fa-times')
    }
}