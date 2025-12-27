// DEVELOPER LAYER

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
            unlocked() {if (hasUpgrade('p',401) || player.sp.points.gt(0) || hasUpgrade("sp", 11)) return true
            else return false},
            buttonStyle: {
                "color": "#4e3ee2ff",
                "border": "2px solid #4e3ee2ff"
            },
            glowColor: "#4e3ee2ff"
        },
        "Boosters": {
            embedLayer: "b",
            unlocked() {if (hasUpgrade('p',591) || player.b.points.gt(0) || player.b.money.gt(0) || player.b.clicks.gt(0) || player.b.subpoints.gt(0) ) return true
            else return false},
            buttonStyle: {
                "color": "#505bf7ff",
                "border": "2px solid #505bf7ff"
            },
            glowColor: "#505bf7ff"
        },
        "Generators": {
            embedLayer: "g",
            unlocked() {if (hasUpgrade('p',592) || player.g.points.gt(0) || player.g.power.gt(0)) return true
            else return false},
            buttonStyle: {
                "color": "#b0dc13ff",
                "border": "2px solid #b0dc13ff"
            },
            glowColor: "#b0dc13ff"
        },  
    }
})

addLayer("layer2", {
    name: "A",
    symbol:"A",
    position: 1,
    row: 1,
    color: "#13c5dcff",
    type: "none",
    tooltip: "Layer 2: Ascension",
    layerShown() {if (hasUpgrade('p',801) || player.a.points.gt(0) || hasUpgrade("a", 11) || player.bonus1.points.gt(0) || getBuyableAmount("bonus1", 11).gt(0) || getBuyableAmount("bonus1", 12).gt(0) || getBuyableAmount("bonus1", 21).gt(0) || getBuyableAmount("bonus1", 22).gt(0)) return true
            else return false},
    
    tabFormat: {
        "Ascension": {
            embedLayer: "a",
            buttonStyle: {
                "color": "#13c5dcff",
                "border": "2px solid #13c5dcff",
            },
            glowColor: "#ffffffff",
        },
        "Crystals": {
            embedLayer: "bonus1",
            unlocked() {if (hasUpgrade('a',161) || player.bonus1.points.gt(0) || getBuyableAmount("bonus1", 11).gt(0) || getBuyableAmount("bonus1", 12).gt(0) || getBuyableAmount("bonus1", 21).gt(0) || getBuyableAmount("bonus1", 22).gt(0)) return true
            else return false},
            buttonStyle: {
                "color": "#a30fe7ff",
                "border": "2px solid #a30fe7ff",
            },
            glowColor: "#ffffffff",
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
            let had101 = hasUpgrade("sp", 101)
            if (resettingLayer === "sp") {
                if (!hasUpgrade("a", 72)) {
                layerDataReset(this.layer) 
                if (hasUpgrade("sp", 41) && !hasUpgrade("a", 72)) {
                    player[this.layer].upgrades.push(211)
                }
                } 
            
            } else if (resettingLayer === "a") {
                layerDataReset(this.layer)
            } else if (resettingLayer === "bonus1") {
                layerDataReset(this.layer)
            } 
            if (had101) {
            player["sp"].upgrades.push(101)
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
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 542, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791, 801]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
        
                    let normalMultiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        normalMultiplier = normalMultiplier.times(1.1)
                    }
                    let subMultiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        subMultiplier = subMultiplier.times(1.15)
                    }
                    if (!hasUpgrade("p", 31) && !hasUpgrade("sp", 51)) 
                        return "For every upgrade in this layer unlocked, multiply point gain by 1.1 (compounding)."
                    else if (!hasUpgrade("p", 31)) return "For every upgrade in this layer unlocked, multiply point gain by 1.15 (compounding)."
            
                    else if (!hasUpgrade("sp", 51)) {
                    return `For every upgrade in this layer unlocked, multiply point gain by 1.1 (compounding).  
                    Current multiplier: x${format(normalMultiplier)}` // logic nightmare when sp 51
                    }
                    else {
                    return `For every upgrade in this layer unlocked, multiply point gain by 1.15 (compounding).  
                    Current multiplier: x${format(subMultiplier)}` // logic nightmare when sp 51
                    }
                },
                cost: new Decimal(100),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 542, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791, 801]
                    let unlockedCount = pointUpgrades.reduce((sum, id) => hasUpgrade("p", id) ? sum + 1 : sum, 0)
            
                    // if (getBuyableAmount("p", 14).gt(0)) unlockedCount++ (this is for buyable)
            
                    let multiplier = new Decimal(1)
                    for (let i = 0; i < unlockedCount; i++) {
                        if (hasUpgrade("sp", 51)) multiplier = multiplier.times(1.15)
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
                if (hasUpgrade("sp", 31)) return "x15 money gain. Rich boi."
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
                    if (hasUpgrade("sp", 61)) timeOwned = timeOwned.pow(10)

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
                    return player.points.pow(0.05).max(1)
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
                if (hasUpgrade("sp", 71)) return "Money boosts itself. Formula: money^0.125"
                return "Money boosts itself. Formula: money^0.075"},
                cost: new Decimal(60000000),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                effect() {
                    if (hasUpgrade("sp",71)) return player.m.points.pow(0.125).max(1)
                        else return player.m.points.pow(0.075).max(1)
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
            
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 542, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791, 801]
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
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 542, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791, 801]
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
                unlocked() {return hasUpgrade(this.layer,201)},
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
                    return player.m.points.pow(0.07).max(1)
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
                description: "Hope you've been getting some money! Point boosts money gain. Formula: points^0.04",
                cost: new Decimal(50000000),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,231)},
                 effect() {
                    return player.points.pow(0.04).max(1)
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
                canAfford() {return !hasUpgrade(this.layer,272) || hasUpgrade(this.layer,451)},
                branches: [281],
            },
            272: {
                title: "Upgrade #34",
                description: "First choice upgrade. 6x money gain and disables #33.",
                cost: new Decimal(9e11),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,261)},
                canAfford() {return !hasUpgrade(this.layer,271) || hasUpgrade(this.layer,451)},
                branches: [281],
            },
            281: {
                title: "Upgrade #35",
                description() {
                if (hasUpgrade("sp", 102)) return "x1.2 point gain and x12 money gain. Amazing."
                return "x1.02 point and money gain. Even better."},
                cost: new Decimal(3e12),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,271) || hasUpgrade(this.layer,272)},
                 style() {
                     if (hasUpgrade("sp", 102) && !hasUpgrade("p", 281)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 102) && hasUpgrade("p", 281)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                    },
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
                description() {
                if (hasUpgrade("sp", 111)) return "x10 click gain."
                return "x2 click gain."},
                cost: new Decimal(5e9),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,311)},
                style() {
                     if (hasUpgrade("sp", 111) && !hasUpgrade("p", 321)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 111) && hasUpgrade("p", 321)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                    },
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
                cost: new Decimal(2e19),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,411)},
                branches: [421, 423],
            },
            421: {
                title: "Upgrade #54",
                description: "x3 clicks.",
                cost: new Decimal(4e19),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,422)},
                branches: [431],
            },
            423: {
                title: "Upgrade #55",
                description: "Improve the autoclicker to 0.2/s.",
                cost: new Decimal(5e19),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,422)},
                branches: [431],
            },
            431: {
                title: "Upgrade #56",
                description: "x2.25 point gain.",
                cost: new Decimal(7.5e19),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,421) && hasUpgrade(this.layer,423)},
                branches: [441, 442],
            },
            441: {
                title: "Upgrade #57",
                description: "Boosts point gain yet again by log250(points)^0.65. Disables upgrade #58.",
                cost: new Decimal(1.4e20),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,431)},
                effect() {return (player.points.max(1).log(250).pow(0.65)).max(1)},
                effectDisplay() {
                   return format(this.effect()) + "×";
                },
                canAfford() {return !hasUpgrade(this.layer,442) || hasUpgrade(this.layer,621)},
                branches: [451],
            },
            442: {
                title: "Upgrade #58",
                description: "Boosts money gain yet again by log25(money)^0.95. Disables upgrade #57.",
                cost: new Decimal(1.4e20),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,431)},
                effect() {return (player.m.points.max(1).log(25).pow(0.95)).max(1)},
                effectDisplay() {
                   return format(this.effect()) + "×";
                },
                canAfford() {return !hasUpgrade(this.layer,441) || hasUpgrade(this.layer,621)},
                branches: [451],
            },
            451: {
                title: "Upgrade #59",
                description: "You can now buy both Upgrade #33 and #34.",
                cost: new Decimal(8.75e20),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,441) || hasUpgrade(this.layer,442)},
                branches: [461],
            },
            461: {
               title: "Upgrade #60",
                description: "Clicks boost themselves. Formula: log125(clicks)",
                cost: new Decimal(2.5e15),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,451)},
                effect() {
                    return (player.c.points.max(1).log(125)).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [471],
            },
            471: {
                title: "Upgrade #61",
                description: "x2 subpoints and x1.5 clicks.",
                cost: new Decimal(2.95e21),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,461)},
                branches: [481],
            },
            481: {
                title: "Upgrade #62",
                 description() {
                if (hasUpgrade("sp", 131)) return "Subpoints boost point gain. Formula: log20(subpoints)"
                return "Subpoints boost point gain. Formula: log50(subpoints)"},
                cost: new Decimal(5.5e21),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,471)},
                effect() {
                    if (hasUpgrade("sp", 131)) return (player.sp.points.max(1).log(20)).max(1)
                    else return (player.sp.points.max(1).log(50)).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                 style() {
                     if (hasUpgrade("sp", 131) && !hasUpgrade("p", 481)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 131) && hasUpgrade("p", 481)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                    },
                branches: [491],
            },
            491: {
                title: "Upgrade #63",
                description: "x3.5 money gain.",
                cost: new Decimal(8e21),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,481)},
                branches: [501, 502],
            },
            501: {
                title: "Upgrade #64",
                description: "Unlock a new compounding Point Buyable in Money.",
                cost: new Decimal(1.25e22),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,491)},
                branches: [511],
            },
            502: {
                title: "Upgrade #65",
                description: "Unlock a new compounding Money Buyable in Money.",
                cost: new Decimal(6e22),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,491)},
                branches: [511],
            },
            511: {
                title: "Upgrade #66",
                description: "x2.5 point gain, x2 click gain, x1.5 money gain.",
                cost: new Decimal(1e23),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,501) && hasUpgrade(this.layer,502) },
                branches: [521],
            },
            521: {
                title: "Upgrade #...no",
                description: "I'm not even gonna bother. You don't even get a buff for this upgrade.",
                cost: new Decimal(4e23),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,511) },
                branches: [531],
            },
            531: {
                title: "Upgrade #68",
                description: "Improve the Autoclicker to 1/s.",
                cost: new Decimal(5e23),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,521) },
                branches: [541],
            },
            541: {
                title: "Upgrade #69",
                description: "x6.9 point gain les fucking go!!!",
                cost: new Decimal(6.9e23),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,531) },
                branches: [551, 542],
            },
            542: {
                title: "Upgrade #69-X",
                description: "x69 money gain but /6.9 point gain. Is it worth it?",
                cost: new Decimal(6.9e24),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,541) },
                branches: [],
            },
             551: {
                title: "Upgrade #70",
                description: "x3 subpoints.",
                cost: new Decimal(2.5e24),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,541)},
                branches: [561],
            },
            561: {
                title: "Upgrade #71",
                description: "x2.75 point gain.",
                cost: new Decimal(2.5e25),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,551)},
                branches: [572],
            },
            572: {
                title: "Upgrade #72",
                description: "Points boost clicks. Formula: points^0.02",
                cost: new Decimal(3e26),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,561)},
                effect() {
                    return player.points.pow(0.02)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [571],
            },
            571: {
                title: "Upgrade #73",
                description: "Money boosts autoclicks. Formula: money^0.02",
                cost: new Decimal(8.9e26),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,572)},
                effect() {
                    return player.m.points.pow(0.02)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [581],
            },
            581: {
                title: "Upgrade #74",
                description() {
                if (hasUpgrade("sp", 131)) return "Subpoints boost money. Formula: log10(subpoints)"
                return "Subpoints boost money. Formula: log40(subpoints)"},
                cost: new Decimal(3.1e27),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,571)},
                effect() {
                    if (hasUpgrade("sp", 131)) return (player.sp.points.max(1).log(10)).max(1)
                    else return (player.sp.points.max(1).log(40)).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                style() {
                     if (hasUpgrade("sp", 131) && !hasUpgrade("p", 581)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 131) && hasUpgrade("p", 581)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                    },
                branches: [591, 592],
            },
            591: {
                title: "Upgrade #75",
                description: "Unlock Boosters. Disables Upgrade #76.",
                cost: new Decimal(1e28),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,581)},
                canAfford() {
                    if (hasUpgrade(this.layer, 711)) return true
                    if (hasUpgrade(this.layer, 592) || (player.g.power.gt(0.01) && !player.b.points.gt(0.01))) return false
                    return true
                },
                onPurchase() {
                    player.b.unlocked = true
                },
                branches: [601],
            },
            592: {
                title: "Upgrade #76",
                description: "Unlock Generators. Disables Upgrade #75.",
                cost: new Decimal(1e28),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,581)},
                canAfford() {
                    if (hasUpgrade(this.layer, 711)) return true
                    if (hasUpgrade(this.layer, 591) || (!player.g.power.gt(0.01) && player.b.points.gt(0.01))) return false
                    return true
                },
                onPurchase() {
                    player.g.unlocked = true
                },
                branches: [601],
            },
            601: {
                title: "Upgrade #77",
                description: "x2 point gain.",
                cost: new Decimal(8e29),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,591) || hasUpgrade(this.layer,592)},
                branches: [611],
            },
            611: {
                title: "Upgrade #78",
                description: "x2.5 money gain.",
                cost: new Decimal(7.05e30),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,601)},
                branches: [621],
            },
            621: {
                title: "Upgrade #79",
                description: "You can now buy both upgrade #57 and #58.",
                cost: new Decimal(5.75e31),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,611)},
                branches: [631],
            },
            631: {
                title: "Upgrade #80",
                description: "Money boosts subpoint gain. Formula: money^0.03",
                cost: new Decimal(6e32),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,621)},
                effect() {
                    return player.m.points.pow(0.03)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [632],
            },
            632: {
                title: "Upgrade #81",
                description: "x1.25 subpoint gain.",
                cost: new Decimal(1.2e33),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,631)},
                branches: [642],
            },
            642: {
                title: "Upgrade #82",
                description() {
                if (hasUpgrade("sp", 121)) return "Points boost subpoint gain. Formula: points^0.025"
                return "Points boost subpoint gain. Formula: points^0.015"},
                cost: new Decimal(4e33),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,632)},
                effect() {
                    if (hasUpgrade("sp",121)) return player.points.pow(0.025).max(1)
                        else return player.points.pow(0.015).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [641],
                style() {
                     if (hasUpgrade("sp", 121) && !hasUpgrade("p", 642)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 121) && hasUpgrade("p", 642)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                 },
            },
            641: {
                title: "Upgrade #83",
                description: "Subpoints boost click gain. Formula: subpoints^0.05",
                cost: new Decimal(8.5e33),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,642)},
                effect() {
                    return player.sp.points.pow(0.05)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [651],
            },
            651: {
                title: "Upgrade #84",
                description: "+2 base clicks, money, and points.",
                cost: new Decimal(5.8e34),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,641)},
                branches: [661, 662, 663],
            },
            661: {
                title: "Upgrade #85",
                description: "+30 base clicks.",
                cost: new Decimal(8.25e35),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,651)},
                branches: [671],
            },
            662: {
                title: "Upgrade #86",
                description: "+6 base money.",
                cost: new Decimal(2e36),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,651)},
                branches: [671],
            },
            663: {
                title: "Upgrade #87",
                description: "+8 base points.",
                cost: new Decimal(1.6e37),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,651)},
                branches: [671],
            },
            671: {
                title: "Upgrade #88",
                description: "x1.5 point and money gain.",
                cost: new Decimal(1e30),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,661) && hasUpgrade(this.layer,662) && hasUpgrade(this.layer,663)},
                branches: [681],
            },
            681: {
                title: "Upgrade #89",
                description: "x1.75 autoclick speed.",
                cost: new Decimal(3e30),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,671)},
                branches: [691],
            },
            691: {
                title: "Upgrade #90",
                description: "Welcome to the last ten upgrades. You're close to the next layer. Unlock a new Subpoint money buyable.",
                cost: new Decimal(9e30),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,681)},
                branches: [701],
            },
            701: {
                title: "Upgrade #91",
                description: "+25 base points gain. Let the madness begin.",
                cost: new Decimal(1e39),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,691)},
                branches: [711],
            },
            711: {
                title: "Upgrade #92",
                description: "You can now buy both upgrade #75 and #76.",
                cost: new Decimal(2.2e41),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,701)},
                branches: [721],
            },
            721: {
                title: "Upgrade #93",
                description: "Gain an extra of each Booster for free. Does not impact costs.",
                cost: new Decimal(6.8e42),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,711)},
                branches: [731],
            },
            731: {
                title: "Upgrade #94",
                description: "x3 generator power.",
                cost: new Decimal(4.5e43),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,721)},
                branches: [741],
            },
            741: {
                title: "Upgrade #95",
                description: "x3 points and money.",
                cost: new Decimal(2e44),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,731)},
                branches: [751],
            },
            751: {
                title: "Upgrade #96",
                description: "x4 clicks.",
                cost: new Decimal(4.1e45),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,741)},
                branches: [761],
            },
            761: {
                title: "Upgrade #96",
                description: "x2.5 subpoints.",
                cost: new Decimal(1.45e46),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,751)},
                branches: [771],
            },
            771: {
                title: "Upgrade #97",
                description: "Lower the scaling cost of Boosters.",
                cost: new Decimal(2e47),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,761)},
                branches: [781],
            },
            781: {
                title: "Upgrade #98",
                description: "Generator power boosts itself. Formula: log100(power)",
                cost: new Decimal(1e48),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,771)},
                effect() {
                    return (player.g.power.max(1).log(100)).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [791],
            },
            791: {
                title: "Upgrade #99",
                description: "/0.5 click gain.",
                cost: new Decimal(5e48),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,781)},
                branches: [801],
            },
            801: {
                title: "Upgrade #100",
                description: "x2 point gain, and unlock Layer 2: Ascension. Well done, but it's only getting started.",
                cost: new Decimal(1e49),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,791)},
                onPurchase() {
                    player.layer2.unlocked = true
                },
                branches: [811],
            },
        },   

        infoboxes: {
            1: {
                title() {return "You have " + format(player.points) + "p (Points) | +" + format(getPointGen()) + "/s‎"},
                body() {return `Welcome to Drifter's Upgrade Tree, filled with a shit-ton of upgrades, layers & resets! It's recommended to play with offline mode off, but it's fine either way. Enjoy the game!<br><br>Note: If you don't like scrolling, you can flip the tree in settings.`}, // I am currently trying to make a fix but this is my temporary solution
                unlocked() {return true}
                }
            },
    
        tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false; // I cannot believe to tell you how fucking long it took to just grab a value from options. I want to kill myself
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        ["row", [["upgrade", 801]]],
        ["row", [["upgrade", 791]]],
        ["row", [["upgrade", 781]]],
        ["row", [["upgrade", 771]]],
        ["row", [["upgrade", 761]]],
        ["row", [["upgrade", 751]]],
        ["row", [["upgrade", 741]]],
        ["row", [["upgrade", 731]]],
        ["row", [["upgrade", 721]]],
        ["row", [["upgrade", 711]]],
        ["row", [["upgrade", 701]]],
        ["row", [["upgrade", 691]]],
        ["row", [["upgrade", 681]]],
        ["row", [["upgrade", 671]]],
        ["row", [["upgrade", 661], ["upgrade", 662], ["upgrade", 663]]],
        ["row", [["upgrade", 651]]],
        ["row", [["upgrade", 641], ["upgrade", 642]]],
        ["row", [["upgrade", 631], ["upgrade", 632]]],
        ["row", [["upgrade", 621]]],
        ["row", [["upgrade", 611]]],
        ["row", [["upgrade", 601]]],
        ["row", [["upgrade", 591], ["upgrade", 592]]],
        ["row", [["upgrade", 581]]],
        ["row", [["upgrade", 571], ["upgrade", 572]]],
        ["row", [["upgrade", 561]]],
        ["row", [["upgrade", 551]]],
        ["row", [["upgrade", 541], ["upgrade", 542]]],
        ["row", [["upgrade", 531]]],
        ["row", [["upgrade", 521]]],
        ["row", [["upgrade", 511]]],
        ["row", [["upgrade", 501], ["upgrade", 502]]],
        ["row", [["upgrade", 491]]],
        ["row", [["upgrade", 481]]],
        ["row", [["upgrade", 471]]],
        ["row", [["upgrade", 461]]],
        ["row", [["upgrade", 451]]],
        ["row", [["upgrade", 441], ["upgrade", 442]]],
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
        ["row", [["upgrade", 441], ["upgrade", 442]]],
        ["row", [["upgrade", 451]]],
        ["row", [["upgrade", 461]]],
        ["row", [["upgrade", 471]]],
        ["row", [["upgrade", 481]]],
        ["row", [["upgrade", 491]]],
        ["row", [["upgrade", 501], ["upgrade", 502]]],
        ["row", [["upgrade", 511]]],
        ["row", [["upgrade", 521]]],
        ["row", [["upgrade", 531]]],
        ["row", [["upgrade", 541], ["upgrade", 542]]],
        ["row", [["upgrade", 551]]],
        ["row", [["upgrade", 561]]],
        ["row", [["upgrade", 571], ["upgrade", 572]]],
        ["row", [["upgrade", 581]]],
        ["row", [["upgrade", 591], ["upgrade", 592]]],
        ["row", [["upgrade", 601]]],
        ["row", [["upgrade", 611]]],
        ["row", [["upgrade", 621]]],
        ["row", [["upgrade", 631], ["upgrade", 632]]],
        ["row", [["upgrade", 641], ["upgrade", 642]]],
        ["row", [["upgrade", 651]]],
        ["row", [["upgrade", 661], ["upgrade", 662], ["upgrade", 663]]],
        ["row", [["upgrade", 671]]],
        ["row", [["upgrade", 681]]],
        ["row", [["upgrade", 691]]],
        ["row", [["upgrade", 701]]],
        ["row", [["upgrade", 711]]],
        ["row", [["upgrade", 721]]],
        ["row", [["upgrade", 731]]],
        ["row", [["upgrade", 741]]],
        ["row", [["upgrade", 751]]],
        ["row", [["upgrade", 761]]],
        ["row", [["upgrade", 771]]],
        ["row", [["upgrade", 781]]],
        ["row", [["upgrade", 791]]],
        ["row", [["upgrade", 801]]],
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
        row: 0,
        layerShown() { return false },
        resource: "dollars",
        doReset(resettingLayer) {
            if (resettingLayer === "pr") {
                if (!hasUpgrade("a", 91)) player.m.points = new Decimal(0)
            } else if (resettingLayer === "sp") {
                if (!hasUpgrade("a", 72)) layerDataReset(this.layer)
                player.m.points = new Decimal(0)
            } else if (resettingLayer === "a") {
                layerDataReset(this.layer)
                player.m.points = new Decimal(0)
            } else if (resettingLayer === "bonus1") {
                layerDataReset(this.layer)
            } 
        },


    update(diff) {
    let gain = new Decimal(diff)
    if (hasUpgrade("p", 192)) gain = gain.add(2 * diff)
    if (hasUpgrade("p", 352)) gain = gain.add(4 * diff)
    if (hasUpgrade("p", 662)) gain = gain.add(6 * diff)
    gain = gain.times(buyableEffect("m", 12))
    gain = gain.times(buyableEffect("m", 22))
    gain = gain.times(buyableEffect("b", 12))
    gain = gain.times(buyableEffect("bonus1", 12))
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
    if (hasUpgrade("p", 281)) {
		if (hasUpgrade("sp", 102)) gain = gain.times(12)
		else gain = gain.times(1.02)
	}
    if (hasUpgrade("p", 311)) gain = gain.times(2)
    if (hasUpgrade("p", 331)) gain = gain.times(0.4)
    if (hasUpgrade("p", 341)) gain = gain.times(upgradeEffect("p", 341))
    if (hasUpgrade("p", 371)) gain = gain.times(1.5)
    if (hasUpgrade("p", 381)) gain = gain.times(7)
    if (hasUpgrade("p", 442)) gain = gain.times(upgradeEffect("p", 442))
    if (hasUpgrade("p", 511)) gain = gain.times(3.5)
    if (hasUpgrade("p", 542)) gain = gain.times(69)
    if (hasUpgrade("p", 581)) gain = gain.times(upgradeEffect("p", 581))
    if (hasUpgrade("p", 611)) gain = gain.times(2.5)
    if (hasUpgrade("p", 671)) gain = gain.times(1.5)
    if (hasUpgrade("p", 741)) gain = gain.times(3)

    if (hasUpgrade("g", 21)) gain = gain.times(1.25)
    if (hasUpgrade("g", 61)) gain = gain.times(1.2)
    if (hasUpgrade("g", 101)) gain = gain.times(1.2)
    if (hasUpgrade("g", 121)) gain = gain.times(1.4)

    if (hasUpgrade("a", 11)) gain = gain.times(10)
    if (hasUpgrade("a", 21)) gain = gain.times(2)
    if (hasUpgrade("a", 42)) gain = gain.times(6)

    if (hasMilestone("pr", 1)) {
        gain = gain.times(player.pr.points.minus(1));
    }
    if (hasMilestone("pr", 3)) {
        gain = gain.times(new Decimal(1.1).pow(player.pr.points.sub(7)));
    }

    if (hasMilestone("c", 1)) {
        gain = gain.times(player.c.points.pow(0.125));
    }

    if (hasMilestone("g", 1)) {
        gain = gain.times(player.g.power.pow(0.175));
    }

    if (hasUpgrade("p", 362)) gain = gain.add(1e9 * diff)

    gain = gain.times(globalMult())

    player.m.points = player.m.points.add(gain)
    },

    getMoneyPerSecond() { // Literally only used for the title
    let gain = new Decimal(1)           
    if (hasUpgrade("p", 192)) gain = gain.add(2)
    if (hasUpgrade("p", 352)) gain = gain.add(4)
    if (hasUpgrade("p", 662)) gain = gain.add(6)
    gain = gain.times(buyableEffect("m", 12))
    gain = gain.times(buyableEffect("m", 22))
    gain = gain.times(buyableEffect("b", 12))
    gain = gain.times(buyableEffect("bonus1", 12))
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
    if (hasUpgrade("p", 281)) {
		if (hasUpgrade("sp", 101)) gain = gain.times(12)
		else gain = gain.times(1.02)
	}
    if (hasUpgrade("p", 311)) gain = gain.times(2)
    if (hasUpgrade("p", 331)) gain = gain.times(0.4)
    if (hasUpgrade("p", 341)) gain = gain.times(upgradeEffect("p", 341))
    if (hasUpgrade("p", 371)) gain = gain.times(1.5)
    if (hasUpgrade("p", 381)) gain = gain.times(7)
    if (hasUpgrade("p", 442)) gain = gain.times(upgradeEffect("p", 442))
    if (hasUpgrade("p", 381)) gain = gain.times(2.5)
    if (hasUpgrade("p", 511)) gain = gain.times(1.5)
    if (hasUpgrade("p", 542)) gain = gain.times(69)
    if (hasUpgrade("p", 581)) gain = gain.times(upgradeEffect("p", 581))
    if (hasUpgrade("p", 611)) gain = gain.times(2.5)
    if (hasUpgrade("p", 671)) gain = gain.times(1.5)
    if (hasUpgrade("p", 741)) gain = gain.times(3)


    if (hasUpgrade("g", 21)) gain = gain.times(1.25)
    if (hasUpgrade("g", 61)) gain = gain.times(1.2)
    if (hasUpgrade("g", 101)) gain = gain.times(1.2)
    if (hasUpgrade("g", 121)) gain = gain.times(1.4)
    if (hasUpgrade("g", 171)) gain = gain.times(1.3)

    if (hasUpgrade("a", 11)) gain = gain.times(10)
    if (hasUpgrade("a", 21)) gain = gain.times(2)
    if (hasUpgrade("a", 42)) gain = gain.times(6)

    if (hasMilestone("pr", 1)) {
        gain = gain.times(player.pr.points.minus(1));
    }
    if (hasMilestone("pr", 3)) {
        gain = gain.times(new Decimal(1.1).pow(player.pr.points.sub(7)));
    }

    if (hasMilestone("c", 1)) {
        if (hasUpgrade("a", 131)) gain = gain.times(player.c.points.pow(0.135));
        gain = gain.times(player.c.points.pow(0.125));
    } 

    if (hasMilestone("g", 1)) {
        gain = gain.times(player.g.power.pow(0.175));
    }

    if (hasUpgrade("p", 362)) gain = gain.add(1e9)

    gain = gain.times(globalMult())

    return gain                    
    },
    automate() {
    if (hasUpgrade("a", 111)) {
            while (canBuyBuyable(this.layer, 11)) {
                buyBuyable(this.layer, 11)
            }
            while (canBuyBuyable(this.layer, 12)) {
                buyBuyable(this.layer, 12)
            }
            while (canBuyBuyable(this.layer, 13)) {
                buyBuyable(this.layer, 13)
            }
        }
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
        Currently: x${format(this.effect())}  
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
    return base.times(bonus) 
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
        Currently: x${format(this.effect())} 
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
    return base.times(bonus)
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
        Currently: +${format(this.effect())}  
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
    return base.times(100).round().div(100)
},
    cap() {
        let base = 100
        /* if (hasUpgrade("sp", 23)) base += 20
        if (hasUpgrade("pr", 32)) base += 65 */
        return base
    },
    unlocked() {return hasUpgrade("p",332)},
},
21: {
    title: "#4M: Point Increase 2",
    display() { 
        let bought = getBuyableAmount("m", 21)
        let cap = this.cap()
        /* if (hasUpgrade("sp", 24)) return `Multiply point gain by +1 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` */
        return `Multiply point gain by x1.15 compounding each purchase. 
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(1e16).times(Decimal.pow(2, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 21)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 21)
        if (bought.gte(this.cap())) return // stop if capped
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 21, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 21)  
    return new Decimal(0).add(new Decimal(1.15).pow(amt))
},
    cap() {
        let base = 100
        /* if (hasUpgrade("sp", 23)) base += 20
        if (hasUpgrade("pr", 32)) base += 65 */
        return base
    },
    unlocked() {return hasUpgrade("p",501)},
},
22: {
    title: "#5M: Money Increase 2",
    display() { 
        let bought = getBuyableAmount("m", 22)
        let cap = this.cap()
        /* if (hasUpgrade("sp", 24)) return `Multiply point gain by +1 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` */
        return `Multiply money gain by x1.125 compounding each purchase. 
        Currently: x${format(this.effect())} 
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(1.5e16).times(Decimal.pow(2, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 22)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 22)
        if (bought.gte(this.cap())) return // stop if capped
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 22, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 22)  
    return new Decimal(0).add(new Decimal(1.125).pow(amt))
},
    cap() {
        let base = 100
        /* if (hasUpgrade("sp", 23)) base += 20
        if (hasUpgrade("pr", 32)) base += 65 */
        return base
    },
    unlocked() {return hasUpgrade("p",502)},
},
23: {
    title: "#6M: Subpoint Increase",
    display() { 
        let bought = getBuyableAmount("m", 23)
        let cap = this.cap()
        /* if (hasUpgrade("sp", 24)) return `Multiply point gain by +1 each purchase.  
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` */
        return `Multiply subpoint gain by +25% additive each purchase. 
        After every 10 levels, the effect is multiplied by x1.5.
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(1e30).times(Decimal.pow(1.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 23)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 23)
        if (bought.gte(this.cap())) return
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 23, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 23)  
    let base = new Decimal(1).add(amt.times(0.25))
    let bonus = Decimal.pow(1.5, Math.floor(amt / 10))
    return base.times(bonus)
},
    cap() {
        let base = 100
        /* if (hasUpgrade("sp", 23)) base += 20
        if (hasUpgrade("pr", 32)) base += 65 */
        return base
    },
    unlocked() {return hasUpgrade("p",691)},
},
31: {
    title: "#7M: Power Increase",
    display() { 
        let bought = getBuyableAmount("m", 31)
        let cap = this.cap()
        return `Multiply generator power gain by +10% additive each purchase. 
        After every 10 levels, the effect is multiplied by x1.25.
        Currently: x${format(this.effect())}   
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(1e41).times(Decimal.pow(1.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 31)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 31)
        if (bought.gte(this.cap())) return
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 31, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 31)  
    let base = new Decimal(1).add(amt.times(0.1))
    let bonus = Decimal.pow(1.25, Math.floor(amt / 10))
    return base.times(bonus)
},
    cap() {
        let base = 100
        return base
    },
    unlocked() {return hasUpgrade("a",111)},
},
32: {
    title: "#8M: Ascension Increase",
    display() { 
        let bought = getBuyableAmount("m", 32)
        let cap = this.cap()
        return `Multiply ascension gain by +10% additive each purchase. 
        After every 10 levels, the effect is multiplied by x1.25.
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(5e41).times(Decimal.pow(1.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 32)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 32)
        if (bought.gte(this.cap())) return
        player.m.points = player.m.points.sub(this.cost(bought))
        setBuyableAmount("m", 32, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 32)  
    let base = new Decimal(1).add(amt.times(0.1))
    let bonus = Decimal.pow(1.25, Math.floor(amt / 10))
    return base.times(bonus)
},
    cap() {
        let base = 100
        return base
    },
    unlocked() {return hasUpgrade("a",111)},
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
        ["buyable", 21],
        ["buyable", 22],
        ["buyable", 23]
    ]],
    ["row", [
        ["buyable", 31],
        ["buyable", 32],
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
    row: 0,
    gainMult() {
      let gain = new Decimal(1)
      gain = gain.div(globalMult())
      return gain
    },
    layerShown() { return false },
    doReset(resettingLayer) {
    if (resettingLayer === "sp") {
        if (!hasUpgrade("sp", 41) && !hasUpgrade("a", 72)) {
            layerDataReset(this.layer)
            player.pr.points = new Decimal(0)
        } 
    }
    else if (resettingLayer === "a") {
                layerDataReset(this.layer)
                player.pr.points = new Decimal(0)
    }
    else if (resettingLayer === "bonus1") {
                layerDataReset(this.layer)
    } 
},
    autoPrestige() {
        if (hasUpgrade("a", 91)) {
        return player.points.gte(this.requires);
        }
     },
    resetsNothing() {
        if (hasUpgrade("a", 91)) return true
        else return false
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
         effect() {
            let base = hasUpgrade("sp", 41) ? 2 : 1 // 200% or 100%
            return player.pr.points.add(1).mul(base)
        },
        effectDescription() {
                if (hasUpgrade("sp", 41)) return "Boosts point gain by +200% additive per prestige point. Current boost: x" + format(this.effect())
                return "Boosts point gain by +100% additive per prestige point. Current boost: x" + format(this.effect())},
        done() { return player.pr.points.gte(1) }
    },

    1: {
        requirementDescription: "3 Prestige Points",
         effect() {
         return player.pr.points.sub(2).max(1)
         },
        effectDescription() { return "Boosts money gain by +100% additive per prestige point past 2 prestige points. Current boost: x" + format(this.effect()) },
        done() { return player.pr.points.gte(3) },
    },

    2: {
        requirementDescription: "6 Prestige Points",
        effect() {
         return new Decimal(1.1).pow(player.pr.points.sub(5)).max(1)
         },
        effectDescription() { return "Boosts point gain by 1.1x compounding per prestige point past 5 prestige points. Current boost: x" + format(this.effect()) },
        done() { return player.pr.points.gte(6) }
    },
    3: {
        requirementDescription: "8 Prestige Points",
        effect() {
         return new Decimal(1.125).pow(player.pr.points.sub(7)).max(1)
         },
        effectDescription() { return "Boosts money gain by 1.125x compounding per prestige point past 7 prestige points. Current boost: x" + format(this.effect()) },
        done() { return player.pr.points.gte(8) }
    },
    4: {
        requirementDescription: "15 Prestige Points",
        effect() {
         return (player.pr.points.sub(14).times(0.5)).add(1).max(1)
         },
        effectDescription() { return "Boosts subpoint gain by +50% additive per prestige point past 14 prestige points. Current boost: x" + format(this.effect()) },
        done() { return player.pr.points.gte(15) && hasUpgrade("sp",11) },
        unlocked() {return hasUpgrade("sp",11)},
    },
    5: {
        requirementDescription: "18 Prestige Points",
        effect() {
            return new Decimal(new Decimal(2).pow(player.pr.points.sub(17)).min(512).max(1));
        },
        effectDescription() { return "Boost click gain by 2x compounding per prestige point past 17 prestige points, ending at 26 prestige points. Current boost: x" + format(this.effect()) },
        done() { return player.pr.points.gte(18) && hasUpgrade("sp",11) },
        unlocked() {return hasUpgrade("sp",11)},
    },
    6: {
        requirementDescription: "44 Prestige Points",
        effectDescription: "Boost ascension gain by +15% additive per prestige point past 43 prestige points.",
        done() { return player.pr.points.gte(44) && hasUpgrade("a",91) },
        unlocked() {return hasUpgrade("a",91)},
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
                player.c.points = new Decimal(0)
            } else if (resettingLayer === "a") {
                layerDataReset(this.layer)
                player.c.points = new Decimal(0)
            } else if (resettingLayer === "bonus1") {
                layerDataReset(this.layer)
                player.c.points = new Decimal(0)
            } 
        },
    update(diff) { // ze autoclicker
        if (hasUpgrade("p", 422) || hasUpgrade("a", 31)) {
            let gain = new Decimal(diff).times(tmp.c.clickMult)

            gain = gain.times(0.1)
            if (hasUpgrade("p", 423)) gain = gain.times(2) // autoclick upgrades
            if (hasUpgrade("p", 531)) gain = gain.times(5)
            if (hasUpgrade("p", 571)) gain = gain.times(upgradeEffect("p", 571))
            if (hasUpgrade("p", 681)) gain = gain.times(1.75)
            
            if (hasUpgrade("a", 21)) gain = gain.times(2)
            if (hasUpgrade("a", 31)) gain = gain.times(10)
            
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
        if (hasUpgrade("p", 661)) gain = gain.add(30)
        if (hasUpgrade("p", 321)) {
		if (hasUpgrade("sp", 111)) gain = gain.times(10)
		else gain = gain.times(2)
	    }
        if (hasUpgrade("p", 371)) gain = gain.times(1.5)
        if (hasUpgrade("p", 421)) gain = gain.times(3)
        if (hasUpgrade("p", 461)) gain = gain.times(upgradeEffect("p", 461))
        if (hasUpgrade("p", 471)) gain = gain.times(1.5)
        if (hasUpgrade("p", 511)) gain = gain.times(2)
        if (hasUpgrade("p", 572)) gain = gain.times(upgradeEffect("p", 572))
        if (hasUpgrade("p", 641)) gain = gain.times(upgradeEffect("p", 641))
        if (hasUpgrade("p", 751)) gain = gain.times(4)
        if (hasUpgrade("p", 791)) gain = gain.div(0.5)

        if (hasUpgrade("g", 31)) gain = gain.times(1.2)
        if (hasUpgrade("g", 71)) gain = gain.times(1.1)
        if (hasUpgrade("g", 101)) gain = gain.times(1.2)
        if (hasUpgrade("g", 131)) gain = gain.times(1.3)
        if (hasUpgrade("g", 171)) gain = gain.times(1.25)
        
        if (hasUpgrade("a", 11)) gain = gain.times(10)

        gain = gain.times(globalMult())
        gain = gain.times(buyableEffect("b", 21))
    if (hasMilestone("pr", 5)) {
        gain = gain.times(new Decimal(2).pow(player.pr.points.sub(17)).min(512).max(1));
    }
    if (hasMilestone("g", 2)) {
        gain = gain.times(player.g.power.pow(0.1));
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
        effect() {
            let base = hasUpgrade("a", 131) ? 0.165 : 0.15
            return player.c.points.add(1).pow(base).max(1)
        },
        effectDescription() {
        if (hasUpgrade("a", 131)) return "Boosts point gain with a formula of clicks^0.165. Current boost: x" + format(this.effect())
        else return "Boosts point gain with a formula of clicks^0.15. Current boost: x" + format(this.effect())},
        done() { return player.c.points.gte(100) }
    },

    1: {
        requirementDescription: "1,000 Clicks",
        effect() {
            let base = hasUpgrade("a", 131) ? 0.135 : 0.125
            return player.c.points.add(1).pow(base).max(1)
        },
        effectDescription() {
        if (hasUpgrade("a", 131)) return "Boosts money gain with a formula of clicks^0.135. Current boost: x" + format(this.effect())
        else return "Boosts money gain with a formula of clicks^0.125. Current boost: x" + format(this.effect())},
        done() { return player.c.points.gte(1000) },
    },
    2: {
        requirementDescription: "1,000,000 Clicks",
        effect() {
            let base = hasUpgrade("a", 131) ? 0.03 : 0.025
            return player.c.points.add(1).pow(base).max(1)
        },
        effectDescription() {
        if (hasUpgrade("a", 131)) return "Boosts subpoint gain with a formula of clicks^0.03. Current boost: x" + format(this.effect())
        else return "Boosts subpoint gain with a formula of clicks^0.025. Current boost: x" + format(this.effect())},
        done() { return player.c.points.gte(1000000) && hasUpgrade("sp",11)},
        unlocked() {return hasUpgrade("sp",11)},
    },
    3: {
        requirementDescription: "1e19 Clicks",
        effect() {
            return player.c.points.add(1).pow(0.0175).max(1)
        },
        effectDescription() { return "Boosts ascension gain with a formula of clicks^0.0175. Current boost: x" + format(this.effect())},
        done() { return player.c.points.gte(1e19) && hasUpgrade("a",131)},
        unlocked() {return hasUpgrade("a",131)},
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
    row: 0,
    doReset(resettingLayer) {
            if (resettingLayer === "a") {
                layerDataReset(this.layer)
            }
            else if (resettingLayer === "bonus1") {
                layerDataReset(this.layer)
            } 
    },
    canReset() {
    return (player.points.gte("1e18") && hasUpgrade("p", 401))
    },
    getResetGain() {
    let base = player.points  
    if (player.points.lt("1e18")) {
        return new Decimal(0)
    }
    let gain = base.div(new Decimal("1e18")).pow(0.8)

    if (hasUpgrade("p", 471)) gain = gain.times(2)
    if (hasUpgrade("p", 551)) gain = gain.times(3)
    if (hasUpgrade("p", 631)) gain = gain.times(upgradeEffect("p", 631))
    if (hasUpgrade("p", 632)) gain = gain.times(1.25)
    if (hasUpgrade("p", 642)) gain = gain.times(upgradeEffect("p", 642))
    if (hasUpgrade("p", 761)) gain = gain.times(2.5)
    gain = gain.times(buyableEffect("b", 22))
    gain = gain.times(buyableEffect("bonus1", 21))
    gain = gain.times(globalMult())

    if (hasUpgrade("a", 11)) gain = gain.times(10)
    if (hasUpgrade("a", 21)) gain = gain.times(2)
    if (hasUpgrade("a", 61)) gain = gain.times(2.5)
    if (hasUpgrade("a", 71)) gain = gain.times(3)

    if (hasMilestone("pr", 4)) {
        gain = gain.times((player.pr.points.minus(14).times(0.5)).add(1));
    }
    if (hasMilestone("c", 2)) {
        if (hasUpgrade("a", 131)) gain = gain.times(player.c.points.pow(0.03));
        else gain = gain.times(player.c.points.pow(0.025));
    }
    if (hasMilestone("g", 3)) {
        gain = gain.times(player.g.power.pow(0.075));
    }
    gain = gain.floor();
    return gain
    },
    prestigeButtonText() {
        return "Reset for " + format(getResetGain("sp")) + " subpoints"
    },
    passiveGeneration() {
    if (!hasUpgrade("a", 62) || !(hasUpgrade("p", 401))) return 0
    let gain = new Decimal(0.001)
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
                cost: new Decimal(250),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [41],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,21)},
            },
            41: {
                title: "Upgrade #4-S",
                description: "Keep Upgrade #25 and prestige points on subpoints. Improve the first milestone from +100% to +200%.",
                cost: new Decimal(8000),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [51],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,31)},
            },
            51: {
                title: "Upgrade #5-S",
                description: "Upgrade #3's formula is improved to 1.15x.",
                cost: new Decimal(7500000),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [61],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,41)},
            },
            61: {
                title: "Upgrade #6-S",
                description: "^10 Upgrade #12's time.",
                cost: new Decimal(1e10),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [71],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,51)},
            },
            71: {
                title: "Upgrade #7-S",
                description: "Upgrade #20's formula is improved by ^0.05.",
                cost: new Decimal(1e16),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [81],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,61)},
            },
            81: {
                title: "Upgrade #8-S",
                description: "Points de-boost itself. Formula: 1000/log1.5(points), min 2",
                cost: new Decimal(5.7e20),
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
                cost: new Decimal(9e21),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [102],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,81)},
            },
            101: {
                title: "Upgrade #?-S",
                description: "x5 point gain. You earned it, bud.",
                cost: new Decimal("Infinity"),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [101],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,101)},
            },
            102: {
                title: "Upgrade #10-S",
                description: "Upgrade #35 now gives x1.2 points & x12 money.",
                cost: new Decimal(2e29),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [111],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,91)},
            },
            111: {
                title: "Upgrade #11-S",
                description: "Upgrade #39 now gives x10 clicks.",
                cost: new Decimal(6.4e31),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [121],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,102)},
            },
            121: {
                title: "Upgrade #12-S",
                description: "Upgrade #82's exponent is increased by +^0.01.",
                cost: new Decimal(3e37),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [131],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,111)},
            },
            131: {
                title: "Upgrade #13-S",
                description: "-log30 Upgrade #62 & #74's formula.",
                cost: new Decimal(8e40),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [131],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,121)},
            },
    },
    tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false; // I spent THREE DAYS wondering why this wouldn't work. The answer was it was in upgrades.
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 131]]],
        ["row", [["upgrade", 121]]],
        ["row", [["upgrade", 111]]],
        ["row", [["upgrade", 101], ["upgrade", 102]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 61]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 41]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 11]]],
    ];
} else { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 11]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 41]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 61]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 101], ["upgrade", 102]]],
        ["row", [["upgrade", 111]]],
        ["row", [["upgrade", 121]]],
        ["row", [["upgrade", 131]]],
]}
    },
})

addLayer("b", {
    name: "boosters",
    symbol: "B", 
    position: 5, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        money: new Decimal(0),
        clicks: new Decimal(0),
        subpoints: new Decimal(0)
    }},
    color: "#505bf7ff",
    resource: "boosters",
    baseResource: "points", 
    baseAmount() {return player.points},
    layerShown() {return false},
    doReset(resettingLayer) {
            if (resettingLayer === "a") {
                layerDataReset(this.layer)
                player.b.points = new Decimal(0)
                player.b.money = new Decimal(0)
                player.b.clicks = new Decimal(0)
                player.b.subpoints = new Decimal(0)
            }
            else if (resettingLayer === "bonus1") {
                layerDataReset(this.layer)
                player.b.points = new Decimal(0)
                player.b.money = new Decimal(0)
                player.b.clicks = new Decimal(0)
                player.b.subpoints = new Decimal(0)
            } 
    },
    row: 0,
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.b.points.add(player.b.money).add(player.b.clicks).add(player.b.subpoints)) + "B (Total Boosters)"
            },
                body() {return "Boosters increase currency gain based on how many you own. Each additional Booster provides a smaller bonus, while also increasing the cost of all Boosters, so purchase carefully!"},
                unlocked() {return true}
                }
            },
    buyables: {
        11: {
    title: "#1B: Point Booster",
    display() { 
        let bought = getBuyableAmount("b", 11)
        let cap = this.cap()
        return `Boosts point gain by Pbooster^0.7.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points`
    },
    cost() { 
        return new Decimal(1e27).times(boosterCostMult())
    },
    canAfford() { 
        let bought = getBuyableAmount("b", 11)
        return player.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("b", 11)
        if (bought.gte(this.cap())) return // stop if capped
        player.points = player.points.sub(this.cost(bought))
        player.b.points = player.b.points.add(1)
        setBuyableAmount("b", 11, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("b", 11) 
    if (hasUpgrade("p", 721)) amt = amt.add(1) 
    if (hasUpgrade("a", 121)) amt = amt.times(2)
    let base = new Decimal(amt.add(1).pow(0.7))
    return format(base) 
    },
    cap() {
        let base = 100
        return base
    },
    currency() { 
        return player.points 
    },
    },
        12: {
    title: "#2B: Money Booster",
    display() { 
        let bought = getBuyableAmount("b", 12)
        let cap = this.cap()
        return `Boosts money gain by Mbooster^0.8.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points`
    },
    cost() { 
        return new Decimal(1e27).times(boosterCostMult())
    },
    canAfford() { 
        let bought = getBuyableAmount("b", 12)
        return player.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("b", 12)
        if (bought.gte(this.cap())) return // stop if capped
        player.points = player.points.sub(this.cost(bought))
        player.b.money = player.b.money.add(1)
        setBuyableAmount("b", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("b", 12)  
    if (hasUpgrade("p", 721)) amt = amt.add(1)
    if (hasUpgrade("a", 121)) amt = amt.times(2)
    let base = new Decimal(amt.add(1).pow(0.8))
    return format(base) 
    },
    cap() {
        let base = 100
        return base
    },
    currency() { 
        return player.points 
    },
    },
    21: {
    title: "#3B: Click Booster",
    display() { 
        let bought = getBuyableAmount("b", 21)
        let cap = this.cap()
        return `Boosts click gain by Cbooster^0.8.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points`
    },
    cost() { 
        return new Decimal(1e27).times(boosterCostMult())
    },
    canAfford() { 
        let bought = getBuyableAmount("b", 21)
        return player.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("b", 21)
        if (bought.gte(this.cap())) return // stop if capped
        player.points = player.points.sub(this.cost(bought))
        player.b.clicks = player.b.clicks.add(1)
        setBuyableAmount("b", 21, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("b", 21)  
    if (hasUpgrade("p", 721)) amt = amt.add(1)
    if (hasUpgrade("a", 121)) amt = amt.times(2)
    let base = new Decimal(amt.add(1).pow(0.8))
    return format(base) 
    },
    cap() {
        let base = 100
        return base
    },
    currency() { 
        return player.points 
    },
    },
    22: {
    title: "#4B: Subpoint Booster",
    display() { 
        let bought = getBuyableAmount("b", 22)
        let cap = this.cap()
        return `Boosts subpoint gain by SPbooster^0.7.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points`
    },
    cost() { 
        return new Decimal(1e27).times(boosterCostMult())
    },
    canAfford() { 
        let bought = getBuyableAmount("b", 22)
        return player.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("b", 22)
        if (bought.gte(this.cap())) return // stop if capped
        player.points = player.points.sub(this.cost(bought))
        player.b.subpoints = player.b.subpoints.add(1)
        setBuyableAmount("b", 22, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("b", 22)  
    if (hasUpgrade("p", 721)) amt = amt.add(1)
    if (hasUpgrade("a", 121)) amt = amt.times(2)
    let base = new Decimal(amt.add(1).pow(0.7))
    return format(base) 
    },
    cap() {
        let base = 100
        return base
    },
    currency() { 
        return player.points 
    },
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
        ["buyable", 21],
        ["buyable", 22],
        ["upgrade", 23]
    ]]
]
})

function boosterCostMult() {
    let total =
        getBuyableAmount("b", 11)
        .add(getBuyableAmount("b", 12))
        .add(getBuyableAmount("b", 21))
        .add(getBuyableAmount("b", 22))

    if (hasUpgrade("p", 771)) return Decimal.pow(1.375, total)
    else return Decimal.pow(1.425, total)
}

addLayer("g", {
    name: "generators",
    symbol: "G", 
    position: 6, 
    row: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        power: new Decimal(0),
    }},
    doReset(resettingLayer) {
            if (resettingLayer === "a") {
                layerDataReset(this.layer)
                player.g.points = new Decimal(0)
                player.g.power = new Decimal(0)
            }
             else if (resettingLayer === "bonus1") {
                layerDataReset(this.layer)
                player.g.points = new Decimal(0)
                player.g.power = new Decimal(0)
            } 
    },
    color: "#b0dc13ff",
    requires: new Decimal(1e27), 
    resource: "generators",
    baseResource: "points", 
    baseAmount() {return player.points},
    layerShown() {return false},
    clickables: {
    11: {
        title: "Buy Generator",

        display() {
            return "Cost: " + format(this.cost()) + " points";
        },

        cost() {
            return new Decimal(1e27)
                .times(Decimal.pow(14.8, player.g.points));
        },

        canClick() {
            return player.points.gte(this.cost());
        },

        onClick() {
            player.points = player.points.sub(this.cost());
            player.g.points = player.g.points.add(1);
        },
      },
    },
    update(diff) {
        let gain = new Decimal(diff)
        if (player.g.points.eq(0) && !hasUpgrade("a", 122)) {
            gain = new Decimal(0);
            } else {
            if (hasUpgrade("a", 122)) gain = gain.times(Decimal.pow(2, (player.g.points.add(1))));
            else gain = gain.times(Decimal.pow(2, player.g.points));
            }
            if (hasUpgrade("p", 731)) gain = gain.times(3)
            if (hasUpgrade("p", 781)) gain = gain.times(upgradeEffect("p", 781))

            if (hasUpgrade("g", 41)) gain = gain.times(1.2)
            if (hasUpgrade("g", 81)) gain = gain.times(1.15)
            if (hasUpgrade("g", 91)) gain = gain.times(upgradeEffect("g", 91))
            if (hasUpgrade("g", 141)) gain = gain.times(1.5)
            if (hasUpgrade("g", 191)) gain = gain.times(1.4)

            if (hasUpgrade("a", 21)) gain = gain.times(2)

            gain = gain.times(globalMult())
            gain = gain.times(buyableEffect("m", 31))
            

        player.g.power = player.g.power.add(gain)
    },
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.g.points) + " Generators, and " + format(player.g.power) + " Generator Power"
            },
                body() {return "Generators generate power at a rate of 2^gen/s, and is used to boost currencies through milestones. Generator power can also be used to buy weak but noticable upgrades."},
                unlocked() {return true}
                }
            },
    upgrades: {
            11: {
                title: "Upgrade #1-G",
                description: "1.3x point gain.",
                cost: new Decimal(50),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                branches: [21],
                },
            21: {
                title: "Upgrade #2-G",
                description: "1.25x money gain.",
                cost: new Decimal(250),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,11)},
                branches: [31],
                },
            31: {
                title: "Upgrade #3-G",
                description: "1.2x click gain.",
                cost: new Decimal(1250),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,21)},
                branches: [41],
                },
            41: {
                title: "Upgrade #4-G",
                description: "1.2x power gain.",
                cost: new Decimal(3000),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,31)},
                branches: [51],
                },
            51: {
                title: "Upgrade #5-G",
                description: "1.25x point gain.",
                cost: new Decimal(10000),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,41)},
                branches: [61],
                },
            61: {
                title: "Upgrade #6-G",
                description: "1.2x money gain.",
                cost: new Decimal(25000),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,51)},
                branches: [71],
                },
            71: {
                title: "Upgrade #7-G",
                description: "1.1x click gain.",
                cost: new Decimal(50000),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,61)},
                branches: [81],
                },
            81: {
                title: "Upgrade #8-G",
                description: "1.15x power gain.",
                cost: new Decimal(100000),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,71)},
                branches: [91],
                },
            91: {
                title: "Upgrade #9-G",
                description: "Power boosts itself. Formula: power^0.01",
                cost: new Decimal(250000),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,81)},
                effect() {
                    return player.g.power.pow(0.01)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [101],
                },
            101: {
                title: "Upgrade #10-G",
                description: "Final upgrade. x1.2 power, points, money & clicks.",
                cost: new Decimal(1000000),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,91)},
                branches: [111],
                },
            111: {
                title: "Upgrade #11-G",
                description: "x1.5 point gain.",
                cost: new Decimal(1e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,101) && hasUpgrade("a", 101)},
                branches: [121],
                },
            121: {
                title: "Upgrade #12-G",
                description: "x1.4 money gain.",
                cost: new Decimal(2e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,111)},
                branches: [131],
                },
            131: {
                title: "Upgrade #13-G",
                description: "x1.3 click gain.",
                cost: new Decimal(3e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,121)},
                branches: [141],
                },
            141: {
                title: "Upgrade #14-G",
                description: "x1.5 power gain.",
                cost: new Decimal(4e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,131)},
                branches: [151],
                },
            151: {
                title: "Upgrade #15-G",
                description: "x1.5 ascension gain.",
                cost: new Decimal(5e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,141)},
                branches: [161],
                },
            161: {
                title: "Upgrade #16-G",
                description: "x1.4 point gain.",
                cost: new Decimal(6e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,151)},
                branches: [171],
                },
            171: {
                title: "Upgrade #17-G",
                description: "x1.3 money gain.",
                cost: new Decimal(7e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,161)},
                branches: [181],
                },
            181: {
                title: "Upgrade #18-G",
                description: "x1.25 click gain.",
                cost: new Decimal(8e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,171)},
                branches: [191],
                },
            191: {
                title: "Upgrade #19-G",
                description: "x1.4 power gain.",
                cost: new Decimal(9e10),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,181)},
                branches: [201],
                },
            201: {
                title: "Upgrade #20-G",
                description: "Final upgrade, again. x1.5 ascension gain again.",
                cost: new Decimal(1e11),
                currencyDisplayName: "power",
                currencyInternalName: "power",
                currencyLayer: "g",
                unlocked() {return hasUpgrade(this.layer,191)},
                branches: [],
                },
         },
    milestones: {
    0: {
        requirementDescription: "10 Generator Power",
        effect() {
                return player.g.power.add(1).pow(0.2).max(1)
        },
        effectDescription() {
        return "Boosts point gain by power^0.2. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(10) }
    },

    1: {
        requirementDescription: "100 Generator Power",
        effect() {
                return player.g.power.add(1).pow(0.175).max(1)
        },
        effectDescription() {
        return "Boosts money gain by power^0.175. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(100) },
    },

    2: {
        requirementDescription: "1,000 Generator Power",
        effect() {
                return player.g.power.add(1).pow(0.1).max(1)
        },
        effectDescription() {
        return "Boosts click gain by power^0.1.. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(1000) }
    },
    3: {
        requirementDescription: "10,000 Generator Power",
        effect() {
                return player.g.power.add(1).pow(0.075).max(1)
        },
        effectDescription() {
        return "Boosts subpoint gain by power^0.075. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(10000) }
    },
},
    tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false; // I spent THREE DAYS wondering why this wouldn't work. The answer was it was in upgrades.
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        "milestones",
        ["row", [["clickable", 11]]],
        ["row", [["upgrade", 201]]],
        ["row", [["upgrade", 191]]],
        ["row", [["upgrade", 181]]],
        ["row", [["upgrade", 171]]],
        ["row", [["upgrade", 161]]],
        ["row", [["upgrade", 151]]],
        ["row", [["upgrade", 141]]],
        ["row", [["upgrade", 131]]],
        ["row", [["upgrade", 121]]],
        ["row", [["upgrade", 111]]],
        ["row", [["upgrade", 101]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 61]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 41]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 11]]],
    ];
} else { return [
        ["row", [["infobox", 1]]],
        "milestones",
        ["row", [["clickable", 11]]],
        ["row", [["upgrade", 11]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 41]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 61]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 101]]],
        ["row", [["upgrade", 111]]],
        ["row", [["upgrade", 121]]],
        ["row", [["upgrade", 131]]],
        ["row", [["upgrade", 141]]],
        ["row", [["upgrade", 151]]],
        ["row", [["upgrade", 161]]],
        ["row", [["upgrade", 171]]],
        ["row", [["upgrade", 181]]],
        ["row", [["upgrade", 191]]],
        ["row", [["upgrade", 201]]],
]}
    },
})

addLayer("a", {
    name: "ascension",
    symbol: "A", 
    position: 7, 
    row: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#13c5dcff",
    requires: new Decimal(1e49),
    type: "normal", 
    resource: "ascensions",
    baseResource: "points", 
    baseAmount() {return player.points},
    layerShown() {return false},
    doReset(resettingLayer) {
            if (resettingLayer === "bonus1") {
                layerDataReset(this.layer)
            } 
    },
    canReset() {
    return (player.points.gte("1e49") && hasUpgrade("p", 801))
    },
    getResetGain() {
    if (player.points.lt("1e49")) {
        return new Decimal(0)
    }
    let gain = new Decimal(1)
    let base2 = player.points.div("1e49")
    while(true) {
            if (base2.gt(1000)) {
                gain = gain.add(1)
                base2 = base2.div(1000)
            } else break;
    }
    if (hasUpgrade("a", 81)) gain = gain.times(2)
    if (hasUpgrade("a", 141)) gain = gain.times(2.5)
    if (hasUpgrade("g", 151)) gain = gain.times(1.5)
    if (hasUpgrade("g", 201)) gain = gain.times(1.5)
    if (hasUpgrade("a", 151)) gain = gain.times(upgradeEffect("a", 151))
    gain = gain.times(globalMult())
    gain = gain.times(buyableEffect("m", 32))
    gain = gain.times(buyableEffect("bonus1", 22))
    if (hasMilestone("pr", 6)) {
        gain = gain.times((player.pr.points.minus(43).times(0.15)).add(1));
    }
    if (hasMilestone("c", 3)) {
        gain = gain.times(player.c.points.pow(0.0175));
    }
    gain = gain.floor();
    return gain
    },
    prestigeButtonText() {
        return "Reset for " + format(getResetGain("a")) + " ascensions"
    },
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.a.points) + "AP (Ascension Points)"
            },
                body() {return `Welcome to your first true reset layer! Ascension resets everything up until this point but gain ascension points. All new layers will be true reset layers, so be wary. You won't be able to get more than 1 ascension point per reset for a bit, so reset when you can. You must have 1e49 points and Upgrade 100 to ascend. <br> Gain 1 extra ascension for every 1,000× your base threshold (1e49 points) you have.`},
                unlocked() {return true}
                }
            },
    upgrades: {
            11: {
                title: "Upgrade #101",
                description: "Good job on your first ascension. x10 points, money, clicks & subpoints. Recovery will be much faster than normal.",
                cost: new Decimal(1),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [21],
                },
            21: {
                title: "Upgrade #102",
                description: "x2 points, money, clicks, subpoints, autoclick speed & generator power.",
                cost: new Decimal(1),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [31],
                unlocked() {return hasUpgrade(this.layer,11)},
                },
            31: {
                title: "Upgrade #103",
                description: "Keep the Autoclicker on ascensions, and x10 autoclicker speed.",
                cost: new Decimal(1),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [41, 42, 43],
                unlocked() {return hasUpgrade(this.layer,21)},
                },
            41: {
                title: "Upgrade #104",
                description: "x4 point gain.",
                cost: new Decimal(4e50),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [51],
                unlocked() {return hasUpgrade(this.layer,31)},
                },
            42: {
                title: "Upgrade #105",
                description: "x6 money gain.",
                cost: new Decimal(1e41),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                branches: [51],
                unlocked() {return hasUpgrade(this.layer,31)},
                },
            43: {
                title: "Upgrade #106",
                description: "x5 click gain.",
                cost: new Decimal(6e19),
                currencyDisplayName: "clicks",
                currencyInternalName: "points",
                currencyLayer: "c",
                branches: [51],
                unlocked() {return hasUpgrade(this.layer,31)},
                },
            51: {
                title: "Upgrade #107",
                description: "Unspent ascensions boost point gain. Formula: (ascensions^0.1)x3",
                cost: new Decimal(1),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return (player.a.points.pow(0.1)).times(3).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [61, 62],
                unlocked() {return hasUpgrade(this.layer,41) && hasUpgrade(this.layer,42) && hasUpgrade(this.layer,43)},
                },
            61: {
                title: "Upgrade #108",
                description: "x2.5 subpoints.",
                cost: new Decimal(2e35),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                currencyLayer: "sp",
                branches: [71],
                unlocked() {return hasUpgrade(this.layer,51)},
                },
            62: {
                title: "Upgrade #109",
                description: "Subpoints now generate passively at a rate of 0.1%/s.",
                cost: new Decimal(2),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [72],
                unlocked() {return hasUpgrade(this.layer,51)},
                },
            71: {
                title: "Upgrade #110",
                description: "x3 subpoints.",
                cost: new Decimal(5e36),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                currencyLayer: "sp",
                branches: [81],
                unlocked() {return hasUpgrade(this.layer,61)},
                },
            72: {
                title: "Upgrade #111",
                description: "Subpoints no longer reset upgrades or prestige points on reset.",
                cost: new Decimal(2),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [81],
                unlocked() {return hasUpgrade(this.layer,62)},
                },
            81: {
                title: "Upgrade #112",
                description: "x2 ascension gain.",
                cost: new Decimal(3),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [91],
                unlocked() {return hasUpgrade(this.layer,71) && hasUpgrade(this.layer,72)},
                },
            91: {
                title: "Upgrade #113",
                description: "Automate Prestige gain, and Prestige no longer resets currencies. Unlock a new prestige milestone.",
                cost: new Decimal(4),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [101],
                unlocked() {return hasUpgrade(this.layer,81)},
                },
            101: {
                title: "Upgrade #114",
                description: "Unlock new Generator upgrades.",
                cost: new Decimal(5),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [111],
                unlocked() {return hasUpgrade(this.layer,91)},
                },
            111: {
                title: "Upgrade #115",
                description: "Automate the first three Money buyables. Also unlock two new buyables.",
                cost: new Decimal(12),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [121, 122],
                unlocked() {return hasUpgrade(this.layer,101)},
                },
            121: {
                title: "Upgrade #116",
                description: "Doubles effective booster amounts. Does not affect costs.",
                cost: new Decimal(50),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [131],
                unlocked() {return hasUpgrade(this.layer,111)},
                },
            122: {
                title: "Upgrade #117",
                description: "Gain an extra Generator for free, and keep the Generators tab on Ascension. (Does not keep Generators or Power)",
                cost: new Decimal(75),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [131],
                unlocked() {return hasUpgrade(this.layer,111)},
                },
            131: {
                title: "Upgrade #118",
                description: "Improves all Click milestones, and unlock a new Click milestone.",
                cost: new Decimal(125),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [141],
                unlocked() {return hasUpgrade(this.layer,121) && hasUpgrade(this.layer,122)},
                },
            141: {
                title: "Upgrade #119",
                description: "x2.5 ascension and point gain.",
                cost: new Decimal(200),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [151],
                unlocked() {return hasUpgrade(this.layer,131)},
                },
            151: {
                title: "Upgrade #120",
                description: "Final upgrade of v1.0. Ascension boosts itself. Formula: log25(ascension)+1.",
                cost: new Decimal(1000),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return (player.a.points.max(1).log(25)).max(1).add(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [161],
                unlocked() {return hasUpgrade(this.layer,141)},
                },
            161: {
                title: "Upgrade #X",
                description: "You have reached the temp end-game! Unlock a new sub-layer. Be warned as this sub-layer is BONUS content, and WILL be removed in the next update.",
                cost: new Decimal(100000),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                onPurchase() {
                    player.bonus1.unlocked = true
                },
                branches: [],
                unlocked() {return hasUpgrade(this.layer,151)},
                }, // note for myself: more point, money & cash multi upgrades for these
         },
    tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false;
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 161]]],
        ["row", [["upgrade", 151]]],
        ["row", [["upgrade", 141]]],
        ["row", [["upgrade", 131]]],
        ["row", [["upgrade", 121], ["upgrade", 122]]],
        ["row", [["upgrade", 111]]],
        ["row", [["upgrade", 101]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 71], ["upgrade", 72]]],
        ["row", [["upgrade", 61], ["upgrade", 62]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 41], ["upgrade", 42], ["upgrade", 43]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 11]]],
    ];
} else { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 111]]],
        ["row", [["upgrade", 11]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 41], ["upgrade", 42], ["upgrade", 43]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 61], ["upgrade", 62]]],
        ["row", [["upgrade", 71], ["upgrade", 72]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 101]]],
        ["row", [["upgrade", 111]]],
        ["row", [["upgrade", 121], ["upgrade", 122]]],
        ["row", [["upgrade", 131]]],
        ["row", [["upgrade", 141]]],
        ["row", [["upgrade", 151]]],
        ["row", [["upgrade", 161]]],
        
]}
    },
})

addLayer("bonus1", {
    name: "crystals",
    symbol: "C", 
    position: 8, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#a30fe7ff",
    resource: "crystals",
    baseResource: "points", 
    baseAmount() {return player.points},
    type: "normal", 
    row: 1,
    canReset() {
    return (hasUpgrade("a", 161))
    },
    getResetGain() {
    let gain = new Decimal(2)
    gain = gain.times(globalMult())
    gain = gain.floor();
    return gain
    },
    layerShown() { return false },
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.bonus1.points) + "C (Crystals)"
            },
                body() {return "Fun fact: Crystals will actually be the first sub-layer in Ascension, just not the same type that you're seeing right now. Crystals reset everything you've worked so hard on for crystals. You can only gain 2 crystals per reset. Be warned as once you reset, you cannot undo what you've done. All buyables will always cost 1 crystal."},
                unlocked() {return true}
                }
            },
    buyables: {
        11: {
    title: "#1C: Crystallized Points",
    display() { 
        let bought = getBuyableAmount("bonus1", 11)
        let cap = this.cap()
        return `Boosts point gain by 100% additive per purchase.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} crystal`
    },
    cost() { 
        return new Decimal(1)
    },
    canAfford() { 
        let bought = getBuyableAmount("bonus1", 11)
        return player.bonus1.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("bonus1", 11)
        if (bought.gte(this.cap())) return // stop if capped
        player.bonus1.points = player.bonus1.points.sub(this.cost(bought))
        setBuyableAmount("bonus1", 11, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("bonus1", 11) 
    let base = new Decimal(amt.add(1))
    return format(base) 
    },
    cap() {
        let base = 10
        return base
    },
    currency() { 
        return player.bonus1.points 
    },
    },
        12: {
    title: "#2C: Crystallized Money",
    display() { 
        let bought = getBuyableAmount("bonus1", 12)
        let cap = this.cap()
        return `Boosts money gain by 100% additive per purchase.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} crystal`
    },
    cost() { 
        return new Decimal(1)
    },
    canAfford() { 
        let bought = getBuyableAmount("bonus1", 12)
        return player.bonus1.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("bonus1", 12)
        if (bought.gte(this.cap())) return // stop if capped
        player.bonus1.points = player.bonus1.points.sub(this.cost(bought))
        setBuyableAmount("bonus1", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("bonus1", 12)  
    let base = new Decimal(amt.add(1))
    return format(base) 
    },
    cap() {
        let base = 10
        return base
    },
    currency() { 
        return player.bonus1.points 
    },
    },
    21: {
    title: "#3C: Crystallized Subpoints",
    display() { 
        let bought = getBuyableAmount("bonus1", 21)
        let cap = this.cap()
        return `Boosts subpoint gain by 100% additive per purchase.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} crystal`
    },
    cost() { 
        return new Decimal(1)
    },
    canAfford() { 
        let bought = getBuyableAmount("bonus1", 21)
        return player.bonus1.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("bonus1", 21)
        if (bought.gte(this.cap())) return // stop if capped
        player.bonus1.points = player.bonus1.points.sub(this.cost(bought))
        setBuyableAmount("bonus1", 21, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("bonus1", 21)  
    let base = new Decimal(amt.add(1))
    return format(base) 
    },
    cap() {
        let base = 10
        return base
    },
    currency() { 
        return player.bonus1.points 
    },
    },
    22: {
    title: "#4C: Crystallized Ascensions",
    display() { 
        let bought = getBuyableAmount("bonus1", 22)
        let cap = this.cap()
        return `Boosts ascension gain by 100% additive per purchase.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} crystal`
    },
    cost() { 
        return new Decimal(1)
    },
    canAfford() { 
        let bought = getBuyableAmount("bonus1", 22)
        return player.bonus1.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("bonus1", 22)
        if (bought.gte(this.cap())) return // stop if capped
        player.bonus1.points = player.bonus1.points.sub(this.cost(bought))
        setBuyableAmount("bonus1", 22, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("bonus1", 22)  
    let base = new Decimal(amt.add(1))
    return format(base) 
    },
    cap() {
        let base = 10
        return base
    },
    currency() { 
        return player.bonus1.points 
    },
    },
},    
})

