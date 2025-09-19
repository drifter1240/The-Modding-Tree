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
                description: "Double your point gain.",
                cost: new Decimal(5),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            13: {
                title: "#2: Triple gain",
                description: "Triple your point gain.",
                cost: new Decimal(12),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            21: {
                title: "#4: Boost",
                description: "Points boost itself",
                cost: new Decimal(120),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    return player.points.add(1).pow(0.15)
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
                cost: new Decimal(300),
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
                cost: new Decimal(1000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            24: {
                title: "#7: Base increase",
                description: "Increase base point gain by +1",
                cost: new Decimal(3000),
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
                cost: new Decimal(500000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
            34: {
                title: "#11: Another triple",
                description: "Triple your point gain. Again.",
                cost: new Decimal(2500000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
            },
        },   

    
        buyables: {
            14: {
                title: "#3: Buyables",
                display() { 
                    return `Multiply point gain by +0.5 each purchase.  
                    Currently: x${this.effect()}  
                    Bought: ${getBuyableAmount("p", 14)}/10  
                    Cost: ${format(this.cost())} points`
                },
                cost(x) { 
                    return new Decimal(40).times(Decimal.pow(1.7, x)).pow(1.05)
                },
                canAfford() { 
                    return player.points.gte(this.cost()) && getBuyableAmount("p", 14).lt(10)
                },
                buy() {
                    player.points = player.points.sub(this.cost())
                    setBuyableAmount("p", 14, getBuyableAmount("p", 14).add(1))
                },
                effect() {
                    let amt = getBuyableAmount("p", 14)
                    return new Decimal(1).add(amt.times(0.5))
                },
                style() { return { width: "125px", height: "125px" } },
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
            return player.points.sub(250000).pow(0.3)
        },
        tabFormat: [
            ["row", [
                ["clickable", 11],
            ]],
            ["row", [
                ["upgrade", 21],
            ]],
        ],
    
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
                },
                display() {
                    return "Convert points above 250,000 into subpoints using (points-250000)^0.9"
                }
            }
        },
        upgrades: {
            21: {
                title: "#1s: Sub-pointing",
                description: "Start generating points at a rate of 1/s.",
                cost: new Decimal(1),
                currencyLayer: "",
            },
        },
        
    
        // Optional: show conversion in the tab
        tabFormat: [
            ["display-text", function() {
                if (!player.sp.unlocked) return "Unlock this layer with Upgrade #8."
                let sub = layers.sp.convertToSubpoints()
                return `You can convert points to subpoints: ${format(sub)}`
            }],
            "clickables",
        ],
    })
    

