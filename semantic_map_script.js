const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'extracted_products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Categories in data.js
const categories = {
    'pellet-hammer': {
        name: "Pellet & Hammer Mill Components",
        id: "pellet-hammer",
        keywords: ["Pellet", "Hammer", "Beater", "Rotor"] // Prioritize over 'Mill' generic
    },
    'dies-punches': {
        name: "Dies & Punches",
        id: "dies-punches",
        keywords: ["Punch", "Die", "Mould"] // Check after Pellet to avoid identifying Pellet Mill Die as just Die
    },
    'grinding': {
        name: "Grinding & Spindle Repairs",
        id: "grinding",
        keywords: ["Grinding", "Spindle"]
    },
    'shafts-gears': {
        name: "Shafts, Gears & Bearings",
        id: "shafts-gears",
        keywords: ["Shaft", "Gear", "Spline", "Pinion", "Axle"]
    },
    'hydraulics': {
        name: "Hydraulics & Presses",
        id: "hydraulics",
        keywords: ["Hydraulic", "Press", "Piston", "Cylinder"]
    },
    'rollers-bushings': {
        name: "Rollers, Bushings & Conveyor Components",
        id: "rollers-bushings",
        keywords: ["Roller", "Bushing", "Bush", "Conveyor"]
    },
    'cnc-services': {
        name: "CNC / Job Work Services",
        id: "cnc-services",
        keywords: ["CNC", "VMC", "EDM", "Lathe", "Machining", "Milling", "Cutting", "Job Work"]
    },
    'misc': {
        name: "Miscellaneous / Other Machined Parts",
        id: "misc",
        keywords: []
    }
};

const grouped = {};
Object.keys(categories).forEach(k => grouped[k] = []);

products.forEach(p => {
    const name = p.prodname;
    const desc = p.description || "";
    
    let assigned = false;
    
    // Categorization Logic (Order matters!)
    // 1. Pellet/Hammer (Specific)
    if (match(name, categories['pellet-hammer'].keywords)) {
        addToCategory('pellet-hammer', p);
        return;
    }
    
    // 2. Grinding (Specific)
    if (match(name, categories['grinding'].keywords)) {
        addToCategory('grinding', p);
        return;
    }
    
    // 3. Dies/Punches (Specific, but AFTER Pellet 'Die')
    if (match(name, categories['dies-punches'].keywords) && !name.toLowerCase().includes("pellet")) {
        addToCategory('dies-punches', p);
        return;
    }
    
    // 4. Hydraulics
    if (match(name, categories['hydraulics'].keywords)) {
        addToCategory('hydraulics', p);
        return;
    }
    
    // 5. Shafts/Gears
    if (match(name, categories['shafts-gears'].keywords)) {
        addToCategory('shafts-gears', p);
        return;
    }
    
    // 6. Rollers
    if (match(name, categories['rollers-bushings'].keywords)) {
        addToCategory('rollers-bushings', p);
        return;
    }
    
    // 7. CNC (Broad catch-all for machining)
    if (match(name, categories['cnc-services'].keywords)) {
        addToCategory('cnc-services', p);
        return;
    }
    
    // 8. Misc
    addToCategory('misc', p);
});

function match(text, keywords) {
    return keywords.some(k => text.toLowerCase().includes(k.toLowerCase()));
}

function addToCategory(catKey, p) {
    grouped[catKey].push({
        id: p.proddispid.toString(),
        name: p.prodname,
        price: "Ask for Price",
        image: p.image || "/placeholder.svg",
        description: `High-quality ${p.prodname}.`
    });
}

// Transform to List
const finalCategories = Object.keys(grouped).filter(k => grouped[k].length > 0).map(k => {
    const def = categories[k];
    return {
        id: def.id,
        name: def.name,
        image: grouped[k][0]?.image || "/placeholder.svg", // Use first image
        description: `${def.name} and related products.`,
        products: grouped[k]
    };
});

const finalJsonPath = path.join(__dirname, 'final_data_semantic.json');
fs.writeFileSync(finalJsonPath, JSON.stringify(finalCategories, null, 2));

console.log("Semantically mapped data saved to final_data_semantic.json");
console.log("Summary:");
finalCategories.forEach(c => console.log(`- ${c.name}: ${c.products.length} products`));
