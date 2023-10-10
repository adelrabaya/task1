let data =  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => {
    for(let i=1;i<7;i++){
        if(i<3){
            document.getElementById("compareT"+i).innerHTML=json.products[i].title
        document.getElementById("comp-items"+i).innerHTML=`
        <div class="card-desc">
            <p>${json.products[i].description.slice(0,47)}</p>
        </div>
        <div class="card-desc">
            <p>${json.products[i].price}$</p>
        </div>
        <div class="card-desc">
            <p>${json.products[i].brand}</p>
        </div>
        <div class="card-desc">
            <p>${json.products[i].rating}/5</p>
        </div>
        `
        }
        document.getElementById("carouselM").innerHTML+=`
        <div class="col-lg-2 col-sm-4 col-6 d-flex px-2 py-4  flex-column justify-content-between text-center samples" >
            <div class="d-flex flex-column justify-content-between" style="flex: 1 1 auto">
                    <div class="row d-flex flex-column items-carousel-title text-center justify-content-center"  >
                        <div class="col-12">
                            <img class="img-fluid" style="width:12em;height:8em" src="${json.products[i].thumbnail}" alt="pic${i}">
                        </div>
    
                        <div class="col-12 ">
                            <p class="fw-bold">${json.products[i].title}</p>
                        </div>
                        <div class="col-12 text-center w-100">
                            <p class="small">${json.products[i].description.slice(0,15)}</p>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-12 justify-content-center d-flex">
                            <button type="button" class="btn btn-light site-btns mt-1 col-8 w-75">SHOP NOW</button>
                    </div>
            </div>
        </div>
        `
    }
})



