const tabsBtns = document.querySelectorAll(".tab__button-container");
console.log(tabsBtns);
const tabs = document.querySelectorAll(".tab__about")
console.log(tabs);

function hideTabs()
{
    tabs.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(button => button.classList.remove("tab__button-container--active"));
}

function showTabs(index)
{
    tabs[index].classList.remove("hide");
    tabsBtns[index].classList.add("tab__button-container--active");
}

hideTabs();

tabsBtns.forEach((button, index) => button.addEventListener("click", () => {
    hideTabs();
    showTabs(index);
}));

//Anchors

const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();
        
        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll(
            {
                top: elem.offsetTop - 74,
                behavior: "smooth"
            }
        )
    })
})