// show other tab function
let submitBut = document.querySelector("button");
let firstSlide = document.querySelector(".first");
let secondSlide = document.querySelector(".two");
function showOtherTab(){
    firstSlide.style.display = "none";
    secondSlide.style.display = "flex";
}
// make the active rate fun
let rateArr = document.querySelectorAll(".rate");
let rateValue = "";
rateArr.forEach((ele) => {
    ele.addEventListener("click",activeRate);
})
function activeRate(e){
    rateArr.forEach((ele) =>{
            ele.classList.remove("active");
    })
    rateValue = e.currentTarget.innerHTML;
    e.currentTarget.classList = "active rate";
    console.log(rateValue);
}
//on submit
let rateSpan = document.querySelector("span");
function onSubmit(){
    if(rateValue !== ""){
        rateSpan.innerText = `${rateValue}`;
        showOtherTab();
    }
    

}
submitBut.addEventListener("click",onSubmit);