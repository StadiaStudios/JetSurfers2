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
        name: 'PILOT-XMAS 25', 
        price: 0, 
        img: 'rec/motor/default.png', 
        logo: 'rec/motor/default_logo.png',
        available: true,
        limited: false
    },
    { 
        id: 'blue_streak', 
        name: 'Blue Streak', 
        price: 500, 
        img: 'rec/motor/jet_blue.png', 
        logo: 'rec/motor/blue_streak_logo.png',
        available: true,
        limited: false
    },
    { 
        id: 'red_comet', 
        name: 'Nightwing', 
        price: 1000, 
        img: 'rec/motor/nightwing.png', 
        logo: 'rec/motor/nightwing_logo.png',
        available: true,
        limited: false
    },
    { 
        id: 'gold_wing', 
        name: 'Premium Jet', 
        price: 5000, 
        img: 'rec/motor/premium-jet.png', 
        logo: 'rec/motor/premium_logo.png',
        available: true,
        limited: false
    },
    { 
        id: 'punkin', 
        name: 'Punkin', 
        price: 10000, 
        img: 'rec/motor/punkin.png', 
        logo: 'rec/motor/punkin.png',
        available: true,
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
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'festive-star', 
        name: 'Festive Star', 
        price: 0, 
        img: 'rec/motor/festive-star.png', 
        logo: 'rec/motor/festive-star.png',
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'flake-tron', 
        name: 'Flake Tron', 
        price: 35000, 
        img: 'rec/motor/flake-tron.png', 
        logo: 'rec/motor/flake-tron.png',
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
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
        id: 'leaf', 
        name: 'Leaf', 
        price: 5000, 
        img: 'rec/motor/leaf.png', 
        logo: 'rec/motor/leaf.png',
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    },
    { 
        id: 'ghostleaf', 
        name: 'Ghost Leaf', 
        price: 2000, 
        img: 'rec/motor/ghost-leaf.png', 
        logo: 'rec/motor/ghost-leaf.png',
        available: true,   // Set to false when the event ends
        limited: true      // Marks it as a limited jet
    }
];

// Default jet ID (the starting jet for all players)
const DEFAULT_JET_ID = 'default';

// --- Export for use in HTML files ---
// Note: This file uses global scope, so these variables are automatically
// available in any HTML file that imports this script.
