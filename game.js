//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

// 1-100 arasinda rasgele bir sayi tut.
var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

// var topScore =0;
var score =10;
//TOPSCORE'UN LOCAL.STORAGE'DA OKUNMASI LAZIM
let topScore = localStorage.getItem("topScore") || 0;
console.log(topScore);
//TOPSCORE'UN DEGERI YOKSA || SIFIR YAZ.
//TOPSCORE'UN DEGERI VARSA && SIFIR YAZ.

//DOM'DAKI TOPSCORE DEGERINI LOCAL'DEN OKUYARAK GUNCELLE.
document.querySelector(".topScore").textContent =topScore;


//CHECK BUTTON OZELLİGİ
document.querySelector(".checkBtn").addEventListener("click", ()=> {
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  const secret = document.querySelector(".secret");
  const guessInput = Number(document.querySelector(".guessInput").value);
  //INPUT'UN DEGERINI, NUMBER CINSINDEN ALDIK
  // console.log(guessInput);

  if(!guessInput){//INPUT GIRILMEDIYSE UYARI VER
    msg.innerText = "Lutfen sayi giriniz ";
  }
  else if (randomNumber===guessInput){
   msg.innerHTML = `Right guess.Congrats!`;

    body.className="bg-success";
    secret.innerText = guessInput;
    document.querySelector(".checkBtn").disabled =true ;
    if(score > topScore){ 
      // topScore = score;
      //LOCAL'DEKI TOPSCORE DEGERINI GUNCELLE
      localStorage.getItem("topScore",score); 
      //DOM'DAKI TOPSCORE DEGERINI GUNCELLE
      document.querySelector(".topScore").textContent = score;
    } 
  }
  else if (guessInput!=randomNumber){
    if(score >1){
      score-=1;
      guessInput > randomNumber 
      ? (msg.innerHTML=`DECREASE <i class="fa-solid fa-arrow-trend-down fa-xl"></i>`) 
      : (msg.innerHTML=`INCREASE <i class="fa-solid fa-arrow-trend-up fa-xl"></i>`);
      document.querySelector(".score").textContent = score;
      
    }
    else {
      msg.innerText = "Sorry you lost";
      body.className="bg-danger";
      secret.innerText = randomNumber;
      // secret.className="fa-fade display-6";
      score=0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".checkBtn").disabled =true ;
    }
  }
})

//AGAIN TUŞUNA BASILDIGINDA
document.querySelector(".again").addEventListener("click", ()=>{
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");
  // document.querySelector(".secret").classList.remove("fa-fade display-6");
  document.querySelector(".secret").textContent='?';
  // const guessInput = Number(document.querySelector(".guessInput").value);
  
  score =10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  document.querySelector(".checkBtn").disabled =false ;
  body.classList.remove("bg-success","bg-danger");
  document.querySelector(".guessInput").value='';
  msg.innerText='starting...';

})

//SESSION.STORAGE(OTURUM DEPOLAMA) => KULLANICI OTURUMU KAPATTIGINDA VEYA SURE DOLDUGUNDA OTOMATIK SILINIR.

//LOCAL.STORAGE(YEREL DEPOLAMA) => KULLANICI SILENE KADAR KALICI BELLEKTE DURUR.
//LOCAL VE SESSION STORAGE, STRING TIPINDE SAKLAMA YAPAR. O YUZDEN ITEMLERI STRING TIPINDE SAKLAMAK GEREKIR.

/* SET.ITEM => YAZMA,
   GET.ITEM => OKUMA,
   REMOVE.ITEM => ITEM SILME,
   CLEAR => TOPLU TEMIZLEME */

myObj ={a:1,b:2,c:3};
localStorage.setItem("OBJ", JSON.stringify(myObj)); //STRING HALE GETIRIR.
const readObj = localStorage.getItem("OBJ");
const readOBJ = JSON.parse(localStorage.getItem("OBJ"));//STRING'I ORJINALINE CEVIRIR.
console.log(readObj, typeof readObj);
console.log(readOBJ, typeof readOBJ);