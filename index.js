// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
let color = new Set();
color.add('Yellow');
color.add('Pink');
color.add('White');
color.add('Purple');

let color2 = new Set();
color2.add('Blue');
color2.add('Black');
color2.add('Grey');

let favRestaurant = new Set();
favRestaurant.add('Bento');
favRestaurant.add('Sushi');
favRestaurant.add('Pancake');
favRestaurant.add('Eggy');
favRestaurant.add('Tempura');
favRestaurant.add('Bento');
favRestaurant.add('Eggy');
favRestaurant.add('Padang');
favRestaurant.add('Tteok');
favRestaurant.add('Sushi');
favRestaurant.add('Sushi');

let favRestaurant2 = new Set();
favRestaurant2.add('Tempura');
favRestaurant2.add('Bento');
favRestaurant2.add('Sushi');
favRestaurant2.add('Pancake');
favRestaurant2.add('Padang');
favRestaurant2.add('Katsu');
favRestaurant2.add('Geprek');
favRestaurant2.add('Pancake');
favRestaurant2.add('Eggy');


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