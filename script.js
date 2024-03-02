const button1 = document.getElementById("AichiButton");

        // ボタンがクリックされたときの処理を設定
button1.addEventListener("click", function () {
            // 新しいページに遷移、自分で作った地元についてのページのリンクを載せる
 window.location.href = "https://likeable-mirage-jupiter.glitch.me/"
        });
const button2 =document.getElementById("FukuokaButton");
button2.addEventListener("click", function () {
            // 新しいページに遷移、自分で作った地元についてのページのリンクを載せる
 window.location.href = "https://persistent-guiltless-approval.glitch.me/"
        });
const button3 = document.getElementById("AkitaButton");
button3.addEventListener("click", function () {
            // 新しいページに遷移、自分で作った地元についてのページのリンクを載せる
 window.location.href = "https://productive-political-attic.glitch.me/"
        });

const button4 = document.getElementById("IbarakiButton");
button4.addEventListener("click", function () {
            // 新しいページに遷移、自分で作った地元についてのページのリンクを載せる
 window.location.href = "https://colorful-funky-feeling.glitch.me/"
        });

const button5 = document.getElementById("OsakaButton");
button5.addEventListener("click", function () {
            // 新しいページに遷移、自分で作った地元についてのページのリンクを載せる
 window.location.href = "https://pjteam4-osaka.glitch.me/#"
        });


function tellRecommend() {
    let fortune_num = Math.floor(Math.random() * 5)

    let resultText, resultImg
    
    if (fortune_num === 0) {
        resultText = "愛知県"
        resultImg = "https://cdn.glitch.global/237a591a-cabd-4a96-bf1a-c2710d12a8f7/Aichi%20real.jpg?v=1695822740926"
    } else if (fortune_num === 1) {
        resultText = "福岡県"
        resultImg = "https://cdn.glitch.global/237a591a-cabd-4a96-bf1a-c2710d12a8f7/fukuoka%20real.jpg?v=1695822732405"
    } else if (fortune_num === 2) {
        resultText = "秋田県"
        resultImg = "https://cdn.glitch.global/237a591a-cabd-4a96-bf1a-c2710d12a8f7/25085513_m%20(2).jpg?v=1695822716869"
    } else if(fortune_num === 3){
        resultText = "茨城県"
        resultImg = "https://cdn.glitch.global/237a591a-cabd-4a96-bf1a-c2710d12a8f7/ibaraki%20real.jpg?v=1695822727486"
    }else{
      resultText = "大阪府"
        resultImg = "https://cdn.glitch.global/237a591a-cabd-4a96-bf1a-c2710d12a8f7/osaka%20real.jpg?v=1695822722737"
      
    }

    document
        .getElementById("recommend_music_img")
        .setAttribute("src", resultImg)
    document.getElementById("recommend_music_txt").textContent = resultText
}

let recommend_btn = document.getElementById("recommend_music")
recommend_btn.onclick = () => {
    tellRecommend()
    document.getElementById("recommend_contents").style.display = "block"
}
