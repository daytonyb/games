// 1. Define your games here!
const gamesData = [
    {
        title: "Door Runner",
        description: "A randomly generated autoscrolling platformer where your goal is to reach the door at the end of each level!",
        image: "DoorRunner.png",
        link: "https://daytonyb.github.io/DoorRunner/door.html"
    },
    {
        title: "The Wacky Wizard",
        description: "A grid based game where you manouver around to defeat enemies! Many different game modes included.",
        image: "WackyWizard.png", 
        link: "https://daytonyb.github.io/wackywizard/"
    },
    {
        title: "Target Rush",
        description: "Fast paced, local multiplayer game with other game modes also.",
        image: "TargetRush.png",
        link: "https://daytonyb.github.io/targetrush/"
    },
    {
        title: "Where's My Spacebar?",
        description: "Puzzle platformer game with difficult mechanics",
        image: "Spacebar.png",
        link: "https://daytonyb.github.io/spacebar/",
    }
];

// 2. Grab the container from the HTML
const gridContainer = document.getElementById('portfolio-grid');

// 3. Loop through the data and create the HTML for each game card
gamesData.forEach(game => {
    // Create the card element
    const card = document.createElement('div');
    card.classList.add('game-card');

    // Fill it with HTML content using template literals
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title} Screenshot">
        <div class="game-info">
            <h2>${game.title}</h2>
            <p>${game.description}</p>
            <a href="${game.link}" target="_blank" class="play-btn">Play Game</a>
        </div>
    `;

    // Add the card to the webpage
    gridContainer.appendChild(card);
});