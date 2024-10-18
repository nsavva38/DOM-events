

//this grabs the FIRST h1, but it will show as a Node rather than the h1 text we were hoping for
const h1 = document.querySelector(`h1`);
console.log(h1);


//this grabs the FIRST li on the page
const li = document.querySelector(`li`);
console.log(li);





////////////////////////////////////////////////////////////////////////////////////////////////



//this grabs ALL the li's in the html, but it is in the form of a NodeList
//NodeLists CANNOT be modified
const LIs = document.querySelectorAll(`li`);
console.log(LIs);


//this grabs the li's in ul's only
//notice how we are using the CSS Selectors
const LIs = document.querySelectorAll(`ul > li`);
console.log(LIs);

//the [...LIs] ( called the 'spread operator' ) converts the LIs variable from a NodeList to an array
// Now the data can be modified if we decidie to store it in an array variable
console.log([...LIs]);
OR
const array = [...LIs];
console.log(array);





/////////////////////////////////////////////////////////////////////////////////////////////////




//grabs the ul with an id of 'favorits-numbers'
const favNumsUl = document.querySelector(`#favorite-numbers`);
console.log(favNumsUl);

// const leastFavNums = document.querySelectorAll(`.least-favorite`);
// console.log(leastFavNums);
// const leastFavNumsArr = [...leastFavNums];
// console.log(leastFavNumsArr);

// const favLIs = document.querySelectorAll(`.favorite`);
// console.log(favLIs);
// const favLIsArr = [...favLIs];
// console.log(favLIsArr);

// const h1 = document.querySelectorAll(`h1`);
// console.log(h1);


// const intervalId = setInterval(() => {
//   const ul = document.querySelector(`#favorite-numbers`);
  
//   const li = document.createElement('li');
//   li.innerText = Math.floor(Math.random() * 100);
//   li.classList.add(`favorite`);

//   ul.append(li);

//   const favoriteNumbers = document.querySelectorAll(`.favorite`);
//   console.log(`FAVORITE NUMBERS: `, favoriteNumbers);

//   if(favoriteNumbers.length >= 5) {
//     clearInterval(intervalId);
//   }
// }, 3000);


const form = document.querySelector(`form`);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // grab the users input
  const usersInput = document.querySelector(`input`);

  if(usersInput.value === ``) {
    // get out!
    return;
  };

  // create the li
  const li = document.createElement(`li`);
  // put the user input into the li
  li.innerText = usersInput.value;

  // grab the ul
  const ul = document.querySelector(`#favorite-numbers`);
  // add the li to the ul
  ul.append(li);

  usersInput.value = null;
})
