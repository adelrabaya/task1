
  
  class reuse extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
        <div class="row g-0 align-items-center">
        <div class="col-lg-8 col-12 order-first order-md-first  ">
            <div class="w-100">
                <img src="https://www.vari.com/dw/image/v2/BDFT_PRD/on/demandware.static/-/Library-Sites-VariGlobalContentLibrary/default/dwaff338fb/homepage-b2c/desktop/vari-hp-b2c-module-hero-1-400817-c2.jpg?sw=1500" class="img-fluid"  alt="office picture">
            </div>
        </div>
        <div class="col-lg-4 col-12 order-last order-md-last">
            <aside class="justify-content-center w-85 m-5">
                <h3 class="display-6  fw-bold">Quality We Can Stand Behind</h3>
                <p>Our VariDesk line of desktop converters set the industry standard and inspired plenty of other products on the market, but there's a reason we continue to be the #1 name in sit-stand desk solutions: Unmatched quality and customer service.
                <br><br>Every Vari product is tested and certified to meet the highest industry standards for durability and safety, and each one comes with a solid warranty and a risk-free, 30-Day Hassle-Free Returns Policy.</p>
            </aside>

        </div>
        
    </div><!-- Head of the page -->
        `
    }
  }
  
  customElements.define('main-reuse', reuse);