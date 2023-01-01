let hamNav = document.querySelector(".ham-nav")
let NavBar = document.querySelector(".links")
let closeNav = document.querySelector(".close-nav")
let blur = document.querySelector(".blur")


hamNav.addEventListener("click", () => {
    NavBar.classList.add("active")
    blur.style.display = "Block"
})
closeNav.addEventListener("click", () => {
    NavBar.classList.remove("active")
    blur.style.display = "none"
})

blur.addEventListener("click", () => {
    NavBar.classList.remove("active")
    blur.style.display = "none"
})


// Add Comment
let commentValue = document.querySelector(".topComment .container .comments .addComment .desc  textarea")
let comment = document.querySelector(".topComment .container .comments .comment")
let AddCommBtn = document.querySelector(".topComment .container .comments .addComment .desc button")


let AddComment = (value) => {
    // Create Parent Element
    let parentEl = document.createElement("div")
    parentEl.className = "com"
    
    // Create img and set his Attribute
    let img = document.createElement("img")
    img.setAttribute("src", "images/man.jfif")
    
    // Create desc and set his Attribute
    let desc = document.createElement("div")
    desc.className="desc"
    
    // Create comment content and set his Attribute
    let parag = document.createElement("p")
    parag.textContent = value
    
    // Create date content and set his Attribute
    let date = new Date()
    date += ""
    date = date.split(" ").slice(1,5).join(" ")
    let span = document.createElement("span")
    span.textContent = date

    // append Each Element 
    desc.append(parag, span)
    parentEl.append(img, desc)
    comment.append(parentEl)
}

AddCommBtn.addEventListener('click', (ele) => {
    ele.preventDefault()
    if (commentValue.value) {
        AddComment(commentValue.value)
    }
})

// Animation Progress

let Status = document.querySelector("#status")
let spans = document.querySelectorAll(".status .container .row .col .lable .progress span")

window.onscroll = function () {
    if (window.scrollY >= Status.offsetTop -500) {
        spans.forEach((ele) => {
            ele.style.width = ele.dataset.width
        })
    }
}

// Scroll Reval Library

ScrollReveal().reveal('.topSCroll',{
    delay : 0,
    origin : 'top',
    distance : '60px',
    opacity : 0,
    duration : 1000,
    reset: false,
});
