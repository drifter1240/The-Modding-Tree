let modInfo = {
	name: "The ??? Tree",
	author: "nobody",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (200000000000000000), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade("p", 24)) gain = gain.add(1)
	if (hasUpgrade("t", 13)) gain = gain.add(1)
	if (hasUpgrade("pr", 22)) gain = gain.add(2)
	if (hasUpgrade("p", 32)) gain = gain.add(5)
	// Base point increases
	if (!hasUpgrade("p", 11)) gain = gain.times(0)
	if (hasUpgrade("t", 12)) gain = gain.times(1.5)
	if (hasUpgrade("t", 21)) gain = gain.times(2)
    if (hasUpgrade("p", 12)) gain = gain.times(upgradeEffect("p", 12))
	if (hasUpgrade("t", 14)) gain = gain.times(upgradeEffect("t", 14))
	if (hasUpgrade("p", 13)) gain = gain.times(upgradeEffect("p", 13))
	if (hasUpgrade("p", 34)) gain = gain.times(upgradeEffect("p", 34))
	if (hasUpgrade("pr", 21)) gain = gain.times(3)
	gain = gain.times(buyableEffect("p", 14))
	gain = gain.times(buyableEffect("sp", 32))
	if (hasUpgrade('p', 21)) gain = gain.times(upgradeEffect('p', 21))
	if (hasUpgrade("p", 22)) {
			let pointUpgrades = [11, 12, 13, 21, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52]
			let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
	
			// Count buyable 14 only once if bought
			if (getBuyableAmount("p", 14).gt(0)) unlockedCount++
	
			// Calculate stacking multiplier
			let multiplier = new Decimal(1)
			for (let i = 0; i < unlockedCount; i++) {
				multiplier = multiplier.times(1.2)
			}
		
			gain = gain.times(multiplier)
		}
	if (hasUpgrade("sp", 21)) gain = gain.times(2)
	if (hasUpgrade("p", 52)) gain = gain.times(0.05)
	if (hasUpgrade("p", 52)) gain = gain.pow(1.15)
	if (hasUpgrade("p", 23)) gain = gain.pow(upgradeEffect("p", 23))
    // End point increases
	if (hasUpgrade("p", 33)) gain = gain.add(upgradeEffect("p", 33))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}