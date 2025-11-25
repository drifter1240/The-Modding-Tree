/* addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
}) */

  addLayer("p", {
        name: "Layer 1: Points",
        tooltip: "Layer 1: Points",
        symbol: "P",
        position: 0,
        startData() { return {
    unlocked: true,
    points: new Decimal(0),
    upgradeTimes: {},   // ADD THIS
        } },
        color: "#7cee4fff",
        row: 0,
        type: "none",
        shouldNotify() {
    // don't glow for upgrade 23
    for (const id in tmp[this.layer].upgrades) {
        if (id == 162) continue
        if (!hasUpgrade(this.layer, id) && canAffordUpgrade(this.layer, id)) return true
    }
    return false
},
    
        upgrades: {
            11: {
                title: "Upgrade #0",
                description: "Start generating points at a rate of 1/s.",
                cost: new Decimal(0),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [21],
            },
            21: {
                title: "Upgrade #1",
                description: "Double your point gain.",
                cost: new Decimal(10),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,11)},
                branches: [22],
            },
            22: {
                title: "Upgrade #2",
                description: "Triple your point gain.",
                cost: new Decimal(25),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,21)},
                branches: [31],
            },
            31: {
                title: "Upgrade #3",
                description() {
                    if (!hasUpgrade("p", 31)) 
                        return "For every upgrade in this layer unlocked, multiply point gain by 1.1 (compounding)."
            
                    // Point upgrades
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    /* Count buyable 14 only once if bought
                    if (getBuyableAmount("p", 14).gt(0)) unlockedCount++
                    */
                    // Calculate stacking multiplier
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        multiplier = multiplier.times(1.1)
                    }
            
                    return `For every upgrade in this layer unlocked, multiply point gain by 1.1 (compounding).  
                    Current multiplier: x${format(multiplier)}`
                },
                cost: new Decimal(100),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    // if (getBuyableAmount("p", 14).gt(0)) unlockedCount++ (this is for buyable)
            
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        multiplier = multiplier.times(1.1)
                    }
            
                    return multiplier
                },
                unlocked() {return hasUpgrade(this.layer,22)},
                branches: [41],
            },
            41: {
                title: "Upgrade #4",
                description: "2.5x point gain.",
                cost: new Decimal(200),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,31)},
                branches: [51],
            },
            51: {
                title: "Upgrade #5",
                description: "1.5x point gain. Sorry, inflation.",
                cost: new Decimal(600),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,41)},
                branches: [62],
            },
            62: {
                title: "Upgrade #6",
                description: "Points boost itself at a slow rate. Formula: log100(points)",
                cost: new Decimal(1200),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    if (hasUpgrade(this.layer,61)) return player.points.log(25)
                    return player.points.log(100)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,51)},
                branches: [61, 63],
            },
            61: {
                title: "Upgrade #7",
                description: "Improve #6's formula by -log75.",
                cost: new Decimal(2500),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,62)},
                branches: [71],
            },
            63: {
                title: "Upgrade #8",
                description: "Add a new currency and layer.",
                cost: new Decimal(4000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,62)},
                branches: [71],
                onPurchase() {
                    player.m.unlocked = true
                },
            },
            71: {
                title: "Upgrade #9",
                description: "+1 base point gain.",
                cost: new Decimal(10000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,61) && hasUpgrade(this.layer, 63)},
                branches: [81],
            },
            81: {
                title: "Upgrade #10",
                description: "x1.75 point gain.",
                cost: new Decimal(22000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,71)},
                branches: [91],
            },
            91: {
                title: "Upgrade #11",
                description: "x3 money gain. Go start buying some money upgrades.",
                cost: new Decimal(50000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,81)},
                branches: [101],
            },
            101: {
                title: "Upgrade #12",
                description: "The longer you own this upgrade, the stronger the boost becomes. Formula: log125(time)",
                cost: new Decimal(100000),
                currencyDisplayName: "points",
                currencyInternalName: "points",

                // Save the time when the upgrade was bought
                onPurchase() {
                    player[this.layer].upgradeTimes = player[this.layer].upgradeTimes || {};
                    player[this.layer].upgradeTimes[this.id] = player.time;
                },

                // Calculate effect based on time since purchase
                effect() {
                    // If somehow not purchased or no timestamp, effect = 1
                    if (!player[this.layer].upgradeTimes ||
                        !player[this.layer].upgradeTimes[this.id])
                        return new Decimal(1);

                    let boughtTime = player[this.layer].upgradeTimes[this.id];
                    let timeOwned = new Decimal(player.time).minus(boughtTime);

                    // Example scaling: grows logarithmically, but you can change it
                    return timeOwned.add(1).log(125).add(1);
                },

                effectDisplay() {
                   return format(this.effect()) + "×";
                },
                unlocked() {return hasUpgrade(this.layer,91)},
                branches: [111, 112],
            },
            111: {
                title: "Upgrade #13",
                description: "x3 money gain, but x0.8 point gain.",
                cost: new Decimal(400000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,101)},
                branches: [121],
            },
            112: {
                title: "Upgrade #14",
                description: "x3 point gain, but x0.8 money gain.",
                cost: new Decimal(500000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,101)},
                branches: [121],
            },
            121: {
                title: "Upgrade #15",
                description: "x1.01 money and point gain. :3",
                cost: new Decimal(1750000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,111) || hasUpgrade(this.layer,112)},
                branches: [131],
            },
            131: {
                title: "Upgrade #16",
                description: "+25,000 point gain. Not affected by multipliers.",
                cost: new Decimal(2500000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,121)},
                branches: [141],
            },
            141: {
                title: "Upgrade #17",
                description: "Money is boosted by total playtime. Formula: log150(playtime)^0.8",
                cost: new Decimal(6000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",

                // Calculate effect based on time since purchase
                effect() {
                    // If somehow not purchased or no timestamp, effect = 
                    let timeOwned = new Decimal(player.time)

                    // Example scaling: grows logarithmically, but you can change it
                    return timeOwned.add(1).log(150).pow(0.8).add(1);
                },

                effectDisplay() {
                   return format(this.effect()) + "×";
                },
                unlocked() {return hasUpgrade(this.layer,131)},
                branches: [151],
            },
             151: {
                title: "Upgrade #18",
                description: "x2 money and point gain.",
                cost: new Decimal(15000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,141)},
                branches: [161],
            },
            161: {
                title: "Upgrade #19",
                description: "Points boost itself again. Formula: points^0.05",
                cost: new Decimal(50000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    return player.points.pow(0.05)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,151)},
                branches: [162, 171],
            },
            162: {
                title: "Upgrade #19-X",
                description: "First risky upgrade! x2 point gain but x0.5 money gain.       *NOTE: UPGRADE-X UPGRADES ARE NOT REQUIRED FOR PROGRESSION.",
                cost: new Decimal(100000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,161)},
            },
            171: {
                title: "Upgrade #20",
                description: "Money boosts itself. Formula: money^0.05",
                cost: new Decimal(100000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    return player.m.points.pow(0.05)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,161)},
                branches: [181],
            },
            181: {
                title: "Upgrade #21",
                description: "x2 point gain.",
                cost: new Decimal(175000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,171)},
                branches: [191, 192],
            },
            191: {
                title: "Upgrade #22",
                description: "+2 base point gain.",
                cost: new Decimal(400000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,181)},
                branches: [201],
            },
            192: {
                title: "Upgrade #23",
                description: "+2 base money gain.",
                cost: new Decimal(1200000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,181)},
                branches: [201],
            },
            201: {
                title: "Upgrade #24",
                description() {
                    if (!hasUpgrade("p", 201)) 
                        return "For every upgrade in this layer unlocked, multiply money gain by 1.05 (compounding)."
            
                    // Point upgrades
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    /* Count buyable 14 only once if bought
                    if (getBuyableAmount("p", 14).gt(0)) unlockedCount++
                    */
                    // Calculate stacking multiplier
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        multiplier = multiplier.times(1.05)
                    }
            
                    return `For every upgrade in this layer unlocked, multiply money gain by 1.05 (compounding). 
                    Current multiplier: x${format(multiplier)}`
                },
                cost: new Decimal(3e9),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    // if (getBuyableAmount("p", 14).gt(0)) unlockedCount++ (this is for buyable)
            
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        multiplier = multiplier.times(1.05)
                    }
            
                    return multiplier
                },
                unlocked() {return hasUpgrade(this.layer,191) && hasUpgrade(this.layer,192)},
                branches: [211],
            },
            211: {
                title: "Upgrade #25",
                description: "1/4 of the way there! Unlock a new layer and currency.",
                cost: new Decimal(5e9),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,201)},
                branches: [211],
            },
        },   

    
        buyables: {
        },

        /* infoboxes: {
            1: {
                title() {return "You have " + format(player.points) + "p (Points) | +" + format(getPointGen()) + "/s‎"},
                body() {return "Before you begin to play, go to the tree tab and navigate to the settings, then set single-tab mode to ALWAYS. This is very important! Once you've done that, you can click on the white section at the top of this infobox to minimize it."},
                unlocked() {return true}
                }
            }, */
    
        tabFormat: [
            ["row", [
                ["infobox", 1],
            ]],
            ["row", [
                ["upgrade", 11],
                ["upgrade", 12],
                ["upgrade", 13],
                ["buyable", 14],
            ]],
            ["row", [
                ["upgrade", 21],
                ["upgrade", 22],
                ["upgrade", 23],
                ["upgrade", 24],
            ]],
            ["row", [
                ["upgrade", 31],
                ["upgrade", 32],
                ["upgrade", 33],
                ["upgrade", 34]
            ]],
            ["row", [
                ["upgrade", 41],
                ["upgrade", 42],
                ["upgrade", 43],
                ["upgrade", 44]
            ]],
             ["row", [
                ["upgrade", 51],
                ["upgrade", 52],
                ["upgrade", 53],
                ["upgrade", 54],
            ]],
            ["row", [
                ["upgrade", 61],
                ["upgrade", 62],
                ["upgrade", 63],
            ]],
            ["row", [
                ["upgrade", 71],
            ]],
            ["row", [
                ["upgrade", 81],
            ]],
            ["row", [
                ["upgrade", 91],
            ]],
            ["row", [
                ["upgrade", 101],
            ]],
            ["row", [
                ["upgrade", 111],
                ["upgrade", 112],
            ]],
            ["row", [
                ["upgrade", 121],
            ]],
            ["row", [
                ["upgrade", 131],
            ]],
            ["row", [
                ["upgrade", 141],
            ]],
            ["row", [
                ["upgrade", 151],
            ]],
            ["row", [
                ["upgrade", 161],
                ["upgrade", 162],
            ]],
            ["row", [
                ["upgrade", 171],
            ]],
            ["row", [
                ["upgrade", 181],
            ]],
            ["row", [
                ["upgrade", 191],
                ["upgrade", 192],
            ]],
            ["row", [
                ["upgrade", 201],
            ]],
            ["row", [
                ["upgrade", 211],
            ]],
        ],
    
        layerShown(){ return true },
    })
    

/* addLayer("sp", {
        name: "subpoints",
        symbol: "SP",
        position: 1,
        startData() { 
            return {
                unlocked: false,
                points: new Decimal(0),
            }
        },
        color: "#4BDC13",
        row: 0,
        resource: "sub-points",
        type: "none", // We'll handle conversion manually
        layerShown() { return player.sp.unlocked },
    
        // Function to calculate subpoints from points
        convertToSubpoints() {
            if (player.points.lt(250000)) return new Decimal(0)
            let subpointamount = new Decimal(0)
            if (hasUpgrade("p", 53)) subpointamount = player.points.div(250000).pow(0.85)
            else subpointamount = player.points.div(250000).pow(0.8)
            if (hasUpgrade("pr", 22)) subpointamount = subpointamount.add(2)
            if (hasUpgrade("p", 42)) subpointamount = subpointamount.times(2)
            if (hasUpgrade("pr", 23)) subpointamount = subpointamount.times(2)
            if (hasUpgrade("p", 51)) subpointamount = subpointamount.times(5)
            if (hasUpgrade('pr', 31)) subpointamount = subpointamount.times(upgradeEffect('pr', 31))
            if (hasUpgrade("pr", 24)) subpointamount = subpointamount.pow(1.05)
            return subpointamount
        },

update(diff) {

    let g = this.convertToSubpoints() // calculate potential SP
    if (g.lte(0)) return                 // skip if zero or negative

    // Apply 0.1% of g per second
    let gain = g.times(0.01).times(diff)
    player.sp.points = player.sp.points.add(gain)
},


    
        // Optional: add a clickable to perform the conversion
        clickables: {
            11: {
                title: "Convert points → subpoints",
                canClick() {
                    return player.points.gte(250000)
                },
                onClick() {
                    let subpoints = layers.sp.convertToSubpoints()
                    player.sp.points = player.sp.points.add(subpoints)
                    player.points = new Decimal(0) // keep minimum
                    player.p.upgrades = []
                        for (let id in player.p.buyables) {
        player.p.buyables[id] = new Decimal(0)
    }
                },
                display() {
                    if (hasUpgrade("p", 53)) return "Convert points above 250,000 into subpoints using (points/250000)^0.85"
                    else return "Convert points above 250,000 into subpoints using (points/250000)^0.8"
                }
            },

        },
        upgrades: {
            21: {
                title: "#1s: Sub-pointing",
                description: "Upgrade #0 now starts generating points at 2/s.",
                cost: new Decimal(1),
                currencyLayer: "",
            },
                        22: {
            title: "#2s: Enhancement",
            description: "Upgrade #1 now boosts points by 4x.",
            cost: new Decimal(4),
            currencyLayer: "",      
            },
            23: {
                title: "#3s: Limit Breaker",
                description: "Upgrade #3's cap is increased by 20.",
                cost: new Decimal(15),
                currencyLayer: "",
            },
            24: {
                title: "#4s: Power Building",
                description: "Upgrade #3's point gain increase is increased by +0.5.",
                cost: new Decimal(25),
                currencyLayer: "",
            },
            31: {
                title: "#5s: Better Formula",
                description: "Improve Upgrade #4's point boosting formula.",
                cost: new Decimal(125),
                currencyLayer: "",
            },
            33: {
                title: "#7s: Bigger exponents",
                description: "Improve #6's point exponent by +0.03.",
                cost: new Decimal(100000),
                currencyLayer: "",
            },
            34: {
                title: "#8s: Base after base",
                description: "Improve #9's base point gain by +10.",
                cost: new Decimal(200000),
                currencyLayer: "",
            },
            41: {
                title: "#9s: Ridiculous increase",
                description: "Improve #10's point gain by +99,800,000",
                cost: new Decimal(300000),
                currencyLayer: "",
            },
            42: {
                title: "#10s: Triple's tripled",
                description: "Triples upgrade #11.",
                cost: new Decimal(400000),
                currencyLayer: "",
            },
            43: {
                title: "#11s: Diamond subchanges",
                description: "Upgrade #2 is now tripled tripled.",
                cost: new Decimal(2000000),
                currencyLayer: "",
            },
            44: {
                title: "#12s: Supersubpoints",
                description: "Upgrade #12's formula is greatly improved.",
                cost: new Decimal(100000000),
                currencyLayer: "",
            },
            51: {
                title: "#13s: Rapid booster",
                description: "Improve both #4 and #14 formulas.",
                cost: new Decimal(850000000000),
                currencyLayer: "",
            },
            52: {
                title: "#14s: Hyper starter",
                description: "If under 1e18 points, ^1.2 point gain.",
                cost: new Decimal(1e14),
                currencyLayer: "",
                 effect() {
                        if (player.points.lt(1e18)) return new Decimal(1.2)
                        else return new Decimal(1)
                },
            },
            53: {
                title: "#15s: Mega generator",
                description: "Upgrade #0 now starts generating points at 10/s.",
                cost: new Decimal(2.5e15),
                currencyLayer: "",
            },
            54: {
                title: "#16s: Reformulation",
                description: "Upgrade #10 is increased based on how many subpoints and points you have. (1e9*(sp^0.3)*(p^0.3))",
                cost: new Decimal(9e15),
                currencyLayer: "",
            },
            
        },
        buyables: {
            32: {
    title: "#6s: Sub-buyables",
    display() { 
        let bought = getBuyableAmount("sp", 32)
        let cap = this.cap()
        return `Multiply point gain by +1 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points`
    },
    cost(x) { 
        return new Decimal(180).times(Decimal.pow(2, x)).pow(1.1)
    },
    canAfford() { 
        let bought = getBuyableAmount("sp", 32)
        return player.sp.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("sp", 32)
        if (bought.gte(this.cap())) return // stop if capped
        player.sp.points = player.sp.points.sub(this.cost(bought))
        setBuyableAmount("sp", 32, bought.add(1))
    },
    effect() {
        let amt = getBuyableAmount("sp", 32)
        return new Decimal(1).add(amt.times(1))
    },
    style() { return { width: "125px", height: "125px" } },
    cap() {
        let base = 3
        if (hasUpgrade("pr", 32)) base += 17
        return base
    },
        style() {
            return {
                "width": "125px",
                "height": "125px"
            }
     },
},

        },
    
        // Optional: show conversion in the tab
        tabFormat: [
    // Display the conversion info
    ["display-text", function() {
        if (!player.sp.unlocked) return "Unlock this layer with Upgrade #8."
        let sub = layers.sp.convertToSubpoints()
        return `You can convert points to subpoints: ${format(sub)}`
    }],

    // Row with clickables
    ["row", [
        ["clickable", 11],
    ]],

    // Row with upgrades
    ["row", [
        ["upgrade", 21],
        ["upgrade", 22],
        ["upgrade", 23],
        ["upgrade", 24],
    ]],
    ["row", [
        ["upgrade", 31],
        ["buyable", 32],
        ["upgrade", 33],
        ["upgrade", 34],
    ]],
     ["row", [
        ["upgrade", 41],
        ["upgrade", 42],
        ["upgrade", 43],
        ["upgrade", 44],
    ]],
    ["row", [
        ["upgrade", 51],
        ["upgrade", 52],
        ["upgrade", 53],
        ["upgrade", 54],
    ]],
]
    }) */

addLayer("pr", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(5e9), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.pr.points) + "PR (Prestige)"
            },
                body() {return "Prestige resets your points and money, but converts at a rate of"},
                unlocked() {return true}
                }
            },
    layerShown(){return true}
})

addLayer("m", {
        name: "money",
        symbol: "M",
        position: 0,
        startData() { 
            return {
                unlocked: false,
                points: new Decimal(0),
            }
        },
        color: "#058d00ff",
        row: 0,
        resource: "dollars",
        layerShown() { return player.m.unlocked },

        update(diff) {
    let g = new Decimal(1)
    let gain = g.times(diff)
    if (hasUpgrade("p", 192)) gain = gain.add(2)
    gain = gain.times(buyableEffect("m", 12))
    if (!hasUpgrade("p", 63)) gain = gain.times(0)
    if (hasUpgrade("p", 91)) gain = gain.times(3)
    if (hasUpgrade("p", 111)) gain = gain.times(3)
	if (hasUpgrade("p", 112)) gain = gain.times(0.8)
    if (hasUpgrade("p", 121)) gain = gain.times(1.01)
    if (hasUpgrade("p", 141)) gain = gain.times(upgradeEffect("p", 141))
    if (hasUpgrade("p", 151)) gain = gain.times(2)
    if (hasUpgrade("p", 171)) gain = gain.times(upgradeEffect("p", 171))
    player.m.points = player.m.points.add(gain)
    },

    getMoneyPerSecond() { // Literally only used for the title
    let g = new Decimal(1)           
    let gain = g.times(1)   
    if (hasUpgrade("p", 192)) gain = gain.add(2)           
    gain = gain.times(buyableEffect("m", 12))  
    if (!hasUpgrade("p", 63)) gain = gain.times(0)
    if (hasUpgrade("p", 91)) gain = gain.times(3)
    if (hasUpgrade("p", 111)) gain = gain.times(3)
	if (hasUpgrade("p", 112)) gain = gain.times(0.8)
    if (hasUpgrade("p", 121)) gain = gain.times(1.01)
    if (hasUpgrade("p", 141)) gain = gain.times(upgradeEffect("p", 141))
    if (hasUpgrade("p", 151)) gain = gain.times(2)
    if (hasUpgrade("p", 171)) gain = gain.times(upgradeEffect("p", 171))
    return gain                    
    },
    
        upgrades: {
        },

        infoboxes: {        
            1: {
                title() {
                let perSec = layers["m"].getMoneyPerSecond()  // use the layer reference
                return "You have " + format(player.m.points) + "$ (Money) | +" + format(perSec) + "/s"
            },
                body() {return "For every new layer you unlock, there will be an infobox. Money can be spent on buyables that will speed up your progress."},
                unlocked() {return true}
                }
            },

        buyables: {
            11: {
    title: "#1M: Point Increase",
    display() { 
        let bought = getBuyableAmount("m", 11)
        let cap = this.cap()
        /* if (hasUpgrade("sp", 24)) return `Multiply point gain by +1 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` */
        return `Multiply point gain by x1.25 each purchase. 
        After every 10 levels, the effect is multiplied by x1.5.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(10).times(Decimal.pow(1.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 11)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 11)
        if (bought.gte(this.cap())) return // stop if capped
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 11, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 11)  
    let base = new Decimal(1).add(amt.times(0.25))
    let bonus = Decimal.pow(1.5, Math.floor(amt / 10))
    return base.times(bonus).times(100).round().div(100) // keep as Decimal
},
    cap() {
        let base = 100
        /* if (hasUpgrade("sp", 23)) base += 20
        if (hasUpgrade("pr", 32)) base += 65 */
        return base
    },
    currency() { 
        return player.m.points 
    },
},
12: {
    title: "#2M: Money Increase",
    display() { 
        let bought = getBuyableAmount("m", 12)
        let cap = this.cap()
        /* if (hasUpgrade("sp", 24)) return `Multiply point gain by +1 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` */
        return `Multiply money gain by x1.2 each purchase. 
        After every 10 levels, the effect is multiplied by x1.4.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(15).times(Decimal.pow(1.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 12)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 12)
        if (bought.gte(this.cap())) return // stop if capped
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 12)  
    let base = new Decimal(1).add(amt.times(0.2))
    let bonus = Decimal.pow(1.4, Math.floor(amt / 10))
    return base.times(bonus).times(100).round().div(100) // keep as Decimal
},
    cap() {
        let base = 100
        /* if (hasUpgrade("sp", 23)) base += 20
        if (hasUpgrade("pr", 32)) base += 65 */
        return base
    },
},
currency() { 
        return player.m.points 
    },
        },
        
    
        tabFormat: [
    ["row", [
        ["infobox", 1],
    ]],
    ["row", [
        ["buyable", 11],
        ["buyable", 12],
        ["upgrade", 13],
        ["upgrade", 14]
    ]],
    ["row", [
        ["upgrade", 21],
        ["upgrade", 22],
        ["upgrade", 23]
    ]]
]

    })