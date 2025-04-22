const popupBtn = document.getElementById("add-popup-btn")
const popupOverlay = document.querySelector(".popup-overlay")
const popupBox = document.querySelector(".popup-box")
const cancelPopup = document.getElementById("cancel-popup")

popupBtn.addEventListener("click", ()=>{
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
})

cancelPopup.addEventListener("click",(event)=>{

    event.preventDefault()
    popupBox.style.display = "none"
    popupOverlay.style.display = "none"
})

// selecting container, add-book-btn, book-name-input, book-author-input, book-description

const container = document.querySelector(".container")
const addBookButon = document.getElementById("add-book")
const bookNameInput = document.getElementById("book-name-input")
const bookAuthorInput = document.getElementById("book-author-input")
const bookDescriptionInput = document.getElementById("book-description")

addBookButon.addEventListener("click",(event)=>{
    event.preventDefault()
   
    // if (!bookNameInput || !bookAuthorInput || !bookDescriptionInput) {
    //     alert("Please fill the required elements");
    //     return;
    // }

    const div = document.createElement("div");
    div.setAttribute("class","book-box");
    div.innerHTML =
    `<h1>${bookNameInput.value}</h1>
    <h3>${bookAuthorInput.value}</h3>
    <p>${bookDescriptionInput.value}</p>
    <button onclick="delBook(event)" >Delete</button>`
    container.append(div)
    // clear inputs
    bookNameInput.value = "";
    bookAuthorInput.value = "";
    bookDescriptionInput.value = "";
    popupBox.style.display = "none"
    popupOverlay.style.display = "none"
})

function delBook(event){
    event.target.parentElement.remove()
}