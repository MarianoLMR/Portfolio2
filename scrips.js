const toggleTheme = document.getElementById("toggle-theme")
const toggleIcon = document.getElementById("toggle-icon")
const toggleText = document.getElementById("toggle-text")

const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

const flagsElements = document.getElementById("flags");

const changeLanguage = async language=>{
    const requestJson = await fetch("./languages/${language}.json");
    const texts = await requestJson.json();

    console.log(texts);
}

flagsElements.addEventListener("click", (e) => {
   changeLanguage(e.target.parentElement.dataset.language);
})

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("Dark");
    if(toggleIcon.src.includes("moon-solid.svg")) {
        toggleIcon.src = "img/icons/sun-solid.svg";
        toggleText.textContent = "Light Mode";
    } else {
        toggleIcon.src = "img/icons/moon-solid.svg";
        toggleText.textContent = "Dark Mode"
    }
})

toggleColors.addEventListener("click", (e)=>{
    console.log(e.target.dataset);
})


