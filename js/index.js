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

window.addEventListener('beforeunload', (event) => {
    return ''
})

const card = document.querySelectorAll('p');

card[0].addEventListener('dblclick', (event) => {
  event.target.style.transform(scale(1.3));
});