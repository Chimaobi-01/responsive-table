toogleMenu('menu')
preventFormSubmit()
closeNavOnClickLink()

for(let i = 0; i < 6; i++){
    toogleMenu(`elipse${i}`)
    updateStatus(`switch${i}`, `elipse${i}`, `state${i}`)
}















function toogleMenu(id) {
    const element = document.getElementById(id);
    element.addEventListener('click', () => {
        element.classList.toggle('open')
    })
}

function preventFormSubmit() {
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()
    })
}

function updateStatus(btnId, elipseId, stateId) {
    document.getElementById(btnId).addEventListener('click', () => {
        toggleBtwCompletedAndProcessingState(stateId)
        removeClass(elipseId)
    })
}
function removeClass(id) {
    document.getElementById(id).classList.remove('open')
}
function toggleBtwCompletedAndProcessingState(id) {
    const state = document.getElementById(id)
    if (state.innerHTML === "completed") {
        state.innerHTML = "processing"
        state.style.backgroundColor = 'rgba(138, 157, 221, 0.5)'
        state.style.color = 'rgb(26, 50, 128)'
    }
    else if (state.innerHTML === "processing") {
        state.innerHTML = "completed"
        state.style.backgroundColor = 'rgba(178, 224, 178, 0.5)'
        state.style.color = 'rgb(66, 129, 66)'
    }
    else { return }
}
function closeNavOnClickLink() {
    document.querySelectorAll('nav.nav a').forEach(link => {
        link.addEventListener('click', ()=>{
            removeClass('menu')
        })
    })
}