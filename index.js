    var characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbols=["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    let randomNumbers=[];
    let randomNum;
    let passLength1;
    let passLength2;
    let generatedRandomPass="";
    let numToggleEl=document.getElementById("togglenum");
    let symToggleEl=document.getElementById("togglesym");

    function generateRandomPasswords(){
        document.getElementById("copied1").textContent="Click to copy password"
        document.getElementById("copied1").style.visibility='visible'
        document.getElementById("copied2").textContent="Click to copy password"
        document.getElementById("copied2").style.visibility='visible'
        passLength1=document.getElementById("passLen1").value
        passLength2=document.getElementById("passLen2").value
        document.getElementById("password1").textContent=generateRandomPass(passLength1)
        document.getElementById("password2").textContent=generateRandomPass(passLength2)
    }

    function generateRandomPass(passlen){
    characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if(numToggleEl.checked===true){
    characters=characters.concat(numbers)
    }
    if (symToggleEl.checked===true){
        characters=characters.concat(symbols)  
    }
    randomNumbers=[]
    generatedRandomPass=""
    for (let i=0;i<passlen;i++){
        randomNum=Math.floor(Math.random()*characters.length)
        randomNumbers.push(randomNum)
    }
    for (let i=0;i<randomNumbers.length;i++){
    generatedRandomPass+=characters[randomNumbers[i]]
    }
    return generatedRandomPass
    }

    async function copyonclick(num){
        if (num===1){
            try {
                await navigator.clipboard.writeText(password1.textContent);
                console.log("Password copied to clipboard: ", password1.textContent);
                document.getElementById("copied1").style.visibility='visible'
                document.getElementById("copied1").textContent="Password copied to clipboard"
                setTimeout(function() {
                    document.getElementById("copied1").style.visibility='hidden'
                }, 2000)          }
            catch (err) {
                document.getElementById("copied1").textContent="Failed to copy password: "+err
            }  }
    else if (num===2){
            try {
                await navigator.clipboard.writeText(password2.textContent);
                console.log("Password copied to clipboard: ", password2.textContent);
                document.getElementById("copied2").style.visibility='visible'
                document.getElementById("copied2").textContent="Password copied to clipboard"
                setTimeout(function() {
                    document.getElementById("copied2").style.visibility='hidden'
                }, 2000)          }
            catch (err) {
                                document.getElementById("copied2").textContent="Failed tocopy password: "+err
            }  }
    }