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
    const container = document.querySelector("container")
    const bodys = document.getElementById("body")
    if(check.checked == true){
        bodys.classList.add("active")
    }else{
        bodys.classList.remove("active")
    }
}