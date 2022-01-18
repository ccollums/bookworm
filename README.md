# BookWorm

###### For all the book lovers and goal setters out there...

## Table of Contents
  - [Introduction](#Introduction)  
  - [Technologies](#Technologies)
  - [Deployment](#Deployment)
  - [Project Spec](#Project-Spec)
  - [Site Overview](#Site-Overview)
  - [Wins and Challenges](#Wins-And-Challenges)
  - [Future Improvements](#Future-Improvements)
  - [Author](#Author)

## Introduction 

BookWorm is a web application created for a user to view the current New York Time's fiction hardcover best seller's list and have the ability to add books to a must read list, create a reading goal, and add to their goal/completed books. This application was part of a 5 day project at the Turing School of Software and Design to demonstrate my ability with React, React Router and Cypress testing. 

The inspiration behind BookWorm came from a love for reading along with a love for setting goals. Sites like GoodReads can feel overwhelming, with tons of information and a cluttered design. BookWorm has a very minimalist design in order to easily see the current top books, to make it easy to choose your next read. Goal setters, like myself, love to see their goal right in front of their face, BookWorm makes it easy to see your goal and how close you are to achieving it. 

## Technologies
  - ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  - ![React Router](https://img.shields.io/badge/-React%20Router-211f20?logo=react-router&logoColor=61DAFB&style=for-the-badge)
  - ![JSX](https://img.shields.io/badge/-jsx-302f2f?logo=javascript&logoColor=9428cb&style=for-the-badge)
  - ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  - ![Cypress](https://img.shields.io/badge/-cypress-black?logo=cypress&logoColor=white&style=for-the-badge)
  - ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
  - ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  - ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  - ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
  - ![VSCode](https://img.shields.io/badge/-VSCode-2C2C32?logo=visual-studio-code&logoColor=007ACC&style=for-the-badge)

## Deployment

[Visit Site Here](https://ccollums.github.io/bookworm/)

**To view in browser:**
1. Visit the deployment link above 

**To run locally:**
1. Clone this repo down to your local machine: [here](https://github.com/ccollums/bookworm)
2. On the command line, type: `npm install`
3. On the command line, type: `npm start`
4. Visit `http://localhost:3000/#/`

   
## Project Spec & Rubric
   - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)
 
## Site Overview 

Scroll down for screenshots:
- [Landing Page](#Landing-Page)
- [Add Goal](#Add-Goal)
- [Must Reads Page](#Must-Reads-Page)
- [About Page](#About-Page)
- [Error Handling](#Error-Handling)
- [Responsive Design](#Responsive-Design)

### Landing Page 


### Add Goal 


### Must Reads Page

### About Page 


### Error Handling 


### Responsive Design


## Wins And Challenges 

### Wins

- The overall design of the application was a huge win for me. Having the grid of books on the right side, with a static left side was something that I envisioned from the beginning and I was very happy to see it come to life the way that I anticipated. 
- Making the transition from class/functional components to only using Hooks throughout the application. 

### Challenges 

- Using local storage with React and hooks raised some strange issues that I had to work through. For example, if local storage was not cleared and only state was updated to "clear" the data, the application was not working properly on page refresh. Once I changed this functionality to also clear local storage and not simply update state it solved the problem! 
- I wanted the book container to have an overflow: scroll so that the whole page was visible at all times. This works great when the browser is full size, but once the application is opened on a phone the responsive design moves the book container to the bottom of the page. The overflow: scroll causes some confusing scrolling on a mobile device. This is something I struggled with and even though it is functional, it is something I would like to improve in the future. 

  
## Future Improvements
Now that my MVP functionality has been built out, there is still so much I would love to add in the future! Future extensions may include:

- Adding a hover effect to the book covers that creates a card flip with the book description on the opposite side. This will make it easier for a user to see what a book is all about before adding to their must reads page. 
- Adding a link on each book to take the user to amazon to purchase the book of their choosing. 
- Adding the ability to see different best seller's lists from different dates or see different types of lists other than only the hard cover list. 

## Author

<table>
  <tr>
    <td> Carly Collums <a href="https://github.com/ccollums">GH</td>
  </tr>
  <td><img src="https://avatars.githubusercontent.com/u/86894344?v=4" alt="Carly Collums"
 width="150" height="auto" /></td>
</table>
  
