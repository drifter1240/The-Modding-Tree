let modInfo = {
	name: "The ??? Tree",
	author: "nobody",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
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
	if (hasUpgrade("p", 71)) gain = gain.add(1)
	if (hasUpgrade("p", 191)) gain = gain.add(2)
	// Base point increases
	if (!hasUpgrade("p", 11)) gain = gain.times(0)
	// if (hasUpgrade("p", 11)) gain = gain.times(2)	
	if (hasUpgrade("p", 21)) gain = gain.times(2)
	if (hasUpgrade("p", 22)) gain = gain.times(3)
	if (hasUpgrade("p", 31)) gain = gain.times(upgradeEffect("p", 31))
	if (hasUpgrade("p", 41)) gain = gain.times(2.5)
	if (hasUpgrade("p", 51)) gain = gain.times(1.5)
	if (hasUpgrade("p", 62)) gain = gain.times(upgradeEffect("p", 62))
	if (hasUpgrade("p", 71)) gain = gain.times(1.75)
	if (hasUpgrade("p", 101)) gain = gain.times(upgradeEffect("p", 101))
	if (hasUpgrade("p", 111)) gain = gain.times(0.8)
	if (hasUpgrade("p", 112)) gain = gain.times(3)
	if (hasUpgrade("p", 121)) gain = gain.times(1.01)
	if (hasUpgrade("p", 151)) gain = gain.times(2)
	if (hasUpgrade("p", 161)) gain = gain.times(upgradeEffect("p", 161))
	if (hasUpgrade("p", 181)) gain = gain.times(2)

	gain = gain.times(buyableEffect("m", 11))

	if (hasUpgrade("p", 131)) gain = gain.add(25000)
		
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