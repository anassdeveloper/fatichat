const profil = document.querySelector(".profil img");
const view = document.querySelector(".view img");
const myFileInput = document.getElementById("myFileInput");



//=========================================================//
myFileInput.addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result)
    })

    reader.readAsDataURL(this.files[0]);
    

})
//=========================================================//
document.addEventListener("DOMContentLoaded", () =>{

    const rencetImageDataUrl = localStorage.getItem("recent-image");

    if(rencetImageDataUrl){
        view.setAttribute("src", rencetImageDataUrl);
        profil.setAttribute("src", rencetImageDataUrl);
        
    }
})


