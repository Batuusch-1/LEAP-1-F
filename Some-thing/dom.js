// DOM (DOCUMENT Object MODEL  )console.log(document);

// const a = document.getElementsByClassName("dummy");
// a[0].innerHTML = "HELLO WORLD";

// document.getElementById("demo").innerHTML = Date();
// // document.getElementById("demo").createElement("p")
//  const b =  document.createElement("p")
//  console.log(a); 
// const c = document.getElementById("demo").appendChild(b)
// console.log(c);
// document.getElementsByTagName("p")[0].innerText = "HELLO"

1.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="flex">
      <div>
        <input type="text" disabled /><input type="text" disabled /><input
          type="text"
        />
      </div>
      <div><button>Check</button><button>Renew</button></div>
    </div>
    <script>
      //Elementudig select hiij avna
      const inputOne = document.getElementsByTagName("input")[0];
      const inputTwo = document.getElementsByTagName("input")[1];
      const buttons = document.getElementsByTagName("button");

      //bodlgo hariu shalgah function
      let check = () => {
        //hariultig input-s avj baina
        const answer = document.getElementsByTagName("input")[2];
        //hariult taarj bnu shalgah
        if (
          Number(inputOne.value) + Number(inputTwo.value) ===
          Number(answer.value)
        ) {
          //zuv baival asuultig shinechled hariultin input-g tseverlene
          alert("Zuv baina");
          renew();
          answer.value = "";
        } else {
          alert("buruu hariult");
        }
      };
      // asuult shinechleh function
      const renew = () => {
        const min = 100;
        const max = 999;
        //2 input deer buhel too ugnu
        inputOne.value = Math.floor(Math.random() * (max - min) + min);
        inputTwo.value = Math.floor(Math.random() * (max - min) + min);
      };
      //Web ehelhed renew function shuud ajillna
      renew();

      //2 tovch deer eventlistener ajilluuna
      buttons[0].addEventListener("click", check);
      buttons[1].addEventListener("click", renew);
    </script>
  </body>
</html>
