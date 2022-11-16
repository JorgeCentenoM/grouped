import './style.css'

document.getElementById('clear').addEventListener('click', clear())


function clear() {
    const participantsBox = document.getElementById('participants')
    participantsBox.innerText.clear

}