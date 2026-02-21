let modInfo = {
	name: "Drifter's Upgrade Tree",
	author: "Drifter1240",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "DUT Discord Server",
	discordLink: "https://discord.gg/5eGuUgnz6t",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 0.05,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "2.1",
	name: "'Small' update",
}

let changelog = `<h1>Changelog:</h1><br> <br>
	<h3>v2.1</h3><br>
		- Just a lot of rebalancing & QOL changes. Automation is now available earlier. <br>
		- Added 10 new upgrades + 1 new sublayer. <br> <br> <br>
	<h3>v2.0</h3><br>
		- Finished Layer 2 & added 4 new sub-layers. <br>
		- Added Layer 3, Descension. Currently only has ?? upgrades + extras. <br> <br> <br>
	<h3>v1.0</h3><br>
		(The point of this update is to put a sort of 'finished' polish onto the demo from v0.1.) <br>
		- Finished Layer 1 & added 2 new sub-layers. <br>
		- Hopefully balanced. <br>
		- Added Layer 2, Ascension. Currently only has 20 upgrades + extras. <br> <br> <br>
	<h3>v0.1</h3><br>
		- Added the first 55 upgrades & 4 sub-layers.<br>
		- Absolutely not balanced.`

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

function globalMult() { // hi if ur seeing this its for a loop layer :3
    let gain = new Decimal(1)
	gain = gain.times(buyableEffect("ins", 12))
    return gain
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade("p", 71)) gain = gain.add(1)
	if (hasUpgrade("p", 191)) gain = gain.add(2)
	if (hasUpgrade("p", 351)) gain = gain.add(5)
	if (hasUpgrade("p", 663)) gain = gain.add(8)
	if (hasUpgrade("p", 701)) {
	if (hasUpgrade("sp", 141)) gain = gain.add(250)
	else gain = gain.add(25)
	} 
	if (hasUpgrade("a", 652)) gain = gain.add(550)
	// Base point increases
	if (!hasUpgrade("p", 11)) gain = gain.times(0)
	if (hasUpgrade("p", 21)) {
		if (hasUpgrade("sp", 21)) gain = gain.times(5)
		else gain = gain.times(2)
	}
	if (hasUpgrade("p", 22)) {
		if (hasUpgrade("sp", 201)) gain = gain.times(9)
		else gain = gain.times(3)
	}
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
	if (hasUpgrade("p", 162)) gain = gain.times(2)
	if (hasUpgrade("p", 181)) gain = gain.times(2)
	if (hasUpgrade("p", 221)) gain = gain.times(upgradeEffect("p", 221))
	if (hasUpgrade("p", 232)) gain = gain.times(1.5)
	if (hasUpgrade("p", 231)) gain = gain.times(3)
	if (hasUpgrade("p", 251)) gain = gain.div(0.5)
	if (hasUpgrade("p", 261)) gain = gain.times(1.25)
	if (hasUpgrade("p", 271)) gain = gain.times(2.5)
	if (hasUpgrade("p", 281)) {
		if (hasUpgrade("sp", 102)) gain = gain.times(1.2)
		else gain = gain.times(1.02)
	}
	if (hasUpgrade("p", 322)) gain = gain.times(2)
	if (hasUpgrade("p", 331)) gain = gain.times(0.4)
	if (hasUpgrade("p", 342)) gain = gain.times(upgradeEffect("p", 342))
	if (hasUpgrade("p", 371)) gain = gain.times(1.5)
	if (hasUpgrade("p", 391)) gain = gain.times(5)
	if (hasUpgrade("p", 401)) gain = gain.times(3)
	if (hasUpgrade("p", 411)) gain = gain.times(1.1)
	if (hasUpgrade("p", 431)) gain = gain.times(2.25)
	if (hasUpgrade("p", 441)) gain = gain.times(upgradeEffect("p", 441))
	if (hasUpgrade("p", 481)) gain = gain.times(upgradeEffect("p", 481))
	if (hasUpgrade("p", 511)) gain = gain.times(2.5)
	if (hasUpgrade("p", 541)) gain = gain.times(6.9)
	if (hasUpgrade("p", 542)) gain = gain.div(6.9)
	if (hasUpgrade("p", 561)) gain = gain.times(2.75)
	if (hasUpgrade("p", 601)) gain = gain.times(2)
	if (hasUpgrade("p", 671)) gain = gain.times(1.5)
	if (hasUpgrade("p", 741)) gain = gain.times(3)
	if (hasUpgrade("p", 801)) gain = gain.times(2)

	if (hasUpgrade("sp", 11)) gain = gain.times(2) // Just because I'm lazy lul (real reason is because the +1 base would be nullified quickly and it would just feel like a regular run)
	if (hasUpgrade("sp", 81)) gain = gain.times(upgradeEffect("sp", 81))
	if (hasUpgrade("sp", 101)) gain = gain.times(5)

	if (hasUpgrade("g", 11)) gain = gain.times(1.3)
	if (hasUpgrade("g", 51)) gain = gain.times(1.25)
	if (hasUpgrade("g", 101)) gain = gain.times(1.2)
	if (hasUpgrade("g", 111)) gain = gain.times(1.5)
	if (hasUpgrade("g", 161)) gain = gain.times(1.4)

	if (hasUpgrade("a", 11)) gain = gain.times(10)
	if (hasUpgrade("a", 21)) gain = gain.times(2)
	if (hasUpgrade("a", 41)) gain = gain.times(4)
	if (hasUpgrade("a", 51)) gain = gain.times(upgradeEffect("a", 51))
	if (hasUpgrade("a", 141)) gain = gain.times(2.5)
	if (hasUpgrade("a", 161)) gain = gain.times(3)
	if (hasUpgrade("a", 211)) gain = gain.times(1.5)
	if (hasUpgrade("a", 281)) gain = gain.times(upgradeEffect("a", 281))
	if (hasUpgrade("a", 291)) gain = gain.times(upgradeEffect("a", 291))
	if (hasUpgrade("a", 301)) gain = gain.times(3)
	if (hasUpgrade("a", 341)) gain = gain.times(2.25)
	if (hasUpgrade("a", 381)) gain = gain.times(upgradeEffect("a", 381))
	if (hasUpgrade("a", 412)) gain = gain.times(3)
	if (hasUpgrade("a", 411)) gain = gain.times(1000000)
	if (hasUpgrade("a", 461)) gain = gain.times(2.5)
	if (hasUpgrade("a", 521)) gain = gain.times(3.5)
	if (hasUpgrade("a", 581)) gain = gain.times(6.9)
	if (hasUpgrade("a", 621)) gain = gain.times(2)
	if (hasUpgrade("a", 701)) gain = gain.times(2)
	if (hasUpgrade("a", 751)) gain = gain.times(5)
	if (hasUpgrade("a", 841)) gain = gain.times(1.5)

	if (hasUpgrade("d", 11)) gain = gain.times(25)
	if (hasUpgrade("d", 22)) gain = gain.times(2.5)
	if (hasUpgrade("d", 41)) gain = gain.times(3)
	if (hasUpgrade("d", 51)) gain = gain.times(1.5)
	if (hasUpgrade("d", 81)) gain = gain.times(upgradeEffect("d", 81))
	if (hasUpgrade("d", 91)) gain = gain.times(upgradeEffect("d", 91))
	if (hasUpgrade("d", 111)) gain = gain.times(2)
	if (hasUpgrade("d", 141)) gain = gain.times(4)

	if (hasMilestone("pr", 0)) {
        if (hasUpgrade("sp", 41)) gain = gain.times(player.pr.points.times(2).add(1).max(1));
		else gain = gain.times(player.pr.points.add(1).max(1));
    }
	if (hasMilestone("pr", 2)) {
        if (hasUpgrade("a", 691)) gain = gain.times(new Decimal(1.125).pow(player.pr.points.sub(5)).max(1))
        else gain = gain.times(new Decimal(1.1).pow(player.pr.points.sub(5)).max(1))
    }
	if (hasMilestone("c", 0)) {
        if (hasUpgrade("a", 131)) gain = gain.times(player.c.points.pow(0.165).max(1));
		else gain = gain.times(player.c.points.pow(0.15).max(1));
    }
	if (hasMilestone("g", 0)) {
         if (hasUpgrade("a", 241)) gain = gain.times(player.g.power.pow(0.225).max(1));
		 else gain = gain.times(player.g.power.pow(0.2).max(1));
    }
	if (hasMilestone("sac", 0)) {
         gain = gain.times(new Decimal(2).pow(player.sac.points));
    }

	gain = gain.times(buyableEffect("m", 11))
	gain = gain.times(buyableEffect("m", 21))
	gain = gain.times(buyableEffect("b", 11))
	gain = gain.times(buyableEffect("gold", 11))

	if (hasUpgrade("p", 131)) gain = gain.add(25000)
	if (hasUpgrade("p", 361)) gain = gain.add(2.5e13)

	gain = gain.times(globalMult())

	if (hasUpgrade("a", 411)) gain = gain.pow(0.925)

	if (inChallenge("ins", 11)) gain = gain.pow(0.95)
		
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