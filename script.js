let step = 0;

function nextStep() {

    const title = document.getElementById("title");
    const text = document.getElementById("text");
    const gif = document.getElementById("gif");

    step++;

    // FIRST PAGE WITH HER PHOTO

    if (step === 1) {

        gif.src = "assets/photo.jpg";

        title.innerText =
            "Kak vi Miss ?";

        text.innerText =
            "Id suratak turd carang 😂 ";
    }

    // SECOND PAGE

    else if (step === 2) {

        showMoodScreen();
    }
}

function showMoodScreen() {

    const screen = document.getElementById("screen");

    screen.innerHTML = `

        <img
            src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
            alt="cute gif"
        >

        <h1>Choose Your Mood Shama!</h1>

        <p>Rostatho tam 🤨</p>

        <div class="mood-buttons">

            <button onclick="showMood('happy')">
                😊 Xushak
            </button>

            <button onclick="showMood('sad')">
                😢 Xafa
            </button>

            <button onclick="showMood('angry')">
                😡 Buyne
            </button>

            <button onclick="showMood('cuddle')">
                🫂 Need HUG
            </button>

            <button onclick="showMood('space')">
                🌙 Nuzhno prostranstvo hahaha
            </button>

        </div>
    `;
}

function showMood(mood) {

    const screen = document.getElementById("screen");

    let message = "";
    let gif = "";

    if (mood === "happy") {

        message =
            "Obalee, xub xub 🙂‍↔️";

        gif =
            "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif";
    }

    else if (mood === "sad") {

        message =
            "Nay nay, teryukaken mak 😂🫂";

        gif =
            "https://media.giphy.com/media/9d3LQ6TdV2Flo8ODTU/giphy.gif";
    }

    else if (mood === "angry") {

        message =
            "Waymoo, opasno 🫣";

        gif =
            "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif";
    }

    else if (mood === "cuddle") {

        message =
            "100% 🫂";

        gif =
            "https://media.giphy.com/media/VduFvPwm3gfGO8duNN/giphy.gif";
    }

    else if (mood === "space") {

        message =
            "nist turd prostranstvo 🌙";

        gif =
            "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif";
    }

    screen.innerHTML = `

        <img src="${gif}" alt="mood gif">

        <h1>${message}</h1>

        <p>
            Iiiii, sar GLAVNE sawol she mund...
        </p>

        <button onclick="askDate()">
            Dalshe 💌
        </button>
    `;
}

function askDate() {

    const screen = document.getElementById("screen");

    screen.innerHTML = `

        <img
            src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif"
            alt="date gif"
        >

        <h1>
            Awoyak nafas tizhd nanaxhteyeyo? 😶‍🌫️
        </h1>

        <p>
            I rost jawob dond 😏
        </p>

        <div class="date-buttons">

            <button onclick="yesDate()">
                ON 😍
            </button>

            <button
                id="noBtn"
                onmouseover="moveButton()"
            >
                NAY 😭
            </button>

        </div>
    `;
}

function moveButton() {

    const noBtn = document.getElementById("noBtn");

    const x =
        Math.floor(Math.random() * 300) - 150;

    const y =
        Math.floor(Math.random() * 300) - 150;

    noBtn.style.position = "relative";

    noBtn.style.left = `${x}px`;

    noBtn.style.top = `${y}px`;
}

function yesDate() {

    const screen = document.getElementById("screen");

    screen.innerHTML = `

        <img
            src="https://media.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif"
            alt="happy gif"
        >

        <h1>OBALEEEYA 🕺</h1>

        <p>
            At ku she, cawaxtga tare barawot 👩🏾‍🦲
        </p>

        <div class="form-box">

            <label>
                Ruzak vibor ku kin 💌
            </label>

            <input
                type="date"
                id="dateInput"
            >

            <label>
                Waxtakga mis ⏰
            </label>

            <input
                type="time"
                id="timeInput"
            >

            <button onclick="confirmDate()">
                Confirmga kinxu 🫠
            </button>

        </div>
    `;
}

function confirmDate() {

    const screen = document.getElementById("screen");

    const date =
        document.getElementById("dateInput").value;

    const time =
        document.getElementById("timeInput").value;

    if (date === "" || time === "") {

        alert("Arvath vibor kin Nedzin 😂");

        return;
    }

    localStorage.setItem("savedDate", date);
    localStorage.setItem("savedTime", time);

    const instagramUsername = "khudododov.h";

    screen.innerHTML = `

        <img
            src="assets/ourgif.gif"
            alt="our gif"
            class="memory-gif"
        >

        <h1>Perfect 🙂‍↔️</h1>

        <p>
            Officialne donga waxtakand:
        </p>

        <h2>
            ${date}
        </h2>

        <h2>
            ${time}
        </h2>

        <p id="dateMessage">
            Naxhteyakamta ${date}-and sowate ${time} 💖
        </p>

        <button onclick="copyDateMessage()">
            Copy 📋
        </button>

        <a
            class="instagram-btn"
            href="https://www.instagram.com/${instagramUsername}/"
            target="_blank"
        >
            Ar Instagram ku de boz murd 💌
            BYE 🫡
        </a>
    `;
}

function copyDateMessage() {

    const message =
        document.getElementById("dateMessage").innerText;

    navigator.clipboard.writeText(message);

    alert(
        "Copied! Ku ar instaga de bozxu 💌"
    );
}

