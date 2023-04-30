const progress = document.getElementsById('progress')
const prev = document.getElementsById('prev')
const next = document.getElementsById('next')
const circle = document.getElementsById('.cricle')

let currentActive = 1

next.addEventListener(click, () => {
    currentActive++

    if(currentActive>circles.length) {
        currentActive = circles.length
    }

    update()
})

next.addEventListener(click, () => {
    currentActive--

    if(currentActive<1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        next.disabled = false
        prev.disabled = false
    }
}

