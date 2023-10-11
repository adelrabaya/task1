
  
  class reuse extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <div class="row g-0 align-items-center mb-5">
        <div class="col-lg-8 col-12 order-first order-md-first ">
            <div class="w-100" style="display:flex;flex-direction:column;text-align:right;">
                <h1 class="service"style="font-weight:bold;font-size:3rem;color:black;"> Space as a Service </h1>
                <img src="https://www.vari.com/dw/image/v2/BDFT_PRD/on/demandware.static/-/Library-Sites-VariGlobalContentLibrary/default/dwaff338fb/homepage-b2c/desktop/vari-hp-b2c-module-hero-1-400817-c2.jpg?sw=1500" class="img-fluid"  alt="office picture">
            </div>
        </div>
        <div class="col-lg-4 col-12 order-last  order-md-last d-flex flex-column justify-content-center">
            <aside class="row  w-85  p-3 reuseP">
                <h3 class="col-12 display-6  fw-bold">VariSpace® Southlake is Move-In<br> Ready</h3>
                <p class="col-12">Our VariDesk line of desktop converters set the industry standard and inspired plenty of other products on the market, but there's a reason we continue to be the #1 name in sit-stand desk solutions: Unmatched quality and customer service.
                <br class="col-12"><br>Every Vari product is tested and certified to meet the highest industry standards for durability and safety, and each one comes with a solid warranty and a risk-free, 30-Day Hassle-Free Returns Policy.</p>
                <button type="button" class="btn col-12  site-btns mt-3 col-5 w-75" id="learn">LEARN MORE ABOUT VARISPACE</button>
            </aside>

        </div>
        
    </div><!-- Head of the page -->
        `
    }
  }
  
  customElements.define('main-reuse', reuse);