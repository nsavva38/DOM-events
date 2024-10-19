/////////////////////////////////////////////////////////////////////////////////////////////////

//this grabs the FIRST h1 as a single element
const h1 = document.querySelector(`h1`);
console.log(h1);

//grabs ALL the h1's and put them in a NodeList
const h1 = document.querySelectorAll(`h1`);
console.log(h1);


//this grabs the FIRST li on the page
const li = document.querySelector(`li`);
console.log(li);





////////////////////////////////////////////////////////////////////////////////////////////////



//this grabs ALL the li's in the html, but it is in the form of a NodeList
//NodeLists CANNOT be modified
const LIs = document.querySelectorAll(`li`);
console.log(LIs);


//this grabs the li's in ul's only and puts them in a NodeList
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




//grabs the ul with an id of 'favorite-numbers'
const favNumsUl = document.querySelector(`#favorite-numbers`);
console.log(favNumsUl);


//grabs ALL the li's with class 'least-favorite' and puts them in a NodeList
const leastFavNums = document.querySelectorAll(`.least-favorite`);
console.log(leastFavNums);

//converts the leastFavNums NodeList into an array
const leastFavNumsArr = [...leastFavNums];
console.log(leastFavNumsArr);


//grabs ALL the li's with the class 'favorite'
const favLIs = document.querySelectorAll(`.favorite`);
console.log(favLIs);

//converts the favLIs NodeList into an array
const favLIsArr = [...favLIs];
console.log(favLIsArr);



///////////////////////////////////////////////////////////////////////////////////////


//this creates a new element of the given CSS Selector
//this DOES NOT automatically put it on the page
const li = document.createElement(`li`);
console.log(li);


//this sets the inner text of the li element we just created
li.innerText = 28;
console.log(li);



//grabs the ul with an id of 'favorite-numbers'
const ul = document.querySelector(`#favorite-numbers`);
//this creates a new element of the given CSS Selector
//this DOES NOT automatically put it on the page
const li = document.createElement(`li`);
//this sets the inner text of the li element we just created
li.innerText = 28;
//appends the newly created li to the ul 'favorite-numbers' and puts it on the page
ul.append(li);




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
