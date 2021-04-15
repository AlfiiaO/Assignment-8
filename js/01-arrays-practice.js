//STEP 1
// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul"];
// console.log(movies[2]);
//STEP 2
// let movies = new Array(5);
// movies[0] ="The Call of the Wild";
// movies[1] ="Cast Away";
// movies[2] ="The Intouchables";
// movies[3] ="Pursuit of Happiness";
// movies[4] ="Soul";
// console.log(movies[0]);
//STEP 3
// let movies = new Array(5);
// movies[0] ="The Call of the Wild";
// movies[1] ="Cast Away";
// movies[2] ="The Intouchables";
// movies[3] ="The Shawshank Redemption";
// movies[4] ="Pursuit of Happiness";
// movies[5] ="Soul";
// console.log(movies.length);
//STEP 4
// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul"];
// delete movies[0];
// console.log(movies);
//STEP 5
// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman"];
// Array.prototype.moviesList =() => {
// };

// for (let list in movies) {
//     if (movies.hasOwnProperty(list)) {
//         console.log(movies[list]);
//     }
    
// }
//STEP 6
// Array.prototype.movies = () => {};
// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman"];
// for (let list of movies) {
//     console.log(list);
// }
//STEP 7
// Array.prototype.movies = () => {};
// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman"];
// for (let list of movies) {
//      console.log(list);
// }
// console.log(movies.sort());
//STEP 8
Array.prototype.movies = () => {};
let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman"];
movies.join("<br>");
let leastFavMovies = ["The Invisible Man", "Blumhouse's Fantasy Island", "Downhill"];
  
    leastFavMovies.join("<br>");
     console.log("Movies I like:" + "\n" + movies  + "\n"+ "Movies I regret watching:" + "\n" + leastFavMovies);
     let newMoviesListArray = movies.concat(leastFavMovies);


//STEP 9
// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman"];
// let leastFavMovies = ["The Invisible Man", "Blumhouse's Fantasy Island", "Downhill"];
// let newMoviesListArray = movies.concat(leastFavMovies);
// console.log(newMoviesListArray.reverse());
// //STEP 10
// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman"];
// let leastFavMovies = ["The Invisible Man", "Blumhouse's Fantasy Island", "Downhill"];
// console.log(movies.pop());
// console.log(leastFavMovies.pop());
//STEP 11
// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman"];
// let leastFavMovies = ["The Invisible Man", "Blumhouse's Fantasy Island", "Downhill"];
// console.log(movies.shift());
// console.log(leastFavMovies.shift());
//STEP 12

// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman", "The Invisible Man", "Blumhouse's Fantasy Island", "Downhill"];
// movies = movies.splice(7,10);
// console.log(movies);

// let movies = ["The Call of the Wild", "Cast Away", "The Intouchables", "Pursuit of Happiness", "Soul", "The Shawshank Redemption", "Wonder Woman", "The Invisible Man", "Blumhouse's Fantasy Island", "Downhill"];
// movies = movies.slice(1,7);
// console.log(movies);
//STEP 13
// let movies = ["The Call of the Wild", 1,
//             "Cast Away", 4,,
//             "The Intouchables", 5,
//               "Pursuit of Happiness", 3,
//               "Soul", 2
    
// ]

// let moviesRanking = movies.filter(item => { 
//     return typeof item === 'string';  
// })
// console.log(moviesRanking);

//STEP 14
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
employees.join("<br>"); 
function showEmployee() {
    for (i of employees)
    console.log("Employees:" + "\n" + i);
}
showEmployee(employees);

//STEP 15
function filterValues(array) {
    array = array.filter(trueFalse);
    return array;
  }
  
  function trueFalse(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
  
  console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//STEP 16
function random(array) {
    let arrayIndex = Math.floor(Math.random() * array.length);
    let item = array[arrayIndex];

    return item;
}
let array = [10, 20, 30, 40, 8, 50, 1, 9, 11];
let total = random(array);
console.log(total);
//STEP 17
let numbers = [3,10,52,88,28,21,34, 56,100, 288],
    largest = numbers.sort((x,y)=>x-y).reverse()[0];
    console.log(largest);