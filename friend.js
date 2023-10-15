var str =document.querySelector("h1")
var str1 =document.querySelector(".angel")
var btn=document.querySelector("#btn")
var btn1=document.querySelector("#btn1")
cnt=0
btn.addEventListener("click",function () {
    if(cnt==0){
    str.innerHTML="Friend"
    str.style.color="green"
    btn.innerHTML="Unfollow"
cnt=1}else{
    str.innerHTML="Stranger"
    str.style.color="Red"
    btn.innerHTML="Follow"
cnt=0

}
    
})
btn1.addEventListener("click",function () {
    if(cnt==0){
    str1.innerHTML="Friend"
    str1.style.color="green"
    btn1.innerHTML="Unfollow"
cnt=1}else{
    str1.innerHTML="Stranger"
    str1.style.color="Red"
    btn1.innerHTML="Follow"
cnt=0

}
    
})