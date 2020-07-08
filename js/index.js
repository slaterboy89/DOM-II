// Your code goes here
const newh4Color = document.querySelectorAll('h2, h4')
console.log(newh4Color)
newh4Color[0].addEventListener('mouseover', (event) => {
    event.target.style.color = 'orange'
})
newh4Color[0].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
})
newh4Color[1].addEventListener('mouseover', (event) => {
    event.target.style.color = 'aqua'
})
newh4Color[1].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
})
newh4Color[2].addEventListener('mouseover', (event) => {
    event.target.style.color = 'green'
})
newh4Color[2].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
})
newh4Color[3].addEventListener('mouseover', (event) => {
    event.target.style.color = 'purple'
})
newh4Color[3].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
})

const newNav = document.querySelectorAll('nav a')
console.log(newNav)
newNav[0].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'orange'
})
newNav[0].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
})
newNav[0].addEventListener('click', (event) => {
    event.target.style.color = 'grey'
})
newNav[1].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'orange'
})
newNav[1].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
})
newNav[1].addEventListener('click', (event) => {
    event.target.style.color = 'grey'
})
newNav[2].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'orange'
})
newNav[2].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
})
newNav[2].addEventListener('click', (event) => {
    event.target.style.color = 'grey'
})
newNav[3].addEventListener('mouseenter', (event) => {
    event.target.style.color = 'orange'
})
newNav[3].addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black'
})
newNav[3].addEventListener('click', (event) => {
    event.target.style.color = 'grey'
})

const newBack = document.querySelector('html')
newBack.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'grey'
})

const alertOnScroll = document.querySelector('html')
alertOnScroll.addEventListener('wheel', (event) => {
    alert('Help Me!!!!!!')
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        alert('Are you sure you want to leave?')
    }
})

window.addEventListener('load', (event) => {
    alert('page is fully loaded');
  });

  window.addEventListener('beforeunload', (event) => {
    alert("Did you save your stuff?")
})

window.onbeforeunload = function() {
    return "Are you sure?";
 };