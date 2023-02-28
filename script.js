function sidenav(){
    document.getElementById("sidenav").classList.toggle("active")
}


function toggle_menu(name){
    document.querySelector("container.active").classList.remove("active")
    document.getElementById(name).classList.add("active")
    document.querySelector("button.active").classList.remove("active")
    document.querySelector(`[name=${name}]`).classList.add("active")
}


function toggle_filter(){
    document.getElementById("filter-box").classList.toggle("active")
}


function dark_mode(){
    const check = document.getElementById("setting-glass")
    const body = document.getElementById("body")
    if(check.checked == true){
        body.classList.add("active")
    }else{
        body.classList.remove("active")
    }
}