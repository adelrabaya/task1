
function showBurger(){
    let menu = document.getElementById("burger-menu-div")
    menu.classList.toggle("hideIt")
    let list = document.getElementsByClassName("hideForBurger")
    // console.log(list)
    for(let i=0;i<list.length;i++){
        console.log(list[i])
        list[i].classList.toggle("hideOption")
    }

}
function hideOption(event){
    // event.currentTarget.nextSibling.classList.toggle("hideOption")
    event.currentTarget.nextSibling.nextSibling.classList.toggle("hideOption")
}

function showMenu(event){
    document.getElementById("burger-menu").classList.toggle("try")
    let mId = event.currentTarget.id
    let menu = document.getElementById(mId+"Menu")
    console.log(document.getElementById(mId+"-submenu").parentElement.nextElementSibling)
    // document.getElementById(mId+"-submenu").parentElement.nextElementSibling.classList.toggle("hideOption")//Show Banner Element 
    // menu.parentElement.classList.toggle("showSubMenu")
    // menu.classList.toggle("hideOption")
    menu.parentElement.classList.toggle("trial")
    // menu.classList.toggle("hideIt")
    console.log(menu)
}


function hideMenu(event){
    let length = event.currentTarget.id.length
    let name = event.currentTarget.id.slice(0,length-8)
    let menu = document.getElementById(name)
    // console.log()
    console.log(menu.parentElement.parentElement)
    console.log(event.currentTarget.parentElement.parentElement)
    menu.parentElement.parentElement.classList.toggle("try")
    event.currentTarget.parentElement.parentElement.classList.toggle("trial")
    // event.currentTarget.parentElement.classList.toggle("hideOption")
    // document.getElementById(mId+"-submenu").parentElement.nextElementSibling.classList.toggle("hideOption")
    // console.log(event.currentTarget.parentElement.nextElementSibling.classList.toggle("hideOption"))//Hide Banner Element 
}


function showMenuSub(event){
    event.currentTarget.parentElement.parentElement.classList.toggle("trial")//hide parent menu
    console.log(event.currentTarget.parentElement.nextElementSibling)
    // event.currentTarget.parentElement.nextElementSibling.classList.toggle("hideOption")//hide parent menu banner
    let subId = event.currentTarget.id;
    let subMenu = document.getElementById(subId+"Menu")
    console.log(subMenu.parentElement)
    subMenu.parentElement.classList.toggle("trial")//show the submenu
    console.log(subMenu.parentElement)
    // subMenu.classList.toggle("hideOption")//show the submenu
    // subMenu.nextElementSibling.classList.toggle("hideOption")//Show Banner
    console.log(subMenu.nextElementSibling.classList)
}
function hideMenuSub(event){
    let sliceLength = event.currentTarget.parentElement.id.length-4
    let menuName = event.currentTarget.parentElement.id.slice(0,sliceLength)
    let parent = document.getElementById(menuName).parentElement.id
    event.currentTarget.parentElement.parentElement.classList.toggle("trial")
    // event.currentTarget.parentElement.nextElementSibling.classList.toggle("hideOption")//Hide Banner
    document.getElementById(parent).parentElement.classList.toggle("trial")
    // document.getElementById(parent).classList.toggle("hideOption")//Re-Show Parent
    // document.getElementById(parent).nextElementSibling.classList.toggle("hideOption")//Re-Show Parent Banner

}

function search(){
    console.log(document.getElementById("searchbar").classList.toggle("hideOption"))
}