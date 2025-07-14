function changeToAbout(){
    let aboutDiv=document.querySelector("#aboutcon");
    let expsDiv=document.querySelector("#exps");

    aboutDiv.style.display="block";
    expsDiv.style.display="none";
}


function changeToExps(){
    let aboutDiv=document.querySelector("#aboutcon");
    let expsDiv=document.querySelector("#exps");

    aboutDiv.style.display="none";
    expsDiv.style.display="block";
}

// 輪播圖片邏輯
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-img");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// 自動輪播（每5秒切換）
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 5000);

