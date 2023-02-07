function sidenav(){
    document.getElementById("sidenav").classList.toggle("active")
}

function toggle_menu(name)
{
    document.querySelector("container.active").classList.remove("active")
    document.getElementById(name).classList.add("active")
    document.querySelector("button.active").classList.remove("active")
    document.querySelector(`[name=${name}]`).classList.add("active")
}

function teste(){
    const check = document.getElementById("setting-glass")
    const sidenav = document.getElementById("sidenav")
    const container = document.querySelectorAll("container")
    if(check.checked == true){
        sidenav.style.backdropFilter = "blur(0px)"
        sidenav.style.background = "rgba(32, 32, 32)"
        container.style.backdropFilter = "blur(0px)"
        container.style.background = "rgba(32, 32, 32)"
    }else{
        sidenav.style.backdropFilter = "blur(10px)"
        sidenav.style.background = "rgba(255, 255, 255, 0.2)"
        container.style.backdropFilter = "blur(10px)"
        container.style.background = "rgba(255, 255, 255, 0.2)"
    }
}