
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
    document.getElementById("burger-menu").classList.toggle("hideOption")
    let mId = event.currentTarget.id
    let menu = document.getElementById(mId+"Menu")
    console.log(document.getElementById(mId+"-submenu").parentElement.nextElementSibling)
    document.getElementById(mId+"-submenu").parentElement.nextElementSibling.classList.toggle("hideOption")//Show Banner Element 
    // menu.parentElement.classList.toggle("showSubMenu")
    menu.classList.toggle("hideOption")
    // menu.classList.toggle("hideIt")
    console.log(menu)
}


function hideMenu(event){
    let length = event.currentTarget.id.length
    let name = event.currentTarget.id.slice(0,length-8)
    let menu = document.getElementById(name)
    // console.log()
    menu.parentElement.parentElement.classList.toggle("hideOption")
    event.currentTarget.parentElement.classList.toggle("hideOption")
    // document.getElementById(mId+"-submenu").parentElement.nextElementSibling.classList.toggle("hideOption")
    console.log(event.currentTarget.parentElement.nextElementSibling.classList.toggle("hideOption"))//Hide Banner Element 
}

function showMenuSub(event){
    event.currentTarget.parentElement.classList.toggle("hideOption")
    console.log(event.currentTarget.parentElement.nextElementSibling)
    event.currentTarget.parentElement.nextElementSibling.classList.toggle("hideOption")
    let subId = event.currentTarget.id;
    let subMenu = document.getElementById(subId+"Menu")
    subMenu.classList.toggle("hideOption")
    subMenu.nextElementSibling.classList.toggle("hideOption")//Show Banner
    console.log(subMenu.nextElementSibling.classList)
}
function hideMenuSub(event){
    let sliceLength = event.currentTarget.parentElement.id.length-4
    let menuName = event.currentTarget.parentElement.id.slice(0,sliceLength)
    let parent = document.getElementById(menuName).parentElement.id
    event.currentTarget.parentElement.classList.toggle("hideOption")
    event.currentTarget.parentElement.nextElementSibling.classList.toggle("hideOption")//Hide Banner
    document.getElementById(parent).classList.toggle("hideOption")//Re-Show Parent
    document.getElementById(parent).nextElementSibling.classList.toggle("hideOption")//Re-Show Parent Banner

}