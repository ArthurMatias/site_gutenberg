const button = document.getElementById('hover_plans1')
const modal = document.querySelector("dialog")
const closeButton = document.querySelector("dialog button")

button.onclick = function(){
    modal.showModal()
}

closeButton.onclick = function(){
    modal.close()
}