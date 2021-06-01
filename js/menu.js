const menu = document.querySelector('.menu');
const enter = document.querySelector('.menu-navegacion');

//console.log(enter)
//console.log(menu)

menu.addEventListener('click', ()=>{
    enter.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(enter.classList.contains('spread') && e.target != enter && e.target != menu ){

            enter.classList.toggle("spread")

    }
})

