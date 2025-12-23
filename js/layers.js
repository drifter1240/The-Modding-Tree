
addLayer("layer1", {
    name: "P",
    symbol:"P",
    position: 0,
    row: 0,
    color: "#7cee4fff",
    type: "none",
    tooltip: "Layer 1: Points",
    
    tabFormat: {
        "Points": {
            embedLayer: "p",
            buttonStyle: {
                "color": "#7cee4fff",
                "border": "2px solid #7cee4fff",
            },
            glowColor: "#ffffffff",
        },
        "Money": {
            embedLayer: "m",
            unlocked() {if (hasUpgrade('p',63)) return true
            else return false},
            buttonStyle: {
                "color": "#2bdd25ff",
                "border": "2px solid #2bdd25ff"
            },
            glowColor: "#2bdd25ff"
        },
        "Prestige": {
            embedLayer: "pr",
            unlocked() {if (hasUpgrade('p',211)) return true
            else return false},
            buttonStyle: {
                "color": "#287233",
                "border": "2px solid #287233"
            },
            glowColor: "#287233"
        },
        "Clicks": {
            embedLayer: "c",
            unlocked() {if (hasUpgrade('p',301)) return true
            else return false},
            buttonStyle: {
                "color": "#ffffffdc",
                "border": "2px solid #ffffffdc"
            },
            glowColor: "#ffffffdc"
        },
        "Subpoints": {
            embedLayer: "sp",
            unlocked() {if (hasUpgrade('p',401) || player.sp.points.gte(0.01) || hasUpgrade("sp", 11)) return true
            else return false},
            buttonStyle: {
                "color": "#4e3ee2ff",
                "border": "2px solid #4e3ee2ff"
            },
            glowColor: "#4e3ee2ff"
        },
    }
})

addLayer("p", {
        name: "points",
        position: 0, 
        startData() { return {
            unlocked: true,
            points: new Decimal(1),
        } },
        color: "#7cee4fff",
        row: 0, 
        layerShown() { return false },
         doReset(resettingLayer) {
            if (resettingLayer === "sp") {
                layerDataReset(this.layer)
                if (hasUpgrade("sp", 41)) {
                    player[this.layer].upgrades = [211]
                }
            }
        },

        automate() {
            if (hasUpgrade("sp", 11)) {
                if (canAffordUpgrade(this.layer, 11) && !hasUpgrade(this.layer, 11)) {
                    buyUpg(this.layer, 11)
                }
           }
        },

            shouldNotify() {
                let layer = 'p';
                return Object.keys(tmp[layer].upgrades).some(
                    id => canAffordUpgrade(layer, id) && !hasUpgrade(layer, id)
                );
            },

        
        upgrades: {
            11: {
                title: "Upgrade #0",
                description() {
                if (hasUpgrade("sp", 11)) return "Start generating points at a rate of 2/s."
                return "Start generating points at a rate of 1/s."},
                cost: new Decimal(0),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [21],
                style() {
                     if (hasUpgrade("sp", 11) && !hasUpgrade("p", 11)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 11) && hasUpgrade("p", 11)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
            },
            21: {
                title: "Upgrade #1",
                description() {
                if (hasUpgrade("sp", 11)) return "Quintuples point gain."
                return "Doubles point gain."},
                cost: new Decimal(10),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,11)},
                 style() {
                     if (hasUpgrade("sp", 21) && !hasUpgrade("p", 21)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 21) && hasUpgrade("p", 21)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
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
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
        
                    let normalMultiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        normalMultiplier = normalMultiplier.times(1.1)
                    }
                    let subMultiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        subMultiplier = subMultiplier.times(1.2)
                    }
                    if (!hasUpgrade("p", 31) && !hasUpgrade("sp", 51)) 
                        return "For every upgrade in this layer unlocked, multiply point gain by 1.1 (compounding)."
                    else if (!hasUpgrade("p", 31)) return "For every upgrade in this layer unlocked, multiply point gain by 1.2 (compounding)."
            
                    else if (!hasUpgrade("sp", 51)) {
                    return `For every upgrade in this layer unlocked, multiply point gain by 1.1 (compounding).  
                    Current multiplier: x${format(normalMultiplier)}` // logic nightmare when sp 51
                    }
                    else {
                    return `For every upgrade in this layer unlocked, multiply point gain by 1.2 (compounding).  
                    Current multiplier: x${format(subMultiplier)}` // logic nightmare when sp 51
                    }
                },
                cost: new Decimal(100),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    // if (getBuyableAmount("p", 14).gt(0)) unlockedCount++ (this is for buyable)
            
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        if (hasUpgrade("sp", 51)) multiplier = multiplier.times(1.2)
                        else multiplier = multiplier.times(1.1)
                    }
            
                    return multiplier
                },
                unlocked() {return hasUpgrade(this.layer,22)},
                style() {
                     if (hasUpgrade("sp", 51) && !hasUpgrade("p", 31)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 51) && hasUpgrade("p", 31)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
                branches: [41],
            },
            41: {
                title: "Upgrade #4",
                description: "2.5x point gain.",
                cost: new Decimal(175),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,31)},
                branches: [51],
            },
            51: {
                title: "Upgrade #5",
                description: "1.5x point gain. Sorry, inflation.",
                cost: new Decimal(450),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,41)},
                branches: [62],
            },
            62: {
                title: "Upgrade #6",
                description() {
                if (hasUpgrade("sp", 91)) return"Points boost itself at a slow rate. Formula: log77(points)"
                return "Points boost itself at a slow rate. Formula: log100(points)"},
                cost: new Decimal(900),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    if (hasUpgrade(this.layer,61)) {
                        if (hasUpgrade("sp",91)) return (player.points.max(1).log(2)).max(1)
                        else return (player.points.max(1).log(75)).max(1)
                    } else if (hasUpgrade("sp",91)) return (player.points.max(1).log(77)).max(1)
                    else return (player.points.max(1).log(100)).max(1)
                
                },
                style() {
                     if (hasUpgrade("sp", 91) && !hasUpgrade("p", 62)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 91) && hasUpgrade("p", 62)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,51)},
                branches: [61, 63],
            },
            61: {
                title: "Upgrade #7",
                description: "Improve #6's formula by -log75.",
                cost: new Decimal(1550),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,62)},
                branches: [71],
            },
            63: {
                title: "Upgrade #8",
                description: "Add a new currency and sub-layer.",
                cost: new Decimal(3000),
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
                cost: new Decimal(7500),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,61) && hasUpgrade(this.layer, 63)},
                branches: [81],
            },
            81: {
                title: "Upgrade #10",
                description: "x1.75 point gain.",
                cost: new Decimal(16000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,71)},
                branches: [91],
            },
            91: {
                title: "Upgrade #11",
                description() {
                if (hasUpgrade("sp", 11)) return "x15 money gain. Rich boi."
                return "x3 money gain. Go start buying some money upgrades."},
                cost: new Decimal(30000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,81)},
                style() {
                     if (hasUpgrade("sp", 31) && !hasUpgrade("p", 91)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 31) && hasUpgrade("p", 91)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
                branches: [101],
            },
            101: {
                title: "Upgrade #12",
                description: "The longer you own this upgrade, the stronger this upgrade boosts points. Formula: log125(time)",
                cost: new Decimal(60000),
                currencyDisplayName: "points",
                currencyInternalName: "points",

                onPurchase() {
                    player[this.layer].upgradeTimes = player[this.layer].upgradeTimes || {};
                    player[this.layer].upgradeTimes[this.id] = player.time;
                },

                effect() {
                    if (!player[this.layer].upgradeTimes ||
                        !player[this.layer].upgradeTimes[this.id])
                        return new Decimal(1);

                    let boughtTime = player[this.layer].upgradeTimes[this.id];
                    let timeOwned = new Decimal(player.time).minus(boughtTime);

                    if (hasUpgrade(this.layer,291)) timeOwned = timeOwned.times(1000)
                    if (hasUpgrade("sp", 61)) timeOwned = timeOwned.pow(5)

                    return timeOwned.add(1).log(125).add(1);
                },

                                 style() {
                     if (hasUpgrade("sp", 61) && !hasUpgrade("p", 101)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 61) && hasUpgrade("p", 101)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
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
                cost: new Decimal(250000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,101)},
                branches: [121],
            },
            112: {
                title: "Upgrade #14",
                description: "x3 point gain, but x0.8 money gain.",
                cost: new Decimal(300000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,101)},
                branches: [121],
            },
            121: {
                title: "Upgrade #15",
                description: "x1.01 money and point gain. :3",
                cost: new Decimal(900000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,111) || hasUpgrade(this.layer,112)},
                branches: [131],
            },
            131: {
                title: "Upgrade #16",
                description: "+25,000 point gain. Not affected by multipliers.",
                cost: new Decimal(1500000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,121)},
                branches: [141],
            },
            141: {
                title: "Upgrade #17",
                description: "Money is boosted by total playtime. Formula: log150(playtime)^0.8",
                cost: new Decimal(5000000),
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
                cost: new Decimal(10500000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,141)},
                branches: [161],
            },
            161: {
                title: "Upgrade #19",
                description: "Points boost themselves again. Formula: points^0.05",
                cost: new Decimal(25000000),
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
                cost: new Decimal(60000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,161)},
            },
            171: {
                title: "Upgrade #20",
                 description() {
                if (hasUpgrade("sp", 71)) return "Money boosts itself. Formula: money^0.175"
                return "Money boosts itself. Formula: money^0.075"},
                cost: new Decimal(60000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    if (hasUpgrade("sp",71)) return player.m.points.pow(0.175)
                        else return player.m.points.pow(0.075)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,161)},
                 style() {
                     if (hasUpgrade("sp", 71) && !hasUpgrade("p", 171)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 71) && hasUpgrade("p", 171)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
                branches: [181],
            },
            181: {
                title: "Upgrade #21",
                description: "x2 point gain.",
                cost: new Decimal(100000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,171)},
                branches: [191, 192],
            },
            191: {
                title: "Upgrade #22",
                description: "+2 base point gain.",
                cost: new Decimal(225000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,181)},
                branches: [201],
            },
            192: {
                title: "Upgrade #23",
                description: "+2 base money gain.",
                cost: new Decimal(700000000),
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
            
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        multiplier = multiplier.times(1.05)
                    }
            
                    return `For every upgrade in this layer unlocked, multiply money gain by 1.05 (compounding). 
                    Current multiplier: x${format(multiplier)}`
                },
                cost: new Decimal(1.35e9),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411]
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
                description: "1/4 of the way there! Unlock a new sub-layer.",
                cost: new Decimal(2e9),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,201) || hasUpgrade("sp", 41)},
                branches: [221],
                onPurchase() {
                    player.pr.unlocked = true
                },
                style() {
                     if (hasUpgrade("sp", 41) && !hasUpgrade("p", 211)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 41) && hasUpgrade("p", 211)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
            },
            221: {
                title: "Upgrade #26",
                description: "Money boosts point gain. Formula: money^0.07",
                cost: new Decimal(4e9),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,211) && hasUpgrade(this.layer,201)},
                effect() {
                    return player.m.points.pow(0.07)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [232],
            },
            232: {
                title: "Upgrade #27",
                description: "1.5x point and 4x money gain.",
                cost: new Decimal(1.5e10),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,221)},
                branches: [231],
            },
            231: {
                title: "Upgrade #28",
                description: "3x point gain.",
                cost: new Decimal(3.25e10),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,232)},
                branches: [241],
            },
            241: {
                title: "Upgrade #29",
                description: "Hope you've been getting some cash! Point boosts money gain. Formula: points^0.04",
                cost: new Decimal(50000000),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,231)},
                 effect() {
                    return player.points.pow(0.04)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [251],
            },
            251: {
                title: "Upgrade #30",
                description: "/0.5 point gain.",
                cost: new Decimal(3e11),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,241)},
                branches: [252],
            },
            252: {
                title: "Upgrade #31",
                description: "/0.4 money gain.",
                cost: new Decimal(5.25e11),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,251)},
                branches: [261],
            },
            261: {
                title: "Upgrade #32",
                description: "x1.25 point gain.",
                cost: new Decimal(7.7e11),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,252)},
                branches: [271, 272],
            },
            271: {
                title: "Upgrade #33",
                description: "First choice upgrade. 2.5x point gain and disables #34.",
                cost: new Decimal(9e11),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,261)},
                canAfford() {return !hasUpgrade(this.layer,272)},
                branches: [281],
            },
            272: {
                title: "Upgrade #34",
                description: "First choice upgrade. 6x cash gain and disables #33.",
                cost: new Decimal(9e11),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,261)},
                canAfford() {return !hasUpgrade(this.layer,271)},
                branches: [281],
            },
            281: {
                title: "Upgrade #35",
                description: "x1.02 cash and point gain. Even better.",
                cost: new Decimal(3e12),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,271) || hasUpgrade(this.layer,272)},
                branches: [291],
            },
            291: {
                title: "Upgrade #36",
                description: "Upgrade #12's time is sped up by 1,000x.",
                cost: new Decimal(4e12),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,281)},
                branches: [301],
            },
            301: {
                title: "Upgrade #37",
                description: "Unlock a new sub-layer.",
                cost: new Decimal(7.35e12),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,291)},
                onPurchase() {
                    player.c.unlocked = true
                },
                branches: [311],
            },
            311: {
                title: "Upgrade #38",
                description: "x2 money gain.",
                cost: new Decimal(5e13),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,301)},
                branches: [321],
            },
            321: {
                title: "Upgrade #39",
                description: "x2 click gain.",
                cost: new Decimal(5e9),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,311)},
                branches: [322],
            },
            322: {
                title: "Upgrade #40",
                description: "x2 point gain.",
                cost: new Decimal(1e10),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,321)},
                branches: [332],
            },
            332: {
                title: "Upgrade #41",
                description: "Unlock a new Money buyable.",
                cost: new Decimal(1.55e14),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,322)},
                branches: [342, 331],
            },
            331: {
                title: "Upgrade #41-X",
                description: "+10 base clicks, but x0.4 money and points.",
                cost: new Decimal(4e14),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,332)},
                branches: [],
            },
            342: {
                title: "Upgrade #42",
                description: "Clicks boost Points again. Formula: log150(clicks)",
                cost: new Decimal(3e14),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    return (player.c.points.max(2).log(150)).max(1) // the first max does nothing btw
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,332)},
                branches: [341],
            },
            341: {
                title: "Upgrade #43",
                description: "Clicks boost Money again. Formula: log125(clicks)",
                cost: new Decimal(6.5e14),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    return (player.c.points.max(2).log(125)).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,342)},
                branches: [351, 352],
            },
            351: {
                title: "Upgrade #44",
                description: "+5 base point gain.",
                cost: new Decimal(1.75e15),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,341)},
                branches: [361],
            },
            352: {
                title: "Upgrade #45",
                description: "+4 base money gain.",
                cost: new Decimal(8.75e15),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,341)},
                branches: [362],
            },
            361: {
                title: "Upgrade #46",
                description: "+2.5e13 point gain. Not affected by multipliers.",
                cost: new Decimal(4.65e15),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,351)},
                branches: [371],
            },
            362: {
                title: "Upgrade #47",
                description: "+1e9 money gain. Not affected by multipliers.",
                cost: new Decimal(1.3e16),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,352)},
                branches: [371],
            },
            371: {
                title: "Upgrade #48",
                description: "x1.5 money, point and click gain.",
                cost: new Decimal(3e16),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,362)},
                branches: [381],
            },
            381: {
                title: "Upgrade #49",
                description: "Almost halfway! x7 money gain.",
                cost: new Decimal(9e16),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,371)},
                branches: [391],
            },
            391: {
                title: "Upgrade #50",
                description: "Halfway point! x5 point gain.",
                cost: new Decimal(2.5e17),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,381)},
                branches: [401],
            },
            401: {
                title: "Upgrade #51", // fun facts with drifter: This is intended to be #50, but I accidentally made two Upgrade #37s, so yeah
                description: "x2 point gain & unlock a new sub-layer. This one will be more interesting.",
                cost: new Decimal(1e18),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,391)},
                onPurchase() {
                    player.sp.unlocked = true
                },
                branches: [411],
            },
            411: {
                title: "Upgrade #52",
                description: "x1.1 point gain.",
                cost: new Decimal(1e19),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,401)},
                branches: [422],
            },
            422: {
                title: "Upgrade #53",
                description: "Unlock the Autoclicker, which clicks at a rate of 0.1/s.",
                cost: new Decimal(5e19),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,411)},
                branches: [421, 423],
            },
            421: {
                title: "Upgrade #54",
                description: "x3 clicks.",
                cost: new Decimal(7e19),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,422)},
                branches: [431],
            },
            423: {
                title: "Upgrade #55",
                description: "Improve the autoclicker to 0.2/s.",
                cost: new Decimal(1e20),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,422)},
                branches: [431],
            },
            431: {
                title: "Upgrade #X",
                description: "You have reached the temp end! If you somehow still like this game, you can continue grinding sub-points. But it's ill advised since it'll probably take you forever.",
                cost: new Decimal(1e999),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,421) && hasUpgrade(this.layer,423)},
                branches: [431],
            },
        },   

        infoboxes: {
            1: {
                title() {return "You have " + format(player.points) + "p (Points) | +" + format(getPointGen()) + "/s‎"},
                body() {return "Welcome to Drifter's Upgrade Tree, filled with a shit-ton of upgrades, layers & resets! It's recommended to play with offline mode off, but it's fine either way. Enjoy the game! Note: If you don't like scrolling, you can flip the tree in settings."}, // I am currently trying to make a fix but this is my temporary solution
                unlocked() {return true}
                }
            },
    
        tabFormat() {
            const inverseTree = player?.inverseTree ?? false; // I cannot believe to tell you how fucking long it took to just grab a value from options. I want to kill myself
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        ["row", [["upgrade", 431]]],
        ["row", [["upgrade", 421], ["upgrade", 422], ["upgrade", 423]]],
        ["row", [["upgrade", 411]]],
        ["row", [["upgrade", 401]]],
        ["row", [["upgrade", 391]]],
        ["row", [["upgrade", 381]]],
        ["row", [["upgrade", 371]]],
        ["row", [["upgrade", 361], ["upgrade", 362]]],
        ["row", [["upgrade", 351], ["upgrade", 352]]],
        ["row", [["upgrade", 341], ["upgrade", 342]]],
        ["row", [["upgrade", 331], ["upgrade", 332]]],
        ["row", [["upgrade", 321], ["upgrade", 322]]],
        ["row", [["upgrade", 311]]],
        ["row", [["upgrade", 301]]],
        ["row", [["upgrade", 291]]],
        ["row", [["upgrade", 281]]],
        ["row", [["upgrade", 271], ["upgrade", 272]]],
        ["row", [["upgrade", 261]]],
        ["row", [["upgrade", 251], ["upgrade", 252]]],
        ["row", [["upgrade", 241]]],
        ["row", [["upgrade", 231], ["upgrade", 232]]],
        ["row", [["upgrade", 221]]],
        ["row", [["upgrade", 211]]],
        ["row", [["upgrade", 201]]],
        ["row", [["upgrade", 191], ["upgrade", 192]]],
        ["row", [["upgrade", 181]]],
        ["row", [["upgrade", 171]]],
        ["row", [["upgrade", 161], ["upgrade", 162]]],
        ["row", [["upgrade", 151]]],
        ["row", [["upgrade", 141]]],
        ["row", [["upgrade", 131]]],
        ["row", [["upgrade", 121]]],
        ["row", [["upgrade", 111], ["upgrade", 112]]],
        ["row", [["upgrade", 101]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 61], ["upgrade", 62], ["upgrade", 63]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 41]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 21], ["upgrade", 22]]],
        ["row", [["upgrade", 11]]],
    ];
} else { return [
     ["row", [["infobox", 1]]],
        ["row", [["upgrade", 11]]],
        ["row", [["upgrade", 21], ["upgrade", 22]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 41]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 61], ["upgrade", 62], ["upgrade", 63]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 101]]],
        ["row", [["upgrade", 111], ["upgrade", 112]]],
        ["row", [["upgrade", 121]]],
        ["row", [["upgrade", 131]]],
        ["row", [["upgrade", 141]]],
        ["row", [["upgrade", 151]]],
        ["row", [["upgrade", 161], ["upgrade", 162]]],
        ["row", [["upgrade", 171]]],
        ["row", [["upgrade", 181]]],
        ["row", [["upgrade", 191], ["upgrade", 192]]],
        ["row", [["upgrade", 201]]],
        ["row", [["upgrade", 211]]],
        ["row", [["upgrade", 221]]],
        ["row", [["upgrade", 231], ["upgrade", 232]]],
        ["row", [["upgrade", 241]]],
        ["row", [["upgrade", 251], ["upgrade", 252]]],
        ["row", [["upgrade", 261]]],
        ["row", [["upgrade", 271], ["upgrade", 272]]],
        ["row", [["upgrade", 281]]],
        ["row", [["upgrade", 291]]],
        ["row", [["upgrade", 301]]],
        ["row", [["upgrade", 311]]],
        ["row", [["upgrade", 321], ["upgrade", 322]]],
        ["row", [["upgrade", 331], ["upgrade", 332]]],
        ["row", [["upgrade", 341], ["upgrade", 342]]],
        ["row", [["upgrade", 351], ["upgrade", 352]]],
        ["row", [["upgrade", 361], ["upgrade", 362]]],
        ["row", [["upgrade", 371]]],
        ["row", [["upgrade", 381]]],
        ["row", [["upgrade", 391]]],
        ["row", [["upgrade", 401]]],
        ["row", [["upgrade", 411]]],
        ["row", [["upgrade", 421], ["upgrade", 422], ["upgrade", 423]]],
        ["row", [["upgrade", 431]]],
]}
},

    })

addLayer("m", {
        name: "money",
        symbol: "M",
        position: 1,
        startData() { 
            return {
                unlocked: true,
                points: new Decimal(0),
            }
        },
        color: "#058d00ff",
        row: 1,
        layerShown() { return false },
        resource: "dollars",
        doReset(resettingLayer) {
            if (resettingLayer === "pr") {
                player.m.points = new Decimal(1)
            } else if (resettingLayer === "sp") {
                layerDataReset(this.layer)
                player.m.points = new Decimal(1)
            }
        },


    update(diff) {
    let gain = new Decimal(diff)
    if (hasUpgrade("p", 192)) gain = gain.add(2 * diff)
    if (hasUpgrade("p", 352)) gain = gain.add(4 * diff)
    gain = gain.times(buyableEffect("m", 12))
    if (!player.m.unlocked) gain = gain.times(0)
    if (!hasUpgrade("p", 63)) gain = gain.times(0)
    if (hasUpgrade("p", 91)) {
		if (hasUpgrade("sp", 31)) gain = gain.times(15)
		else gain = gain.times(3)
	}
    if (hasUpgrade("p", 111)) gain = gain.times(3)
	if (hasUpgrade("p", 112)) gain = gain.times(0.8)
    if (hasUpgrade("p", 121)) gain = gain.times(1.01)
    if (hasUpgrade("p", 141)) gain = gain.times(upgradeEffect("p", 141))
    if (hasUpgrade("p", 151)) gain = gain.times(2)
    if (hasUpgrade("p", 162)) gain = gain.times(0.5)
    if (hasUpgrade("p", 171)) gain = gain.times(upgradeEffect("p", 171))
    if (hasUpgrade("p", 201)) gain = gain.times(upgradeEffect("p", 201))
    if (hasUpgrade("p", 232)) gain = gain.times(4)
    if (hasUpgrade("p", 241)) gain = gain.times(upgradeEffect("p", 241))
    if (hasUpgrade("p", 252)) gain = gain.div(0.4)
    if (hasUpgrade("p", 272)) gain = gain.times(6)
    if (hasUpgrade("p", 281)) gain = gain.times(1.02)
    if (hasUpgrade("p", 311)) gain = gain.times(2)
    if (hasUpgrade("p", 331)) gain = gain.times(0.4)
    if (hasUpgrade("p", 341)) gain = gain.times(upgradeEffect("p", 341))
    if (hasUpgrade("p", 371)) gain = gain.times(1.5)
    if (hasUpgrade("p", 381)) gain = gain.times(7)

    if (hasMilestone("pr", 1)) {
        gain = gain.times(player.pr.points.minus(1));
    }
    if (hasMilestone("pr", 3)) {
        gain = gain.times(new Decimal(1.1).pow(player.pr.points.sub(7)));
    }

    if (hasMilestone("c", 1)) {
        gain = gain.times(player.c.points.pow(0.125));
    }

    if (hasUpgrade("p", 362)) gain = gain.add(1e9 * diff)

    gain = gain.times(globalMult())

    player.m.points = player.m.points.add(gain)
    },

    getMoneyPerSecond() { // Literally only used for the title
    let gain = new Decimal(1)           
    if (hasUpgrade("p", 192)) gain = gain.add(2)
    if (hasUpgrade("p", 352)) gain = gain.add(4)
    gain = gain.times(buyableEffect("m", 12))
    if (!player.m.unlocked) gain = gain.times(0)
    if (!hasUpgrade("p", 63)) gain = gain.times(0)
    if (hasUpgrade("p", 91)) {
		if (hasUpgrade("sp", 31)) gain = gain.times(15)
		else gain = gain.times(3)
	}
    if (hasUpgrade("p", 111)) gain = gain.times(3)
	if (hasUpgrade("p", 112)) gain = gain.times(0.8)
    if (hasUpgrade("p", 121)) gain = gain.times(1.01)
    if (hasUpgrade("p", 141)) gain = gain.times(upgradeEffect("p", 141))
    if (hasUpgrade("p", 151)) gain = gain.times(2)
    if (hasUpgrade("p", 162)) gain = gain.times(0.5)
    if (hasUpgrade("p", 171)) gain = gain.times(upgradeEffect("p", 171))
    if (hasUpgrade("p", 201)) gain = gain.times(upgradeEffect("p", 201))
    if (hasUpgrade("p", 232)) gain = gain.times(4)
    if (hasUpgrade("p", 241)) gain = gain.times(upgradeEffect("p", 241))
    if (hasUpgrade("p", 252)) gain = gain.div(0.4)
    if (hasUpgrade("p", 272)) gain = gain.times(6)
    if (hasUpgrade("p", 281)) gain = gain.times(1.02)
    if (hasUpgrade("p", 311)) gain = gain.times(2)
    if (hasUpgrade("p", 331)) gain = gain.times(0.4)
    if (hasUpgrade("p", 341)) gain = gain.times(upgradeEffect("p", 341))
    if (hasUpgrade("p", 371)) gain = gain.times(1.5)
    if (hasUpgrade("p", 381)) gain = gain.times(7)

    if (hasMilestone("pr", 1)) {
        gain = gain.times(player.pr.points.minus(1));
    }
    if (hasMilestone("pr", 3)) {
        gain = gain.times(new Decimal(1.1).pow(player.pr.points.sub(7)));
    }

    if (hasMilestone("c", 1)) {
        gain = gain.times(player.c.points.pow(0.125));
    } // I FORGOT THIS CUHHH

    if (hasUpgrade("p", 362)) gain = gain.add(1e9)

    gain = gain.times(globalMult())

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
                body() {return "For every new layer you unlock, there will be an infobox. Money can be spent on buyables that will speed up your progress. Tip: You can hold down buyables to buy them quickly."},
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
        return `Multiply point gain by +25% additive each purchase. 
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
    return format(base.times(bonus)) 
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
        return `Multiply money gain by +20% additive each purchase. 
        After every 10 levels, the effect is multiplied by x1.4.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(14).times(Decimal.pow(1.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 12)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 12)
        if (bought.gte(this.cap())) return
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 12)  
    let base = new Decimal(1).add(amt.times(0.2))
    let bonus = Decimal.pow(1.4, Math.floor(amt / 10))
    return format(base.times(bonus))
},
    cap() {
        let base = 100
        /* if (hasUpgrade("sp", 23)) base += 20
        if (hasUpgrade("pr", 32)) base += 65 */
        return base
    },
},
13: {
    title: "#3M: Click Increase",
    display() { 
        let bought = getBuyableAmount("m", 13)
        let cap = this.cap()
        /* if (hasUpgrade("sp", 24)) return `Multiply point gain by +1 each purchase.  
        Currently: ${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` */
        return `Increase base clicks by +1 per click.
        Currently: +${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(5e9).times(Decimal.pow(2, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 13)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 13)
        if (bought.gte(this.cap())) return
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 13, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 13)  
    let base = new Decimal(0).add(amt)
    return base.times(100).round().div(100) // keep as Decimal
},
    cap() {
        let base = 100
        /* if (hasUpgrade("sp", 23)) base += 20
        if (hasUpgrade("pr", 32)) base += 65 */
        return base
    },
    unlocked() {return hasUpgrade("p",332)},
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
        ["buyable", 13],
        ["upgrade", 14]
    ]],
    ["row", [
        ["upgrade", 21],
        ["upgrade", 22],
        ["upgrade", 23]
    ]]
]

    })

addLayer("pr", {
    name: "prestige",
    symbol: "PR", 
    position: 2, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(1e9), 
    resource: "prestige points",
    baseResource: "points", 
    baseAmount() {return player.points},
    type: "static", 
    base: 10,
    exponent: 1,
    row: 2,
    gainMult() {
      let gain = new Decimal(1)
      gain = gain.div(globalMult())
      return gain
    },
    layerShown() { return false },
    doReset(resettingLayer) {
    if (resettingLayer === "sp") {
        if (!hasUpgrade("sp", 41)) {
            layerDataReset(this.layer)
            player.pr.points = new Decimal(0)
        } else {

        }
    }
},
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.pr.points) + "PR (Prestige)"
            },
                body() {return "Prestige resets your points and money (does not reset upgrades), but gives prestige points for milestones. Make sure to prestige whenever you can!"},
                unlocked() {return true}
                }
            },
    milestones: {
    0: {
        requirementDescription: "1 Prestige Point",
        effectDescription() {
                if (hasUpgrade("sp", 41)) return "Boosts point gain by +150% additive per prestige point."
                return "Boosts point gain by +100% additive per prestige point."},
        done() { return player.pr.points.gte(1) }
    },

    1: {
        requirementDescription: "3 Prestige Points",
        effectDescription: "Boosts money gain by +100% additive per prestige point past 2 prestige points.",
        done() { return player.pr.points.gte(3) },
    },

    2: {
        requirementDescription: "6 Prestige Points",
        effectDescription: "Boosts point gain by 1.1x compounding per prestige point past 5 prestige points.",
        done() { return player.pr.points.gte(6) }
    },
    3: {
        requirementDescription: "8 Prestige Points",
        effectDescription: "Boosts cash gain by 1.125x compounding per prestige point past 7 prestige points",
        done() { return player.pr.points.gte(8) }
    },
    4: {
        requirementDescription: "15 Prestige Points",
        effectDescription: "Boosts subpoint gain by +50% additive per prestige point past 14 prestige points.",
        done() { return player.pr.points.gte(15) && hasUpgrade("sp",11) },
        unlocked() {return hasUpgrade("sp",11)},
    },
    5: {
        requirementDescription: "18 Prestige Points",
        effectDescription: "Boost click gain by 2x compounding per prestige point past 17 prestige points, ending at 26 prestige points.",
        done() { return player.pr.points.gte(18) },
        unlocked() {return hasUpgrade("sp",11)},
    },
},
})

addLayer("c", {
    name: "clicks",
    symbol: "C", 
    position: 3, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffffdc",
    resource: "clicks",
    resourceDisplay() {
        return "this doesnt work lmao"
    },
    layerShown() { return false },
    doReset(resettingLayer) {
            if (resettingLayer === "sp") {
                layerDataReset(this.layer)
            }
        },
    update(diff) {
        if (hasUpgrade("p", 422)) {
            let gain = new Decimal(diff)
            gain = gain.add(buyableEffect("m", 13).times(diff))
            
            gain = gain.times(0.1)
            if (hasUpgrade("p", 423)) gain = gain.times(2)

            if (hasUpgrade("p", 331)) gain = gain.add(10)
            if (hasUpgrade("p", 321)) gain = gain.times(2)
            if (hasUpgrade("p", 371)) gain = gain.times(1.5)
            if (hasUpgrade("p", 421)) gain = gain.times(3)
            gain = gain.times(globalMult())
            player.c.points = player.c.points.add(gain)
        }
    },
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.c.points) + " clicks"
            },
                body() {return `Yeah, it's a clicking simulator. Entertaining, I know. Clicks boost everything through milestones.`},
                unlocked() {return true}
                }
            },
    clickMult() {
        let gain = new Decimal(1)
        gain = gain.add(buyableEffect("m", 13))
        if (hasUpgrade("p", 331)) gain = gain.add(10)
        if (hasUpgrade("p", 321)) gain = gain.times(2)
        if (hasUpgrade("p", 371)) gain = gain.times(1.5)
        if (hasUpgrade("p", 421)) gain = gain.times(3)
        gain = gain.times(globalMult())
    if (hasMilestone("pr", 5)) {
        gain = gain.times(player.pr.points.sub(17).pow(2).min(512));
    }
        return gain
        
    },
    clickables: {
        11: {
            title: "Click Button",
            display() {return `Click for  ${format(tmp.c.clickMult)} clicks.`},
            canClick() {return true},
            onClick() {player.c.points = player.c.points.add(tmp.c.clickMult)}
        },
    },

    milestones: {
    0: {
        requirementDescription: "100 Clicks",
        effectDescription: "Boosts point gain with a formula of clicks^0.15.",
        done() { return player.c.points.gte(100) }
    },

    1: {
        requirementDescription: "1,000 Clicks",
        effectDescription: "Boosts money gain with a formula of clicks^0.125.",
        done() { return player.c.points.gte(1000) },
    },
    2: {
        requirementDescription: "1,000,000 Clicks",
        effectDescription: "Boosts subpoint gain with a formula of clicks^0.025",
        done() { return player.c.points.gte(1000000) },
        unlocked() {return hasUpgrade("sp",11)},
    },
    3: {
        requirementDescription: "10,000,000 Clicks",
        effectDescription: "Unlock the Clickificate reset.",
        done() { return player.c.points.gte(10000000) },
        unlocked() {return hasUpgrade("sp",999)},
    },
},
}) 

addLayer("sp", {
    name: "subpoints",
    symbol: "SP", 
    position: 4, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4e3ee2ff",
    resource: "subpoints",
    baseResource: "points", 
    baseAmount() {return player.points},
    type: "normal", 
    row: 4,
    canReset() {
    return (player.points.gte("1e18") && hasUpgrade("p", 401))
    },
    getResetGain() {
    let base = player.points  
    if (player.points.lt("1e18")) {
        return new Decimal(0)
    }
    let gain = base.div(new Decimal("1e18")).pow(0.8)
    gain = gain.times(globalMult())
    if (hasMilestone("pr", 4)) {
        gain = gain.times((player.pr.points.sub(14).times(0.5)).add(1));
    }
    if (hasMilestone("c", 2)) {
        gain = gain.times(player.c.points.pow(0.025));
    }
    gain = gain.floor();
    return gain
    },
    layerShown() { return false },
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.sp.points) + "SP (Subpoints)"
            },
                body() {return "Welcome to your first 'reset'. Subpoints reset everything so far but grant sub-points which are used to buff upgrades. You must have Upgrade #51 and at least 1e18 points to reset. It's recommended to get 6 subpoints for your first reset. Formula: points/1e18^0.8"},
                unlocked() {return true}
                }
            },
     upgrades: {
            11: {
                title: "Upgrade #1-S",
                description: "Autobuy Upgrade #0, and Upgrade #0 now generates at 2/s. Also, unlock new milestones.",
                cost: new Decimal(1),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [21],
                currencyLayer: "sp",
                unlocked() { return player.sp && player.sp.points.gte(0.01) || hasUpgrade(this.layer,11)},
            },
            21: {
                title: "Upgrade #2-S",
                description: "Upgrade #1 now quintuples your points.",
                cost: new Decimal(5),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [31],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,11)},
            },
            31: {
                title: "Upgrade #3-S",
                description: "Upgrade #11 now gives x15 money.",
                cost: new Decimal(25),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [41],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,21)},
            },
            41: {
                title: "Upgrade #4-S",
                description: "Keep Upgrade #25 and prestige points on subpoints. Improve the first milestone from +100% to +150%.",
                cost: new Decimal(75),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [51],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,31)},
            },
            51: {
                title: "Upgrade #5-S",
                description: "Upgrade #3's formula is improved to 1.2x.",
                cost: new Decimal(500),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [61],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,41)},
            },
            61: {
                title: "Upgrade #6-S",
                description: "^5 Upgrade #15's time.",
                cost: new Decimal(1000),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [71],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,51)},
            },
            71: {
                title: "Upgrade #7-S",
                description: "Upgrade #20's formula is improved by ^0.1.",
                cost: new Decimal(6000),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [81],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,61)},
            },
            81: {
                title: "Upgrade #8-S",
                description: "Points de-boost itself. Formula: 1000/log1.5(points), min 2",
                cost: new Decimal(25000),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [91],
                currencyLayer: "sp",
                 effect() {
                     let points = player.points.max(2)
    
                    return (new Decimal(1000).div(points.log(1.5))).max(2)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,71)},
            },
            91: {
                title: "Upgrade #9-S",
                description: "-log23 Upgrade #6's formula.",
                cost: new Decimal(125000),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [101],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,81)},
            },
            101: {
                title: "Upgrade #?-S",
                description: "Wow, you actually did it. I don't know how or why. I'll try and give an exclusive buff for next update.",
                cost: new Decimal(1000000),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [101],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,91)},
            },
            tabFormat: [
            ["row", [
                ["infobox", 1],
            ]],
            ["row", [
                ["upgrade", 11],
            ]],
            ["row", [
                ["upgrade", 21],
                ["upgrade", 22],
            ]],
            ["row", [
                ["upgrade", 31],
            ]],
            ["row", [
                ["upgrade", 41],
            ]],
             ["row", [
                ["upgrade", 51],
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
        ],
    }
})
