observer_options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

const observer = new IntersectionObserver(observerFunction, observer_options);
const observer_targets = document.getElementsByClassName("observer-target");


for(let i = 0; i < observer_targets.length; i++){
    observer.observe(observer_targets[i]);
}

function observerFunction(entries, observer){
    console.log(entries);
    entries.forEach(function(entry){
        if(entry.isIntersecting == true){
            console.log(entry.target);
            entry.target.classList.add("observed");
        }
    });
}



window.onload = function(){
    colorMode = document.getElementsByClassName("colorMode");
    for(let i = 0; i < colorMode.length; i++){
        colorMode[i].addEventListener("click", changeColorMode);
    }
}

function changeColorMode(){
    elements = [];
    for(let i = 0; i < document.getElementsByClassName("light").length; i++){
        elements[i] = document.getElementsByClassName("light")[i];
    }

    for(let i = 0; i < elements.length; i++){
        console.log(elements.length)
        elements[i].classList.toggle("dark");
    }
    console.log("changed");
}