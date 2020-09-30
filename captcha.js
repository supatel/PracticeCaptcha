let captcha;

function generateCaptcha(){
	let canvas = document.querySelector("canvas");
    let ctxt = canvas.getContext("2d")
    let captchaLength = 6;
    // captcha = Math.floor(Math.random()*8999+1000);
	captcha = makeid(captchaLength);
	captcha = captcha.toString();
	ctxt.beginPath();
	ctxt.clearRect(-canvas.width,-canvas.height,2 * canvas.width, 2* canvas.height)
	let syms = [];
	let hex = "12345";
	for(let i=0;i<700;i++){
			ctxt.fillStyle = "#"+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)];
			ctxt.fillRect(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),1,1);
	}

	ctxt.fillStyle = "black";
	for(let i=0;i<6;i++){
    syms.push(document.createElement("canvas"));
    syms[i].width = canvas.width;
    syms[i].height = canvas.width;
    ctx = syms[i].getContext("2d");
    ctx.rotate(Math.floor(Math.random()*canvas.height/2-10) * Math.PI / 180)
    ctx.fillStyle = "#"+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)]+hex[Math.floor(Math.random()*hex.length)];
    let font = Math.floor(Math.random()*canvas.height/2+110);
    ctx.font = font+"px Arial";
    ctx.fillText(captcha[i],canvas.width/2,font-10);
    //ctxt.drawImage(syms[i],20*i+25,15,40+Math.floor(Math.random()*15-5),40+Math.floor(Math.random()*15-5));
    ctxt.drawImage(syms[i],(canvas.width/captchaLength)*i,canvas.height/10,(canvas.width/captchaLength),canvas.height);
	}
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function testCaptcha(){
  document.getElementById("set").innerHTML = "";

  var chk;  
         
  chk = document.getElementById("nus").value;
  //chk = Number(chk);
  
  if(chk == captcha){
	alert("correct : " + captcha );
  }
  else {
	alert("Incorrect : " + chk + " correct : " + captcha );  
  }
}
