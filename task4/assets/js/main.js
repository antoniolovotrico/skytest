// Data Section
const linkMenu = ["Home", "Products", "Cart"];
var shoes = [
  {
    name: "Smith",
    price: 180,
    size: [38, 39, 40, 41, 42, 43, 44, 45],
    desc: "Sneakers della linea Portofino",
    patch: [
      {
        inner: [
          {
            name: "Watermelon",
            pic: "assets/img/patch/AACCS202387881-1.png",
            price: 50,
          },
          {
            name: "Strawberries",
            pic: "assets/img/patch/AACCS00204380311-1.png",
            price: 60,
          },
          {
            name: "Heart",
            pic: "assets/img/patch/ADECO02796B80303-1.png",
            price: 70,
          },
        ],
      },
      {
        outer: [
          {
            name: "Watermelon",
            pic: "assets/img/patch/AACCS202387881.png",
            price: 50,
          },
          {
            name: "Strawberries",
            pic: "assets/img/patch/AACCS00204380311.png",
            price: 60,
          },
          {
            name: "Heart",
            pic: "assets/img/patch/ADECO02796B80303.png",
            price: 70,
          },
        ],
      },
    ],
    image: [
      {
        left: [
          {
            side: "front",
            pics: "assets/img/scarpa-sinistra/Sneakers_left_shoe_front.png",
          },
          {
            side: "back",
            pics: "assets/img/scarpa-destra/right_back_8051124195013_3.png",
          },
        ],
        right: [
          {
            side: "front",
            pics: "assets/img/scarpa-destra/Sneakers_right_shoe_front.png",
          },
          {
            side: "back",
            pics: "assets/img/scarpa-sinistra/left_back_8051124195013_7.png",
          },
        ],
      },
    ],
  },
];

var carrello = {};

const menuHeader = document.querySelector("header ul");
const menuFooter = document.querySelector("footer ul");
const shoesDiv = document.querySelector(".shoes");
const shoesImgRight = document.querySelector(".shoes_img_right");
const shoesImgLeft = document.querySelector(".shoes_img_left");
const selectSize = document.getElementById("select");
const cartBtn = document.querySelector("#add_cart");
const cartPop = document.querySelector(".pop_hide");
const modalBtn = document.querySelector("#modal_btn");
const patchInner = document.querySelector(".patch_inner");
const patchOuter = document.querySelector(".patch_outer");
const attachContInn = document.querySelector(".attach_container_1");
const attachContOut = document.querySelector(".attach_container_2");

// Ciclo per stampare i link di menù e Footer
for (let link of linkMenu) {
  menuHeader.innerHTML += `<li><a href="#">${link}</a></li>`;
  menuFooter.innerHTML += `<li><a href="#">${link}</a></li>`;
}

// All'interno di questo ciclo verranno stampate tutti i dati riguardanti oggetto "shoes"
for (let shoe of shoes) {
  shoesDiv.innerHTML += `<h1>${shoe.name}</h1>
    <h3>${shoe.price} €</h3>
    <h3>${shoe.desc}</h3>`;
  selectSize.innerHTML = `
    <option disabled selected value> - select a size - </option>`;
    
    var selectedName = { shoeName: shoe.name, shoePrice: shoe.price};
    carrello = {...carrello, ...selectedName};
    

  for (let size of shoe.size) {
    selectSize.innerHTML += `
    <option value="${size}">${size}</option>`;
  }

  

  for (let side of shoe.image) {
    for (let right of side.right) {
        shoesImgRight.innerHTML += `
        <img class="img_front" src="${right.pics}">`;
    }

    for (let left of side.left) { 
        shoesImgLeft.innerHTML += `
        <img class="img_front" src="${left.pics}">`;
    }
  }
  
  for (let patch of shoe.patch) {
    if (patch.inner) {
      patch.inner.forEach((element,i) => {
        patchInner.innerHTML += `<img class="patch_img" onclick="attPatchOuter(${i})" src="${element.pic}">`;
       
      });
    } else if (patch.outer) {
      patch.outer.forEach((element,i) => {
        patchOuter.innerHTML += `<img class="patch_img" onclick="attPatchInner(${i})" src="${element.pic}">`;
        
      });
    }
  }
}

// Al change del select size salvo l'input in un oggetto carrello 
selectSize.addEventListener("change", (event) => {
  //creare una variabile che identifichi la scelta compiuta con event change
  var choice = selectSize.options[selectSize.selectedIndex].value;
  carrello["choice"] = choice; 
});

// Al click sul btn di aggiunta al carrello attivo la funzione Add to Cart
cartBtn.addEventListener("click", (event) => {
  addToCart(carrello, cartPop);
});

// Funzione per inserire le patches interne o esterne scelte con un click
function attPatchOuter(i){
  
  for (let shoe of shoes) {
    for (let patch of shoe.patch) {
      if (patch.inner) {
        var pinner = [patch.inner[i]];
        pinner.forEach((element) => {
          
          attachContOut.innerHTML = `
          <img class="attach" src="assets/img/scarpa-sinistra/left_outer_8051124195013_5.png" alt="">
          <img class="app_img_out" src="${element.pic}">`;
          var outerPatch = {outChooseName: element.name, outChooseImg: element.pic, outChoosePrice: element.price};
          carrello = {...carrello, ...outerPatch};
        });
      }
    }
  }
};

function attPatchInner(i){
  
  for (let shoe of shoes) {
    for (let patch of shoe.patch) {
     
       if (patch.outer) {
        var pouter = [patch.outer[i]]
        pouter.forEach((element) => {
          attachContInn.innerHTML = `
          <img class="attach" src="assets/img/scarpa-sinistra/left_inner_8051124195013_6.png" alt="">
          <img class="app_img_inn" src="${element.pic}">`;
          var innerPatch = {innChooseName: element.name, innChooseImg: element.pic, innChoosePrice: element.price};
          carrello = {...carrello, ...innerPatch};
          console.log(carrello);
        });
      }
    }
  }
};

/* ---- FUNCTIONS ----*/

function addToCart(model, popCart) {
  popCart.classList.remove("pop_hide");
  popCart.classList.add("pop_show");

    popCart.innerHTML = ` 
    <div class="title_cart">
      <h2>Model : ${model.shoeName}</h2>
      <h2>Price : ${model.shoePrice} €</h2>
      <h2>Size :${model.choice}</h2>
    </div>
    <div class="img_cart">
      <div class="out_cart">
        <h4>${model.outChooseName}</h4>
        <div class="attach_container_2">
        <img class="attach" src="assets/img/scarpa-sinistra/left_outer_8051124195013_5.png" alt="">
        <img class="app_img_out" src="${model.outChooseImg}">
        </div>
        <h4>Costo Patch ${model.outChoosePrice} €</h4>
      </div>
      <div class="inn_cart">
        <h4>${model.innChooseName}</h4>
        <div class="attach_container_1">
        <img class="attach" src="assets/img/scarpa-sinistra/left_inner_8051124195013_6.png" alt="">
        <img class="app_img_inn" src="${model.innChooseImg}">
        </div>
        <h4>Costo Patch ${model.innChoosePrice} €</h4>
      </div>
    </div>
    <h2>Totale ${totalFunc(model.shoePrice,model.outChoosePrice,model.innChoosePrice)} €</h2>
    <button id="modal_btn" onclick="closeModal(cartPop)">Close</button>`;
    
}

function closeModal(popCart) {
  popCart.classList.remove("pop_show");
  popCart.classList.add("pop_hide");
}

function totalFunc(a,b,c){
  var tot = "";
  return tot = a + b + c;
}