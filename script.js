money = 0;


// Gambling Presets
casino_win = "You won: "
casino_lose = "You lost "
casino_broke = "You dont have enouugh money"

// Garbage, dont worry abt this
console.log("█▀▄ █▀▀ █▄▄ █░█ █▀▀")
console.log("█▄▀ ██▄ █▄█ █▄█ █▄█")
console.log("Everything here is for debugging and solving errors")

// For every x amount of clicks, show different messages
ten = "You tell your dog, he does nothing, all he wants is food" // 10 bucks earnt
thirtyfive = "Your mum found out that you are doing this. She is disapointed..." // 35 bucks earnt
fifty = "Your dad now knows about your money, he then accidently shot you with a shotgun. You are recovering in the hospital " // 50 bucks earnt
hundred = "You can now afford some decent shoes, but still, your family wants to disown you" // 100 bucks earnt

//Audio
clickSound = new Audio('./Sounds/clickSound.wav')


setInterval(function(){
    if (money == money){
        document.getElementById('profit').innerHTML=money
        document.getElementById('gamble_money').innerHTML=money
    }
}, 100);

// Random Number for a gamble like feature 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function clickerFunction() {
    money++
    document.getElementById('profit').innerHTML=money;
    document.getElementById('gamble_money').innerHTML=money
    console.log("$" + money)
    // Boring Stuff
    if (money == 10) {
        document.getElementById('text').innerHTML=ten}
    if (money == 35) {
        document.getElementById('text').innerHTML=thirtyfive}
    if (money == 50){
        document.getElementById('text').innerHTML=fifty}
    if (money == 100){
        document.getElementById('text').innerHTML=hundred}
}
function checkValue() {
    txt = Gamble.value;
    console.log("Gamble value in the text slot: " + txt);
}

function gamble(){
    if (money < txt){
        console.log("money > txt, You dont have enough money")
        return;                                     // Makes sure you don't gamble money that you don't even have
    }
    if (txt == 0){
        console.log("You idiot, you put money in the slot machine! REDO IT")
        return;
    }
    if (money >= txt ){
        randomInt = getRandomInt(3) // If you get 0 or 3, you will lose, so its a 1 in 3
        money = money - txt
        if (randomInt == 1){
            console.log("You won the gamble")
            document.getElementById('WinOrLose').innerHTML=casino_win
            txt = txt * 2 // Since you won the gamble, you get double the amount you put in
            console.log("Math thing that does random chance: " + txt)
            money = money + txt
            console.log("Earnings after gamble: " + money)
            document.getElementById('status').innerHTML=txt
        }
        if (randomInt != 1){
            console.log("You lose")
            document.getElementById('WinOrLose').innerHTML=casino_lose
            document.getElementById('status').innerHTML
            // Lols imagine losing while gambling *enables 100% win rate hack* wink wink :)
        }
        
        
    }
    }

    
    
    

    


 




