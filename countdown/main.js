"use strict";
const tglTujuan = new Date('dec 31 2021 00:00:00').getTime();

const hitungMundur = setInterval(function() {
    const tglSekarang =  new Date().getTime();

    const selisih = tglTujuan - tglSekarang;
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 *60));
    const menit = Math.floor(selisih % (1000 * 60 * 60 )/ (1000 * 60));
    const detik = Math.floor(selisih % (1000* 60) / 1000);
    
    
    const txtHari = document.getElementById('hari');
    txtHari.innerHTML = hari;
    const txtJam = document.getElementById('jam');
    txtJam.innerHTML = jam;
    const txtMenit = document.getElementById('menit');
    txtMenit.innerHTML = menit;
    const txtDetik = document.getElementById('detik');
    txtDetik.innerHTML = detik;
    
    if(jam < 10) {
        txtJam.innerHTML = `0${jam}`;
    }
    if(menit < 10) {
        txtMenit.innerHTML = `0${menit}`;
    }
    if(detik < 10) {
        txtDetik.innerHTML = `0${detik}`;
    }

    // if(selisih <= 0) {
    //     clearInterval(hitungMundur);
    //     const cards = document.querySelectorAll(".card");
    //     cards.forEach(e=>{
    //         e.style.display="none";
    //     });
    //     const h2 = document.querySelector("h2");
    //     h2.innerHTML="HAPPY NEW YEAR";
    //     h2.style.marginTop="4rem"
    // }

}, 1000)
