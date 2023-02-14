document.getElementById('text-bold').addEventListener('click',function(e){
    // document.getElementById('main-text').style.fontWeight = 'bold'
    document.getElementById('main-text').classList.toggle('font-bold')
    buttonColor(e)
})
document.getElementById('text-italic').addEventListener('click',function(e){
    document.getElementById('main-text').classList.toggle('italic')
    buttonColor(e)
})
document.getElementById('text-underline').addEventListener('click',function(e){
    document.getElementById('main-text').classList.toggle('underline')
    buttonColor(e)
})


function buttonColor(e){
    e.target.classList.toggle('bg-purple-600')
    e.target.classList.toggle('text-white')
}


function buttonColor2(e){
    // console.log(e.target.parentNode.parentNode)
        // console.log(e.target.parentNode.children[1])
       for (const element of e.target.parentNode.children) {
        if(element.classList.contains('bg-purple-600'))
        element.classList.remove('bg-purple-600')
        element.classList.remove('text-white')
       }
       e.target.classList.add('bg-purple-600')
       e.target.classList.add('text-white')
 }

// how to minify event 
// run  click event 
// like this  run(id , func2())

// let func1 = function(){
// document.getElementById('main-text').style.fontWeight = 'bold'
// }

// run('text-bold',func1)

// function run(id,func){
// document.getElementById(id).addEventListener('click',func)
// }



document.getElementById('align-left').addEventListener('click',function(e){
 document.getElementById('main-text').style.textAlign = 'left'
 buttonColor2(e)
    
})
document.getElementById('align-center').addEventListener('click',function(e){
  document.getElementById('main-text').style.textAlign = 'center'
  buttonColor2(e)
})
document.getElementById('align-right').addEventListener('click',function(e){
document.getElementById('main-text').style.textAlign = 'right'
buttonColor2(e)
})


document.getElementById('font-size').addEventListener('change',function(event){
    document.getElementById('main-text').style.fontSize = event.target.value+"px"
})
document.getElementById('font-color').addEventListener('change',function(event){
    document.getElementById('main-text').style.color = event.target.value;
})


document.getElementById('text-style').addEventListener('change',function(event){
// alert(event.target.value)
document.getElementById('main-text').style.textTransform = event.target.value
})