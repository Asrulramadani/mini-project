const hasil = document.querySelector('.container .hasil');
const input = document.querySelector('.container .input');
const kirim = document.querySelector('.container .kirim');
const result = document.querySelector('.container .result');


// menangkap pilihan komputer
const comp = Math.round(Math.random() * (10 - 1)); 
console.log(comp);

// Nyawa
let nyawa = 3;

// Function for games
const game = function(user , komputer) {


    // Jika menang
    if(user==komputer) {
        hasil.innerHTML=komputer;
        input.setAttribute('disabled', 'true');
        result.innerHTML='Jawaban Benar, Anda Menang';
        result.style.color='green';
    }

    // Jika kalah

    else {

        nyawa--
        if(nyawa>0) {
            if(user>komputer) {
                kirim.innerHTML=`Kirim (${nyawa})`;
                result.innerHTML='Angka terlalu besar';
                result.style.color='orange';
            }
            else if(user<komputer) {
                kirim.innerHTML=`Kirim (${nyawa})`;
                result.innerHTML='Angka terlalu kecil';
                result.style.color='orange';
            } else {
                kirim.innerHTML=`Kirim (${nyawa})`;
                result.innerHTML='Anda salah memasukkan pilihan';
                result.style.color='red';
            }
        }

        else {
            input.setAttribute('disabled', 'true'); 
            kirim.innerHTML='Kirim (0)';
            result.innerHTML='Kesempatan habis, Anda kalah';
            result.style.color='red';
            hasil.innerHTML=komputer;
        }
    }

}



// add event to button where can run the games function

kirim.addEventListener('click', function() {
    game(input.value, comp);
});