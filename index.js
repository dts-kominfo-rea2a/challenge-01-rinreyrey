// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
let colortest = new Set();
colortest.add('Yellow');
colortest.add('Pink');
colortest.add('White');
colortest.add('Purple');

let color2test = new Set();
color2test.add('Blue');
color2test.add('Black');
color2test.add('Grey');

let favRestauranttest = new Set();
favRestauranttest.add('Bento');
favRestauranttest.add('Sushi');
favRestauranttest.add('Pancake');
favRestauranttest.add('Eggy');
favRestauranttest.add('Tempura');
favRestauranttest.add('Bento');
favRestauranttest.add('Eggy');
favRestauranttest.add('Padang');
favRestauranttest.add('Tteok');
favRestauranttest.add('Sushi');
favRestauranttest.add('Sushi');

let favRestaurant2test = new Set();
favRestaurant2test.add('Tempura');
favRestaurant2test.add('Bento');
favRestaurant2test.add('Sushi');
favRestaurant2test.add('Pancake');
favRestaurant2test.add('Padang');
favRestaurant2test.add('Katsu');
favRestaurant2test.add('Geprek');
favRestaurant2test.add('Pancake');
favRestaurant2test.add('Eggy');

const color = Array.from(colortest);
const color2 = Array.from(color2test);
const favRestaurant = Array.from(favRestauranttest);
const favRestaurant2 = Array.from(favRestaurant2test);


const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    'favoriteColor': color,
    'isHavePet': true,
    'education': [
        { name: 'SD 01', city: 'Jakarta', graduate: 2016 },
        { name: 'SMP 02', city: 'Jakarta', graduate: 2019 },
        { name: 'SMA 03', city: 'Tangerang' }
    ],
    'favoriteRestaurant': favRestaurant
};
const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    'favoriteColor': color2,
    'isHavePet': false,
    'education': [
        { name: 'SD 02', city: 'Jakarta', graduate: 2010 },
        { name: 'SMP 03', city: 'Bogor', graduate: 2013 },
        { name: 'SMA 01', city: 'Surabaya', graduate: 2016 },
        { name: 'Universitas Maju', city: 'Tangerang' }
    ],
    'favoriteRestaurant': favRestaurant2
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};