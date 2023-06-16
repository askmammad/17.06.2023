let brand_select = document.getElementById("brand_select");
let model_select = document.getElementById("model_select");
let photo = document.getElementById("image_container");
let car_brands = ["Nissan", "Tesla", "Mersedes", "Toyota"];
let car_models = [
  ["Tiida", "Sunny", "Maxima"],
  ["Model-S", "Model-Y", "Model-X"],
  ["S-class", "E-class", "C-class", "GLS"],
  ["Prius", "Corolla", "Camry", "Land Cruiser"],
];

function brandFullFill() {
  let data = `<option value="" disabled selected>Choose car brand</option>`;
  for (let i = 0; i < car_brands.length; i++) {
    data += `<option value="${i}">${car_brands[i]}</option>`;
  }
  brand_select.innerHTML = data;
}
brandFullFill();

function modelSelect() {
  let valueOfBrand = brand_select.value;
  let data = `<option value="" disabled selected>Choose car model</option>`;
  for (let i = 0; i < car_models[valueOfBrand].length; i++) {
    data += `<option value="${i}">${car_models[valueOfBrand][i]}</option>`;
  }
  model_select.innerHTML = data;
}
function photoPrint() {
  let textOfBrand = brand_select.options[brand_select.selectedIndex].text;
  let textOfModel = model_select.options[model_select.selectedIndex].text;
  let data = `<img src="/Car_select/photos/${textOfBrand}/${textOfModel}.jpg" alt="${textOfBrand}_${textOfModel}" width="500" height="500">`;
  photo.innerHTML = data;
}
