document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

    // ADD CODE HERE!
    document.addEventListener('keydown',function(event){
      if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === "ArrowUp") {
        const li = document.createElement("li")
        const direction = event.key
        if (direction == "ArrowLeft") {
          li.innerText = "left"
        } else if (direction == "ArrowRight") {
          li.innerText = "right"
        } else if (direction == "ArrowUp") {
          li.innerText = "up"
        } else if (direction == "ArrowDown") {
          li.innerText = "down"
        } 
        document.querySelector("#moves-container").append(li)
        event.preventDefault()
      } else if (event.keyCode === 46 || event.keyCode === 8) {
        const ul = document.querySelector("#moves-container")
        ul.removeChild(ul.lastChild)
      }
    })
    const moveButton = document.querySelector("#move-button")
    moveButton.addEventListener('click',function(e){
      const liList = document.querySelectorAll("ul > li")
      for (let i = 0; i < liList.length; i++){
        move(liList[i].innerText)
        liList[i].remove()
      }
    })
  })
