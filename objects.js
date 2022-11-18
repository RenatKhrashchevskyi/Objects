//We can write object key with quotes or without

let cat = {
    'legs': 3,
    'name': 'Alise',
    'color': 'White'
};

let dog = {
    name: 'Bob',
    bark: 'Gav-Gav',
    color: 'Grey',
    age: 3
};

console.log(Object.keys(dog));
console.log(Object.keys(dog));


//add elements into object

let horse = {};
horse['legs'] = 4;
horse['name'] = 'Jossi';
horse['color'] = 'black';
console.log(horse);


// other way to add keys
let mouse = {};
mouse.legs = 4;
mouse.age = 1;
mouse.color = 'gray';
mouse.name = 'Jerry';

console.log(mouse);


//array of object

let dinosaurs = [
    { name: 'Тираннозавр рекс', period: 'Верхнемеловой' },
    { name: 'Стегозавр', period: 'Верхнеюрский' },
    { name: 'Платеозавр', period: 'Триасовый' }
];

console.log(dinosaurs[1]);
console.log(dinosaurs[1].name);

//Or
console.log(dinosaurs[1]['name']);


//Array of friends

let anna = {name: 'Anna', age: 18, luckyNumbers: [3, 5, 88]};
let dave = {name: 'Dave', age: 19, luckyNumbers: [1, 3, 44]};
let kate = {name: 'Kate', age: 20, luckyNumbers: [2, 7, 23]};

//doing array of friends
let friends = [anna, dave, kate];

console.log(friends[1]);
console.log(friends[0].age);
console.log(friends[1].name);



/*
Our task
==============
*/
//Debt accounting

let owedMoney = {};
owedMoney.Jimm = 5;
owedMoney.Anna = 4;
owedMoney.Erik = 5;

owedMoney.Anna += 2;

console.log(owedMoney.Anna);



//Movies list

let movies = {
    'Find Nemo': {
        releaseDate: 2003,
        duration: 100,
        actors: ['Albert Broks', 'Elen Dedjeners'],
        format: 'DVD'
    },
    'Star Wars: Episod VI': {
        releaseDate: 1983,
        duration: 134,
        actors: ['Mark Hemil', 'Harison Ford', 'Kerry Fisher'],
        format: 'DVD'
    },
    'Harry Potter and the goblet of fire': {
        releaseDate: 2005,
        duration: 157,
        actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'], 
        format: 'Blu-ray'
    }
};
let starWarsVI = movies['Star Wars: Episod VI'];

console.log(starWarsVI.releaseDate);

//Add  new movie into movies

let cars = {
    releaseDate: 2006,
        duration: 117,
        actors: ['Оуэн Уилсон', 'Бонни Хант', 'Пол Ньюман'],
        format: 'Blu-ray'
    
};

movies['Cars'] = cars;

//console.log(movies);

//Or
console.log(Object.keys(movies));



/*Homework
=====================
 */


//use one line get numbers 123
let myCrazyObject = {
    'name': 'Crazy object',
    'some array': [7, 9, { purpose: 'confusion', number: 123 }, 3.3],
    'random animal': 'banana shark'
    };
  console.log(myCrazyObject["some array"][2].number);



  //Scores counter
  
  let scores = {};
  scores.Andrew = 3;
  scores.Ruslan = 5;
  scores.Ivan = 7;
  scores.Arhtur = 6;
  
  console.log(scores);

  scores.Andrew += 2;
  scores.Ruslan += 1;
  scores.Ivan -= 2;
  scores.Arhtur -= 3;

  console.log(scores);


  //other way 
  let scores1 = {
  Andrew: 3,
  Ruslan: 5,
  Ivan: 7,
  Arhtur:6
};

  console.log(scores);

  scores1.Andrew += 2;
  scores1.Ruslan += 1;
  scores1.Ivan -= 2;
  scores1.Arhtur -= 3;

  console.log(scores1);
