const btn = document.getElementById('hamburger')
const btn1 = document.getElementById('hamburger-menu')
const btn2 = document.getElementById('header')


btn2.addEventListener('click', ()=>{
    btn.classList.toggle('open')
    btn1.classList.toggle('menu')
})
