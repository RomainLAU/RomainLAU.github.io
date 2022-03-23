window.addEventListener('DOMContentLoaded', function() {

    let showMoreButton = document.querySelector('.show-more')
    let dots = document.querySelector('.dots')
    let endOfDescription = document.querySelector('.end-of-description')

    showMoreButton.addEventListener('click', function() {
        console.log(showMoreButton.textContent)

        if (showMoreButton.textContent === 'Show More') {
            endOfDescription.style.display = "contents"
            dots.style.display = "none"
            showMoreButton.textContent = 'Show Less'
        } else {
            endOfDescription.style.display = "none"
            dots.style.display = "contents"
            showMoreButton.textContent = 'Show More'
        }
    })
})