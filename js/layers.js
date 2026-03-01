let playerPoints = new Decimal(0)

addLayer("extraoptions", {
    name: "⚙️",
    symbol:"⚙️",
    position: 0,
    row: "side",
    color: "rgb(100, 100, 100)",
    type: "none",
    tooltip: "Extra Options",
    startData() {
    return {
        unlocked: true,
        points: new Decimal(0),
        disableRiskyUpgrade: false,
        unlocked1: false,
        unlocked2: false,
        unlocked3: false,
        unlocked4: false,
        unlocked5: false,
        unlocked6: false,
        disable33: false,
        disable34: false,
        disable57: false,
        disable58: false,
        disable75: false,
        disable76: false,
        disable128: false,
        disable129: false,
        disable152: false,
        disable153: false,
        disable187: false,
        disable188: false,
        }
    },
    infoboxes: {        
            1: {
                title() {
                return "Extra Options"
            },
                body() {return "Extra options are located here. (disabling certain choice upgrades, disabling risky upgrades)"},
                unlocked() {return true}
                }
            },
    clickables: {
    11: {
        title: "Disable Risky Upgrades",
        display() {
            return player.extraoptions.disableRiskyUpgrade ? "Disables purchasing -X upgrades: ON" : "Disables purchasing -X upgrades: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disableRiskyUpgrade = !player.extraoptions.disableRiskyUpgrade
        },
        style() {
            return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    21: {
        title: "Disable Upgrade #33",
        display() {
            return player.extraoptions.disable33 ? "Disables purchasing Upgrade #33: ON" : "Disables purchasing Upgrade #33: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable33 = !player.extraoptions.disable33
        },
        unlocked() {return player.extraoptions.unlocked1},
        style() {
            return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    22: {
        title: "Disable Upgrade #34",
        display() {
            return player.extraoptions.disable34 ? "Disables purchasing Upgrade #34: ON" : "Disables purchasing Upgrade #34: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable34 = !player.extraoptions.disable34
        },
        unlocked() {return player.extraoptions.unlocked1},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    31: {
        title: "Disable Upgrade #57",
        display() {
            return player.extraoptions.disable57 ? "Disables purchasing Upgrade #57: ON" : "Disables purchasing Upgrade #57: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable57 = !player.extraoptions.disable57
        },
        unlocked() {return player.extraoptions.unlocked2},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    32: {
        title: "Disable Upgrade #58",
        display() {
            return player.extraoptions.disable58 ? "Disables purchasing Upgrade #58: ON" : "Disables purchasing Upgrade #58: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable58 = !player.extraoptions.disable58
        },
        unlocked() {return player.extraoptions.unlocked2},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "10px",
            }
        }
      },
      41: {
        title: "Disable Upgrade #75",
        display() {
            return player.extraoptions.disable75 ? "Disables purchasing Upgrade #75: ON" : "Disables purchasing Upgrade #75: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable75 = !player.extraoptions.disable75
        },
        unlocked() {return player.extraoptions.unlocked3},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    42: {
        title: "Disable Upgrade #76",
        display() {
            return player.extraoptions.disable76 ? "Disables purchasing Upgrade #76: ON" : "Disables purchasing Upgrade #76: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable76 = !player.extraoptions.disable76
        },
        unlocked() {return player.extraoptions.unlocked3},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "10px",
            }
        }
      },
      51: {
        title: "Disable Upgrade #128",
        display() {
            return player.extraoptions.disable128 ? "Disables purchasing Upgrade #128: ON" : "Disables purchasing Upgrade #128: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable128 = !player.extraoptions.disable128
        },
        unlocked() {return player.extraoptions.unlocked4},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    52: {
        title: "Disable Upgrade #129",
        display() {
            return player.extraoptions.disable129 ? "Disables purchasing Upgrade #129: ON" : "Disables purchasing Upgrade #129: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable129 = !player.extraoptions.disable129
        },
        unlocked() {return player.extraoptions.unlocked4},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "10px",
            }
        }
      },
      61: {
        title: "Disable Upgrade #152",
        display() {
            return player.extraoptions.disable152 ? "Disables purchasing Upgrade #152: ON" : "Disables purchasing Upgrade #152: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable152 = !player.extraoptions.disable152
        },
        unlocked() {return player.extraoptions.unlocked5},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    62: {
        title: "Disable Upgrade #153",
        display() {
            return player.extraoptions.disable153 ? "Disables purchasing Upgrade #153: ON" : "Disables purchasing Upgrade #153: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable153 = !player.extraoptions.disable153
        },
        unlocked() {return player.extraoptions.unlocked5},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "10px",
            }
        }
      },
      71: {
        title: "Disable Upgrade #187",
        display() {
            return player.extraoptions.disable187 ? "Disables purchasing Upgrade #187: ON" : "Disables purchasing Upgrade #187: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable187 = !player.extraoptions.disable187
        },
        unlocked() {return player.extraoptions.unlocked6},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    72: {
        title: "Disable Upgrade #188",
        display() {
            return player.extraoptions.disable188 ? "Disables purchasing Upgrade #188: ON" : "Disables purchasing Upgrade #188: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.extraoptions.disable188 = !player.extraoptions.disable188
        },
        unlocked() {return player.extraoptions.unlocked6},
        style() {
             return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "10px",
            }
        }
      },
    },
    tabFormat: [
    ["row", [
        ["infobox", 1],
    ]],
    ["row", [
        ["clickable", 11],
    ]],
    ["row", [
        ["clickable", 21],
        ["clickable", 22],
    ]],
    ["row", [
        ["clickable", 31],
        ["clickable", 32],
    ]],
    ["row", [
        ["clickable", 41],
        ["clickable", 42],
    ]],
    ["row", [
        ["clickable", 51],
        ["clickable", 52],
    ]],
    ["row", [
        ["clickable", 61],
        ["clickable", 62],
    ]],
    ["row", [
        ["clickable", 71],
        ["clickable", 72],
    ]]
]
})

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
    startData() { return {
            unlocked: false,
        } },
    layerShown() {if (player.layer2.unlocked) return true
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
            embedLayer: "cr",
            unlocked() {if (hasUpgrade('a',161) || player.cr.points.gt(0) || hasUpgrade("cr", 11)) return true // rework these damn things
            else return false},
            buttonStyle: {
                "color": "#cf3ee2ff",
                "border": "2px solid #cf3ee2ff"
            },
            glowColor: "#cf3ee2ff"
        },
        "Gold": {
            embedLayer: "gold",
            unlocked() {if (hasUpgrade('a',282) || player.gold.points.gt(0)) return true
            else return false},
            buttonStyle: {
                "color": "#e9e506ff",
                "border": "2px solid #e9e506ff"
            },
            glowColor: "#e9e506ff"
        },
        "Sacrifice": {
            embedLayer: "sac",
            unlocked() {if (hasUpgrade('a',451) || player.sac.points.gt(0)) return true
            else return false},
            buttonStyle: {
                "color": "#7c077cff",
                "border": "2px solid #7c077cff"
            },
            glowColor: "#7c077cff"
        },
        "Gemstones": {
            embedLayer: "gem",
            unlocked() {if (hasUpgrade('a',611) || player.gem.points.gt(0) || hasUpgrade("gem", 11)) return true
            else return false},
            buttonStyle: {
                "color": "#4100bb",
                "border": "2px solid #4100bb"
            },
            glowColor: "#4100bb"
        },
    }
})

addLayer("layer3", {
    name: "D",
    symbol:"D",
    position: 1,
    row: 2,
    color: "rgb(101, 23, 8)",
    type: "none",
    tooltip: "Layer 3: Descension",
    startData() { return {
            unlocked: false,
        } },
    layerShown() {if (player.layer3.unlocked) return true
            else return false},
    
    tabFormat: {
    "Descension": {
            embedLayer: "d",
            buttonStyle: {
                "color": "rgb(101, 23, 8)",
                "border": "2px solid rgb(101, 23, 8))",
            },
            glowColor: "#ffffffff",
        },
         "Insanity": {
            embedLayer: "ins",
            unlocked() {if (hasUpgrade('d', 171) || player.ins.points.gt(0) || getBuyableAmount("ins", 11).gt(0) || getBuyableAmount("ins", 12).gt(0)) return true // rework these damn things
            else return false},
            buttonStyle: {
                "color": "rgb(60, 5, 82)",
                "border": "2px solid rgb(60, 5, 82)"
            },
            glowColor: "rgb(60, 5, 82)"
        },
        "Mega-Boosters": {
            embedLayer: "mb",
            unlocked() {if (hasUpgrade('d', 71) || player.mb.totalBoosters.gt(0)) return true
            else return false},
            buttonStyle: {
                "color": "rgb(26, 40, 233)",
                "border": "2px solid rgb(26, 40, 233)"
            },
            glowColor: "rgb(26, 40, 233)"
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
                if (!hasUpgrade("a", 72)) {
                layerDataReset(this.layer) 
                if (hasUpgrade("sp", 41) && !hasUpgrade("a", 72)) {
                    player[this.layer].upgrades.push(211)
                }
                } 
            
            } else if (resettingLayer === "a") {
                layerDataReset(this.layer)
                if (hasUpgrade("a", 121)) {
                    player[this.layer].upgrades.push(591)
                }
                if (hasUpgrade("a", 122)) {
                    player[this.layer].upgrades.push(592)
                }
            } else if (resettingLayer === "sac") {
                player.points = new Decimal(0)
            } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
            }
        },

        automate() {
            if (hasUpgrade("a", 51)) {
                const upgradesToBuy = [21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 171,]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                buyUpg(this.layer, id)
                }
                }
            }
            if (hasUpgrade("a", 141)) {
                const upgradesToBuy = [181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 252, 261, 271, 272, 281, 291, 301, 311, 321, 322]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                buyUpg(this.layer, id)
                } 
                }
            }
            if (hasUpgrade("a", 211)) {
                const upgradesToBuy = [332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                buyUpg(this.layer, id)
                }
                }
            }
            if (hasUpgrade("a", 341)) {
                const upgradesToBuy = [471, 481, 491, 501, 502, 511, 521, 531, 541, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                buyUpg(this.layer, id)
                }
                }
            }
            if (hasUpgrade("a", 521)) {
                const upgradesToBuy = [631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                buyUpg(this.layer, id)
                }
                }
            }
            if (hasUpgrade("d", 22)) {
                const upgradesToBuy = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 252, 261, 271, 272, 281, 291, 301, 311, 321, 322, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                buyUpg(this.layer, id)
                } 
                }
            }
            if (hasUpgrade("d", 41)) {
                const upgradesToBuy = [401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                buyUpg(this.layer, id)
                } 
                }
            }
            if (hasUpgrade("sp", 11)) {
                if (canAffordUpgrade(this.layer, 11) && !hasUpgrade(this.layer, 11)) {
                    buyUpg(this.layer, 11)
                }
           }
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
                if (hasUpgrade("sp", 21)) return "Quintuples point gain."
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
                description() {
                if (hasUpgrade("sp", 201)) return "Triple triple your point gain."
                return "Triple your point gain."},
                cost: new Decimal(25),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,21)},
                style() {
                     if (hasUpgrade("sp", 201) && !hasUpgrade("p", 22)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 201) && hasUpgrade("p", 22)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
                branches: [31],
            },
            31: {
                title: "Upgrade #3",
                description() {
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 542, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791]
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
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 542, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791]
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
                description: "Unlock Money.",
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
                    if (hasUpgrade("a", 821)) timeOwned = timeOwned.pow(10)

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
                canAfford() {return !player.extraoptions.disableRiskyUpgrade},
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
            
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 542, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791]
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
                    let pointUpgrades = [11, 21, 22, 31, 41, 51, 61, 62, 63, 71, 81, 91, 101, 111, 112, 121, 131, 141, 151, 161, 162, 171, 181, 191, 192, 201, 211, 221, 231, 232, 241, 251, 261, 271, 272, 281, 291, 301, 311, 321, 322, 331, 332, 341, 342, 351, 352, 361, 362, 371, 381, 391, 401, 411, 421, 422, 423, 431, 441, 442, 451, 461, 471, 481, 491, 501, 502, 511, 521, 531, 541, 542, 551, 561, 572, 571, 581, 591, 592, 601, 611, 621, 631, 632, 641, 642, 651, 661, 662, 663, 671, 681, 691, 701, 711, 721, 731, 741, 751, 761, 771, 781, 791]
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
                description: "Unlock Prestige Points.",
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
                 description() {
                if (hasUpgrade("sp", 191)) return "Money boosts point gain. Formula: money^0.1"
                return "Money boosts point gain. Formula: money^0.07"},
                cost: new Decimal(4e9),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,211) && hasUpgrade(this.layer,201)},
                effect() {
                    if (hasUpgrade("sp", 181)) return player.m.points.pow(0.1).max(1)
                    else return player.m.points.pow(0.07).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                style() {
                     if (hasUpgrade("sp", 191) && !hasUpgrade("p", 221)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 191) && hasUpgrade("p", 221)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
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
                description() {
                if (hasUpgrade("sp", 181)) return "Hope you've been getting lotsa money! Point boosts money gain. Formula: points^0.06"
                return "Hope you've been getting some money! Point boosts money gain. Formula: points^0.04"},
                cost: new Decimal(50000000),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                unlocked() {return hasUpgrade(this.layer,231)},
                 effect() {
                    if (hasUpgrade("sp", 181)) return player.points.pow(0.06).max(1)
                    else return player.points.pow(0.04).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                style() {
                     if (hasUpgrade("sp", 181) && !hasUpgrade("p", 241)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 181) && hasUpgrade("p", 241)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
        },
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
                canAfford() {return (!hasUpgrade(this.layer,272) || hasUpgrade(this.layer,451)) && !player.extraoptions.disable33},
                onPurchase() {
                player.extraoptions.unlocked1 = true
                },
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
                canAfford() {return (!hasUpgrade(this.layer,271) || hasUpgrade(this.layer,451)) && !player.extraoptions.disable34},
                onPurchase() {
                player.extraoptions.unlocked1 = true
                },
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
                description: "Unlock Clicks.",
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
                canAfford() {return !player.extraoptions.disableRiskyUpgrade},
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
                description: "x2 point gain & unlock Subpoints. This one will be more interesting.",
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
                canAfford() {return (!hasUpgrade(this.layer,442) || hasUpgrade(this.layer,621)) && !player.extraoptions.disable57},
                onPurchase() {
                player.extraoptions.unlocked2 = true
                },
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
                canAfford() {return (!hasUpgrade(this.layer,441) || hasUpgrade(this.layer,621)) && !player.extraoptions.disable58},
                onPurchase() {
                player.extraoptions.unlocked2 = true
                },
                branches: [451],
            },
            451: {
                title: "Upgrade #59",
                description: "Purchases both Upgrade #33 and #34.",
                cost: new Decimal(8.75e20),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,441) || hasUpgrade(this.layer,442)},
                onPurchase() {
                player.p.upgrades.push(271, 272)
                },
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
                canAfford() {return !player.extraoptions.disableRiskyUpgrade},
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
                canAfford() { // fix logic later
                    if ((player.g.points.gt(0) || player.g.power.gt(0)) && (player.b.points.gt(0) || player.b.money.gt(0) || player.b.subpoints.gt(0) || player.b.clicks.gt(0))) return true
                    if (!hasUpgrade(this.layer, 592) && !player.extraoptions.disable75 && !player.g.points.gt(0) && !player.g.power.gt(0)) return true       
                },
                onPurchase() {
                    player.b.unlocked = true
                    player.extraoptions.unlocked3 = true
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
                    if ((player.g.points.gt(0) || player.g.power.gt(0)) && (player.b.points.gt(0) || player.b.money.gt(0) || player.b.subpoints.gt(0) || player.b.clicks.gt(0))) return true
                    return (!hasUpgrade(this.layer, 591) && !player.extraoptions.disable76 && !player.b.points.gt(0) && !player.b.money.gt(0) && !player.b.subpoints.gt(0) && !player.b.clicks.gt(0))
                },
                onPurchase() {
                    player.g.unlocked = true
                    player.extraoptions.unlocked3 = true
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
                unlocked() {return (hasUpgrade(this.layer,591) || hasUpgrade(this.layer,592)) && hasUpgrade(this.layer,581)},
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
                description: "Purchases both upgrade #57 and #58.",
                cost: new Decimal(5.75e31),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,611)},
                onPurchase() {
                player.p.upgrades.push(441, 442)
                },
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
                    return player.sp.points.pow(0.05).max(1)
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
                description() {
                if (hasUpgrade("sp", 141)) return "+250 base points gain. Let the insanity begin."
                return "+25 base points gain. Let the madness begin."},
                cost: new Decimal(1e40),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,691)},
                style() {
                     if (hasUpgrade("sp", 141) && !hasUpgrade("p", 701)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 141) && hasUpgrade("p", 701)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                 },
                branches: [711],
            },
            711: {
                title: "Upgrade #92",
                description: "Purchases both upgrade #75 and #76.",
                cost: new Decimal(2.2e41),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,701)},
                onPurchase() {
                player.p.upgrades.push(591, 592)
                },
                branches: [721],
            },
            721: {
                title: "Upgrade #93",
                description() {
                if (hasUpgrade("sp", 151)) return "Gain 10 of each Booster for free. Does not impact costs."
                return "Gain an extra of each Booster for free. Does not impact costs."},
                cost: new Decimal(6.8e42),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,711)},
                style() {
                     if (hasUpgrade("sp", 151) && !hasUpgrade("p", 721)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 151) && hasUpgrade("p", 721)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                 },
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
                title: "Upgrade #97",
                description: "x2.5 subpoints.",
                cost: new Decimal(1.45e46),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,751)},
                branches: [771],
            },
            771: {
                title: "Upgrade #98",
                description: "Lower the scaling cost of Boosters.",
                cost: new Decimal(2e47),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,761)},
                branches: [781],
            },
            781: {
                title: "Upgrade #99",
                 description() {
                if (hasUpgrade("sp", 161)) return "Generator power boosts itself. Formula: log10(power)"
                return "Generator power boosts itself. Formula: log100(power)"},
                cost: new Decimal(1e48),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,771)},
                effect() {
                    if (hasUpgrade("sp", 161)) return (player.g.power.max(1).log(10)).max(1)
                    else return (player.g.power.max(1).log(100)).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                style() {
                     if (hasUpgrade("sp", 161) && !hasUpgrade("p", 781)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 161) && hasUpgrade("p", 781)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                 },
                branches: [791],
            },
            791: {
                title: "Upgrade #100",
                description: "x2 point gain, and unlock Layer 2: Ascension. Well done, but it's only getting started.",
                cost: new Decimal(1e49),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                unlocked() {return hasUpgrade(this.layer,781)},
                onPurchase() {
                    player.layer2.unlocked = true
                },
                style() {
                     if (hasUpgrade("sp", 171) && !hasUpgrade("p", 791)) {
                        return {
                            "background-color": "#e5ff00ff",
                            "border": "3px solid #a9ac02ff"
                         }
                     } else if (hasUpgrade("sp", 171) && hasUpgrade("p", 791)) {
                        return {
                            "background-color": "#ffd900ff",
                            "border": "3px solid #818328ff"
                         }
                     }
                 },
                branches: [811],
            },
        },   

        infoboxes: {
            1: {
                title() {return "You have " + format(player.points) + "p (Points) | +" + format(getPointGen()) + "/s‎"},
                body() {return `Welcome to Drifter's Upgrade Tree, filled with a shit-ton of upgrades, layers & resets! Note that offline gain is limited to 3 minutes. Enjoy the game!<br><br>Note: If you don't like scrolling, you can flip the tree in settings.`}, // I am currently trying to make a fix but this is my temporary solution
                unlocked() {return true}
                }
            },
    
        tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false; // I cannot believe to tell you how fucking long it took to just grab a value from options. I want to kill myself
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
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
]}
},

    })

addLayer("m", {
        name: "money",
        symbol: "M",
        position: 1,
        startData() { 
            return {
                unlocked: false,
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
            } else if (resettingLayer === "gold") {
                if (!hasUpgrade("gold", 51)) layerDataReset(this.layer)
                player.points = playerPoints
                player.m.points = new Decimal(0)
            } else if (resettingLayer === "sac") {
                player.m.points = new Decimal(0)
            } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
            }
        },


    update(diff) {
        player.m.points = player.m.points.add(this.getMoneyPerSecond().times(diff)) // all lebron james had to do was just call the getmoneypersecond function and times it by diff. he's so smart
    },

    getMoneyPerSecond() { 
    let gain = new Decimal(1)           
    if (hasUpgrade("p", 192)) gain = gain.add(2)
    if (hasUpgrade("p", 352)) gain = gain.add(4)
    if (hasUpgrade("p", 662)) gain = gain.add(6)
    gain = gain.times(buyableEffect("m", 12))
    gain = gain.times(buyableEffect("m", 22))
    gain = gain.times(buyableEffect("b", 12))
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
    if (hasUpgrade("a", 171)) gain = gain.times(3)
    if (hasUpgrade("a", 181)) gain = gain.times(upgradeEffect("a", 181))
    if (hasUpgrade("a", 291)) gain = gain.times(upgradeEffect("a", 291))
    if (hasUpgrade("a", 302)) gain = gain.times(2)
    if (hasUpgrade("a", 311)) gain = gain.times(upgradeEffect("a", 311))
    if (hasUpgrade("a", 341)) gain = gain.times(2.25)
    if (hasUpgrade("a", 402)) gain = gain.times(upgradeEffect("a", 402))
    if (hasUpgrade("a", 412)) gain = gain.times(3)
    if (hasUpgrade("a", 411)) gain = gain.times(100000)
    if (hasUpgrade("a", 462)) gain = gain.times(3.5)
    if (hasUpgrade("a", 592)) gain = gain.times(6.9)
    if (hasUpgrade("a", 621)) gain = gain.times(2)
    if (hasUpgrade("a", 661)) gain = gain.times(2)
    if (hasUpgrade("a", 701)) gain = gain.times(2)
    if (hasUpgrade("a", 811)) gain = gain.times(2)

    if (hasUpgrade("d", 11)) gain = gain.times(25)
    if (hasUpgrade("d", 22)) gain = gain.times(2.5)
    if (hasUpgrade("d", 42)) gain = gain.times(3)
    if (hasUpgrade("d", 51)) gain = gain.times(1.5)
    if (hasUpgrade("d", 111)) gain = gain.times(2)

    if (hasMilestone("pr", 1)) {
        gain = gain.times(player.pr.points.minus(1).max(1));
    }
    if (hasMilestone("pr", 3)) {
        if (hasUpgrade("a", 691)) gain = gain.times(new Decimal(1.175).pow(player.pr.points.sub(7)).max(1))
        else gain = gain.times(new Decimal(1.125).pow(player.pr.points.sub(7)).max(1))
    }

    if (hasMilestone("c", 1)) {
        if (hasUpgrade("a", 131)) gain = gain.times(player.c.points.pow(0.135).max(1));
        gain = gain.times(player.c.points.pow(0.125).max(1));
    } 

    if (hasMilestone("g", 1)) {
         if (hasUpgrade("a", 241)) gain = gain.times(player.g.power.pow(0.19).max(1));
		 else gain = gain.times(player.g.power.pow(0.175).max(1));
    }

    if (hasUpgrade("p", 362)) gain = gain.add(1e9)

    gain = gain.times(globalMult())

    if (hasUpgrade("a", 411)) gain = gain.pow(0.925)

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
    if (getBuyableAmount("gold", 23).gte(1)) {
            while (canBuyBuyable(this.layer, 21)) {
                buyBuyable(this.layer, 21)
            }
            while (canBuyBuyable(this.layer, 22)) {
                buyBuyable(this.layer, 22)
            }
            while (canBuyBuyable(this.layer, 23)) {
                buyBuyable(this.layer, 23)
            }
        }
     if (hasUpgrade("a", 631)) {
            while (canBuyBuyable(this.layer, 31)) {
                buyBuyable(this.layer, 31)
            }
            while (canBuyBuyable(this.layer, 32)) {
                buyBuyable(this.layer, 32)
            }
        }
    if (hasUpgrade("d", 42)) {
            while (canBuyBuyable(this.layer, 11)) {
                buyBuyable(this.layer, 11)
            }
            while (canBuyBuyable(this.layer, 12)) {
                buyBuyable(this.layer, 12)
            }
            while (canBuyBuyable(this.layer, 13)) {
                buyBuyable(this.layer, 13)
            }
            while (canBuyBuyable(this.layer, 21)) {
                buyBuyable(this.layer, 21)
            }
            while (canBuyBuyable(this.layer, 22)) {
                buyBuyable(this.layer, 22)
            }
            while (canBuyBuyable(this.layer, 23)) {
                buyBuyable(this.layer, 23)
            }
            while (canBuyBuyable(this.layer, 31)) {
                buyBuyable(this.layer, 31)
            }
            while (canBuyBuyable(this.layer, 32)) {
                buyBuyable(this.layer, 32)
            }
            while (canBuyBuyable(this.layer, 33)) {
                buyBuyable(this.layer, 33)
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
        if (!hasUpgrade("a", 631)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 11, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 11)  
    let base = new Decimal(1).add(amt.times(0.25))
    base = base.times(buyableEffect("m", 33))
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
        if (!hasUpgrade("a", 631)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 12)  
    let base = new Decimal(1).add(amt.times(0.2))
    base = base.times(buyableEffect("m", 33))
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
        if (!hasUpgrade("a", 631)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 13, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 13)  
    let base = new Decimal(0).add(amt)
    base = base.times(buyableEffect("m", 33))
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
        if (!hasUpgrade("a", 631)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 21, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 21)  
    let base = new Decimal(0).add(new Decimal(1.15).pow(amt))
    base = base.times(buyableEffect("m", 33))
    return base
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
        if (!hasUpgrade("a", 631)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 22, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 22)  
    let base = new Decimal(0).add(new Decimal(1.125).pow(amt))
    base = base.times(buyableEffect("m", 33))
    return base
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
        if (!hasUpgrade("a", 631)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 23, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 23)  
    let base = new Decimal(1).add(amt.times(0.25))
    base = base.times(buyableEffect("m", 33))
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
        if (!hasUpgrade("a", 631)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 31, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 31)  
    let base = new Decimal(1).add(amt.times(0.1))
    base = base.times(buyableEffect("m", 33))
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
        if (!hasUpgrade("a", 631)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 32, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 32)  
    let base = new Decimal(1).add(amt.times(0.1))
    base = base.times(buyableEffect("m", 33))
    let bonus = Decimal.pow(1.25, Math.floor(amt / 10))
    return base.times(bonus)
},
    cap() {
        let base = 100
        return base
    },
    unlocked() {return hasUpgrade("a",111)},
},
33: {
    title: "#9M: Ultimate Increase",
    display() { 
        let bought = getBuyableAmount("m", 33)
        let cap = this.cap()
        return `Boost all Money buyables by x1.1 compounding each purchase.
        After every 10 levels, the effect is multiplied by x1.25.
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} dollars`
    },
    cost(x) { 
        return new Decimal(5e61).times(Decimal.pow(4.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("m", 33)
        return player.m.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("m", 33)
        if (bought.gte(this.cap())) return
        if (!hasUpgrade("a", 811)) player.m.points = player.m.points.sub(this.cost(bought))
        if (!player.m.points.gt(0)) player.m.points = new Decimal(0)
        setBuyableAmount("m", 33, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("m", 33)  
    let base = new Decimal(0).add(new Decimal(1.1).pow(amt))
    let bonus = Decimal.pow(1.25, Math.floor(amt / 10))
    return base.times(bonus)
},
    cap() {
        let base = 100
        return base
    },
    unlocked() {return hasUpgrade("a",481)}, // filler
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
        ["buyable", 33],
    ]]
]

    })

addLayer("pr", {
    name: "prestige",
    symbol: "PR", 
    position: 2, 
    startData() { return {
        unlocked: false,
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
    } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
    } else if (resettingLayer === "ins") {
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
            return player.pr.points.mul(base).add(1)
        },
        effectDescription() {
                if (hasUpgrade("sp", 41)) return "Boosts point gain by +200% additive per prestige point. Current boost: x" + format(this.effect())
                return "Boosts point gain by +100% additive per prestige point. Current boost: x" + format(this.effect())},
        done() { return player.pr.points.gte(1) }
    },

    1: {
        requirementDescription: "3 Prestige Points",
         effect() {
         return player.pr.points.sub(1).max(1)
         },
        effectDescription() { return "Boosts money gain by +100% additive per prestige point past 2 prestige points. Current boost: x" + format(this.effect()) },
        done() { return player.pr.points.gte(3) },
    },
    2: {
        requirementDescription: "6 Prestige Points",
        effect() {
         if (hasUpgrade("a", 691)) return new Decimal(1.125).pow(player.pr.points.sub(5)).max(1)
        else return new Decimal(1.1).pow(player.pr.points.sub(5)).max(1)
         },
        effectDescription() {
            if (hasUpgrade("a", 691)) return "Boosts point gain by 1.125x compounding per prestige point past 5 prestige points. Current boost: x" + format(this.effect())
            else return "Boosts point gain by 1.1x compounding per prestige point past 5 prestige points. Current boost: x" + format(this.effect()) },
        done() { return player.pr.points.gte(6) }
    },
    3: {
        requirementDescription: "8 Prestige Points",
        effect() {
         if (hasUpgrade("a", 691)) return new Decimal(1.15).pow(player.pr.points.sub(7)).max(1)
        else return new Decimal(1.125).pow(player.pr.points.sub(7)).max(1)
         },
        effectDescription() { 
            if (hasUpgrade("a", 691)) return "Boosts money gain by 1.15x compounding per prestige point past 7 prestige points. Current boost: x" + format(this.effect())
            else return "Boosts money gain by 1.125x compounding per prestige point past 7 prestige points. Current boost: x" + format(this.effect())
             },
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
        effect() {
        if (hasUpgrade("a", 691) && hasUpgrade("gem", 21)) return new Decimal(1.15).pow(player.pr.points.sub(43)).max(1)
        if (hasUpgrade("gem", 21)) return new Decimal(1.075).pow(player.pr.points.sub(43)).max(1)
        if (hasUpgrade("a", 691)) return player.pr.points.sub(43).times(0.3).add(1).max(1)
        return player.pr.points.sub(43).times(0.15).add(1).max(1)
    },
    effectDescription() {
        if (hasUpgrade("a", 691) && hasUpgrade("gem", 21)) return "Boost ascension gain by 1.15x compounding per prestige point past 43 prestige points. Current boost: x" + format(this.effect())
        if (hasUpgrade("gem", 21)) return "Boost ascension gain by 1.075x compounding per prestige point past 43 prestige points. Current boost: x" + format(this.effect())
        if (hasUpgrade("a", 691)) return "Boost ascension gain by +30% additive per prestige point past 43 prestige points. Current boost: x" + format(this.effect())
        else return "Boost ascension gain by +15% additive per prestige point past 43 prestige points. Current boost: x" + format(this.effect())
    },
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
        unlocked: false,
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
            } else if (resettingLayer === "sac") {
                if (player.sac.points.gte(1)) player.c.points = new Decimal(0)
            } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
            }
        },
    autoclicker() { // ze autoclicker
        if (hasUpgrade("p", 422) || hasUpgrade("a", 31)) {
            let gain = new Decimal(tmp.c.clickMult)

            gain = gain.times(0.1)
            if (hasUpgrade("p", 423)) gain = gain.times(2) // autoclick upgrades
            if (hasUpgrade("p", 531)) gain = gain.times(5)
            if (hasUpgrade("p", 571)) gain = gain.times(upgradeEffect("p", 571))
            if (hasUpgrade("p", 681)) gain = gain.times(1.75)
            
            if (hasUpgrade("a", 21)) gain = gain.times(2)
            if (hasUpgrade("a", 31)) gain = gain.times(10)
            
            return gain
        } else return new Decimal(0)
    },
    update(diff) {
        player.c.points = player.c.points.add(this.autoclicker().times(diff))
    },
    infoboxes: {        
            1: {
                title() {
                let perSec = layers["c"].autoclicker()
                if (perSec.gt(0)) return "You have " + format(player.c.points) + " clicks | " + format(perSec) + "/s"
                else return "You have " + format(player.c.points) + " clicks"
            },
                body() {return `Yeah, it's a clicking simulator. Entertaining, I know. Clicks boost everything through milestones.`},
                unlocked() {return true}
                }
            },
    clickMult() {
        let gain = new Decimal(1)
        gain = gain.add(buyableEffect("m", 13))
        gain = gain.add(buyableEffect("gold", 13))
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

        if (hasUpgrade("g", 31)) gain = gain.times(1.2)
        if (hasUpgrade("g", 71)) gain = gain.times(1.1)
        if (hasUpgrade("g", 101)) gain = gain.times(1.2)
        if (hasUpgrade("g", 131)) gain = gain.times(1.3)
        if (hasUpgrade("g", 171)) gain = gain.times(1.25)
        
        if (hasUpgrade("a", 11)) gain = gain.times(10)
        if (hasUpgrade("a", 21)) gain = gain.times(2)
        if (hasUpgrade("a", 361)) gain = gain.times(2.75)
        if (hasUpgrade("a", 441)) gain = gain.times(upgradeEffect("a", 441))
        if (hasUpgrade("a", 463)) gain = gain.times(3)
        if (hasUpgrade("a", 591)) gain = gain.times(6.9)
        if (hasUpgrade("a", 771)) gain = gain.times(upgradeEffect("a", 771))

        if (hasUpgrade("d", 11)) gain = gain.times(25)
        if (hasUpgrade("d", 22)) gain = gain.times(2.5)
        if (hasUpgrade("d", 51)) gain = gain.times(1.5)
        if (hasUpgrade("d", 111)) gain = gain.times(2)

        if (hasMilestone("sac", 1)) {
         gain = gain.times(new Decimal(2).pow(player.sac.points.sub(1).max(1)));
        }

        gain = gain.times(globalMult())
        gain = gain.times(buyableEffect("b", 21))
    if (hasMilestone("pr", 5)) {
        gain = gain.times(new Decimal(2).pow(player.pr.points.sub(17)).min(512).max(1));
    }
    if (hasMilestone("g", 2)) {
         if (hasUpgrade("a", 241)) gain = gain.times(player.g.power.pow(0.11).max(1));
		 else gain = gain.times(player.g.power.pow(0.1).max(1));
    }
        return gain
        
    },
    clickables: {
        11: {
            title: "Click Button",
            display() {return `Click for ${format(tmp.c.clickMult)} clicks.`},
            canClick() {return true},
            onClick() {player.c.points = player.c.points.add(tmp.c.clickMult)}
        },
        21: {
            title: "Super Click Button",
            display() {
                if (hasUpgrade("cr",81)) return `Click for ${format(tmp.c.clickMult.times(5000))} clicks.`
                else return `Click for ${format(tmp.c.clickMult.times(1000))} clicks.`
            },
            canClick() {return true},
            onClick() {
                if (hasUpgrade("cr",81)) player.c.points = player.c.points.add(tmp.c.clickMult.times(5000))
                else player.c.points = player.c.points.add(tmp.c.clickMult.times(1000))
            },
            unlocked() {return hasUpgrade("a",681)},
        },
        22: {
            title: "Ascension Click Button",
            display() {return `Click for ${format(getResetGain("a").div(6.66))} ascensions but halve your clicks.`},
            canClick() {return true},
            onClick() {
                player.a.points = player.a.points.add(getResetGain("a").div(6.66))
                player.c.points = player.c.points.div(2)
            },
            unlocked() {return hasUpgrade("cr",81)},
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
            if (hasUpgrade("a", 681) && hasUpgrade("gem",21)) return player.c.points.add(1).pow(0.04).max(1)
            if (hasUpgrade("gem",21)) return player.c.points.add(1).pow(0.035).max(1)
            if (hasUpgrade("a", 681)) return player.c.points.add(1).pow(0.02).max(1)
            return player.c.points.add(1).pow(0.0175).max(1)
        },
        effectDescription() { 
            if (hasUpgrade("a", 681) && hasUpgrade("gem",21)) return "Boosts ascension gain with a formula of clicks^0.04. Current boost: x" + format(this.effect())
            if (hasUpgrade("gem",21)) return "Boosts ascension gain with a formula of clicks^0.035. Current boost: x" + format(this.effect())
            if (hasUpgrade("a", 681)) return "Boosts ascension gain with a formula of clicks^0.02. Current boost: x" + format(this.effect())
            else return "Boosts ascension gain with a formula of clicks^0.0175. Current boost: x" + format(this.effect()) },
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
        unlocked: false,
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
                let had11 = hasUpgrade("sp", 11)
                layerDataReset(this.layer)
                if (had11 && hasUpgrade("a", 61)) player["sp"].upgrades.push(11) 
            } else if (resettingLayer === "sac") {
                if (player.sac.points.gte(1)) player.sp.points = new Decimal(0)
            } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
            } else if (resettingLayer === "ins") {
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
    gain = gain.times(buyableEffect("m", 23))
    gain = gain.times(buyableEffect("b", 22))
    gain = gain.times(globalMult())

    if (hasUpgrade("a", 11)) gain = gain.times(10)
    if (hasUpgrade("a", 21)) gain = gain.times(2)
    if (hasUpgrade("a", 61)) gain = gain.times(2.5)
    if (hasUpgrade("a", 71)) gain = gain.times(4)
    if (hasUpgrade("a", 201)) gain = gain.times(4)
    if (hasUpgrade("a", 321)) gain = gain.times(upgradeEffect("a", 321))
    if (hasUpgrade("a", 351)) gain = gain.times(2.5)
    if (hasUpgrade("a", 432)) gain = gain.times(2)
    if (hasUpgrade("a", 593)) gain = gain.times(6.9)
    if (hasUpgrade("a", 751)) gain = gain.times(5)

    if (hasUpgrade("d", 11)) gain = gain.times(25)
    if (hasUpgrade("d", 22)) gain = gain.times(2.5)
    if (hasUpgrade("d", 51)) gain = gain.times(1.5)
    if (hasUpgrade("d", 111)) gain = gain.times(2)

    if (hasMilestone("pr", 4)) {
        gain = gain.times((player.pr.points.minus(14).times(0.5)).add(1).max(1));
    }
    if (hasMilestone("c", 2)) {
        if (hasUpgrade("a", 131)) gain = gain.times(player.c.points.pow(0.03).max(1));
        else gain = gain.times(player.c.points.pow(0.025).max(1));
    }
    if (hasMilestone("g", 3)) {
         if (hasUpgrade("a", 241)) gain = gain.times(player.g.power.pow(0.095).max(1));
		 else gain = gain.times(player.g.power.pow(0.075).max(1));
    }
    if (hasMilestone("sac", 1)) {
         gain = gain.times(new Decimal(2).pow(player.sac.points.sub(1).max(1)));
    }
    gain = gain.floor();
    return gain
    },
    prestigeButtonText() {
        return "Reset for " + format(getResetGain("sp")) + " subpoints"
    },
    passiveGeneration() {
    if (!(hasUpgrade("p", 401))) return 0
    let gain = new Decimal(0)
    if (hasUpgrade("a", 62)) gain = gain.add(0.001)
    if (hasUpgrade("d", 11)) gain = gain.add(1)
    if (hasUpgrade("d", 43)) gain = gain.add(1.5)
    gain = gain.add(buyableEffect("gold", 12))
    if (hasUpgrade("a", 761)) gain = gain.times(2)
    return gain
    },

    layerShown() { return false },
     automate() {
            if (hasUpgrade("a", 201)) {
                const upgradesToBuy = [21, 31, 41, 51]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                    buyUpg(this.layer, id)
                    }
                }
            }
            if (hasUpgrade("a", 351)) {
                const upgradesToBuy = [61, 71, 81, 91, 102]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                    buyUpg(this.layer, id)
                    }
                }
            }
            if (hasUpgrade("a", 621)) {
                const upgradesToBuy = [111, 121, 131, 141, 151]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                    buyUpg(this.layer, id)
                    }
                }
            }
            if (hasUpgrade("d", 43)) {
                const upgradesToBuy = [11, 21, 31, 41, 51, 61, 71, 81, 91, 102, 111, 121, 131, 141, 151, 161, 171, 181, 191, 201]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                    buyUpg(this.layer, id)
                    }
                }
            }
        },
    infoboxes: {        
            1: {
                title() {
                let perSec = layers["sp"].getResetGain().times(layers["sp"].passiveGeneration())
                if (perSec.gt(0)) return "You have " + format(player.sp.points) + "SP (Subpoints) | " + format(perSec) + "/s" // what the FUCK is a balance?
                else return "You have " + format(player.sp.points) + "SP (Subpoints)"
            },
                body() {return "Welcome to your first 'reset'. Subpoints reset everything so far but grant sub-points which are used to buff upgrades. You must have Upgrade #51 and at least 1e18 points to reset. It's recommended to get 6 subpoints for your first reset. Formula: points/1e18^0.8 <br> Tip: You may not need subpoint upgrades immediately. You can save up subpoints for multiple upgrades if possible."},
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
                cost: new Decimal(1e11),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [71],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,51)},
            },
            71: {
                title: "Upgrade #7-S",
                description: "Upgrade #20's formula is improved by ^0.05.",
                cost: new Decimal(1e17),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [81],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,61)},
            },
            81: {
                title: "Upgrade #8-S",
                description: "Points de-boost itself. Formula: 1000/log1.5(points), min 2",
                cost: new Decimal(5.7e21),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [91],
                currencyLayer: "sp",
                 effect() {
                     let points = player.points.max(2)
    
                    if (hasUpgrade("a", 831)) return (new Decimal(10000).div(points.log(2))).max(3)
                    else return (new Decimal(1000).div(points.log(1.5))).max(2)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,71)},
            },
            91: {
                title: "Upgrade #9-S",
                description: "-log23 Upgrade #6's formula.",
                cost: new Decimal(9e22),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [102],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,81)},
            },
            102: {
                title: "Upgrade #10-S",
                description: "Upgrade #35 now gives x1.2 points & x12 money.", // start changing price from here
                cost: new Decimal(2e31),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [111],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,91)},
            },
            111: {
                title: "Upgrade #11-S",
                description: "Upgrade #39 now gives x10 clicks.",
                cost: new Decimal(6.4e35),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [121],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,102)},
            },
            121: {
                title: "Upgrade #12-S",
                description: "Upgrade #82's exponent is increased by +^0.01.",
                cost: new Decimal(3e42),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [131],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,111)},
            },
            131: {
                title: "Upgrade #13-S",
                description: "-log30 Upgrade #62 & #74's formula.",
                cost: new Decimal(8e46),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [141],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,121)},
            },
            141: {
                title: "Upgrade #14-S",
                description: "Upgrade #91 now gives +250 base points.",
                cost: new Decimal(1.75e52),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [151],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,131)},
            },
            151: {
                title: "Upgrade #15-S",
                description: "Upgrade #93 now gives 10 free boosters.",
                cost: new Decimal(7e57),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [161],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,141)},
            },
            161:{
                title: "Upgrade #16-S",
                description: "-log90 Upgrade #99's formula.",
                cost: new Decimal(1e62),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [171],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,151)},
            },
            171: {
                title: "Upgrade #17-S",
                description: "Upgrade #100 also gives x2 ascension.",
                cost: new Decimal(7.5e65),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [181],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,161)},
            },
            181: {
                title: "Upgrade #18-S",
                description: "Upgrade #29's formula is improved by ^+0.02.",
                cost: new Decimal(4.25e69),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [191],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,171)},
            },
            191: {
                title: "Upgrade #19-S",
                description: "Upgrade #26's formula is improved by ^+0.03.",
                cost: new Decimal(5.25e73),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [201],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,181)},
            },
            201: {
                title: "Upgrade #20-S",
                description: "Final upgrade. Upgrade #3's effect is tripled.",
                cost: new Decimal(6e80),
                currencyDisplayName: "subpoints",
                currencyInternalName: "points",
                branches: [],
                currencyLayer: "sp",
                unlocked() {return hasUpgrade(this.layer,191)},
            },
    },
    tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false; // I spent THREE DAYS wondering why this wouldn't work. The answer was it was in upgrades.
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
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
        ["row", [["upgrade", 102]]],
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
        ["row", [["upgrade", 102]]],
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

addLayer("b", {
    name: "boosters",
    symbol: "B", 
    position: 5, 
    startData() { return {
        unlocked: false,
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
            } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
                 player.b.points = new Decimal(0)
                player.b.money = new Decimal(0)
                player.b.clicks = new Decimal(0)
                player.b.subpoints = new Decimal(0)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
                player.b.points = new Decimal(0)
                player.b.money = new Decimal(0)
                player.b.clicks = new Decimal(0)
                player.b.subpoints = new Decimal(0)
            } else if (resettingLayer === "mb") {
                layerDataReset(this.layer)
                player.b.points = new Decimal(0)
                player.b.money = new Decimal(0)
                player.b.clicks = new Decimal(0)
                player.b.subpoints = new Decimal(0)
                player.points = playerPoints
            }
    },
    automate() {
    if (player.mb.boosterAutomation) {
            while (canBuyBuyable(this.layer, 11)) {
                buyBuyable(this.layer, 11)
            }
            while (canBuyBuyable(this.layer, 12)) {
                buyBuyable(this.layer, 12)
            }
            while (canBuyBuyable(this.layer, 21)) {
                buyBuyable(this.layer, 21)
            }
            while (canBuyBuyable(this.layer, 22)) {
                buyBuyable(this.layer, 22)
            }
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
        if (hasUpgrade("a", 721)) { return `Boosts point gain by Pbooster^1.1.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` }
        if (hasUpgrade("a", 251)) { return `Boosts point gain by Pbooster^0.9.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` }
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
        if (!player.points.gt(0)) player.points = new Decimal(0)
        setBuyableAmount("b", 11, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("b", 11) 
   if (hasUpgrade("p", 721)) {
        if (hasUpgrade("sp", 151)) amt = amt.add(10)
        else amt = amt.add(1)
    }
    if (hasUpgrade("a", 121)) amt = amt.times(2)
    let base = new Decimal(amt.add(1).pow(0.7))
    if (hasUpgrade("a", 251)) base = new Decimal(amt.add(1).pow(0.9))
    if (hasUpgrade("a", 721)) base = new Decimal(amt.add(1).pow(1.1))
    base = base.times(new Decimal(1.5).pow(player.mb.totalBoosters))
    return format(base) 
    },
    cap() {
        let base = new Decimal(100)
        if (hasUpgrade("a", 801)) base = base.add(50)
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
        if (hasUpgrade("a", 721)) { return `Boosts money gain by Mbooster^1.2.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` }
        if (hasUpgrade("a", 251)) { return `Boosts money gain by Mbooster^1.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` }
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
        if (!player.points.gt(0)) player.points = new Decimal(0)
        setBuyableAmount("b", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("b", 12)  
    if (hasUpgrade("p", 721)) {
        if (hasUpgrade("sp", 151)) amt = amt.add(10)
        else amt = amt.add(1)
    }
    if (hasUpgrade("a", 121)) amt = amt.times(2)
    let base = new Decimal(amt.add(1).pow(0.8))
    if (hasUpgrade("a", 251)) base = new Decimal(amt.add(1).pow(1)) // most useful operation: ^1 (too lazy to remove)
    if (hasUpgrade("a", 721)) base = new Decimal(amt.add(1).pow(1.2))
    base = base.times(new Decimal(1.5).pow(player.mb.totalBoosters))
    return format(base) 
    },
    cap() {
        let base = new Decimal(100)
        if (hasUpgrade("a", 801)) base = base.add(50)
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
        if (hasUpgrade("a", 721)) { return `Boosts click gain by Cbooster^1.2.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` }
        if (hasUpgrade("a", 251)) { return `Boosts click gain by Cbooster^1.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` }
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
        if (!player.points.gt(0)) player.points = new Decimal(0)
        setBuyableAmount("b", 21, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("b", 21)  
    if (hasUpgrade("p", 721)) {
        if (hasUpgrade("sp", 151)) amt = amt.add(10)
        else amt.add(1)
    }
    if (hasUpgrade("a", 121)) amt = amt.times(2)
    let base = new Decimal(amt.add(1).pow(0.8))
    if (hasUpgrade("a", 251)) base = new Decimal(amt.add(1).pow(1))
    if (hasUpgrade("a", 721)) base = new Decimal(amt.add(1).pow(1.2))
    base = base.times(new Decimal(1.5).pow(player.mb.totalBoosters))
    return format(base) 
    },
    cap() {
        let base = new Decimal(100)
        if (hasUpgrade("a", 801)) base = base.add(50)
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
        if (hasUpgrade("a", 721)) { return `Boosts subpoint gain by SPbooster^1.1.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` }
         if (hasUpgrade("a", 251)) { return `Boosts subpoint gain by SPbooster^0.9.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} points` }
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
        if (!player.points.gt(0)) player.points = new Decimal(0)
        setBuyableAmount("b", 22, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("b", 22)  
    if (hasUpgrade("p", 721)) {
        if (hasUpgrade("sp", 151)) amt = amt.add(10)
        else amt = amt.add(1)
    }
    if (hasUpgrade("a", 121)) amt = amt.times(2)
    let base = new Decimal(amt.add(1).pow(0.7))
    if (hasUpgrade("a", 251)) base = new Decimal(amt.add(1).pow(0.9))
    if (hasUpgrade("a", 721)) base = new Decimal(amt.add(1).pow(1.1))
    base = base.times(new Decimal(1.5).pow(player.mb.totalBoosters))
    return format(base) 
    },
    cap() {
        let base = new Decimal(100)
        if (hasUpgrade("a", 801)) base = base.add(50)
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
    let total = getBuyableAmount("b", 11).add(getBuyableAmount("b", 12)).add(getBuyableAmount("b", 21)).add(getBuyableAmount("b", 22))
    let exponent = new Decimal(1.425)
    if (hasUpgrade("p", 771)) exponent = exponent.sub(0.05)
    exponent = exponent.times(new Decimal(1).add(new Decimal(0.035).times(player.mb.totalBoosters)).max(1))
    return Decimal.pow(exponent, total)
}

addLayer("g", {
    name: "generators",
    symbol: "G", 
    position: 6, 
    row: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        power: new Decimal(0),
    }},
    doReset(resettingLayer) {
            if (resettingLayer === "a" && !hasUpgrade("a", 232)) {
                layerDataReset(this.layer)
                player.g.points = new Decimal(0)
                player.g.power = new Decimal(0)
            } else if (resettingLayer === "sac") {
                if (player.sac.points.gte(2)) {
                    player.g.power = new Decimal(0)
                } 
            }
            else if (resettingLayer === "d") {
                layerDataReset(this.layer)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
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
            let genExponentialCost = new Decimal(14.8)
            if (hasUpgrade("a", 242)) genExponentialCost = genExponentialCost.times(2)
            if (hasUpgrade("a", 722)) genExponentialCost = genExponentialCost.div(1.1)
            if (hasUpgrade("d", 151)) genExponentialCost = genExponentialCost.div(1.1)
            return new Decimal(1e27).times(Decimal.pow(genExponentialCost, player.g.points));
        },

        canClick() {
            return player.points.gte(this.cost());
        },

        onClick() {
            player.points = player.points.sub(this.cost());
            if (!player.points.gt(0)) player.points = new Decimal(0)
            player.g.points = player.g.points.add(1);
        },
      },
    },
    genPowerGain() {
        let gain = new Decimal(1)
        if (player.g.points.eq(0) && !hasUpgrade("a", 122)) {
            gain = new Decimal(0);
            } else {
            let exponent = new Decimal(2).add(getBuyableAmount("mb", 11).times(0.015))
            if (hasUpgrade("a", 122)) gain = gain.times(Decimal.pow(exponent, (player.g.points.add(1))));
            else gain = gain.times(Decimal.pow(exponent, player.g.points));
            }
            gain = gain.div(2)
            if (hasUpgrade("p", 731)) gain = gain.times(3)
            if (hasUpgrade("p", 781)) gain = gain.times(upgradeEffect("p", 781))

            if (hasUpgrade("g", 41)) gain = gain.times(1.2)
            if (hasUpgrade("g", 81)) gain = gain.times(1.15)
            if (hasUpgrade("g", 91)) gain = gain.times(upgradeEffect("g", 91))
            if (hasUpgrade("g", 141)) gain = gain.times(1.5)
            if (hasUpgrade("g", 191)) gain = gain.times(1.4)

            if (hasUpgrade("a", 21)) gain = gain.times(2)
            if (hasUpgrade("a", 101)) gain = gain.times(3)
            if (hasUpgrade("a", 221)) gain = gain.times(3.5)
            if (hasUpgrade("a", 231)) gain = gain.times(5)
            if (hasUpgrade("a", 242)) gain = gain.times(100)
            if (hasUpgrade("a", 421)) gain = gain.times(upgradeEffect("a", 421))
            if (hasUpgrade("a", 601)) gain = gain.times(6.9)

            if (hasUpgrade("d", 11)) gain = gain.times(25)
            if (hasUpgrade("d", 22)) gain = gain.times(2.5)
            if (hasUpgrade("d", 51)) gain = gain.times(1.5)
            if (hasUpgrade("d", 111)) gain = gain.times(2)
                
            if (hasMilestone("sac", 2)) {
            gain = gain.times(new Decimal(2).pow(player.sac.points.sub(2).max(1)));
            }

            gain = gain.times(globalMult())
            gain = gain.times(buyableEffect("m", 31))
            gain = gain.times(buyableEffect("mb", 11))
            
            return gain
    },
    update(diff) {
        player.g.power = player.g.power.add(this.genPowerGain().times(diff))
    },
    infoboxes: {        
            1: {
                title() {
                let perSec = layers["g"].genPowerGain()
                return "You have " + format(player.g.points) + " Generators, and " + format(player.g.power) + " Generator Power | " + format(perSec) + " power/s"
            },
                body() {return "Generators generate power at a rate of 2^gen/2, and is used to boost currencies through milestones. Generator power can also be used to buy weak but noticable upgrades."},
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
                    return player.g.power.pow(0.01).max(1)
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
                if (hasUpgrade("a", 241)) return player.g.power.add(1).pow(0.225).max(1)
                return player.g.power.add(1).pow(0.2).max(1)
        },
        effectDescription() {
        if (hasUpgrade("a", 241)) return "Boosts point gain by power^0.225. Current boost: x" + format(this.effect())
        else return "Boosts point gain by power^0.2. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(10) }
    },

    1: {
        requirementDescription: "100 Generator Power",
        effect() {
                if (hasUpgrade("a", 241)) return player.g.power.add(1).pow(0.19).max(1)
                return player.g.power.add(1).pow(0.175).max(1)
        },
        effectDescription() {
        if (hasUpgrade("a", 241)) return "Boosts money gain by power^0.19. Current boost: x" + format(this.effect())
        return "Boosts money gain by power^0.175. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(100) },
    },

    2: {
        requirementDescription: "1,000 Generator Power",
        effect() {
                if (hasUpgrade("a", 241)) return player.g.power.add(1).pow(0.11).max(1)
                return player.g.power.add(1).pow(0.1).max(1)
        },
        effectDescription() {
        if (hasUpgrade("a", 241)) return "Boosts click gain by power^0.11. Current boost: x" + format(this.effect())
        return "Boosts click gain by power^0.1. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(1000) }
    },
    3: {
        requirementDescription: "10,000 Generator Power",
        effect() {
                if (hasUpgrade("a", 241)) return player.g.power.add(1).pow(0.095).max(1)
                return player.g.power.add(1).pow(0.075).max(1)
        },
        effectDescription() {
        if (hasUpgrade("a", 241)) return "Boosts subpoint gain by power^0.095. Current boost: x" + format(this.effect())
        return "Boosts subpoint gain by power^0.075. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(10000) }
    },
    4: {
        requirementDescription: "1e11 Generator Power",
        effect() {
                return player.g.power.add(1).pow(0.055).max(1)
        },
        effectDescription() {
        return "Boosts ascension gain by power^0.055. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(1e12) && hasUpgrade("cr", 21) },
        unlocked() {return hasUpgrade("cr",21)},
    },
    5: {
        requirementDescription: "1e48 Generator Power",
        effect() {
                return player.g.power.add(1).pow(0.01).max(1)
        },
        effectDescription() {
        return "Boosts descension gain by power^0.01. Current boost: x" + format(this.effect())},
        done() { return player.g.power.gte(1e48) && hasUpgrade("d", 151) },
        unlocked() {return hasUpgrade("d",151)},
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
        unlocked: false,
		points: new Decimal(0),
        bestAscensionGain: new Decimal(1),
    }},
    color: "#13c5dcff",
    requires: new Decimal(1e49),
    type: "normal", 
    resource: "ascensions",
    baseResource: "points", 
    baseAmount() {return player.points},
    layerShown() {return false},
    doReset(resettingLayer) {
        if (resettingLayer === "cr") {
                layerDataReset(this.layer)
                player.points = playerPoints // took me three days to finally find a solution to saving points. How to kill myself?
                if (hasUpgrade("cr", 21)) player.a.upgrades.push(41,42,43)
            } else if (resettingLayer === "sac") {
                if (player.sac.points.gte(2)) player.a.points = new Decimal(0)
            } else if (resettingLayer === "gem") {
                layerDataReset(this.layer)
                player.points = playerPoints
                player.a.bestAscensionGain = new Decimal(1)
            } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
                if (hasUpgrade("d", 11)) player.a.upgrades.push(11)
                player.a.bestAscensionGain = new Decimal(1)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
                player.a.bestAscensionGain = new Decimal(1)
            }
    },
    canReset() {
    return (player.points.gte("1e49") && hasUpgrade("p", 791))
    },
    getResetGain() {
    if (player.points.lt("1e49")) {
        return new Decimal(0)
    }
    let gain = new Decimal(1)
    if (hasUpgrade("a", 541)) gain = gain.add(1)
    if (hasUpgrade("a", 651)) gain = gain.add(3)
    let base2 = player.points.div("1e49")
    while(true) {
            if (base2.gt(1000)) {
                gain = gain.times(2)
                base2 = base2.div(1000)
            } else break;
    }
    if (hasUpgrade("p", 791) && hasUpgrade("sp", 171)) gain = gain.times(2)

    if (hasUpgrade("a", 81)) gain = gain.times(2)
    if (hasUpgrade("a", 141)) gain = gain.times(2.5)
    if (hasUpgrade("g", 151)) gain = gain.times(1.5)
    if (hasUpgrade("g", 201)) gain = gain.times(1.5)
    if (hasUpgrade("a", 151)) gain = gain.times(upgradeEffect("a", 151))
    if (hasUpgrade("a", 191)) gain = gain.times(upgradeEffect("a", 191))
    if (hasUpgrade("a", 261)) gain = gain.times(2)
    if (hasUpgrade("a", 271)) gain = gain.times(upgradeEffect("a", 271))
    if (hasUpgrade("a", 331)) gain = gain.times(1.03)
    if (hasUpgrade("a", 371)) gain = gain.times(upgradeEffect("a", 371))
    if (hasUpgrade("a", 412)) gain = gain.times(3)
    if (hasUpgrade("a", 411)) gain = gain.times(50)
    if (hasUpgrade("a", 471)) gain = gain.times(1.5)
    if (hasUpgrade("a", 531)) gain = gain.times(upgradeEffect("a", 531))
    if (hasUpgrade("a", 561)) gain = gain.times(upgradeEffect("a", 561))
    if (hasUpgrade("a", 571)) gain = gain.times(6.9)
    if (hasUpgrade("a", 641)) gain = gain.times(upgradeEffect("a", 641))
    if (hasUpgrade("a", 731)) gain = gain.times(3.1415926535897932385)
	if (hasUpgrade("a", 741)) gain = gain.times(3.5)
    if (hasUpgrade("a", 781)) gain = gain.div(0.35)
    if (hasUpgrade("a", 841)) gain = gain.times(1.5)

    if (hasUpgrade("cr", 11)) gain = gain.times(10)
    if (hasUpgrade("cr", 31)) gain = gain.times(5)
    if (hasUpgrade("cr", 41)) gain = gain.times(2)
    if (hasUpgrade("cr", 42)) gain = gain.times(2)
    if (hasUpgrade("cr", 51)) gain = gain.times(1.01)
    if (hasUpgrade("cr", 61)) gain = gain.times(2)
    if (hasUpgrade("cr", 71)) gain = gain.times(upgradeEffect("cr", 71))
    
    if (hasUpgrade("d", 11)) gain = gain.times(25)
    if (hasUpgrade("d", 22)) gain = gain.times(2.5)
    if (hasUpgrade("d", 31)) gain = gain.times(3)
    if (hasUpgrade("d", 51)) gain = gain.times(1.5)
    if (hasUpgrade("d", 91)) gain = gain.times(upgradeEffect("d", 91))
    if (hasUpgrade("d", 112)) gain = gain.times(2)
	if (hasUpgrade("d", 161)) gain = gain.times(upgradeEffect("d", 161))

    if (hasUpgrade("gem", 11)) gain = gain.times(15)
    if (hasUpgrade("gem", 31)) gain = gain.times(4)
    if (hasUpgrade("gem", 41)) gain = gain.times(upgradeEffect("gem", 41))
    
    gain = gain.times(globalMult())
    gain = gain.times(buyableEffect("m", 32))
    gain = gain.times(buyableEffect("gold", 21))
    gain = gain.times(buyableEffect("gold", 31))
    gain = gain.times(buyableEffect("mb", 12))
    if (hasMilestone("pr", 6)) {
        if (hasUpgrade("a", 691) && hasUpgrade("gem", 21)) gain = gain.times(new Decimal(1.15).pow(player.pr.points.sub(43)).max(1))
        else if (hasUpgrade("gem", 21)) gain = gain.times( new Decimal(1.075).pow(player.pr.points.sub(43)).max(1))
        else if (hasUpgrade("a", 691)) gain = gain.times(player.pr.points.sub(43).times(0.3).add(1).max(1))
        else gain = gain.times(player.pr.points.sub(43).times(0.15).add(1).max(1))
    }
    if (hasMilestone("c", 3)) {
         if (hasUpgrade("a", 681) && hasUpgrade("gem",21)) gain = gain.times(player.c.points.add(1).pow(0.04).max(1))
        else if (hasUpgrade("gem",21)) gain = gain.times(player.c.points.add(1).pow(0.035).max(1))
        else if (hasUpgrade("a", 681)) gain = gain.times(player.c.points.add(1).pow(0.02).max(1))
        else gain = gain.times(player.c.points.add(1).pow(0.0175).max(1))
    }
    if (hasMilestone("g", 4)) {
        gain = gain.times(player.g.power.pow(0.065).max(1));
    }
    if (hasMilestone("sac", 2)) {
        gain = gain.times(new Decimal(2).pow(player.sac.points.sub(2).max(1)));
    }
    if (hasUpgrade("a", 411)) gain = gain.pow(0.925)
    if (inChallenge("ins", 11)) gain = gain.pow(0.95)

    gain = gain.floor();
    if (hasUpgrade("cr", 42) && gain.gt(player.a.bestAscensionGain)) player.a.bestAscensionGain = gain
    return gain
    },
    prestigeButtonText() {
        return "Reset for " + format(getResetGain("a")) + " ascensions"
    },
    passiveGeneration() {
    let gain = new Decimal(0)
    if (hasUpgrade("cr", 32)) gain = gain.add(0.001)
    if (hasUpgrade("cr", 41)) gain = gain.add(0.001)
    if (hasUpgrade("cr", 51)) gain = gain.add(0.008)

    if (hasUpgrade("d", 11)) gain = gain.add(0.01)
    if (hasUpgrade("d", 121)) gain = gain.add(0.025)

    if (hasUpgrade("gem", 31)) gain = gain.times(2)
    if (hasUpgrade("gem", 51)) gain = gain.times(1.02)

    if (hasUpgrade("cr", 42)) {
        let current = layers.a.getResetGain()

        if (current.gt(0) && player.a.bestAscensionGain.gt(current)) {
            gain = gain.times(player.a.bestAscensionGain.div(current))
        }
    }
    return gain
    },
    automate() {
            if (hasUpgrade("d", 121)) {
                const upgradesToBuy = [11, 21, 31, 41, 42, 43, 51, 61, 62, 71, 72, 81, 91, 101, 111, 121, 122, 131, 141, 151]
                for (const id of upgradesToBuy) {
                if (canAffordUpgrade(this.layer, id) && !hasUpgrade(this.layer, id)) {
                buyUpg(this.layer, id)
                }
                }
            }
        },
    infoboxes: {        
            1: {
                title() {
                let perSec = layers["a"].getResetGain().times(layers["a"].passiveGeneration())
                if (layers["a"].passiveGeneration().gt(0)) return "You have " + format(player.a.points) + "AP (Ascension Points) | " + format(perSec) + "/s"
                else return "You have " + format(player.a.points) + "AP (Ascension Points)"
            },
                body() {return `Welcome to your first true reset layer! Ascension resets everything up until this point but gain ascension points. All new layers will be true reset layers, so be wary. You won't be able to get more than 1 ascension point per reset for a bit, so reset when you can. You must have 1e49 points and Upgrade 100 to ascend. <br> Earn x2 ascension for every 1,000× your base threshold (1e49 points) you have.`},
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
                description: "Unspent ascensions boost point gain. Formula: (ascensions^0.1)x3. Also automate Upgrade 1-20.",
                cost: new Decimal(1),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return (player.a.points.pow(0.1)).times(3).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [61, 62],
                unlocked() {return hasUpgrade(this.layer,41) && hasUpgrade(this.layer,42) && hasUpgrade(this.layer,43) && hasUpgrade(this.layer,31)},
                },
            61: {
                title: "Upgrade #108",
                description: "x2.5 subpoints and keep 1-S on ascension.",
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
                description: "x4 subpoints.",
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
                description: "Unlock new Generator upgrades. Also x3 generator power.",
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
                description: "Doubles effective booster amounts, and keep Upgrade #75 on Ascension. Does not affect costs.",
                cost: new Decimal(50),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [131],
                unlocked() {return hasUpgrade(this.layer,111)},
                },
            122: {
                title: "Upgrade #117",
                description: "Gain an extra Generator for free, and keep Upgrade #76 on Ascension.",
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
                description: "x2.5 ascension and point gain. Also automate Upgrade 21-40.",
                cost: new Decimal(650),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [151],
                unlocked() {return hasUpgrade(this.layer,131)},
                },
            151: {
                title: "Upgrade #120",
                description: "Ascension boosts itself. Formula: log25(ascension)+1.",
                cost: new Decimal(1800),
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
                title: "Upgrade #121",
                description: "Unlock Crystals.",
                cost: new Decimal(5000),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [171],
                unlocked() {return hasUpgrade(this.layer,151)},
                },
            171: {
                title: "Upgrade #122",
                description: "x3 money and point gain.",
                cost: new Decimal(20000),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [181],
                unlocked() {return hasUpgrade(this.layer,161)},
                },
            181: {
                title: "Upgrade #123",
                description: "Unspent ascensions boost money gain. Formula: (ascensions^0.075)x3",
                cost: new Decimal(65000),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return (player.a.points.pow(0.075)).times(3).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [191],
                unlocked() {return hasUpgrade(this.layer,171)},
                },
            191: {
                title: "Upgrade #124",
                description: "Points boost Ascension gain. Formula: log1000(points)/5",
                cost: new Decimal(225000),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return (player.points.max(1).log(1000)).div(5).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [201],
                unlocked() {return hasUpgrade(this.layer,181)},
                },
            201: {
                title: "Upgrade #125",
                description: "x2 subpoints and automate Upgrade 2-5S.",
                cost: new Decimal(1e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [211],
                unlocked() {return hasUpgrade(this.layer,191)},
                },
            211: {
                title: "Upgrade #126",
                description: "Automate Upgrade 41-60. Also 1.5x point gain.",
                cost: new Decimal(1.45e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [221],
                unlocked() {return hasUpgrade(this.layer,201)},
                },
            221: {
                title: "Upgrade #127",
                description: "3.5x generator power gain.",
                cost: new Decimal(1.95e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [231, 232],
                unlocked() {return hasUpgrade(this.layer,211)},
                },
            231: {
                title: "Upgrade #128",
                description: "x5 generator power. Disables upgrade #129.",
                cost: new Decimal(2.5e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [241],
                unlocked() {return hasUpgrade(this.layer,221)},
                canAfford() {
                    return ((!hasUpgrade(this.layer, 232) || hasUpgrade(this.layer, 491)) && !player.extraoptions.disable128) 
                },
                onPurchase() {
                    player.extraoptions.unlocked4 = true
                },
                },
            232: {
                title: "Upgrade #129",
                description: "Keep generators, generator power & generator upgrades on ascensions. Disables upgrade #128.",
                cost: new Decimal(2.5e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [241],
                unlocked() {return hasUpgrade(this.layer,221)},
                canAfford() {
                    return ((!hasUpgrade(this.layer, 231) || hasUpgrade(this.layer, 491)) && !player.extraoptions.disable129) 
                },
                onPurchase() {
                    player.extraoptions.unlocked4 = true
                },
                },
            241: {
                title: "Upgrade #130",
                description: "Slightly boost the exponentials of all generator milestones.",
                cost: new Decimal(3.05e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [242, 251],
                unlocked() {return hasUpgrade(this.layer,231) || hasUpgrade(this.layer,232)},
                },
            242: {
                title: "Upgrade #130-X",
                description: "x100 generator power, but double the exponential pricing scale of Generators.",
                cost: new Decimal(3.05e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [],
                unlocked() {return hasUpgrade(this.layer,241)},
                canAfford() {return !player.extraoptions.disableRiskyUpgrade},
                },
            251: {
                title: "Upgrade #131",
                description: "Increase all booster effects by +^0.2.",
                cost: new Decimal(3.6e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [261],
                unlocked() {return hasUpgrade(this.layer,241)},
                },
            261: {
                title: "Upgrade #132",
                description: "x2 ascensions.",
                cost: new Decimal(2.5e60),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [271],
                unlocked() {return hasUpgrade(this.layer,251)},
                },
            271: {
                title: "Upgrade #133",
                description: "Subpoints boost ascension gain. Formula: log50(subpoints)/10",
                cost: new Decimal(6.5e6),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                 effect() {
                    return (player.sp.points.max(1).log(50)).div(10).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [281],
                unlocked() {return hasUpgrade(this.layer,261)},
                },
            281: {
                title: "Upgrade #134",
                description: "Points boost themselves. Formula: (points^0.035)/10",
                cost: new Decimal(3.75e61),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                 effect() {
                    return (player.points.pow(0.035)).div(10).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [282],
                unlocked() {return hasUpgrade(this.layer,271)},
                },
            282: {
                title: "Upgrade #135",
                description: "Unlock Gold.",
                cost: new Decimal(5e7),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [291],
                unlocked() {return hasUpgrade(this.layer,281)},
                },
            291: {
                title: "Upgrade #136",
                description() {
                    if (!hasUpgrade("a", 291)) 
                        return "For every upgrade in this layer unlocked, multiply point & money gain by 1.075 (compounding)."
            
                    let pointUpgrades = player[this.layer].upgrades.length // so much easier than listing 100 upgrades lul
                    let multiplier = new Decimal(1.075).pow(pointUpgrades)
            
                    return `For every upgrade in this layer unlocked, multiply point & money gain by 1.075 (compounding). 
                    Current multiplier: x${format(multiplier)}`
                },
                cost: new Decimal(1.25e8),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [301],
                effect() {
                    let pointUpgrades = player[this.layer].upgrades.length
                    let multiplier = new Decimal(0)
                    if (hasUpgrade("gem", 51)) multiplier = multiplier.add(new Decimal(1.1125).pow(pointUpgrades))
                    else multiplier = multiplier.add(new Decimal(1.075).pow(pointUpgrades)) // was supposed to be 1.05 but accidentally made it 1.075 and balanced it around that so uhhhh
            
                    return multiplier
                },
                unlocked() {return hasUpgrade(this.layer,282)},
                },
            301: {
                title: "Upgrade #137",
                description: "x3 points.",
                cost: new Decimal(7e65),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [302],
                unlocked() {return hasUpgrade(this.layer,291)},
                },
            302: {
                title: "Upgrade #138",
                description: "x3 money.",
                cost: new Decimal(5e8),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [311],
                unlocked() {return hasUpgrade(this.layer,301)},
                },
            311: {
                title: "Upgrade #139",
                description: "Money boosts itself. Formula: (money^0.0375)/5.",
                cost: new Decimal(1.1e9),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return (player.m.points.pow(0.0375)).div(5).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [321],
                unlocked() {return hasUpgrade(this.layer,302)},
                },
            321: {
                title: "Upgrade #140",
                description: "Subpoints boost itself. Formula: subpoints^0.02",
                cost: new Decimal(3.3e9),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return player.sp.points.pow(0.02).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [331],
                unlocked() {return hasUpgrade(this.layer,311)},
                },
            331: {
                title: "Upgrade #141",
                description: "x1.03 ascension gain. These upgrades will never stop. :)",
                cost: new Decimal(9.9e9),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [341],
                unlocked() {return hasUpgrade(this.layer,321)},
                },
            341: {
                title: "Upgrade #142",
                description: "x2.25 point & money gain. Also automate Upgrade 61-80.",
                cost: new Decimal(5.1e10),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [351],
                unlocked() {return hasUpgrade(this.layer,331)},
                },
            351: {
                title: "Upgrade #143",
                description: "x2.5 subpoint gain. Also automate Upgrade 6-10S.",
                cost: new Decimal(1.7e11),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [361],
                unlocked() {return hasUpgrade(this.layer,341)},
                },
            361: {
                title: "Upgrade #144",
                description: "x2.75 clicks.",
                cost: new Decimal(3e11),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [371],
                unlocked() {return hasUpgrade(this.layer,351)},
                },
            371: {
                title: "Upgrade #145", 
                 description() {
                    if (!hasUpgrade("a", 371)) 
                        return "For every upgrade in this layer unlocked, multiply ascension gain by 1.04 (compounding)."
            
                    let pointUpgrades = player[this.layer].upgrades.length 
                    let multiplier = new Decimal(1.04).pow(pointUpgrades)
            
                    return `For every upgrade in this layer unlocked, multiply ascension gain by 1.04 (compounding). 
                    Current multiplier: x${format(multiplier)}`
                },
                cost: new Decimal(6e11),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [381],
                effect() {
                    let pointUpgrades = player[this.layer].upgrades.length
                    let multiplier = new Decimal(0)
                    if (hasUpgrade("gem", 51)) multiplier = multiplier.add(new Decimal(1.075).pow(pointUpgrades))
                    else multiplier = multiplier.add(new Decimal(1.04).pow(pointUpgrades))
            
                    return multiplier
                },
                unlocked() {return hasUpgrade(this.layer,361)},
                },
            381: {
                title: "Upgrade #146",
                description: "Total boosters boost point gain. Formula: log2(boosters)",
                cost: new Decimal(4.5e12),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [391],
                effect() {
                    return player.b.points.add(player.b.money).add(player.b.clicks).add(player.b.subpoints).max(1).log(2).max(1)
                },
                unlocked() {return hasUpgrade(this.layer,371)},
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                },
            391: {
                title: "Upgrade #147",
                description: "x3 crystals.",
                cost: new Decimal(5.6e12),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [401, 402],
                unlocked() {return hasUpgrade(this.layer,381)},
                },
            401: {
                title: "Upgrade #148",
                description: "Gold boosts itself. Formula: gold^0.05",
                cost: new Decimal(1e13),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return player.gold.points.pow(0.05).max(1)
                },
                branches: [412],
                unlocked() {return hasUpgrade(this.layer,391)},
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                },
            402: {
                title: "Upgrade #149",
                description: "Gold boosts money. Formula: gold^0.04",
                cost: new Decimal(3.5e13),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return player.gold.points.pow(0.04).max(1)
                },
                branches: [412],
                unlocked() {return hasUpgrade(this.layer,391)},
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                },
            412: {
                title: "Upgrade #150",
                description: "50% of the way there, again. Feeling hopeful? x3 ascension, point & money gain. This should help a bit.",
                cost: new Decimal(7.5e13),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [411, 421],
                unlocked() {return hasUpgrade(this.layer,401) && hasUpgrade(this.layer,402)}, // im too tired fix these later
                },
            411: {
                title: "Upgrade #150-X",
                description: "Feeling hopeless? Want a short-term dopamine buff but long-term consequence? x50 ascension gain, x100,000 money gain & x1,000,000 point gain but ^0.925 ascensions, points & money.",
                cost: new Decimal(7.5e13),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [],
                unlocked() {return hasUpgrade(this.layer,412)},
                canAfford() {return !player.extraoptions.disableRiskyUpgrade},
                },
            421: {
                title: "Upgrade #151",
                description: "Ascensions boost generator power. Formula: ascensions^0.03",
                cost: new Decimal(3e14),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return player.a.points.pow(0.03).max(1)
                },
                branches: [431, 432],
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,412)},
                },
            431: {
                title: "Upgrade #152",
                description: "x4 point and money gain. Disables upgrade #153.",
                cost: new Decimal(6e14),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [441],
                canAfford() {
                    return (!hasUpgrade(this.layer, 432) || hasUpgrade(this.layer,711)) && !player.extraoptions.disable152
                },
                onPurchase() {
                    player.extraoptions.unlocked5 = true
                },
                unlocked() {return hasUpgrade(this.layer,421)},
                },
            432: {
                title: "Upgrade #153",
                description: "x2 ascension and crystal gain. Disables upgrade #152.",
                cost: new Decimal(6e14),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [441],
                canAfford() {
                    return (!hasUpgrade(this.layer, 431) || hasUpgrade(this.layer,711)) && !player.extraoptions.disable153
                },
                onPurchase() {
                    player.extraoptions.unlocked5 = true
                },
                unlocked() {return hasUpgrade(this.layer,421)},
                },
            441: {
                title: "Upgrade #154",
                description: "Ascension boosts clicks. Formula: ascensions^0.0375",
                cost: new Decimal(1e15),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return player.a.points.pow(0.0375).max(1)
                },
                branches: [451],
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() {return hasUpgrade(this.layer,431) || hasUpgrade(this.layer,432)},
                },
            451: {
                title: "Upgrade #155", // im lazy bro ill make upgradez
                description: "Unlock Sacrifice.",
                cost: new Decimal(3e15),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [461, 462, 463],
                unlocked() {return hasUpgrade(this.layer,441)},
                },
            461: {
                title: "Upgrade #156",
                description: "x2.5 points.",
                cost: new Decimal(2e73),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [471],
                unlocked() {return hasUpgrade(this.layer,451)},
                },
            462: {
                title: "Upgrade #157",
                description: "x3.5 money gain.",
                cost: new Decimal(9e61),
                currencyDisplayName: "dollars",
                currencyInternalName: "points",
                currencyLayer: "m",
                branches: [471],
                unlocked() {return hasUpgrade(this.layer,451)},
                },
            463: {
                title: "Upgrade #158",
                description: "x3 click gain.",
                cost: new Decimal(1e26),
                currencyDisplayName: "clicks",
                currencyInternalName: "points",
                currencyLayer: "c",
                branches: [471],
                unlocked() {return hasUpgrade(this.layer,451)},
                },
            471: {
                title: "Upgrade #159",
                description: "x1.5 ascensions & crystals.",
                cost: new Decimal(4e15),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [481],
                unlocked() {return hasUpgrade(this.layer,461) && hasUpgrade(this.layer,462) && hasUpgrade(this.layer,463)},
                },
            481: {
                title: "Upgrade #160",
                description: "Unlock the final Money buyable.",
                cost: new Decimal(5e15),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [491],
                unlocked() {return hasUpgrade(this.layer,471)},
                },
            491: {
                title: "Upgrade #161",
                description: "Purchases both Upgrade #128 and #129.",
                cost: new Decimal(1.25e16),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [501],
                onPurchase() {
                player.a.upgrades.push(231,232)
                },
                unlocked() {return hasUpgrade(this.layer,481)},
                },
            501: {
                title: "Upgrade #162",
                description: "Improve the gold conversion formula by x10. (1:1e51 -> 1:1e50)",
                cost: new Decimal(2.5e16),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [511],
                unlocked() {return hasUpgrade(this.layer,491)},
                },
            511: {
                title: "Upgrade #163",
                description: "x1.5 ascension, point & money gain. Literally just 150 but halved",
                cost: new Decimal(4.5e16),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [521],
                unlocked() {return hasUpgrade(this.layer,501)},
                },
            521: {
                title: "Upgrade #164",
                description: "Automate Upgrade 81-100, and x3.5 point gain.",
                cost: new Decimal(9.5e16),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [531],
                unlocked() {return hasUpgrade(this.layer,511)},
                },
            531: {
                title: "Upgrade #165",
                description: "Clicks boost ascension. Formula: log200(clicks)/4",
                cost: new Decimal(2.1e17),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                 effect() {
                    return player.c.points.max(1).log(200).div(4).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [541],
                unlocked() {return hasUpgrade(this.layer,521)},
                },
            541: {
                title: "Upgrade #166",
                description: "+1 base ascension gain.",
                cost: new Decimal(1e18),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [551],
                unlocked() {return hasUpgrade(this.layer,531)},
                },
            551: {
                title: "Upgrade #",
                description: " ",
                cost: new Decimal(6e18),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [561],
                unlocked() {return hasUpgrade(this.layer,541)},
                },
            561: {
                title: "Upgrade #168",
                description: "Ascension boosts itself, again. Formula: log500(ascension)",
                cost: new Decimal(7e18),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                 effect() {
                    return player.a.points.max(1).log(500).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [571],
                unlocked() {return hasUpgrade(this.layer,551)},
                },
            571: {
                title: "Upgrade #169",
                description: "x6.9 ascension you knew it was coming :33333",
                cost: new Decimal(6.9e20),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [581],
                unlocked() {return hasUpgrade(this.layer,561)},
                },
            581: {
                title: "Upgrade #170",
                description: "x6.9 points. Keep the train goin",
                cost: new Decimal(3e84),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [591, 592, 593],
                unlocked() {return hasUpgrade(this.layer,571)},
                },
            591: {
                title: "Upgrade #171",
                description: "x6.9 clicks.",
                cost: new Decimal(7e22),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [601],
                unlocked() {return hasUpgrade(this.layer,581)},
                },
            592: {
                title: "Upgrade #172",
                description: "x6.9 money.",
                cost: new Decimal(1.6e23),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [601],
                unlocked() {return hasUpgrade(this.layer,581)},
                },
            593: {
                title: "Upgrade #173",
                description: "x6.9 subpoints.",
                cost: new Decimal(5e89),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [601],
                unlocked() {return hasUpgrade(this.layer,581)},
                },
            601: {
                title: "Upgrade #174",
                description: "x6.9 generator power. Okay that's enough.",
                cost: new Decimal(5e23),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [611],
                unlocked() {return hasUpgrade(this.layer,591) && hasUpgrade(this.layer,592) && hasUpgrade(this.layer,593)},
                },
            611: {
                title: "Upgrade #175",
                description: "Unlock Gemstones.",
                cost: new Decimal(1e24),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [621],
                unlocked() {return hasUpgrade(this.layer,601)},
                },
            621: {
                title: "Upgrade #176",
                description: "x2 point & money gain, and automate Upgrade 10-15S.",
                cost: new Decimal(1e92),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [631],
                unlocked() {return hasUpgrade(this.layer,611)},
                },
            631: {
                title: "Upgrade #177",
                description: "Automate the seventh and eighth money buyables. Money buyables (excluding Ultimate) no longer spend money on purchase.",
                cost: new Decimal(1.3e25),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [641],
                unlocked() {return hasUpgrade(this.layer,621)},
                },
            641: {
                title: "Upgrade #178",
                description: "Points boost Ascension gain, again. Formula: points^0.015/5",
                cost: new Decimal(2e26),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return player.points.pow(0.015).div(5).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [651, 652],
                unlocked() {return hasUpgrade(this.layer,631)},
                },
            651: {
                title: "Upgrade #179",
                description: "+3 base ascension gain.",
                cost: new Decimal(8.5e26),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [661],
                unlocked() {return hasUpgrade(this.layer,641)},
                },
            652: {
                title: "Upgrade #180",
                description: "+550 base point gain.",
                cost: new Decimal(4.4e27),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [661],
                unlocked() {return hasUpgrade(this.layer,641)},
                },
            661: {
                title: "Upgrade #181",
                description: "x2 gold and x2 money.",
                cost: new Decimal(8.8e27),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [671],
                unlocked() {return hasUpgrade(this.layer,651) && hasUpgrade(this.layer,652)},
                },
            671: {
                title: "Upgrade #182",
                description: "x2.5 crystals.",
                cost: new Decimal(1.5e28),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [681],
                unlocked() {return hasUpgrade(this.layer,661)},
                },
            681: {
                title: "Upgrade #183",
                description: "Unlock a second clicker that gives x1,000 clicks. Hope you liked the clicker. Also improves the final click milestone.", // fun facts with drifter I forgot to make the milestones effect gain so I balanced it around it not doing that... and then realized and had to rebalance lol
                cost: new Decimal(3.75e28),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [691],
                unlocked() {return hasUpgrade(this.layer,671)},
                },
            691: {
                title: "Upgrade #184",
                description: "Improve the compounding Prestige Milestones, and increases the Ascension milestone to 30% additive.",
                cost: new Decimal(8e28),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [701],
                unlocked() {return hasUpgrade(this.layer,681)},
                },
            701: {
                title: "Upgrade #185",
                description: "Can you tell I'm slowly running out of ideas for this layer? x2 point and money gain.",
                cost: new Decimal(3e29),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [711],
                unlocked() {return hasUpgrade(this.layer,691)},
                },
            711: {
                title: "Upgrade #186",
                description: "Purchases both Upgrade #152 and #153.",
                cost: new Decimal(1.25e98),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [721, 722],
                onPurchase() {
                player.a.upgrades.push(431,432)
                },
                unlocked() {return hasUpgrade(this.layer,701)},
                },
            721: {
                title: "Upgrade #187",
                description: "Love boosters? Increase the power of boosters by +^0.2 again. Disables Upgrade #188.",
                cost: new Decimal(6.6e29),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [731],
                canAfford() {
                    if (hasUpgrade("d", 131)) return true
                    else return (!hasUpgrade(this.layer, 722) && !player.extraoptions.disable187)
                },
                onPurchase() {
                    player.extraoptions.unlocked6 = true
                },
                unlocked() {return hasUpgrade(this.layer,711)},
                },
            722: {
                title: "Upgrade #188",
                description: "Love generators? Slightly decrease the exponential cost scaling of generators. Disables Upgrade #187.",
                cost: new Decimal(6.6e29),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [731],
                canAfford() {
                    if (hasUpgrade("d", 131)) return true
                    return (!hasUpgrade(this.layer, 721) && !player.extraoptions.disable188) 
                },
                onPurchase() {
                    player.extraoptions.unlocked6 = true
                },
                unlocked() {return hasUpgrade(this.layer,711)},
                },
            731: {
                title: "Upgrade #189",
                description: "Multiply ascensions by π.",
                cost: new Decimal(3.14e30),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [741],
                unlocked() {return hasUpgrade(this.layer,721) || hasUpgrade(this.layer,722)},
                },
            741: {
                title: "Upgrade #190",
                description: "x3.5 ascension gain. The last ten upgrades approach...",
                cost: new Decimal(1.90e31),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [751],
                unlocked() {return hasUpgrade(this.layer,731)},
                },
            751: {
                title: "Upgrade #191",
                description: "x5 point gain and subpoint gain.",
                cost: new Decimal(5.70e32),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [761],
                unlocked() {return hasUpgrade(this.layer,741)},
                },
            761: {
                title: "Upgrade #192",
                description: "Doubles passive subpoint generation rate.",
                cost: new Decimal(9.6e33),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [771],
                unlocked() {return hasUpgrade(this.layer,751)},
                },
            771: {
                title: "Upgrade #193",
                description: "Clicks boost themselves. Formula: clicks^0.025",
                cost: new Decimal(3e34),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                effect() {
                    return player.c.points.pow(0.02).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [781],
                unlocked() {return hasUpgrade(this.layer,761)},
                },
            781: {
                title: "Upgrade #194",
                description: "/0.35 ascensions.",
                cost: new Decimal(1.6e35),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [791],
                unlocked() {return hasUpgrade(this.layer,771)},
                },
            791: {
                title: "Upgrade #195",
                description: "x5 crystals.",
                cost: new Decimal(7.5e36),
                currencyDisplayName: "ascensions",
                currencyInternalName: "points",
                currencyLayer: "a",
                branches: [801],
                unlocked() {return hasUpgrade(this.layer,781)},
                },
            801: {
                title: "Upgrade #196",
                description: "Final five upgrades will cost points. Increase the cap of boosters by +50.",
                cost: new Decimal(1.6e105),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [811],
                unlocked() {return hasUpgrade(this.layer,791)},
                },
            811: {
                title: "Upgrade #197",
                description: "Ultimate Buyable no longer spends money on purchase. Also x2 money.",
                cost: new Decimal(3.8e106),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [821],
                unlocked() {return hasUpgrade(this.layer,801)},
                },
            821: {
                title: "Upgrade #198",
                description: "Remember upgrade #12? ^10 #12's time, again.",
                cost: new Decimal(9e106),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [831],
                unlocked() {return hasUpgrade(this.layer,811)},
                },
            831: {
                title: "Upgrade #199",
                description: "Upgrade 8-S's formula is changed to 10000/log2(points), min 3.",
                cost: new Decimal(2.1e108),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                branches: [841],
                unlocked() {return hasUpgrade(this.layer,821)},
                },
            841: {
                title: "Upgrade #200",
                description: "x1.5 ascensions & points, and Unlock Layer 3: Descension. Well done once again, but the journey is still far from over.",
                cost: new Decimal(1e110),
                currencyDisplayName: "points",
                currencyInternalName: "points",
                currencyLayer: "",
                onPurchase() {
                    player.layer3.unlocked = true
                },
                branches: [],
                unlocked() {return hasUpgrade(this.layer,831)},
                },
         },
    tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false;
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 841]]],
        ["row", [["upgrade", 831]]],
        ["row", [["upgrade", 821]]],
        ["row", [["upgrade", 811]]],
        ["row", [["upgrade", 801]]],
        ["row", [["upgrade", 791]]],
        ["row", [["upgrade", 781]]],
        ["row", [["upgrade", 771]]],
        ["row", [["upgrade", 761]]],
        ["row", [["upgrade", 751]]],
        ["row", [["upgrade", 741]]],
        ["row", [["upgrade", 731]]],
        ["row", [["upgrade", 721], ["upgrade", 722]]],
        ["row", [["upgrade", 711]]],
        ["row", [["upgrade", 701]]],
        ["row", [["upgrade", 691]]],
        ["row", [["upgrade", 681]]],
        ["row", [["upgrade", 671]]],
        ["row", [["upgrade", 661]]],
        ["row", [["upgrade", 651], ["upgrade", 652]]],
        ["row", [["upgrade", 641]]],
        ["row", [["upgrade", 631]]],
        ["row", [["upgrade", 621]]],
        ["row", [["upgrade", 611]]],
        ["row", [["upgrade", 601]]],
        ["row", [["upgrade", 591], ["upgrade", 592], ["upgrade", 593]]],
        ["row", [["upgrade", 581]]],
        ["row", [["upgrade", 571]]],
        ["row", [["upgrade", 561]]],
        ["row", [["upgrade", 551]]],
        ["row", [["upgrade", 541]]],
        ["row", [["upgrade", 531]]],
        ["row", [["upgrade", 521]]],
        ["row", [["upgrade", 511]]],
        ["row", [["upgrade", 501]]],
        ["row", [["upgrade", 491]]],
        ["row", [["upgrade", 481]]],
        ["row", [["upgrade", 471]]],
        ["row", [["upgrade", 461], ["upgrade", 462], ["upgrade", 463]]],
        ["row", [["upgrade", 451]]],
        ["row", [["upgrade", 441]]],
        ["row", [["upgrade", 431], ["upgrade", 432]]],
        ["row", [["upgrade", 421]]],
        ["row", [["upgrade", 411], ["upgrade", 412]]],
        ["row", [["upgrade", 401], ["upgrade", 402]]],
        ["row", [["upgrade", 391]]],
        ["row", [["upgrade", 381]]],
        ["row", [["upgrade", 371]]],
        ["row", [["upgrade", 361]]],
        ["row", [["upgrade", 351]]],
        ["row", [["upgrade", 341]]],
        ["row", [["upgrade", 331]]],
        ["row", [["upgrade", 321]]],
        ["row", [["upgrade", 311]]],
        ["row", [["upgrade", 301], ["upgrade", 302]]],
        ["row", [["upgrade", 291]]],
        ["row", [["upgrade", 281], ["upgrade", 282]]],
        ["row", [["upgrade", 271]]],
        ["row", [["upgrade", 261]]],
        ["row", [["upgrade", 251]]],
        ["row", [["upgrade", 241], ["upgrade", 242]]],
        ["row", [["upgrade", 231], ["upgrade", 232]]],
        ["row", [["upgrade", 221]]],
        ["row", [["upgrade", 211]]],
        ["row", [["upgrade", 201]]],
        ["row", [["upgrade", 191]]],
        ["row", [["upgrade", 181]]],
        ["row", [["upgrade", 171]]],
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
        ["row", [["upgrade", 171]]],
        ["row", [["upgrade", 181]]],
        ["row", [["upgrade", 191]]],
        ["row", [["upgrade", 201]]],
        ["row", [["upgrade", 211]]],
        ["row", [["upgrade", 221]]],
        ["row", [["upgrade", 231], ["upgrade", 232]]],
        ["row", [["upgrade", 241], ["upgrade", 242]]],
        ["row", [["upgrade", 251]]],
        ["row", [["upgrade", 261]]],
        ["row", [["upgrade", 271]]],
        ["row", [["upgrade", 281], ["upgrade", 282]]],
        ["row", [["upgrade", 291]]],
        ["row", [["upgrade", 301], ["upgrade", 302]]],
        ["row", [["upgrade", 311]]],
        ["row", [["upgrade", 321]]],
        ["row", [["upgrade", 331]]],
        ["row", [["upgrade", 341]]],
        ["row", [["upgrade", 351]]],
        ["row", [["upgrade", 361]]],
        ["row", [["upgrade", 371]]],
        ["row", [["upgrade", 381]]],
        ["row", [["upgrade", 391]]],
        ["row", [["upgrade", 401], ["upgrade", 402]]],
        ["row", [["upgrade", 411], ["upgrade", 412]]],
        ["row", [["upgrade", 421]]],
        ["row", [["upgrade", 431], ["upgrade", 432]]],
        ["row", [["upgrade", 441]]],
        ["row", [["upgrade", 451]]],
        ["row", [["upgrade", 461], ["upgrade", 462], ["upgrade", 463]]],
        ["row", [["upgrade", 471]]],
        ["row", [["upgrade", 481]]],
        ["row", [["upgrade", 491]]],
        ["row", [["upgrade", 501]]],
        ["row", [["upgrade", 511]]],
        ["row", [["upgrade", 521]]],
        ["row", [["upgrade", 531]]],
        ["row", [["upgrade", 541]]],
        ["row", [["upgrade", 551]]],
        ["row", [["upgrade", 561]]],
        ["row", [["upgrade", 571]]],
        ["row", [["upgrade", 581]]],
        ["row", [["upgrade", 591], ["upgrade", 592], ["upgrade", 593]]],
        ["row", [["upgrade", 601]]],
        ["row", [["upgrade", 611]]],
        ["row", [["upgrade", 621]]],
        ["row", [["upgrade", 631]]],
        ["row", [["upgrade", 641]]],
        ["row", [["upgrade", 651], ["upgrade", 652]]],
        ["row", [["upgrade", 661]]],
        ["row", [["upgrade", 671]]],
        ["row", [["upgrade", 681]]],
        ["row", [["upgrade", 691]]],
        ["row", [["upgrade", 701]]],
        ["row", [["upgrade", 711]]],
        ["row", [["upgrade", 721], ["upgrade", 722]]],
        ["row", [["upgrade", 731]]],
        ["row", [["upgrade", 741]]],
        ["row", [["upgrade", 751]]],
        ["row", [["upgrade", 761]]],
        ["row", [["upgrade", 771]]],
        ["row", [["upgrade", 781]]],
        ["row", [["upgrade", 791]]],
        ["row", [["upgrade", 801]]],
        ["row", [["upgrade", 811]]],
        ["row", [["upgrade", 821]]],
        ["row", [["upgrade", 831]]],
        ["row", [["upgrade", 841]]],
]}
    },
})

addLayer("cr", {
    name: "crystals",
    symbol: "C", 
    position: 8, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#cf3ee2ff",
    resource: "crystals",
    baseResource: "ascensions", 
    baseAmount() {return player.a.points},
    type: "normal", 
    row: 1,
    doReset(resettingLayer) {
            if (resettingLayer === "gem") {
                layerDataReset(this.layer)
                if (hasUpgrade("gem", 11)) player.cr.upgrades.push(32)
            } else if (resettingLayer === "sac") {
                if (player.sac.points.gte(3)) {
                    player.cr.points = new Decimal(0)
                } 
            } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
            }
    },
    canReset() {
    return (player.a.points.gte("5000") && hasUpgrade("a", 161))
    },
    getResetGain() {
    if (player.a.points.lt("5000")) {
        return new Decimal(0)
    }
    let gain = player.a.points.div(new Decimal("5000")).pow(0.7)

    if (hasUpgrade("a", 391)) gain = gain.times(3)
    if (hasUpgrade("a", 471)) gain = gain.times(1.5)
    if (hasUpgrade("a", 671)) gain = gain.times(2.5)
    if (hasUpgrade("a", 791)) gain = gain.times(5)

    if (hasUpgrade("gem", 11)) gain = gain.times(15)
    
    if (hasUpgrade("d", 11)) gain = gain.times(25)
    if (hasUpgrade("d", 22)) gain = gain.times(2.5)
    if (hasUpgrade("d", 51)) gain = gain.times(1.5)
    if (hasUpgrade("d", 112)) gain = gain.times(2)

    if (hasMilestone("sac", 3)) {
        gain = gain.times(new Decimal(2).pow(player.sac.points.sub(4)));
    }

    gain = gain.times(buyableEffect("gold", 22))
    gain = gain.times(buyableEffect("mb", 13))
    gain = gain.times(globalMult())
    gain = gain.floor();
    return gain
    },
    prestigeButtonText() {
        return "Reset for " + format(getResetGain("cr")) + " crystals"
    },
    onPrestige() {
        playerPoints = player.points
    },
    passiveGeneration() {
    let gain = new Decimal(0)
    if (hasUpgrade("d", 21)) gain = gain.add(0.001)
    gain = gain.add(getBuyableAmount("mb", 13).times(0.001))
    return gain
    },
    layerShown() { return false },
    infoboxes: {        
            1: {
                title() {
                let perSec = layers["cr"].getResetGain().times(layers["cr"].passiveGeneration())
                if (layers["cr"].passiveGeneration().gt(0)) return "You have " + format(player.cr.points) + "C (Crystals) | " + format(perSec) + "/s" 
                else return "You have " + format(player.cr.points) + "C (Crystals)"
            },
                body() {return "Crystals reset ascensions & ascension upgrades but grant crystals which is used to rapidly boost ascensions. You must have Upgrade #121 and at least 5,000 ascensions to reset. Crystals do NOT reset Layer 1. (you may want to get Upgrade #100 before crystallizing...) Formula: ascensions/5000^0.7"},
                unlocked() {return true}
                }
            },
     upgrades: {
            11: {
                title: "Upgrade #1-C",
                description: "x10 ascensions.",
                cost: new Decimal(1),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [21],
                currencyLayer: "cr",
                unlocked() { return player.c && player.c.points.gte(0.01) || hasUpgrade(this.layer,11)},
            },
            21: {
                title: "Upgrade #2-C",
                description: "Unlock a new Generator milestone, and keep Upgrade #104-106.",
                cost: new Decimal(15000),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [31, 32],
                currencyLayer: "cr",
                onPurchase() {
                player.a.upgrades.push(41,42,43)
                },
                unlocked() { return hasUpgrade(this.layer,11)},
            },
            31: {
                title: "Upgrade #4-C",
                description: "x5 ascensions.",
                cost: new Decimal(250000000),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [41],
                currencyLayer: "cr",
                unlocked() { return hasUpgrade(this.layer,21)},
            },
            32: {
                title: "Upgrade #3-C",
                description: "Passively generate ascension points at a rate of 0.1%/s.",
                cost: new Decimal(25000000),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [42],
                currencyLayer: "cr",
                unlocked() { return hasUpgrade(this.layer,21)},
            },
            41: {
                title: "Upgrade #5-C",
                description: "Increase ascension generation to 0.2%/s. Also x2 ascension gain.",
                cost: new Decimal(2.5e10),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [51],
                currencyLayer: "cr",
                unlocked() { return hasUpgrade(this.layer,31)},
            },
            42: {
                title: "Upgrade #6-C",
                description: "Ascension generation is based off of best ascension gain (automatically updates) instead of current ascension gain. Also x2 ascension gain.",
                cost: new Decimal(1.25e11),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [51],
                currencyLayer: "cr",
                unlocked() { return hasUpgrade(this.layer,32) && hasUpgrade(this.layer,21)},
            },
            51: {
                title: "Upgrade #7-C",
                description: "Increase ascension generation to 1%/s. Also x1.01 ascension gain.",
                cost: new Decimal(2e20),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [61],
                currencyLayer: "cr",
                unlocked() { return hasUpgrade(this.layer,41)},
            },
            61: {
                title: "Upgrade #8-C",
                description: "Unlock a new Gold Buyable, and x2 ascensions.",
                cost: new Decimal(6e28),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [71],
                currencyLayer: "cr",
                unlocked() { return hasUpgrade(this.layer,51)},
            },
            71: {
                title: "Upgrade #9-C",
                description: "Crystals boost Ascensions. Formula: crystals^0.03",
                cost: new Decimal(3e38),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [81],
                effect() {
                    return player.cr.points.pow(0.03).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                currencyLayer: "cr",
                unlocked() { return hasUpgrade(this.layer,61)},
            },
            81: {
                title: "Upgrade #10-C",
                description: "Unlock an Ascension Clicker that halves your clicks but gives 15% of ascension per click. Also buffs the super clicker to x5,000 clicks.",
                cost: new Decimal(6e45),
                currencyDisplayName: "crystals",
                currencyInternalName: "points",
                branches: [],
                currencyLayer: "cr",
                unlocked() { return hasUpgrade(this.layer,71)},
            },
    },
    tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false;
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 61]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 41], ["upgrade", 42]]],
        ["row", [["upgrade", 31], ["upgrade", 32]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 11]]],
    ];
} else { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 11]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 31], ["upgrade", 32]]],
        ["row", [["upgrade", 41], ["upgrade", 42]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 61]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 81]]],
]}
    },
})

addLayer("gold", {
        name: "gold",
        symbol: "G",
        position: 9,
        startData() { 
            return {
                unlocked: false,
                points: new Decimal(0),
            }
        },
        color: "#e9e506ff",
        row: 0,
        layerShown() { return false },
        resource: "gold",
        type: "normal", 
        row: 1,
        requires: new Decimal("1e52"),
        baseAmount() {
            return player.m.points
        },
        doReset(resettingLayer) {
            if (resettingLayer === "sac") {
                if (player.sac.points.gte(2)) player.gold.points = new Decimal(0)
            } else if (resettingLayer === "d") {
                layerDataReset(this.layer)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
            }
        },
        canReset() {
        return (player.m.points.gte("1e51"))
        },
        getResetGain() {
        if (player.m.points.lt("1e51")) {
        return new Decimal(0)
        }
        let gain = new Decimal(0)
        if (hasUpgrade("a", 501)) gain = player.m.points.div(new Decimal("1e50"))
        else gain = player.m.points.div(new Decimal("1e51"))

        if (hasUpgrade("a", 401)) gain = gain.times(upgradeEffect("a", 401))

        if (hasUpgrade("d", 11)) gain = gain.times(25)
        if (hasUpgrade("d", 22)) gain = gain.times(2.5)
        if (hasUpgrade("d", 51)) gain = gain.times(4.5)
        if (hasUpgrade("d", 112)) gain = gain.times(2)

        if (hasMilestone("sac", 2)) {
            gain = gain.times(new Decimal(2).pow(player.sac.points.sub(2)));
        }
        if (hasUpgrade("a", 661)) gain = gain.times(2)
        gain = gain.times(globalMult())
        gain = gain.floor();
        return gain
        },
        prestigeButtonText() {
            return "Reset for " + format(getResetGain("gold")) + " gold"
        },
        onPrestige() {
        playerPoints = player.points
        },
    
        upgrades: {
        },

        infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.gold.points) + "G (Gold)"
            },
                body() {return "Gold resets money & money buyables but unlocks new & more powerful buyables. You must have at least 1e51 money to convert. Gold converts at a ratio of 1:1e51. (Can change with upgrades)"},
                unlocked() {return true}
                }
            },

        buyables: {
            11: {
    title: "#1G: Golden Points",
    display() { 
        let bought = getBuyableAmount("gold", 11)
        let cap = this.cap()
        return `Multiply point gain by +50% additive each purchase. 
        After every 10 levels, the effect is multiplied by x2.
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} gold`
    },
    cost(x) { 
        return new Decimal(1).times(Decimal.pow(2.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("gold", 11)
        return player.gold.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("gold", 11)
        if (bought.gte(this.cap())) return // stop if capped
        player.gold.points = player.gold.points.sub(this.cost(bought))
        setBuyableAmount("gold", 11, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("gold", 11)  
    let base = new Decimal(1).add(amt.times(0.5))
    let bonus = Decimal.pow(2, Math.floor(amt / 10))
    return base.times(bonus) 
},
    cap() {
        let base = 100
        return base
    },
    currency() { 
        return player.m.points 
    },
},
12: {
    title: "#2G: Golden Subpoints",
    display() { 
        let bought = getBuyableAmount("gold", 12)
        let cap = this.cap()
        return `Increase passive subpoint generation by +0.1% per level.
        Currently: +${format(this.effect().times(100))}%
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} gold`
    },
    cost(x) { 
        return new Decimal(2).times(Decimal.pow(2.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("gold", 12)
        return player.gold.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("gold", 12)
        if (bought.gte(this.cap())) return
        player.gold.points = player.gold.points.sub(this.cost(bought))
        setBuyableAmount("gold", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("gold", 12)  
    let base = new Decimal(amt).times(0.001)
    return base
},
    cap() {
        let base = 99
        return base
    },
},
13: {
    title: "#3G: Golden Clicks",
    display() { 
        let bought = getBuyableAmount("gold", 13)
        let cap = this.cap()
        return `Increase base clicks by +10 per click.
        Currently: +${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} gold`
    },
    cost(x) { 
        return new Decimal(3).times(Decimal.pow(2.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("gold", 13)
        return player.gold.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("gold", 13)
        if (bought.gte(this.cap())) return
        player.gold.points = player.gold.points.sub(this.cost(bought))
        setBuyableAmount("gold", 13, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("gold", 13)  
    let base = new Decimal(amt).times(10)
    return base
},
    cap() {
        let base = 100
        return base
    },
},
21: {
    title: "#4G: Golden Ascensions",
    display() { 
        let bought = getBuyableAmount("gold", 21)
        let cap = this.cap()
        return `Multiply ascension gain by +25% additive each purchase. 
        After every 10 levels, the effect is multiplied by x1.5.
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} gold`
    },
    cost(x) { 
        return new Decimal(5).times(Decimal.pow(3, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("gold", 21)
        return player.gold.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("gold", 21)
        if (bought.gte(this.cap())) return // stop if capped
        player.gold.points = player.gold.points.sub(this.cost(bought))
        setBuyableAmount("gold", 21, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("gold", 21)  
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
},
22: {
    title: "#5G: Golden Crystals",
    display() { 
        let bought = getBuyableAmount("gold", 22)
        let cap = this.cap()
        return `Multiply crystal gain by +20% additive each purchase. 
        After every 10 levels, the effect is multiplied by x1.4.
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} gold`
    },
    cost(x) { 
        return new Decimal(6).times(Decimal.pow(3, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("gold", 22)
        return player.gold.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("gold", 22)
        if (bought.gte(this.cap())) return // stop if capped
        player.gold.points = player.gold.points.sub(this.cost(bought))
        setBuyableAmount("gold", 22, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("gold", 22)  
    let base = new Decimal(1).add(amt.times(0.2))
    let bonus = Decimal.pow(1.4, Math.floor(amt / 10))
    return base.times(bonus) 
},
    cap() {
        let base = 100
        return base
    },
},
23: {
    title: "#6G: Golden Automation",
    display() { 
        let bought = getBuyableAmount("gold", 23)
        let cap = this.cap()
        return `Automate the middle three money buyables. <br> Bought: ${bought}/${cap} <br> Cost: 100 gold`
    },
    cost(x) { 
        return new Decimal(100)
    },
    canAfford() { 
        let bought = getBuyableAmount("gold", 23)
        return player.gold.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("gold", 23)
        if (bought.gte(this.cap())) return 
        player.gold.points = player.gold.points.sub(this.cost(bought))
        setBuyableAmount("gold", 23, bought.add(1))
    },
    cap() {
        let base = 1
        return base
    },
},
31: {
    title: "#7G: Golden Ascensions II",
    display() { 
        let bought = getBuyableAmount("gold", 31)
        let cap = this.cap()
        return `Multiply ascension gain by x1.1 compounding per purchase.
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} gold`
    },
    cost(x) { 
        return new Decimal(5e40).times(Decimal.pow(6, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("gold", 31)
        return player.gold.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("gold", 31)
        if (bought.gte(this.cap())) return // stop if capped
        player.gold.points = player.gold.points.sub(this.cost(bought))
        setBuyableAmount("gold", 31, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("gold", 31)  
    let base = new Decimal(1.1).pow(amt)
    return base
},
    cap() {
        let base = 100
        return base
    },
    unlocked() {return hasUpgrade("cr",61)},
},
        },
        
    
        tabFormat: [
    ["row", [
        ["infobox", 1],
    ]],
    "prestige-button",
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

addLayer("sac", {
    name: "sacrifice",
    position: 10,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#7c077cff", 
    resource: "sacrifice tiers",
    baseResource: "points", 
    baseAmount() {return player.points},
    doReset(resettingLayer) {
            if (resettingLayer === "ins") {
                if (!player.sac.points.gte(6)) layerDataReset(this.layer)
            }
        },
    type: "normal", 
    row: 1,
    canReset() { // work on thi
    if (player.sac.points.eq(0)) {
    return (player.points.gte("1e73") && player.m.points.gte("1e61"))
    } else if (player.sac.points.eq(1)) {
    return (player.points.gte("1e78") && player.m.points.gte("1e67") && player.c.points.gte("1e28") && player.sp.points.gte("1e69"))
    } else if (player.sac.points.eq(2)) {
    return (player.points.gte("1e87") && player.m.points.gte("1e73") && player.c.points.gte("1e30") && player.sp.points.gte("1e77") && player.a.points.gte("1e22") && player.gold.points.gte("1e24") && player.g.power.gte("1e26"))
    } else if (player.sac.points.eq(3)) {
    return (player.points.gte("1e101") && player.m.points.gte("1e87") && player.c.points.gte("1e34") && player.sp.points.gte("1e92") && player.a.points.gte("1e29") && player.gold.points.gte("1e37") && player.g.power.gte("1e32") && player.cr.points.gte("1e22") && player.gem.points.gte("1e5"))
    } else if (player.sac.points.eq(4)) {
    return (player.points.gte("1e124") && player.m.points.gte("1e110") && player.c.points.gte("1e45") && player.sp.points.gte("1e123") && player.a.points.gte("1e51") && player.gold.points.gte("1e63") && player.g.power.gte("1e43") && player.cr.points.gte("1e40") && player.gem.points.gte("1e21") && player.d.points.gte("100"))
    } else if (player.sac.points.eq(5)) {
    return (player.points.gte("1e140") && player.m.points.gte("1e125") && player.c.points.gte("1e54") && player.sp.points.gte("1e142") && player.a.points.gte("1e67") && player.gold.points.gte("1e82") && player.g.power.gte("1e58") && player.cr.points.gte("1e54") && player.gem.points.gte("1e30") && player.d.points.gte("100000000") && player.ins.points.gte("100000"))
    }
    },
    getResetGain() {
    return new Decimal(1)
    },
    prestigeButtonText() {
        return "Reset for +1 sacrifice tier"
    },
    layerShown() { return false },
    infoboxes: {        
            1: {
                title() {
                return "You are at Sacrifice tier " + format(player.sac.points)
            },
                body() {return "Sacrifice resets required currencies (does not reset upgrades), but increases Sacrifice tier to boost currencies. Sacrifice is kept on nearly all resets unless specified."},
                unlocked() {return true}
                }
            },
    milestones: {
    0: {
        requirementDescription: "Sacrifice Tier 1",
         effect() {
            return new Decimal(2).pow(player.sac.points)
        },
        effectDescription() {
                return "Boosts point & money gain by 2x compounding per sacrifice tier. Current boost: x" + format(this.effect())},
        done() { return player.sac.points.gte(1) }
    },
    1: {
        requirementDescription: "Sacrifice Tier 2",
         effect() {
         return new Decimal(2).pow(player.sac.points.sub(1))
         },
        effectDescription() { return "Boosts subpoint & click gain by 2x compounding per sacrifice tier past 1 sacrifice. Current boost: x" + format(this.effect()) },
        done() { return player.sac.points.gte(2) },
        unlocked() {return player.sac.points.gte(1)},
    },
    2: {
        requirementDescription: "Sacrifice Tier 3",
         effect() {
         return new Decimal(2).pow(player.sac.points.sub(2))
         },
        effectDescription() { return "Boosts ascension, gold & generator power gain by 2x compounding per sacrifice tier past 2 sacrifices. Current boost: x" + format(this.effect()) },
        done() { return player.sac.points.gte(3) },
        unlocked() {return player.sac.points.gte(2)},
    },
    3: {
        requirementDescription: "Sacrifice Tier 4",
        effect() {
         return new Decimal(2).pow(player.sac.points.sub(3))
         },
        effectDescription() { return "Boosts crystal & gemstone gain by 2x compounding per sacrifice tier past 3 sacrifices. Current boost: x" + format(this.effect()) },
        done() { return player.sac.points.gte(4) },
        unlocked() {return player.sac.points.gte(3)},
    },
    4: {
        requirementDescription: "Sacrifice Tier 5",
        effect() {
         return new Decimal(2).pow(player.sac.points.sub(4))
         },
        effectDescription() { return "Boosts descension gain by 2x compounding per sacrifice tier past 4 sacrifices.  Current boost: x" + format(this.effect()) },
        done() { return player.sac.points.gte(5) },
        unlocked() {return player.sac.points.gte(4)},
    },
    5: {
        requirementDescription: "Sacrifice Tier 6",
        effect() {
         return new Decimal(1)
         },
        effectDescription() { return "Sacrifice your own willpower. How long did you spend doing this? Insanity no longer resets sacrifice."},
        done() { return player.sac.points.gte(6) },
        unlocked() {return player.sac.points.gte(5)},
    },
},
tabFormat: [
    ["row", [["infobox", 1]]],
    ["display-text", () => {
        if (player.sac.points.eq(0)) {
            return `
            <div>Sacrifice requirements:</div>
            <div style="color:${player.points.gte(1e73) ? 'lime' : 'red'}">
                1e74 points
            </div>
            <div style="color:${player.m.points.gte(1e61) ? 'lime' : 'red'}">
                1e63 money
            </div>
            `
        } else if (player.sac.points.eq(1)) {
            return `
            <div>Sacrifice requirements:</div>
            <div style="color:${player.points.gte(1e78) ? 'lime' : 'red'}">
                1e78 points
            </div>
            <div style="color:${player.m.points.gte(1e67) ? 'lime' : 'red'}">
                1e67 money
            </div>
            <div style="color:${player.c.points.gte(1e28) ? 'lime' : 'red'}">
                1e28 clicks
            </div>
            <div style="color:${player.sp.points.gte(1e69) ? 'lime' : 'red'}">
                1e69 subpoints
            </div>
            `
        } else if (player.sac.points.eq(2)) {
            return `
            <div>Sacrifice requirements:</div>
            <div style="color:${player.points.gte(1e86) ? 'lime' : 'red'}">
                1e87 points
            </div>
            <div style="color:${player.m.points.gte(1e73) ? 'lime' : 'red'}">
                1e73 money
            </div>
            <div style="color:${player.c.points.gte(1e30) ? 'lime' : 'red'}">
                1e30 clicks
            </div>
            <div style="color:${player.sp.points.gte(1e73) ? 'lime' : 'red'}">
                1e77 subpoints
            </div>
            <div style="color:${player.a.points.gte(1e22) ? 'lime' : 'red'}">
                1e22 ascensions
            </div>
            <div style="color:${player.gold.points.gte(1e24) ? 'lime' : 'red'}">
                1e24 gold
            </div>
            <div style="color:${player.g.power.gte(1e26) ? 'lime' : 'red'}">
                1e26 generator power
            </div>
            `
        } else if (player.sac.points.eq(3)) {
            return `
            <div>Sacrifice requirements:</div>
            <div style="color:${player.points.gte(1e99) ? 'lime' : 'red'}">
                1e101 points
            </div>
            <div style="color:${player.m.points.gte(1e86) ? 'lime' : 'red'}">
                1e87 money
            </div>
            <div style="color:${player.c.points.gte(1e34) ? 'lime' : 'red'}">
                1e34 clicks
            </div>
            <div style="color:${player.sp.points.gte(1e92) ? 'lime' : 'red'}">
                1e92 subpoints
            </div>
            <div style="color:${player.a.points.gte(1e29) ? 'lime' : 'red'}">
                1e29 ascensions
            </div>
            <div style="color:${player.gold.points.gte(1e37) ? 'lime' : 'red'}">
                1e37 gold
            </div>
            <div style="color:${player.g.power.gte(1e32) ? 'lime' : 'red'}">
                1e32 generator power
            </div>
            <div style="color:${player.cr.points.gte(1e22) ? 'lime' : 'red'}">
                1e22 crystals
            </div>
            <div style="color:${player.gem.points.gte(100000) ? 'lime' : 'red'}">
                100,000 gemstones
            </div>
            `
        } else if (player.sac.points.eq(4)) {
            return `
            <div>Sacrifice requirements:</div>
            <div style="color:${player.points.gte(1e124) ? 'lime' : 'red'}">
                1e124 points
            </div>
            <div style="color:${player.m.points.gte(1e110) ? 'lime' : 'red'}">
                1e110 money
            </div>
            <div style="color:${player.c.points.gte(1e45) ? 'lime' : 'red'}">
                1e45 clicks
            </div>
            <div style="color:${player.sp.points.gte(1e123) ? 'lime' : 'red'}">
                1e123 subpoints
            </div>
            <div style="color:${player.a.points.gte(1e51) ? 'lime' : 'red'}">
                1e51 ascensions
            </div>
            <div style="color:${player.gold.points.gte(1e63) ? 'lime' : 'red'}">
                1e63 gold
            </div>
            <div style="color:${player.g.power.gte(1e43) ? 'lime' : 'red'}">
                1e43 generator power
            </div>
            <div style="color:${player.cr.points.gte(1e40) ? 'lime' : 'red'}">
                1e40 crystals
            </div>
            <div style="color:${player.gem.points.gte(1e21) ? 'lime' : 'red'}">
                1e21 gemstones
            </div>
            <div style="color:${player.d.points.gte(100) ? 'lime' : 'red'}">
                100 descensions
            </div>
            `
        } else if (player.sac.points.eq(5)) {
            return `
            <div>Sacrifice requirements:</div>
            <div style="color:${player.points.gte(1e140) ? 'lime' : 'red'}">
                1e140 points
            </div>
            <div style="color:${player.m.points.gte(1e125) ? 'lime' : 'red'}">
                1e125 money
            </div>
            <div style="color:${player.c.points.gte(1e54) ? 'lime' : 'red'}">
                1e54 clicks
            </div>
            <div style="color:${player.sp.points.gte(1e142) ? 'lime' : 'red'}">
                1e142 subpoints
            </div>
            <div style="color:${player.a.points.gte(1e67) ? 'lime' : 'red'}"> 
                1e67 ascensions
            </div>
            <div style="color:${player.gold.points.gte(1e82) ? 'lime' : 'red'}">
                1e82 gold
            </div>
            <div style="color:${player.g.power.gte(1e58) ? 'lime' : 'red'}">
                1e58 generator power
            </div>
            <div style="color:${player.cr.points.gte(1e54) ? 'lime' : 'red'}">
                1e54 crystals
            </div>
            <div style="color:${player.gem.points.gte(1e30) ? 'lime' : 'red'}">
                1e30 gemstones
            </div>
            <div style="color:${player.d.points.gte(100000000) ? 'lime' : 'red'}">
                100,000,000 descensions
            </div>
            <div style="color:${player.ins.points.gte(100000) ? 'lime' : 'red'}">
                100,000 insanities
            </div>
            `
        } else if (player.sac.points.eq(6)) {
            return `
            <div>Sacrifice requirements:</div>
            <div>Your soul</div>
            `
        }
    }],
    "prestige-button",
    "milestones",
],
})

addLayer("gem", {
    name: "gemstones",
    position: 11, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#4100bb",
    resource: "gemstones",
    baseResource: "ascensions", 
    baseAmount() {return player.a.points},
    type: "normal", 
    row: 1,
    doReset(resettingLayer) {
        if (resettingLayer === "sac") {
                if (player.sac.points.gte(3)) {
                    player.gem.points = new Decimal(0)
                }
            } else if (resettingLayer === "d") {
                    layerDataReset(this.layer)
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
            }
    },
    canReset() {
    return (player.a.points.gte("1e24") && hasUpgrade("a", 611))
    },
    getResetGain() {
    if (player.a.points.lt("1e24")) {
        return new Decimal(0)
    }
    let gain = player.a.points.div(new Decimal("1e24")).pow(0.7)

    if (hasUpgrade("d", 11)) gain = gain.times(25)
    if (hasUpgrade("d", 22)) gain = gain.times(2.5)
    if (hasUpgrade("d", 51)) gain = gain.times(1.5)
    if (hasUpgrade("d", 112)) gain = gain.times(2)

    if (hasMilestone("sac", 3)) {
        gain = gain.times(new Decimal(2).pow(player.sac.points.sub(4)));
    }
    gain = gain.times(globalMult())
    gain = gain.floor();
    return gain
    },
    prestigeButtonText() {
        return "Reset for " + format(getResetGain("gem")) + " gemstones"
    },
    onPrestige() {
        playerPoints = player.points
    },
    layerShown() { return false },
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.gem.points) + "GM (Gemstones)" 
            },
                body() {return "Gemstones reset everything crystals reset as well as crystals & crystal upgrades but grant gemstones which is used to massively boost ascensions, again. You must have Upgrade #175 and at least 1e24 ascensions to reset. (you should absolutely get Upgrade #100 before resetting...) Formula: ascensions/1e24^0.7"},
                unlocked() {return true}
                }
            },
     upgrades: {
            11: {
                title: "Upgrade #1-GM",
                description: "Keep Upgrade #4-C, and x15 ascensions & crystals.",
                cost: new Decimal(1),
                currencyDisplayName: "gemstones",
                currencyInternalName: "points",
                branches: [21],
                currencyLayer: "gem",
                onPurchase() {
                player.cr.upgrades.push(32)
                },
                unlocked() { return player.c && player.c.points.gte(0.01) || hasUpgrade(this.layer,11)},
            },
            21: {
                title: "Upgrade #2-GM",
                description: "Modify the 44 Prestige Milestone to be compounding but halve the amount, and double the Ascension Click milestone exponent.",
                cost: new Decimal(100000),
                currencyDisplayName: "gemstones",
                currencyInternalName: "points",
                branches: [31, 32],
                currencyLayer: "gem",
                unlocked() { return hasUpgrade(this.layer,11)},
            },
            31: {
                title: "Upgrade #3-GM",
                description: "Double current passive ascension generation rate. Also x4 ascension.",
                cost: new Decimal(2.5e9),
                currencyDisplayName: "gemstones",
                currencyInternalName: "points",
                branches: [41],
                currencyLayer: "gem",
                unlocked() { return hasUpgrade(this.layer,21)},
            },
            41: {
                title: "Upgrade #4-GM",
                description: "Ascension boosts itself. Formula: ascensions^0.04/10",
                cost: new Decimal(6.5e17),
                currencyDisplayName: "gemstones",
                currencyInternalName: "points",
                effect() {
                    return player.a.points.pow(0.04).div(10).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [51],
                currencyLayer: "gem",
                unlocked() { return hasUpgrade(this.layer,31)},
            },
            51: {
                title: "Upgrade #5-GM",
                description: "Improve the exponent of Upgrade #136 and #145 by x1.5. Also x1.02 ascensions and descensions.",
                cost: new Decimal(5e27),
                currencyDisplayName: "gemstones",
                currencyInternalName: "points",
                branches: [],
                currencyLayer: "gem",
                unlocked() { return hasUpgrade(this.layer,41)},
            },
    },
    tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false;
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 41]]],
        ["row", [["upgrade", 31], ["upgrade", 32]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 11]]],
    ];
} else { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 11]]],
        ["row", [["upgrade", 21]]],
        ["row", [["upgrade", 31], ["upgrade", 32]]],
        ["row", [["upgrade", 41]]],
        ["row", [["upgrade", 51]]],
]}
    },
})

addLayer("d", {
    name: "descension",
    position: 12, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        timeOwned: new Decimal(0)
    }},
    color: "rgb(101, 23, 8)",
    resource: "descensions",
    baseResource: "points", 
    baseAmount() {return player.a.points},
    type: "normal", 
    row: 1,
    doReset(resettingLayer) {
        if (resettingLayer === "sac") {
                if (player.sac.points.gte(5)) {
                    player.d.points = new Decimal(0)
                }
            } else if (resettingLayer === "ins") {
                layerDataReset(this.layer)
            }
    },
    canReset() {
    return (player.points.gte("1e111") && hasUpgrade("a", 841))
    },
    getResetGain() {
    if (player.points.lt("1e111")) {
        return new Decimal(0)
    }
    let gain = player.points.div(new Decimal("1e111")).pow(0.1)

    if (hasUpgrade("d", 31)) gain = gain.times(upgradeEffect("d", 31))
    if (hasUpgrade("d", 61)) gain = gain.times(2)
    if (hasUpgrade("d", 101)) gain = gain.times(upgradeEffect("d", 101))

    if (hasUpgrade("gem", 51)) gain = gain.times(1.02)

    if (hasChallenge("ins", 11)) gain = gain.times(2)

    if (hasMilestone("sac", 4)) {
        gain = gain.times(new Decimal(2).pow(player.sac.points.sub(5)));
    }
    if (hasMilestone("g", 5)) {
         gain = gain.times(player.g.power.pow(0.01).max(1));
    }
    // gain = gain.times(globalMult())
    if (inChallenge("ins", 11)) gain = gain.pow(0.95)
    gain = gain.floor();
    return gain
    },
    prestigeButtonText() {
        return "Reset for " + format(getResetGain("d")) + " descensions"
    },
    onPrestige() {
        player.d.timeOwned = new Decimal(0)
    },
    update(diff) {
    if (hasUpgrade("d", 101)) {
        player.d.timeOwned = player.d.timeOwned.add(diff)
        console.log(player.d.timeOwned.toString())
    }
}, 
    layerShown() { return false },
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.d.points) + "DP (Descension Points)" 
            },
                body() {return "Welcome to the third layer! Descension resets everything so far (excluding sacrifice) but grant descensions which is used to get massive boosts, again. You must have Upgrade #200 and at least 1e108 points to reset. Formula: points/1e111^0.1"},
                unlocked() {return true}
                }
            },
     upgrades: {
            11: {
                title: "Upgrade #201",
                description: "Keep Upgrade #101, and x25 Layer 1 & Layer 2 currencies. +1% passive ascension & +100% passive subpoint generation.",
                cost: new Decimal(1),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [21, 22],
                currencyLayer: "d",
                onPurchase() {
                player.a.upgrades.push(11)
                },
            },
            21: {
                title: "Upgrade #202",
                description: "Start passively generating crystals at a rate of 0.1%/s.",
                cost: new Decimal(2),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [31],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,11)},
            },
            22: {
                title: "Upgrade #203",
                description: "x2.5 Layer 1 & Layer 2 currencies, and automate Upgrade #0-50.",
                cost: new Decimal(2),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [31],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,11)},
            },
            31: {
                title: "Upgrade #204",
                description: "Ascensions boost descension gain. Formula: ascensions/1e44^0.08. Also x3 ascensions.",
                cost: new Decimal(4),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                effect() {
                    return player.a.points.div(1e44).pow(0.08).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                branches: [41, 42, 43],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,21) && hasUpgrade(this.layer,22)},
            },
            41: {
                title: "Upgrade #205",
                description: "Automate Upgrade 51-100, and x3 points.",
                cost: new Decimal(10),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [51],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,31)},
            },
            42: {
                title: "Upgrade #206",
                description: "Automate ALL money buyables, and x3 money.",
                cost: new Decimal(10),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [51],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,31)},
            },
            43: {
                title: "Upgrade #207",
                description: "+150% passive subpoint generation & automate all subpoint upgrades.",
                cost: new Decimal(10),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [51],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,31)},
            },
            51: {
                title: "Upgrade #208",
                description: "x1.5 Layer 1 & 2 currencies, and x3 Gold. Gold no longer resets money upgrades.",
                cost: new Decimal(25),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [61],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,41) && hasUpgrade(this.layer,42) && hasUpgrade(this.layer,43)},
            },
            61: {
                title: "Upgrade #209",
                description: "x2 descensions and gemstones.",
                cost: new Decimal(40),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [71],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,51)},
            },
            71: {
                title: "Upgrade #210",
                description: "Unlock Mega-Boosters.",
                cost: new Decimal(100),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [81],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,61)},
            },
            81: {
                title: "Upgrade #211",
                description: "Unspent descensions boost point gain. Formula: descensions^0.15x3",
                cost: new Decimal(200),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [91],
                currencyLayer: "d",
                effect() {
                    return player.d.points.pow(0.15).times(3).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() { return hasUpgrade(this.layer,71)},
            },
            91: {
                title: "Upgrade #212",
                description() {
                    if (!hasUpgrade("d", 91)) 
                        return "For every upgrade in this layer unlocked, multiply point & ascension gain by 1.1 (compounding)."
            
                    let pointUpgrades = player[this.layer].upgrades.length
                    let multiplier = new Decimal(1.1).pow(pointUpgrades)
            
                    return `For every upgrade in this layer unlocked, multiply point & ascension gain by 1.1 (compounding).
                    Current multiplier: x${format(multiplier)}`
                },
                cost: new Decimal(325),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                effect() {
                    let pointUpgrades = player[this.layer].upgrades.length
                    let multiplier = new Decimal(0)
                    multiplier = multiplier.add(new Decimal(1.1).pow(pointUpgrades))
            
                    return multiplier
                },
                branches: [101],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,81)},
            },
            101: {
                title: "Upgrade #213",
                description: "Increases descension gain based on how long you've spent in a descension. Formula: time/100^0.4",
                cost: new Decimal(450),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [111, 112],
                currencyLayer: "d",
                effect() {
                    return player.d.timeOwned.add(100).div(100).pow(0.4);
                }, 
                effectDisplay() {
                   return format(this.effect()) + "×";
                },
                unlocked() { return hasUpgrade(this.layer,91)},
            },
            111: {
                title: "Upgrade #214",
                description: "x2 Layer 1 currencies.",
                cost: new Decimal(1000),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [121],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,101)},
            },
            112: {
                title: "Upgrade #215",
                description: "x2 Layer 2 currencies.",
                cost: new Decimal(1000),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [121],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,101)},
            },
            121: {
                title: "Upgrade #216",
                description: "+2.5% passive ascension gain, and automate Upgrade 101-120.",
                cost: new Decimal(2500),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [131],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,111) && hasUpgrade(this.layer,112)},
            },
            131: {
                title: "Upgrade #217",
                description: "You can now buy both Upgrade #187 and #188.",
                cost: new Decimal(4000),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [141],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,121)},
            },
            141: {
                title: "Upgrade #218",
                description: "x4 points.",
                cost: new Decimal(6250),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [151],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,131)},
            },
            151: {
                title: "Upgrade #219",
                description: "Decrease the exponential scaling of generators again. Also unlock yet another generator milestone.",
                cost: new Decimal(7500),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [161],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,141)},
            },
            161: {
                title: "Upgrade #220",
                description: "Unspent descensions boost ascension gain. Formula: descensions^0.155",
                cost: new Decimal(15000),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [171],
                currencyLayer: "d",
                effect() {
                    return player.d.points.pow(0.155).max(1)
                },
                effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
                unlocked() { return hasUpgrade(this.layer,151)},
            },
            171: {
                title: "Temp End",
                description: "You have reached the temp end! Unlock a new sub-layer, Insanity. Note that this sublayer will be reset next update.",
                cost: new Decimal(100000),
                currencyDisplayName: "descensions",
                currencyInternalName: "points",
                branches: [181],
                currencyLayer: "d",
                unlocked() { return hasUpgrade(this.layer,161)},
            },
    },
    tabFormat: () => { 
            const inverseTree = player?.inverseTree ?? false;
        if (inverseTree) { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 171]]],
        ["row", [["upgrade", 161]]],
        ["row", [["upgrade", 151]]],
        ["row", [["upgrade", 141]]],
        ["row", [["upgrade", 131]]],
        ["row", [["upgrade", 121]]],
        ["row", [["upgrade", 111], ["upgrade", 112]]],
        ["row", [["upgrade", 101]]],
        ["row", [["upgrade", 91]]],
        ["row", [["upgrade", 81]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 61]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 41], ["upgrade", 42], ["upgrade", 43]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 21], ["upgrade", 22]]],
        ["row", [["upgrade", 11]]],
    ];
} else { return [
        ["row", [["infobox", 1]]],
        "prestige-button",
        ["row", [["upgrade", 11]]],
        ["row", [["upgrade", 21], ["upgrade", 22]]],
        ["row", [["upgrade", 31]]],
        ["row", [["upgrade", 41], ["upgrade", 42], ["upgrade", 43]]],
        ["row", [["upgrade", 51]]],
        ["row", [["upgrade", 61]]],
        ["row", [["upgrade", 71]]],
        ["row", [["upgrade", 81]]],
]}
    },
})

addLayer("ins", {
        name: "insanity",
        position: 13, 
        startData() { 
            return {
                unlocked: false,
                points: new Decimal(0),
            }
        },
        color: "rgb(60, 5, 82)",
        row: 0,
        layerShown() { return false },
        resource: "insanity points",
        type: "normal", 
        row: 1,
        baseAmount() {
            return player.d.points
        },
        canReset() {
        return (player.d.points.gte("100000") && hasUpgrade("d",171))
        },
        doReset(resettingLayer) {
        },
        getResetGain() {
        let gain = player.d.points.pow(0.11)
        gain = gain.times(buyableEffect("ins", 11))
        gain = gain.floor();
        return gain
        },
        prestigeButtonText() {
            return "Reset for " + format(getResetGain("ins")) + " insanities"
        },
    
        upgrades: {
        },

        infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.ins.points) + "I (Insanities)"
            },
                body() {return "Welcome to the bonus layer, once again :) Insanity resets EVERYTHING but grants insanities to boost nearly everything. You must have the Temp End upgrade & 100,000 descensions to perform an insanity reset. This sublayer will be removed in the next update, so reset if you dare. Note that the true endgame is Sacrifice tier 6. (Also I have not balanced this layer.) Formula: descensions^0.11"},
                unlocked() {return true}
                }
            },

        buyables: {
            11: {
    title: "#1I: Insanity Boost",
    display() { 
        let bought = getBuyableAmount("ins", 11)
        let cap = this.cap()
        return `x1.5 insanity gain compounding per level.
        Currently: x${format(this.effect())}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} insanities`
    },
    cost(x) { 
        return new Decimal(2).times(Decimal.pow(2.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("ins", 11)
        return player.ins.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("ins", 11)
        if (bought.gte(this.cap())) return // stop if capped
        player.ins.points = player.ins.points.sub(this.cost(bought))
        setBuyableAmount("ins", 11, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("ins", 11)
    let base = new Decimal(1.5).pow(amt)
    return base
},
    cap() {
        let base = 10
        return base
    },
},
12: {
    title: "#2I: Global Boost",
    display() { 
        let bought = getBuyableAmount("ins", 12)
        let cap = this.cap()
        return `Multiply all currencies by 1.5x compounding. (excluding descension & insanity).
        Currently: x${format(this.effect())} 
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} insanities`
    },
    cost(x) { 
        return new Decimal(2).times(Decimal.pow(2.5, x))
    },
    canAfford() { 
        let bought = getBuyableAmount("ins", 12)
        return player.ins.points.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("ins", 12)
        if (bought.gte(this.cap())) return
        player.ins.points = player.ins.points.sub(this.cost(bought))
        setBuyableAmount("ins", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("ins", 12)
    let base = new Decimal(1.5).pow(amt)
    return base
},
    cap() {
        let base = 10
        return base
    },
}
        },
    challenges: {
    11: {
        name: "Insane Challenge",
        challengeDescription: "^0.95 points, ascensions & descensions. Performs an Insanity Reset on start.",
        goalDescription: "Reach 100,000 descensions.",
        rewardDescription: "x2 descensions",
        onEnter() {
        doReset("ins"); 
        },
        canComplete: function() {
        return player.d.points.gte(100000)
        },
        
    },
}     

    })

addLayer("mb", {
    name: "megaboosters",
    symbol: "MB", 
    position: 13, 
    startData() { return {
        unlocked: false,
        points: new Decimal(0),
        boosterAutomation: false,
        totalBoosters: new Decimal(0),
        currentBoosters: new Decimal(0),
    }},
    color: "rgb(26, 40, 233)",
    resource: "mega boosters",
    baseResource: "points",  
    baseAmount() {return player.points},
    type: "normal", 
    row: 1,
    canReset() {
    return (player.b.points.add(player.b.money).add(player.b.clicks).add(player.b.subpoints).gte("600") && hasUpgrade("d", 71))
    },
    getResetGain() {
    let gain = new Decimal(1)
    return gain
    },
    prestigeButtonText() {
        return "Reset for " + format(getResetGain("mb")) + " mega booster"
    },
    onPrestige() {
        player.mb.totalBoosters = player.mb.totalBoosters.add(1)
        player.mb.currentBoosters = player.mb.currentBoosters.add(1)
        playerPoints = player.points
    },
    layerShown() {return false},
    doReset(resettingLayer) {
        if (resettingLayer === "ins") {
                layerDataReset(this.layer)
        }
    },
    infoboxes: {        
            1: {
                title() {
                return "You have " + format(player.mb.totalBoosters) + "MB (Total Mega Boosters), which is boosting Boosters by x" + format(new Decimal(1.5).pow(player.mb.totalBoosters))
            },
                body() {return "Mega Boosters reset boosters as well as increase the exponential cost scaling of boosters but grants a Mega Booster, which boosts the power of Boosters by 1.5^MB as well as can be spent on Mega Boosters for new boosts. You must have 600 total Boosters to reset. Later upgrades will unlock new Mega Booster boosters. Spending Mega Boosters will not decrease total Mega Boosters. Your first Mega Booster will unlock Booster Automation, which automatically buys Boosters."},
                unlocked() {return true}
                }
            },
    clickables: {
    11: {
        title: "Booster Automation",
        display() {
            return player.mb.boosterAutomation ? "Enable booster automation: ON" : "Enable booster automation: OFF"
        },
        canClick() {
            return true
        },
        onClick() {
            player.mb.boosterAutomation = !player.mb.boosterAutomation
        },
        unlocked() {return player.mb.totalBoosters.gt(0)},
        style() {
            return {
                "margin": "0px",
                "min-height": "120px",
	            "width": "120px",
                "font-size": "11px",
            }
        }
      },
    },
    buyables: {
        11: {
    title: "#1MB: Power Booster",
    display() { 
        let bought = getBuyableAmount("mb", 11)
        let cap = this.cap()
        return `Boosts the base exponent of the formula for generator power gain by +0.015 per level. Also boosts generator power by MBpower^0.8.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} mega booster`
    },
    cost() { 
        return new Decimal(1)
    },
    canAfford() { 
        let bought = getBuyableAmount("mb", 11)
        return player.mb.currentBoosters.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("mb", 11)
        if (bought.gte(this.cap())) return // stop if capped
        player.mb.currentBoosters = player.mb.currentBoosters.sub(this.cost(bought))
        setBuyableAmount("mb", 11, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("mb", 11) 
    let base = new Decimal(amt.add(1).pow(0.8))
    return format(base) 
    },
    cap() {
        let base = new Decimal(10)
        return base
    },
    currency() { 
        return player.mb.currentBoosters
    },
    },
        12: {
    title: "#2MB: Ascension Booster",
    display() { 
        let bought = getBuyableAmount("mb", 12)
        let cap = this.cap()
        return `Boosts ascension gain by MBascension^1.05.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} mega booster`
    },
    cost() { 
        return new Decimal(1)
    },
    canAfford() { 
        let bought = getBuyableAmount("mb", 12)
        return player.mb.currentBoosters.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("mb", 12)
        if (bought.gte(this.cap())) return // stop if capped
        player.mb.currentBoosters = player.mb.currentBoosters.sub(this.cost(bought))
        setBuyableAmount("mb", 12, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("mb", 12)  
    let base = new Decimal(amt.add(1).pow(1.05))
    return format(base) 
    },
    cap() {
        let base = new Decimal(10)
        return base
    },
    currency() { 
        return player.mb.currentBoosters
    },
    },
    13: {
    title: "#3MB: Crystal Booster",
    display() { 
        let bought = getBuyableAmount("mb", 13)
        let cap = this.cap()
        return `Increases passive crystal generation rate by +%0.1 per level. Also boosts crystal gain by MBcrystal^0.8.
        Currently: x${this.effect()}  
        Bought: ${bought}/${cap}  
        Cost: ${format(this.cost(bought))} mega booster`
    },
    cost() { 
        return new Decimal(1)
    },
    canAfford() { 
        let bought = getBuyableAmount("mb", 13)
        return player.mb.currentBoosters.gte(this.cost(bought)) && bought.lt(this.cap())
    },
    buy() {
        let bought = getBuyableAmount("mb", 13)
        if (bought.gte(this.cap())) return // stop if capped
        player.mb.currentBoosters = player.mb.currentBoosters.sub(this.cost(bought))
        setBuyableAmount("mb", 13, bought.add(1))
    },
    effect() {
    let amt = getBuyableAmount("mb", 13) 
    let base = new Decimal(amt.add(1).pow(0.8))
    return format(base) 
    },
    cap() {
        let base = new Decimal(10)
        return base
    },
    currency() { 
        return player.mb.currentBoosters
    },
    },
},
tabFormat: [
    ["row", [
        ["infobox", 1],
    ]],
    "prestige-button",
    ["row", [
        ["clickable", 11],
    ]],
    ["row", [
        ["buyable", 11],
        ["buyable", 12],
        ["buyable", 13],
    ]],
]
})