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
        name: "points layer",
        symbol: "P",
        position: 0,
        startData() { return {
            unlocked: true,
        }},
        color: "#4BDC13",
        row: 0,
        type: "none",
    
        upgrades: {
            11: {
                title: "#0: The beginning",
                description: "Start generating points at a rate of 1/s.",
                cost: new Decimal(0),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            12: {
                title: "#1: Double gain",
                description() {
                if (hasUpgrade("sp", 22)) return "Doubles your point gain (enhanced: ×4)."
                return "Doubles your point gain."
                    },
                        effect() {
                    let base = new Decimal(2) // default x2
                    if (hasUpgrade("sp", 22)) base = new Decimal(4)
                    return base
                    },
                cost: new Decimal(10),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                style() {
                if (hasUpgrade("sp", 22)) {
            return {
                "background-color": "#FFD700", // gold if enhanced
                "border": "3px solid #FFA500",
                "color": "#000000"
            }
        }
    },
            },
            13: {
                title: "#2: Triple gain",
                 description() {
                if (hasUpgrade("sp", 43)) return "Triples your point gain. (enhanced: x27)"
                return "Triples your point gain."
                    },
                        effect() {
                    let base = new Decimal(3) // default x2
                    if (hasUpgrade("sp", 43)) base = new Decimal(27)
                    return base
                    },
                cost: new Decimal(25),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                style() {
                if (hasUpgrade("sp", 43)) {
            return {
                "background-color": "#00ccffff", // gold if enhanced
                "border": "3px solid #4400ffff",
                "color": "#000000"
            }
        }
    },
            },
            21: {
                title: "#4: Boost",
                description() {
                if (hasUpgrade("sp", 31)) return "Points boost itself (enhanced: points^0.18)."
                return "Points boost itself. (points^0.15)"
                    },
                cost: new Decimal(200),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    if (hasUpgrade("sp", 31)) return player.points.add(1).pow(0.18)
                    else return player.points.add(1).pow(0.15)
                },
                style() {
                if (hasUpgrade("sp", 31)) {
            return {
                "background-color": "#FFD700", // gold if enhanced
                "border": "3px solid #FFA500",
                "color": "#000000"
            }
        }
    },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            },
            22: {
                title: "#5: Compounding",
                description() {
                    if (!hasUpgrade("p", 22)) 
                        return "For every point upgrade unlocked, multiply point gain by 1.2 compounding."
            
                    // Point upgrades
                    let pointUpgrades = [11, 12, 13, 21, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    // Count buyable 14 only once if bought
                    if (getBuyableAmount("p", 14).gt(0)) unlockedCount++
            
                    // Calculate stacking multiplier
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        multiplier = multiplier.times(1.2)
                    }
            
                    return `For every point upgrade unlocked, multiply point gain by 1.2 (compounding).  
            Current multiplier: x${format(multiplier)}`
                },
                cost: new Decimal(450),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    let pointUpgrades = [11, 12, 13, 21, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    if (getBuyableAmount("p", 14).gt(0)) unlockedCount++
            
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        multiplier = multiplier.times(1.2)
                    }
            
                    return multiplier
                }
            },
            23: {
                title: "#6: Exponential",
                description() {
                if (hasUpgrade("sp", 33)) return "Increase point gain by ^1.05."
                return "Increase point gain by ^1.02."
                    },
                    effect() {
                    let base = new Decimal(1.02)
                    if (hasUpgrade("sp", 33)) base = new Decimal(1.05)
                    return base
                    },
                cost: new Decimal(1500),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                style() {
                if (hasUpgrade("sp", 33)) {
            return {
                "background-color": "#FFD700", // gold if enhanced
                "border": "3px solid #FFA500",
                "color": "#000000"
            }
        }
    },
            },
            24: {
                title: "#7: Base increase",
                description: "Increase base point gain by +1",
                cost: new Decimal(6000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            31: {
                title: "#8: Subpoints",
                description: "Unlock the 'subpoints' layer. Upgrade your upgrades!",
                cost: new Decimal(10000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                onPurchase() {
                    player.sp.unlocked = true
                },
            },
            32: {
                title: "#9: Very big base increase",
                description() {
                if (hasUpgrade("sp", 34)) return "+10 base point gain. Might be broken."
                return "+5 base point gain. Not broken."
                    },
                    effect() {
                    let base = new Decimal(5)
                    if (hasUpgrade("sp", 34)) base = new Decimal(10)
                    return base
                    },
                cost: new Decimal(35000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                style() {
                if (hasUpgrade("sp", 34)) {
            return {
                "background-color": "#FFD700", // gold if enhanced
                "border": "3px solid #FFA500",
                "color": "#000000"
            }
        }
    },
            },
            33: {
                title: "#10: Huge increase... sort of",
                description() {
                if (hasUpgrade("sp", 41)) return "+10,000,000 point gain. No multipliers, thank god."
                return "+10,000 point gain. No multipliers though :)"
                    },
                    effect() {
                    let base = new Decimal(10000)
                    if (hasUpgrade("sp", 41)) base = new Decimal(10000000)
                    return base
                    },
                cost: new Decimal(750000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                style() {
                if (hasUpgrade("sp", 41)) {
            return {
                "background-color": "#FFD700", // gold if enhanced
                "border": "3px solid #FFA500",
                "color": "#000000"
            }
        }
    },
            },
            34: {
                title: "#11: Another triple",
                description() {
                if (hasUpgrade("sp", 42)) return "Triple triple your point gain."
                return "Triple your point gain. Again."
                    },
                    effect() {
                    let base = new Decimal(3)
                    if (hasUpgrade("sp", 42)) base = new Decimal(9)
                    return base
                    },
                cost: new Decimal(4000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                style() {
                if (hasUpgrade("sp", 42)) {
            return {
                "background-color": "#FFD700", // gold if enhanced
                "border": "3px solid #FFA500",
                "color": "#000000"
            }
        }
    },
            },
            41: {
                title: "#12: Substitute",
                description: "Sub-points boost point gain",
                cost: new Decimal(25000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    return player.sp.points.add(1).pow(0.3)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            },
            42: {
                title: "#13: Sub-booster",
                description: "Double your sub-point gain.",
                cost: new Decimal(85000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            43: {
                title: "#14: Secondary booster",
                description: "Points boost itself, again. (log1.4(points))",
                cost: new Decimal(550000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                        return player.points.add(1).log(1.4)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            },
            44: {
                title: "#15: Prestige",
                description: "Unlock the 'prestige' layer, resetting everything for boosts.",
                cost: new Decimal(2000000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                onPurchase() {
                    player.pr.unlocked = true
                },
            },
            51: {
                title: "#16: Way too many subpoints",
                description: "Multiply subpoint gain by x10.",
                cost: new Decimal(7500000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            52: {
                title: "#17: Tradeoff",
                description: "x0.05 point gain, but ^1.15 point gain afterward.",
                cost: new Decimal(60000000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            53: {
                title: "#18: Tradeoff",
                description: "x0.05 point gain, but ^1.15 point gain afterward.",
                cost: new Decimal(60000000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            54: {
                title: "#19: The Tower",
                description: "Unlock the Tower. It's a long journey.",
                cost: new Decimal(700000000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                onPurchase() {
                    player.t.unlocked = true
                },
            },

        },   

    
        buyables: {
            14: {
    title: "#3: Buyables",
    display() { 
        let bought = getBuyableAmount("p", 14)
        let cap = this.cap()
        if (hasUpgrade("sp", 24)) return `Multiply point gain by +1 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points`
        else return `Multiply point gain by +0.5 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points`
    },
    cost(x) { 
        return new Decimal(50).times(Decimal.pow(1.7, x)).pow(1.1)
    },
    canAfford() { 
        let bought = getBuyableAmount("p", 14)
        return player.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("p", 14)
        if (bought.gte(this.cap())) return // stop if capped
        player.points = player.points.sub(this.cost(bought))
        setBuyableAmount("p", 14, bought.add(1))
    },
    effect() {
        let amt = getBuyableAmount("p", 14)
        if (hasUpgrade("sp", 24)) return new Decimal(1).add(amt.times(1))
        return new Decimal(1).add(amt.times(0.5))
    },
    style() { return { width: "125px", height: "125px" } },
    cap() {
        let base = 10
        if (hasUpgrade("sp", 23)) base += 20
        return base
    },
        style() {
                if (hasUpgrade("sp", 24)) {
            return {
                "background-color": "#FFD700", // gold if enhanced
                "border": "3px solid #FFA500",
                "color": "#000000",
                "width": "125px",
                "height": "125px"
            }
        } else return {
                "width": "125px",
                "height": "125px"
            }
     },
},

        },
    
        tabFormat: [
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
        ],
    
        layerShown(){ return true },
    })

addLayer("sp", {
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
            subpointamount = player.points.div(250000).pow(0.8)
            if (hasUpgrade("pr", 22)) subpointamount = subpointamount.add(2)
            if (hasUpgrade("p", 42)) subpointamount = subpointamount.times(2)
            if (hasUpgrade("pr", 23)) subpointamount = subpointamount.times(2)
            if (hasUpgrade("p", 51)) subpointamount = subpointamount.times(10)
            return subpointamount
        },

update(diff) {
    if (!hasUpgrade("pr", 23)) return console.log("false")

    let g = this.convertToSubpoints() // calculate potential SP
    if (g.lte(0)) return                 // skip if zero or negative

    // Apply 0.1% of g per second
    let gain = g.times(0.001).times(diff)
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
                    return "Convert points above 250,000 into subpoints using (points/250000)^0.8"
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
                cost: new Decimal(10),
                currencyLayer: "",
            },
            24: {
                title: "#4s: Power Building",
                description: "Upgrade #3's point gain increase is increased by +0.5.",
                cost: new Decimal(20),
                currencyLayer: "",
            },
            31: {
                title: "#5s: Better Formula",
                description: "Improve Upgrade #4's point boosting formula by ^0.03.",
                cost: new Decimal(45),
                currencyLayer: "",
            },
            33: {
                title: "#7s: Bigger exponents",
                description: "Improve #6's point exponent by +0.03.",
                cost: new Decimal(2500),
                currencyLayer: "",
            },
            34: {
                title: "#8s: Base after base",
                description: "Improve #9's base point gain by +5.",
                cost: new Decimal(5000),
                currencyLayer: "",
            },
            41: {
                title: "#9s: Ridiculous increase",
                description: "Improve #10's point gain by +9,900,000",
                cost: new Decimal(12000),
                currencyLayer: "",
            },
            42: {
                title: "#10s: Triple's tripled",
                description: "Triples upgrade #11.",
                cost: new Decimal(20000),
                currencyLayer: "",
            },
            43: {
                title: "#11s: Diamond subchanges",
                description: "Upgrade #2 is now tripled tripled.",
                cost: new Decimal(1000000),
                currencyLayer: "",
            },
            
        },
        buyables: {
            32: {
    title: "#6s: Sub-buyables",
    display() { 
        let bought = getBuyableAmount("sp", 32)
        let cap = this.cap()
        return `Multiply point gain by +1.25 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points`
    },
    cost(x) { 
        return new Decimal(90).times(Decimal.pow(2, x)).pow(1.1)
    },
    canAfford() { 
        let bought = getBuyableAmount("sp", 32)
        return player.sp.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("sp", 32)
        if (bought.gte(this.cap())) return // stop if capped
        player.points = player.points.sub(this.cost(bought))
        setBuyableAmount("sp", 32, bought.add(1))
    },
    effect() {
        let amt = getBuyableAmount("sp", 32)
        return new Decimal(1).add(amt.times(1.25))
    },
    style() { return { width: "125px", height: "125px" } },
    cap() {
        let base = 3
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
    ]],
]
    })
    
addLayer("t", {
        name: "tower",
        symbol: "T",
        position: 0,
        startData() { 
            return {
                unlocked: false,
                points: new Decimal(0),
            }
        },
        color: "#dc5313ff",
        row: 0,
        resource: "tower points",
        layerShown() { return player.t.unlocked },

        update(diff) {
    let g = new Decimal(1)
    if (!hasUpgrade("t", 11)) g = g.times(0)
    let gain = g.times(diff)
    player.t.points = player.t.points.add(gain)
},
    
        upgrades: {
           11: {
                title: "#0t: Begin the climb",
                description: "Start generating tower points at a rate of 1/s. Tip: You shouldn't focus on this. Check back on it routinely.",
                cost: new Decimal(0),
            },
        12: {
                title: "#1t: First floor",
                description: "1.5x point gain.",
                cost: new Decimal(75),
            },
        13: {
                title: "#2t: Treasure chest",
                description: "+1 base point gain.",
                cost: new Decimal(250),
            },
        14: {
                title: "#3t: Artifact",
                description: "Points are boosted by tower points",
                cost: new Decimal(500),
                effect() {
                    return player.t.points.add(1).pow(0.15)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            },
        21: {
                title: "#4t: Second floor",
                description: "2x point gain.",
                cost: new Decimal(1000),
            },
        },
    
        tabFormat: [
    ["row", [
        ["upgrade", 11],
        ["upgrade", 12],
        ["upgrade", 13],
        ["upgrade", 14]
    ]],
    ["row", [
        ["upgrade", 21]
    ]]
]

    })
    
    addLayer("pr", {
        name: "prestige",
        symbol: "PR",
        position: 0,
        startData() { 
            return {
                unlocked: false,
                points: new Decimal(0),
            }
        },
        color: "#d9dc13ff",
        row: 1,
        resource: "prestige points",
        type: "none", // We'll handle conversion manually
        layerShown() { return player.pr.unlocked },
    
        // Function to calculate subpoints from points
        convertToPrestigepoints() {
            if (player.points.lt(10000000000)) return new Decimal(0)
            let prpointamount = new Decimal(0)
            prpointamount = player.points.div(10000000000).pow(0.3)
            return prpointamount
        },
    
        // Optional: add a clickable to perform the conversion
        clickables: {
            11: {
                title: "Convert points → subpoints",
                canClick() {
                    return player.points.gte(10000000000)
                },
                onClick() {
                    let prepoints = layers.pr.convertToPrestigepoints()
                    player.pr.points = player.pr.points.add(prepoints)
                    player.points = new Decimal(0)
                    player.sp.points = new Decimal(0)
                    player.p.upgrades = []
                    player.sp.upgrades = []
                        for (let id in player.p.buyables) {
                    player.p.buyables[id] = new Decimal(0)
                    }
                     for (let id in player.sp.buyables) {
                    player.sp.buyables[id] = new Decimal(0)
                    }
                },
                display() {
                    return "Convert points above 1e10 into subpoints using (points/1e10)^0.3"
                }
            },

        },
        upgrades: {
            21: {
                title: "#1p: Prestiges",
                description: "Let's start simple. Triple your point gain.",
                cost: new Decimal(1),
                currencyLayer: "",
            },
            22: {
                title: "#2p: Base two",
                description: "+2 base point & sub-point gain.",
                cost: new Decimal(2),
                currencyLayer: "",
            },
            23: {
                title: "#3p: Passive generation",
                description: "2x subpoints, and subpoints will passively generate at 0.1% per second.",
                cost: new Decimal(4),
                currencyLayer: "",
            },
            24: {
                title: "#4p: How many exponents do you want dude",
                description: "^1.015 points, subpoints and prestige points.",
                cost: new Decimal(10),
                currencyLayer: "",
            }
            
        },
    
        // Optional: show conversion in the tab
        tabFormat: [
    // Display the conversion info
    ["display-text", function() {
        if (!player.pr.unlocked) return "Unlock this layer with Upgrade #14."
        let sub = layers.pr.convertToPrestigepoints()
        return `You can convert points to prestige points: ${format(sub)}`
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
    ]]
]
    })
