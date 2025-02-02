// Check if dark mode is on or off
// The first thing to do .... 
(function(){
    if(localStorage.getItem("darkMode") === "on"){
        document.getElementById("myHTML").classList.add("dark");
        document.getElementById("toggel").checked = true;
    }else if(localStorage.getItem("darkMode") === "off"){
        document.getElementById("myHTML").classList.remove("dark");
        document.getElementById("toggel").checked = false;
    }
})();



// When clicking the toggle button
var toggleElement = document.getElementById("toggel");
toggleElement.addEventListener("change", function () {

    if(toggleElement.checked){
        // console.log("Dark mode is on");
        localStorage.setItem("darkMode", "on");
        document.getElementById("myHTML").classList.add("dark");
    }else if(!toggleElement.checked){
        // console.log("Dark mode is off");
        localStorage.setItem("darkMode", "off");
        document.getElementById("myHTML").classList.remove("dark");
    }
});


