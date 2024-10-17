# DOM (Document Object Model)

- allows programming languages to interact with the page
- each item on the DOM is known as a node

## Data flow

- initial load of the HTML
- user interaction
- change the data based on the user interaction
- use the updated data to change the UI

## DOM Selectors

- ways to grab nodes (elements) from the DOM
- document.querySelector('CSS Selector)
  - grab the firs element that matches the CSS Selector
  - single element
- document.querySelectorAll('CSS Selector')
  - grabs all of the elements that matcht eh CSS Selector
  - array-like object (not exactly the same as a JS array)

## DOM Manipulation

- document.createElement('element name');
  - creates a new element
  - DOES NOT put the element on the page
- append
  - puts an element onto the page inside of another element

## Making a new array

- [...originalArrayName]
- spread operator

## Set Interval and Clear Interval

- setInterval -> repeatedly run some code based on a passed in timer
- clearInterval -> used to stop a setInterval

## Events

- a signal that something has occurred in the browser
  - mouse click
  - button click
  - form submission
  - timer
  - page being loaded

## Event Listeners

- addEventListener('event', (event) => { code })
- attaches an event to an event handler

## Event Handler

- a function that runs when a specified event is triggered

## Form Submission

- by default will refresh the page
- event.preventDefault() stops the page from refreshing
