data = [{
    id: 1,                              // id
    numOfRooms: 1,                      // Кол-во комнат
    address: "Салавата Юлаева, 17а",    // Адрес
    district: "Калининский район",      // Район
    square: 34,                         // Площадь n^2
    floor: 7,                           // Этаж
    numOfFloors: 10,                    // Всего этажей в доме
    price: 9500,                        // Цена
    photo1: "content/1_1.jpg",
    photo2: "content/1_2.jpg",
    photo3: "content/1_3.jpg"         
},
{
    id: 2,
    numOfRooms: 2,
    address: "Свободы, 104а",
    district: "Советский район",
    square: 60,
    floor: 2,
    numOfFloors: 5,
    price: 9000,
    photo1: "content/2_1.jpg",
    photo2: "content/2_2.jpg",
    photo3: "content/2_3.jpg",
    photo4: "content/2_4.jpg"
},
{
    id: 3,
    numOfRooms: 1,
    address: "Ереванская, 14",
    district: "Ленинский район",
    square: 40,
    floor: 3,
    numOfFloors: 9,
    price: 9000,
    photo1: "content/3_1.jpg",
    photo2: "content/3_2.jpg",
    photo3: "content/3_3.jpg"
},
{
    id: 4,
    numOfRooms: 1,
    address: "Дарвина, 107",
    district: "Советский район",
    square: 31,
    floor: 5,
    numOfFloors: 5,
    price: 9000,
    photo1: "content/4_1.jpg",
    photo2: "content/4_2.jpg"
},
{
    id: 5,
    numOfRooms: 1,
    address: "Ереванская, 14",
    district: "Ленинский район",
    square: 40,
    floor: 3,
    numOfFloors: 9,
    price: 9000,
    photo1: "content/5_1.jpg",
    photo2: "content/5_2.jpg",
    photo3: "content/5_3.jpg"
},
{
    id: 6,
    numOfRooms: 1,
    address: "Молодогвардейцев, 21",
    district: "Курчатовский район",
    square: 40,
    floor: 8,
    numOfFloors: 10,
    price: 10000,
    photo1: "content/6_1.jpg",
    photo2: "content/6_2.jpg",
    photo3: "content/6_3.jpeg",
    photo3: "content/6_4.jpg"
},
{
    id: 7,
    numOfRooms: 1,
    address: "Двинская, 3",
    district: "Калининский район",
    square: 49,
    floor: 10,
    numOfFloors: 10,
    price: 11500,
    photo1: "content/7_1.jpg",
    photo2: "content/7_2.jpg"
},
{
    id: 8,
    numOfRooms: 1,
    address: "Комарова, 112",
    district: "Тракторозаводский район",
    square: 34,
    floor: 6,
    numOfFloors: 9,
    price: 8000,
    photo1: "content/8_1.jpg",
    photo2: "content/8_2.jpg",
    photo3: "content/8_3.jpg"
},
{
    id: 9,
    numOfRooms: 1,
    address: "Котина, 21",
    district: "Тракторозаводский район",
    square: 34,
    floor: 4,
    numOfFloors: 10,
    price: 8000,
    photo1: "content/9_1.jpg",
    photo2: "content/9_2.jpg",
    photo3: "content/9_3.jpg",
    photo4: "content/9_4.jpg",
    photo5: "content/9_5.jpg"
},
{
    id: 10,
    numOfRooms: 2,
    address: "Ленина проспект, 28",
    district: "Центральный район",
    square: 60,
    floor: 4,
    numOfFloors: 10,
    price: 17000,
    photo1: "content/10_1.jpg",
    photo2: "content/10_2.jpg",
    photo3: "content/10_3.jpg"
},
{
    id: 11,
    numOfRooms: 3,
    address: "Петра Сумина, 2",
    district: "Центральный район",
    square: 84,
    floor: 15,
    numOfFloors: 19,
    price: 15000,
    photo1: "content/11_1.jpg",
    photo2: "content/11_2.jpg",
    photo3: "content/11_3.jpg",
    photo4: "content/11_4.jpg"
},
{
    id: 12,
    numOfRooms: 2,
    address: "Комарова, 114а",
    district: "Тракторозаводский район",
    square: 50,
    floor: 4,
    numOfFloors: 10,
    price: 8000,
    photo1: "content/12_1.jpg",
    photo2: "content/12_2.jpg",
    photo3: "content/12_3.jpg"
},
{
    id: 13,
    numOfRooms: 2,
    address: "Свободы, 92а",
    district: "Центральный район",
    square: 54,
    floor: 2,
    numOfFloors: 5,
    price: 12000,
    photo1: "content/13_1.jpg",
    photo2: "content/13_2.jpg",
    photo3: "content/13_3.jpg"
},
{
    id: 14,
    numOfRooms: 1,
    address: "Академика Сахарова, 22 ",
    district: "Центральный район",
    square: 43,
    floor: 7,
    numOfFloors: 10,
    price: 14000,
    photo1:"content/14_1.jpg",
    photo2:"content/14_2.jpg"
},
{
    id: 15,
    numOfRooms: 1,
    address: "Академика Сахарова, 30",
    district: "Центральный район",
    square: 43,
    floor: 3,
    numOfFloors: 10,
    price: 13000,
    photo1: "content/15_1.jpg",
    photo2: "content/15_2.jpg",
    photo3: "content/15_3.jpg",
    photo4: "content/15_4.jpg"
}];

let k = data.length;

let d = document;
let vst = d.getElementById("main-img");
for (var i = 0; i < k; i++) {
    vst.innerHTML += `<div class="card col-12 col-md-5 col-lg-3 m-3" style="width: 18rem;">
    <div id="carouselExampleFade" class="carousel carousel-inner slide carousel-fade" data-ride="carousel">
        <div class="carousel-inne py-3">
          <div class="carousel-item active card-img-top">
            <img src="${data[i].photo1}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${data[i].photo2}" class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Предыдущий</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Следующий</span>
        </a>
      </div>
    <div class="card-body">
      <h5 class="card-title">${data[i].numOfRooms}-к. квартира, ${data[i].square}м<sup>2</sup>, ${data[i].floor}/${data[i].numOfFloors} эт.</h5>
      <p class="card-text">Цена <b>${data[i].price}</b> руб</p>
      <p class="card-text">${data[i].district}, ${data[i].address}</p>
    </div>
  </div>`

};
