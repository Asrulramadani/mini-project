"use strict";

window.onload = function () {
    const popupCard = document.querySelector(".popup-card");

    popupCard.classList.add("active")
        

    const audio = document.getElementById("audio");
    
    const btnTidak = document.querySelector(".tidak");
    btnTidak.addEventListener("click", ()=>{
        popupCard.classList.remove("active");
    })

    const btnYa = document.querySelector(".ya");
    btnYa.addEventListener("click", ()=>{
        popupCard.classList.remove("active");
        audio.play();
    })
}

const nama = prompt("Masukkan Nama Panggilan Anda : ");


function createBubble() {
    const section = document.querySelector("section");
    let createElement = document.createElement("span");
    let size = Math.random() * 60;

    createElement.style.width = 20 + size +'px';
    createElement.style.height = 20 + size +'px';
    createElement.style.left = Math.random() * window.innerWidth +'px';
    createElement.style.animationDuration = Math.random() * 10 + 4 + 's';

    section.appendChild(createElement);

    setTimeout(()=>{
        createElement.remove();
    },5000)
}

setInterval(() => {
    createBubble();
}, 120);



function sapa() {
    const h1 = document.querySelector("h1");
    let jam = new Date().getHours();

    if(jam >= 18 ) {
        h1.innerHTML = `Hi, ${nama}<br> Selamat Malam`;
    }
    else if(jam > 15) {
        h1.innerHTML = `Hi, ${nama}<br> Selamat Sore`
    }
    else if(jam > 11) {
        h1.innerHTML = `Hi, ${nama}<br> Selamat Siang`
    }
    else {
        h1.innerHTML = `Hi, ${nama}<br> Selamat Pagi`
    }
}

sapa();


function waktu() {
    let jam = new Date().getHours();
    let menit = new Date().getMinutes();
    let detik = new Date().getSeconds();

    const dataJam = document.querySelector("#jam");
    const dataMenit = document.querySelector("#menit");
    const dataDetik = document.querySelector("#detik");

    dataJam.innerHTML = jam;
    dataMenit.innerHTML = menit;
    dataDetik.innerHTML = detik;
}

setInterval(()=>{
    waktu();
},1000)