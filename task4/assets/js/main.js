const linkMenu = ["Home", "Products", "Cart"];
var shoes = [
  {
    name: "Smith",
    price: 80,
    size: [39, 40, 41],
    desc: "Sneakers della linea Portofino",
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

for (let link of linkMenu) {
  menuHeader.innerHTML += `<li><a href="#">${link}</a></li>`;
  menuFooter.innerHTML += `<li><a href="#">${link}</a></li>`;
}

for (let shoe of shoes) {
  shoesDiv.innerHTML += `<h2>${shoe.name}</h2>
    <h3>${shoe.price} €</h3>
    <h3>${shoe.desc}</h3>`;
  for (let size of shoe.size) {
    selectSize.innerHTML += `<option value="${size}">${size}</option>`;
  }
  for (let side of shoe.image) {
    for (let right of side.right) {
      if (right.side == "front") {
        shoesImgRight.innerHTML += `
        <img class="img_front'" src="${right.pics}">`;
      } else {
        shoesImgRight.innerHTML += `
        <img class="shoe_img" src="${right.pics}">`;
      }
    }
    for (let left of side.left) {
      if (left.side == "front") {
        shoesImgLeft.innerHTML += `
        <img class="img_front'" src="${left.pics}">`;
      } else {
        shoesImgLeft.innerHTML += `
        <img class="shoe_img" src="${left.pics}">`;
      }
    }
  }
}