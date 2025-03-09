const sectionMain = document.querySelector('#sc-main')
const projectSectionHeader = document.querySelector('#section-header')
console.log(sectionMain)

window.addEventListener('scroll', function() {
    const scrollPosition = this.window.scrollY
    const opacity = 1 - (scrollPosition / 200)

    if(sectionMain.style.opacity >= 0) {
        sectionMain.style.opacity = opacity
        projectSectionHeader.style.opacity = opacity
    } else {
        sectionMain.style.opacity = 0
        projectSectionHeader.style.opacity = 0
    }
})