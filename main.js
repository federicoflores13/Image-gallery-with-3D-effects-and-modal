var images = document.querySelectorAll(".img-modal");
var imgModal = document.getElementById("imgModal");

function showModal(imgSource, imgCaption){
    imgModal.style.display = "block";
    document.getElementById("content").src = imgSource;
    document.getElementById("modalCaption").innerHTML = imgCaption;
}

for(let i=0; i < images.length; i++){
    images[i].onclick = function(){
        showModal(this.src, this.getAttribute('data-title'));
    }
}

//close btn
document.getElementById("btnClose").onclick = function(){
    imgModal.style.display = "none";
}