const dataMobileMenuOpen = document.querySelector('[data-mobile-menu-open]')
const dataMobileMenuClose = document.querySelector('[data-mobile-menu-close]')
const dataMenuContainer = document.querySelector('[data-menu-container]')

dataMobileMenuOpen.addEventListener('click', () => {
    dataMenuContainer.classList.toggle('active')
    dataMobileMenuOpen.classList.remove('active')
    dataMobileMenuClose.classList.add('active')
})

dataMobileMenuClose.addEventListener('click', () => {
    dataMenuContainer.classList.toggle('active')
    dataMobileMenuOpen.classList.add('active')
    dataMobileMenuClose.classList.remove('active')
})