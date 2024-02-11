// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다
// 랜덤번호가 < 유저번호 Down !!!
// 랜덤번호가 > 유전번호 up !!!
//  Reset 버튼을 누르면 리셋
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100범위 밖 숫자를 입력하면 알려준다. 기회 안깎는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNum = 0
                //document 우리웹사이트 index.
let playButton = document.getElementById("play*button")
                                //play 는 변수넘김.
let userInput = document.getElementById("user-input")
playButton.addEventListener("click",play)

let resultArea = document.getElementById("result-area");

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}


function play(){
    let userValue = userInput.value
    if(userValue < computerNum) {
            resultArea.textContent = "UP!!!!"
        console.log ("Up!!!")
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!!"
    }else {
        resultArea.textContent = "맞췄다.!!!"
    }
}


pickRandomNum();