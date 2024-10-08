let answers = {}; // Object to store her answers

// Function to handle the 'Yes' button click
document.getElementById("yesButton").addEventListener("click", function() {
    // Hide the initial question and buttons
    document.getElementById("buttons").style.display = "none";
    document.getElementById("question").style.display = "none";
    
    // Start asking the next set of questions
    askWhenFree();
});

// Function to move the 'No' button on both desktop and mobile
const noButton = document.getElementById("noButton");

function moveButton() {
    noButton.style.position = "absolute";
    noButton.style.top = Math.random() * window.innerHeight + "px";
    noButton.style.left = Math.random() * window.innerWidth + "px";
}

// For desktops/laptops
noButton.addEventListener("mouseover", moveButton);

// For mobile devices
noButton.addEventListener("touchstart", moveButton);

// Function to ask when she's free
function askWhenFree() {
    const nextQuestion = document.getElementById("nextQuestion");
    nextQuestion.innerHTML = `
        <h2>When are you free?</h2>
        <input type="date" id="dateInput" class="calendar-container">
        <button class="button" onclick="askStayInOrGoOut()">Next</button>
    `;
    nextQuestion.style.display = "block";

    // Record the date choice
    const dateInput = document.getElementById("dateInput");
    dateInput.addEventListener('change', function() {
        answers['freeDate'] = dateInput.value;
    });
}

// Function to ask whether to stay in or go out
function askStayInOrGoOut() {
    const nextQuestion = document.getElementById("nextQuestion");
    nextQuestion.innerHTML = `
        <h1>Do you want to go out or stay in?</h1>
        <button class="button" onclick="askGoOutPlaces()">Go Out</button>
        <button class="button" onclick="askStayInActivities()">Stay In</button>
    `;
}

// Function for "Go Out" places
function askGoOutPlaces() {
    const nextQuestion = document.getElementById("nextQuestion");
    nextQuestion.innerHTML = `
        <h1>Where do you want to go?</h1>
        <button class="button" onclick="askRestaurants('798')">
            <img src="798.jpg" alt="798"> 798
        </button>
        <button class="button" onclick="askRestaurants('Temple')">
            <img src="temple.jpg" alt="Temple"> Temple
        </button>
        <button class="button" onclick="askRestaurants('Random Mall')">
            <img src="mall.jpg" alt="Mall"> Random Mall
        </button>
        <button class="button" onclick="askRestaurants('Church')">
            <img src="church.jpg" alt="Church"> Church
        </button>
    `;
}

// Function to ask what to eat after selecting a place
function askRestaurants(place) {
    answers['place'] = place;
    const nextQuestion = document.getElementById("nextQuestion");
    nextQuestion.innerHTML = `
        <h1>What do you want to eat?</h1>
        <button class="button" onclick="finalize('TubeStation')">
            <img src="pizza.png" alt="Pizza"> TubeStation
        </button>
        <button class="button" onclick="finalize('MacDonalds')">
            <img src="mac.png" alt="Burger"> MacDonalds
        </button>
        <button class="button" onclick="finalize('IKEA')">
            <img src="ikea.png" alt="IKEA"> IKEA
        </button>
        <button class="button" onclick="finalize('Random food')">
            <img src="chinesefood.jpg" alt="Chinese"> Random food
        </button>
    `;
}

// Function for "Stay In" activities
function askStayInActivities() {
    const nextQuestion = document.getElementById("nextQuestion");
    nextQuestion.innerHTML = `
        <h1>What do you want to watch?</h1>
        <button class="button" onclick="askMeals('Ice Age')">
            <img src="iceage.jpg" alt="Movies"> Ice Age
        </button>
        <button class="button" onclick="askMeals('Goblin')">
            <img src="goblin.jpg" alt="Board Games"> Goblin 
        </button>
        <button class="button" onclick="askMeals('Zootopia')">
            <img src="zoo.jpg" alt="Cooking"> ZooTopia
        </button>
        <button class="button" onclick="askMeals('RANDOM MOVIES')">
            <img src="randommovies.jpg" alt="Netflix"> RANDOM MOVIES
        </button>
    `;
}

// Function to ask what to cook
function askMeals(activity) {
    answers['activity'] = activity;
    const nextQuestion = document.getElementById("nextQuestion");
    nextQuestion.innerHTML = `
        <h1>What should we cook?</h1>
        <button class="button" onclick="finalize('Pizza')">
            <img src="pizzaaa.jpg" alt="Pizza"> Pizza
        </button>
        <button class="button" onclick="finalize('Pasta')">
            <img src="pasta.jpg" alt="Pasta"> Pasta
        </button>
        <button class="button" onclick="finalize('WaiMai')">
            <img src="waimai.jpg" alt="WaiMai"> WaiMai
        </button>
        <button class="button" onclick="finalize('You Decide!')">
            <img src="youdecide.png" alt="You Decide!"> You Decide!
        </button>
    `;
}

// Final function to record the last answer and show confirmation
function finalize(choice) {
    answers['finalChoice'] = choice;
    document.getElementById("nextQuestion").innerHTML = `
        <h1>Got It! Love you babe💖</h1>
    `;
}
