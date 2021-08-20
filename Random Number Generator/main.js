const min = document.getElementById('min');
const max= document.getElementById('max');
const btn = document.querySelector('button');
const result = document.getElementById('result');

// Random Function

function random(min,max){

    // let r = Math.round(Math.random() * (max - min + 1) + min);

    return Math.round(Math.random() * (max - min + 1) + min);
}


// Event listener in Button

btn.addEventListener('click', function(){
    const rst = random(min.value, max.value );
    result.innerHTML=rst;
})