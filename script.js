
// Khi load trang thì cho tất cả thẻ text ẩn đi
var texts = document.querySelectorAll('.text');
for(let i = 0; i < texts.length; i++){
  texts[i].classList.add("hide");
}

// Lấy danh sách các nút dot
var dots = document.getElementsByClassName('dot');
// Chèn thẻ main vào trong các thẻ text
var home = document.querySelector('.background');
var main = document.querySelector('.main');

for(let i = 0; i < dots.length; i++){
  dots[i].addEventListener("click", function(){
    for(let k = 0; k < dots.length; k++){
      dots[k].classList.remove("active");
    }
    if(i === 0){
      main.style.backgroundImage = "url(images/bg2.png)";
      main.style.backgroundSize = "cover";
      main.style.backgroundPosition = "center";
      main.style.backgroundRepeat = "no-repeat";
      home.classList.remove("hide");
      home.classList.add("show");
      for(let j = 0; j < texts.length; j++){
        texts[j].classList.add("hide");
        texts[j].classList.remove("show");
      }
    }
    else{
      main.style.background = "none";
      home.classList.add("hide");
      home.classList.remove("show");
      for(let j = 0; j < texts.length; j++){
        texts[j].classList.add("hide");
        texts[j].classList.remove("show");
      }
      texts[i-1].classList.remove("hide");
      texts[i-1].classList.add("show");
    }
    this.classList.add("active");
  }, false);
}

// Xử lý comment 
var comment = document.querySelector('.comment');
var cd = document.querySelector('.commentdisplay');
var control = document.querySelector('.control');
var close = document.querySelector('.x');
comment.addEventListener("click", function(){
  cd.classList.add("toggle");
  control.classList.add("toggle");
})

close.addEventListener("click", function(){
  cd.classList.remove("toggle");
  control.classList.remove("toggle");
})

