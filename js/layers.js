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
                description: "Triple your point gain.",
                cost: new Decimal(25),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            21: {
                title: "#4: Boost",
                description() {
                if (hasUpgrade("sp", 31)) return "Points boost itself (enhanced: points^0.175)."
                return "Points boost itself. (points^0.15)"
                    },
                cost: new Decimal(200),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    if (hasUpgrade("sp", 31)) return player.points.add(1).pow(0.175)
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
                    let pointUpgrades = [11, 12, 13, 21, 23, 24, 31, 32, 33]
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
                    let pointUpgrades = [11, 12, 13, 21, 23, 24, 31, 32, 33]
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
                description: "Increase point gain by ^1.02",
                cost: new Decimal(1500),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
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
                description: "Unlock the 'subpoints' layer, allowing conversion of points to sub-points.",
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
                description: "+5 base point gain. Not broken.",
                cost: new Decimal(35000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            33: {
                title: "#10: Huge increase... sort of",
                description: "+10,000 point gain. No multipliers though :)",
                cost: new Decimal(750000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            34: {
                title: "#11: Another triple",
                description: "Triple your point gain. Again.",
                cost: new Decimal(4000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            41: {
                title: "#12: Substitute",
                description: "Sub-points boost point gain",
                cost: new Decimal(30000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    return player.sp.points.add(1).pow(0.5)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            },
            42: {
                title: "#12: Sub-booster",
                description: "Double your sub-point gain.",
                cost: new Decimal(100000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            43: {
                title: "#13: Secondary booster",
                description: "Points boost itself, again. (log1.5(points))",
                cost: new Decimal(900000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                        return player.points.add(1).log(1.5)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
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
                ["upgrade", 43]
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
            if (hasUpgrade("p", 42)) subpointamount = subpointamount.times(2)
            return subpointamount
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
                description: "Let's start simple. Double your point gain.",
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
                description: "Upgrade #4's cap is increased by 20.",
                cost: new Decimal(10),
                currencyLayer: "",
            },
            24: {
                title: "#4s: Power Building",
                description: "Upgrade #4's point gain increase is increased by +0.5.",
                cost: new Decimal(20),
                currencyLayer: "",
            },
            31: {
                title: "#5s: Better Formula",
                description: "Improve Upgrade #5's point boosting formula by ^0.025.",
                cost: new Decimal(45),
                currencyLayer: "",
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
    ]],
]
    })
    

