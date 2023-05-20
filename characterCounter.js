let text = "The purpose of this project is to show the number of letters in the text according to the letter entered by the user.";
let character = prompt("Enter a character: ");

function find(char){
    let sum=0 ;
    for(let i=0;i<text.length;i++){
        if(text.charAt(i).toLowerCase() == character.toLowerCase()){
            sum++;
        }
    }
    //return sum;
    console.log("Entered letter: " + character);
    console.log("This letter is used "+ sum + " times in the text.");
}
find(character);

// let sonuc = find(harf);
// alert("Number of letters in the text: " +sonuc);