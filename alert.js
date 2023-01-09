'use strict'; 
let song = new Audio("sound/Frank Sinatra - New York, New York.mp3"); 
 
let accept = document.getElementById('accept'); 
let hour_up = document.querySelector('.hour_up'); 
let hour_down = document.querySelector('.hour_down'); 
let min_up = document.querySelector('.min_up'); 
let min_down = document.querySelector('.min_down'); 
 
let hour = document.querySelector('.hour'); 
let minute = document.querySelector('.minute'); 
let cnt1 = 0; 
let cnt2 = 0; 
let seconds; 
 
// Ժամերի սլաքները 
hour_up.addEventListener('click', function() { 
    if (cnt1 < 23) { 
        cnt1++; 
    } else if (cnt1 === 23) { 
        cnt1 = 0; 
    } 
    hour.innerText = cnt1 < 10 ? '0' + cnt1 : cnt1; 
}) 
 
hour_down.addEventListener('click', function() { 
    if (cnt1 > 0) { 
        cnt1--;   
    } else if (cnt1 === 0) { 
        cnt1 = 23; 
    } 
    hour.innerText = cnt1 < 10 ? '0' + cnt1 : cnt1; 
}) 
 
// Րոպեների սլաքները 
min_up.addEventListener('click', function() { 
    if (cnt2 < 59) { 
        cnt2++;   
    } else if (cnt2 === 59) { 
        cnt2 = 0; 
    } 
    minute.innerText = cnt2 < 10 ? '0' + cnt2 : cnt2; 
}) 
 
min_down.addEventListener('click', function() { 
    if (cnt2 > 0) { 
        cnt2--;  
    } else if (cnt2 === 0) { 
        cnt2 = 59; 
    } 
    minute.innerText = cnt2 < 10 ? '0' + cnt2 : cnt2; 
}) 
 
// Հաստատելու կոճակը 
accept.addEventListener('click', function() { 
    if ((cnt1 < new Date().getHours()) || (cnt1 === new Date().getHours() && cnt2 <= new Date().getMinutes())) { 
        seconds = 24 * 3600 - (new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds()) + (cnt1 * 3600 + cnt2 * 60); 
    } else { 
        seconds = (cnt1 * 3600 + cnt2 * 60) - (new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds()); 
    } 
     
    // console.log(cnt1 * 3600 + cnt2 * 60); 
    // console.log(new Date().getHours() * 3600 + new Date().getMinutes() * 60); 
    // console.log(new Date().getSeconds()); 
    console.log(seconds);
    
    song.currentTime = 0;
    song.pause();
    setTimeout(() => { 
        song.play(); 
        console.log('zang');  
    }, seconds * 1000) 
})