let url = 0;
let szelesseg = 0;
let keretVastagsag = 0;
let keretSzin = 0;
let kep = document.getElementById("kep");

document.getElementById("url").addEventListener("change", (evt) => {
    url = evt.currentTarget.value;
    kep.src = url;
});

document.getElementById("szelesseg").addEventListener("input", (evt) => {
    szelesseg = evt.currentTarget.value;
    kep.style.width = szelesseg + "px";
});
document.getElementById("keretVastagsag").addEventListener("input", (evt) => {
    keretVastagsag = evt.currentTarget.value;
    kep.style.borderStyle =  "solid";
    kep.style.borderWidth = keretVastagsag + "px";
});
document.getElementById("keretSzin").addEventListener("input", (evt) => {
    keretSzin = evt.currentTarget.value;
    kep.style.borderColor = keretSzin;
});

document.getElementById("submitButton").addEventListener("click", () => {
    if (document.getElementsByTagName("body")[0].classList.contains("dark-mode"))
    {
        document.getElementsByTagName("body")[0].classList.remove("dark-mode");
    } else {
        document.getElementsByTagName("body")[0].classList.add("dark-mode");
    }
});



