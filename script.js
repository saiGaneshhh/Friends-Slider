var slide = document.querySelectorAll('.slide')
var but1 = document.querySelector('.but1')
var but2 = document.querySelector('.but2')

slide.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})

let counter  = 1;

but1.addEventListener('click',()=>{
    counter++
    carousel()
})

but2.addEventListener('click',()=>{
    counter--
    carousel()
})
function carousel(){
    if(counter===slide.length){
        counter = 0
    }
    if(counter<0){
        counter = slide.length-1
    }
    slide.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}


