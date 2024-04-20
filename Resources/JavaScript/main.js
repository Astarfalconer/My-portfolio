// navigation interactivity//



//home page//

let joelPic = document.getElementById("joel-pic");
let changeBorder =(event)=>{
    joelPic.style.border = 'solid 0.4em white';
    joelPic.style.cursor = "pointer"
};
let changeBorderOff =(event)=>{
    joelPic.style.border = '';
}
let changePicture =(event)=>{
  let randomNumber =
  Math.floor(Math.random()*4);
  const picture = randomNumber
  switch(picture){
    case 0: 
    joelPic.style.backgroundImage = "url('./Resources/Images/kirokaze2.gif')";
    break;
    case 1:
    joelPic.style.backgroundImage = "url('./Resources/Images/kirokaze3.gif')";
    break;
    case 2:
    joelPic.style.backgroundImage = "url('./Resources/Images/kirokaze4.gif')";
    break;
    case 3:
    joelPic.style.backgroundImage = " ";
 }
}
joelPic.onmouseover = changeBorder;
joelPic.onmouseout = changeBorderOff;
joelPic.onclick = changePicture; 














