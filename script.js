//點擊文字切換內文
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

//輪播圖片
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-img");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

//輪播圖片按鈕點擊
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

//自動輪播（每5秒切換）
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 5000);

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const topBtn = document.querySelector("#top");

//顯示漢堡選單
if (btn) {
    btn.addEventListener("click", () => {
        btn.classList.toggle("clicked");
    });
}
//漢堡選單點擊後關閉
if (nav) {
    nav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            btn.classList.remove("clicked");
        }
    });
}
//回頂點後，top按鈕隱藏
if (topBtn) {
    document.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            topBtn.classList.remove("hide");
        } else {
            topBtn.classList.add("hide");
        }
    });
}

