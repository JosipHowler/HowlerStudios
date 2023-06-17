const changeSlide = () => {
    const fullCircle = document.querySelector(".FullCircle");
    const info1 = document.querySelector(".container-2");
    const info2 = document.querySelector(".container-1");

    fullCircle.addEventListener("click",()=>{
        info1.classList.toggle("container-2-active");
        info2.classList.toggle("container-1-inactive");
    });
}

const changeSlide2 = () => {
    const fullCircle = document.querySelector(".FullCircle");
    const info1 = document.querySelector(".container-2");
    const info2 = document.querySelector(".container-1");

    fullCircle.addEventListener("click",()=>{
        info1.classList.toggle("container-2-inactive");
        info2.classList.toggle("container-1-active");
    });
}

const navSlide3 = () => {
    const box1 = document.querySelector(".navigation-Bar");
    const nav = document.querySelector(".container-13");

    box1.addEventListener("click",()=>{
        nav.classList.toggle("container-13-active");
    });
}

const navSlide4 = () => {
    const box1 = document.querySelector(".BlueX");
    const nav = document.querySelector(".container-13");

    box1.addEventListener("click",()=>{
        nav.classList.toggle("container-13-inactive");
    });
}

navSlide3();
navSlide4();
changeSlide();