// ===================================================================
// JetSurfers 2 - Consolidated Jets Data & Storage Keys
// ===================================================================
// This file contains all shared data structures and constants used
// across index.html, jetshop.html, and stats.html
// ===================================================================

// --- Local Storage Keys (Shared across all files) ---
const COIN_STORAGE_KEY = 'jetSurferTotalCoins';
const MAGNET_LEVEL_KEY = 'jetSurferMagnetLevel';
const JET_OWNED_KEY = 'jetSurferOwnedJets';
const JET_SELECTED_KEY = 'jetSurferSelectedJet';
const HEADSTART_COUNT_KEY = 'jetSurferHeadstartCount';
const COIN_MULTIPLIER_LEVEL_KEY = 'jetSurferCoinMultiplierLevel';
const HIGH_SCORE_KEY = 'jetSurferHighScore';
const MONEY_SPENT_KEY = 'jetSurferMoneySpent';
const QUEST_STORAGE_KEY = 'jetSurferQuests';

// --- Jet Definitions ---
// This array defines all available jets in the game.
// Each jet has an ID, name, price, images, availability, and limited status.
const JETS = [
    { 
        id: 'default', 
        name: 'Default Jet', 
        price: 0, 
        img: 'rec/motor/default.png', 
        logo: 'rec/motor/default.png',
        available: true,
        limited: false
    },
    { 
        id: 'blue_streak', 
        name: 'Blue Streak', 
        price: 5000, 
        img: 'rec/motor/jet_blue.png', 
        logo: 'rec/motor/blue.png',
        available: true,
        limited: false
    },
    { 
        id: 'red_comet', 
        name: 'Nightwing', 
        price: 10000, 
        img: 'rec/motor/nightwing.png', 
        logo: 'rec/motor/nightwing.png',
        available: true,
        limited: false
    },
    { 
        id: 'punkin', 
        name: 'Punkin', 
        price: 10000, 
        img: 'rec/motor/punkin.png', 
        logo: 'rec/motor/punkin.png',
        available: false,
        limited: true
    },
    { 
        id: 'marecrow', 
        name: 'Mare-crow', 
        price: 90000, 
        img: 'rec/motor/marecrow.png', 
        logo: 'rec/motor/marecrow.png',
        available: false,
        limited: true
    },
    { 
        id: 'Reiny', 
        name: 'Reiny', 
        price: 150000, 
        img: 'rec/motor/reiny.png', 
        logo: 'rec/motor/reiny.png',
        available: false,
        limited: true
    },
    { 
        id: 'santa-jet', 
        name: 'Santa Jet', 
        price: 150000, 
        img: 'rec/motor/santa-jet.png', 
        logo: 'rec/motor/santa-jet.png',
        available: false,
        limited: true
    },
    { 
        id: 'shardship', 
        name: 'Shard Ship', 
        price: 20000, 
        img: 'rec/motor/shardship.png', 
        logo: 'rec/motor/shardship.png',
        available: true,
        limited: false
    },
    { 
        id: 'plankjet', 
        name: 'Plank Jet', 
        price: 0, 
        img: 'rec/motor/plank-jet.png', 
        logo: 'rec/motor/plank-jet.png',
        available: false,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'spiderjet', 
        name: 'Spider Jet', 
        price: 40000, 
        img: 'rec/motor/spiderjet.png', 
        logo: 'rec/motor/spiderjet.png',
        available: true,   // Set to false when the event ends
        limited: false      // Marks it as a limited jet
    },
    { 
        id: 'festive-star', 
        name: 'Festive Star', 
        price: 0, 
        img: 'rec/motor/festive-star.png', 
        logo: 'rec/motor/festive-star.png',
        available: false,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'flake-tron', 
        name: 'Flake Tron', 
        price: 75000, 
        img: 'rec/motor/flake-tron.png', 
        logo: 'rec/motor/flake-tron.png',
        available: false,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'reindeer-festive2025', 
        name: 'Reindeer Festive 2025', 
        price: 150000, 
        img: 'rec/motor/festive25.png', 
        logo: 'rec/motor/festive25.png',
        available: false,
        limited: true
    },
    { 
        id: 'breadtime', 
        name: 'Bread Time', 
        price: 40000, 
        img: 'rec/motor/breadtime.png', 
        logo: 'rec/motor/breadtime.png',
        available: true,   // Set to false when the event ends
        limited: false      // Marks it as a limited jet
    },
    { 
        id: 'xmas-hovercraft', 
        name: 'XMAS Hovercraft', 
        price: 80000, 
        img: 'rec/motor/xmas-hovercraft.png', 
        logo: 'rec/motor/xmas-hovercraft.png',
        available: false,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'leaf', 
        name: 'Leaf', 
        price: 90000, 
        img: 'rec/motor/leaf.png', 
        logo: 'rec/motor/leaf.png',
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'ghostleaf', 
        name: 'Ghost Leaf', 
        price: 120000, 
        img: 'rec/motor/ghost-leaf.png', 
        logo: 'rec/motor/ghost-leaf.png',
        available: false,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'sego', 
        name: 'SEGO', 
        price: 50000, 
        img: 'rec/motor/sego.png', 
        logo: 'rec/motor/sego.png',
        available: true,   // Set to false when the event ends
        limited: false      // Marks it as a limited jet
    },
    { 
        id: 'birthday-clowns', 
        name: 'Birthday Clowns', 
        price: 35000, 
        img: 'rec/motor/cicero.png', 
        logo: 'rec/motor/cicero.png',
        available: true,   // Set to false when the event ends
        limited: false      // Marks it as a limited jet
    },
    { 
        id: 'sharkabish', 
        name: 'Sharkabish', 
        price: 25000, 
        img: 'rec/motor/sharkabish.png', 
        logo: 'rec/motor/sharkabish.png',
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'sort', 
        name: 'Space-Or-Treat', 
        price: 150000, 
        img: 'rec/motor/sort.png', 
        logo: 'rec/motor/sort.png',
        available: false,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'hello-kitty', 
        name: 'Hello Kitty', 
        price: 50000, 
        img: 'rec/motor/hello-kitty.png', 
        logo: 'rec/motor/hello-kitty.png',
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'hovercraft', 
        name: 'Hovercraft', 
        price: 90000, 
        img: 'rec/motor/hovercraft.png', 
        logo: 'rec/motor/hovercraft.png',
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'youngdollazz', 
        name: 'YoungDollazz', 
        price: 999999999, 
        img: 'rec/motor/youngdollazz.png', 
        logo: 'rec/motor/youngdollazz.png',
        available: false,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'gold_wing', 
        name: 'Golden Wing', 
        price: 500000, 
        img: 'rec/motor/premium-jet.png', 
        logo: 'rec/motor/premium-jet.png',
        available: true,
        limited: false
    },
    { 
        id: 'pressure-3000', 
        name: 'Pressure 3000', 
        price: 35000, 
        img: 'rec/motor/pressure3000.png', 
        logo: 'rec/motor/pressure3000.png',
        available: true,
        limited: false
    },
    { 
        id: 'deathractor', 
        name: 'Deathractor', 
        price: 150000, 
        img: 'rec/motor/deathractor.png', 
        logo: 'rec/motor/deathractor.png',
        available: false,
        limited: true
    }
];

// --- Bundle Definitions ---
// These bundles offer multiple jets at a discount.
const BUNDLES = [
    {
        id: 'rookie_pack',
        name: 'Rookie Pack',
        // blue_streak, red_comet, shardship
        jetIds: ['blue_streak', 'red_comet', 'shardship'],
        price: 7000
    },
    {
        id: 'ace_pack',
        name: 'Ace Pack (-30% OFF)',
        // spiderjet, breadtime, sego
        jetIds: ['spiderjet', 'breadtime', 'sego'],
        price: 91000
    },
];


// Default jet ID (the starting jet for all players)
const DEFAULT_JET_ID = 'default';

// --- Export for use in HTML files ---
// Note: This file uses global scope, so these variables are automatically
// available in any HTML file that imports this script.