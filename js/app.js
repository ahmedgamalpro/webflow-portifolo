let bars = document.getElementById('bars')
let close = document.getElementById('close')
let nav = document.querySelector('#small-nav')



let hideNav = ()=>{
    nav.classList.toggle('show')
}
let showNav = ()=>{
    nav.classList.toggle('show')
}

let scrollDown = ()=>{
    window.scroll({
        top: 10000,
        left: 100,
        behavior: "smooth",
    });
    console.log('hhh')

    // document.body.scrollDown = 0;
    // document.documentElement.scrollDown = 0;
}