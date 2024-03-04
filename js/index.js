const button = document.querySelector("#projects-button");
const projects = document.querySelector(".hidden");
console.log(projects)

toggle = false
button.addEventListener("click", (event) => {
    if (!toggle) {
        toggle = true;
        button.innerText = "Click to hide projects."
        projects.classList.add('show');
    }
    else {
        toggle = false;
        button.innerText = "Click to show projects."
        projects.classList.remove('show');
    }
})