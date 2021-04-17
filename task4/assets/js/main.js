const linkMenu = ["Home", "Products", "Cart"];
var shoes = [
  {
    name: "Smith",
    price: 180,
    size: [39, 40, 41],
    desc: "Sneakers della linea Portofino",
    patch: [
      {
        inner: [
          {
            name: "wmelon",
            pic: "assets/img/patch/AACCS202387881-1.png",
            price: 50,
          },
          {
            name: "straw",
            pic: "assets/img/patch/AACCS00204380311-1.png",
            price: 50,
          },
          {
            name: "heart",
            pic: "assets/img/patch/ADECO02796B80303-1.png",
            price: 50,
          },
        ],
      },
      {
        outer: [
          {
            name: "wmelon",
            pic: "assets/img/patch/AACCS202387881.png",
            price: 50,
          },
          {
            name: "straw",
            pic: "assets/img/patch/AACCS00204380311.png",
            price: 50,
          },
          {
            name: "heart",
            pic: "assets/img/patch/ADECO02796B80303.png",
            price: 50,
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
            side: "inner",
            pics: "assets/img/scarpa-sinistra/left_inner_8051124195013_6.png",
          },
          {
            side: "outer",
            pics: "assets/img/scarpa-sinistra/left_outer_8051124195013_5.png",
          },

          {
            side: "back",
            pics: "assets/img/scarpa-sinistra/left_back_8051124195013_7.png",
          },
        ],
        right: [
          {
            side: "front",
            pics: "assets/img/scarpa-destra/Sneakers_right_shoe_front.png",
          },
          {
            side: "inner",
            pics: "assets/img/scarpa-destra/right_inner_8051124195013_1.png",
          },
          {
            side: "outer",
            pics: "assets/img/scarpa-destra/right_outer_8051124195013_2.png",
          },
          {
            side: "back",
            pics: "assets/img/scarpa-destra/right_back_8051124195013_3.png",
          },
        ],
      },
    ],
  },
];

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

for (let link of linkMenu) {
  menuHeader.innerHTML += `<li><a href="#">${link}</a></li>`;
  menuFooter.innerHTML += `<li><a href="#">${link}</a></li>`;
}

for (let shoe of shoes) {
  shoesDiv.innerHTML += `<h2>${shoe.name}</h2>
    <h3>${shoe.price} €</h3>
    <h3>${shoe.desc}</h3>`;
  selectSize.innerHTML = `
    <option disabled selected value> - select a size - </option>`;

  for (let size of shoe.size) {
    selectSize.innerHTML += `
    <option value="${size}">${size}</option>`;
  }

  

  for (let side of shoe.image) {
    for (let right of side.right) {
      if (right.side == "front") {
        shoesImgRight.innerHTML += `
        <img class="img_front'" src="${right.pics}">`;
      } else {
        shoesImgRight.innerHTML += `<div class="popi">
        <img class="shoe_img" src="${right.pics}">
        </div>`;
      }
    }

    for (let left of side.left) {
      if (left.side == "front") {
        shoesImgLeft.innerHTML += `
        <img class="img_front'" src="${left.pics}">`;
      } else {
        shoesImgLeft.innerHTML += `<div class="popi">
        <img class="shoe_img" src="${left.pics}">
        </div>`;
      }
    }
  }
  
  for (let patch of shoe.patch) {
    if (patch.inner) {
      patch.inner.forEach((element,i) => {
        // console.log(element);
        patchInner.innerHTML += `<img class="patch_img" onclick="attPatch(${i})" src="${element.pic}">`;
       
      });
    } else if (patch.outer) {
      patch.outer.forEach((element,i) => {
        patchOuter.innerHTML += `<img class="patch_img" onclick="attPatch(${i})" src="${element.pic}">`;
        
      });
    }
  }
}


selectSize.addEventListener("change", (event) => {
  //creare una variabile che identifichi la scelta compiuta con event change
  var choice = selectSize.options[selectSize.selectedIndex].value;
  shoes[0]["choice"] = choice;
});

cartBtn.addEventListener("click", (event) => {
  addToCart(shoes, cartPop);
});

function attPatch(i){
  
  for (let shoe of shoes) {
    for (let patch of shoe.patch) {
      if (patch.inner) {
        console.log(patch.inner[i]);
        var pinner = [patch.inner[i]];
        pinner.forEach((element) => {
          
          shoesImgRight.innerHTML += `
          <img class="app_img_hide" src="${element.pic}">`;
        });
      } else if (patch.outer) {
        var pouter = [patch.outer[i]]
        pouter.forEach((element) => {
          // console.log(element);
          shoesImgLeft.innerHTML.innerHTML = `
          <img class="app_img_hide" src="${element.pic}">`;
        });
      }
    }
    }
};

/* ---- FUNCTIONS ----*/

function addToCart(model, popCart) {
  popCart.classList.remove("pop_hide");
  popCart.classList.add("pop_show");

  model.forEach((element) => {
    popCart.innerHTML = `
    <h4>Model : ${element.name}</h4>
    <h4>Price : ${element.price} €</h4>
    <h4>Size :${element.choice}</h4>
    <button id="modal_btn" onclick="closeModal(cartPop)">Close</button>
    `;
  });
}

function closeModal(popCart) {
  popCart.classList.remove("pop_show");
  popCart.classList.add("pop_hide");
}
