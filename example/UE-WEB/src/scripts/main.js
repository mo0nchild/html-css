const main_container = document.getElementById("data-container");
const page_container = document.getElementById("page-container");

const scrollOn = (id) => {
    $('html, body').animate({scrollTop: $(id).offset},200);
    return false;
};

const setMain = (data) =>{
    return `
    <div class="col-sm-12 col-md-6 col-lg-4 " style = "padding: 0px 8px;">
        <div class = "content-item">
    <a href="./src/page.html">

        <img src="./assets/main/${data.image}">
        <div style="padding: 0px; margin: 16px 0px 0xp ">
            <h2>${data.title}</h2>
            <p class = "price-state">${data.info}</p>
            <p class = "time-state">${data.time}</p>
        </div>
      
    </a>
        </div>
    </div>
    `;
};

const setPage = (data) => {
    return `
    <div class = "col-xs-12 col-md-12 col-lg-6">
    <a href="#">
      <div class = "card-item">
<div>
    <h2 style = "font-size: 16px;line-height: 24px;font-weight: bolder;margin: 0px;">
        ${data.title}</h2>
    <p style="font-size: 13px;line-height: 21px;color: #626262;margin: 4px 0px 0px;">
        ${data.info}</p> 
    <div class = "price-inner" style="flex-grow: 1;">
    <h2 id = "price" style="font-size: 15px;line-height: 21px;font-weight: bolder;margin: 0px;">
        ${data.price}</h2>
    </div>
</div>
        <img src="./../assets/page/${data.image}">
      </div>
    </a>
  </div>
    `;
};

