

//this grabs the h1, but it will show as a Node rather than the h1 text we were hoping for
const h1 = document.querySelector(`h1`);
console.log(h1);


//this grabs the FIRST li on the page
const li = document.querySelector(`li`);
console.log(li);

////////////////////////////////////////////////////////////////////////////////////////////////




// const LIs = document.querySelectorAll(`li`);
// console.log(LIs)
// console.log([...LIs]);

// const favNumsUl = document.querySelector(`#favorite-numbers`);
// console.log(favNumsUl);

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
