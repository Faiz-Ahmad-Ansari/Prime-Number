function prime() {
    var input = document.getElementById("myInput").value;
    var i;
    var p = document.getElementById("prime");
    for(i=2;i<input;i++){
        console.log(input%i);
         if (input%i===0) {
            p.innerHTML = "This is not a prime number";
           return false;
            }
         else{
             p.innerHTML ="This is a prime number";
            }     
        }
    console.log(input);
    }