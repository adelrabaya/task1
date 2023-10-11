let tt=document.getElementById("PRODUCTS")
tt.addEventListener('click', handleClick);
tt=document.getElementById("ABOUT")
tt.addEventListener('click', handleClick);
tt=document.getElementById("SUPPORT")
tt.addEventListener('click', handleClick);
tt=document.getElementById("RESOURCES")
tt.addEventListener('click', handleClick);
function handleClick(event) {
    event.currentTarget.classList.toggle("accordion");
  }





