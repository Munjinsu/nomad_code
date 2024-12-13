const backGround = document.getElementById("bg-wrap");
const bgImage = document.createElement("img");
const bgDataSet = backGround.dataset.bg;

const seasonArray = ["spring", "summer", "autumn", "winter"];
const seasonLength = {
    spring: 19,
    summer: 48,
    autumn: 23,
    winter: 17
}

if(bgDataSet === seasonArray[0]){
    paintBg(seasonArray[0]);
}

function paintBg(season){
    
    const randomNum = String(Math.floor(Math.random() * seasonLength.season)).padStart(2, "0");
    console.log(seasonLength.season)

    bgImage.src = `images/${season}/bg_${randomNum}.jpg`
}

backGround.appendChild(bgImage)


