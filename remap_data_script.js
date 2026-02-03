const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'Foundation Bolt & Spindle Maintenance from Vadodara.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// We need to parse the file linearly to track which category we are currently in.
// We will look for two matching patterns:
// 1. Category Header: <a href="..." class="Fm_lh18 FM_Db">CATEGORY NAME</a>
// 2. Product Link: <a href="...#PRODUCTID"

const categoryRegex = /class="Fm_lh18 FM_Db">([^<]+)<\/a>/g;
const productRegex = /href="[^"]+#(\d+)"/g;

// We will collect all matches with their indices.
const events = [];

let match;
while ((match = categoryRegex.exec(htmlContent)) !== null) {
    events.push({
        type: 'category',
        index: match.index,
        value: match[1].trim()
    });
}

while ((match = productRegex.exec(htmlContent)) !== null) {
    events.push({
        type: 'product',
        index: match.index,
        value: match[1] // The Product ID
    });
}

// Sort events by appearance in the file
events.sort((a, b) => a.index - b.index);

const categoryMap = {}; // ProductID -> CategoryName
let currentCategory = "Uncategorized";

events.forEach(event => {
    if (event.type === 'category') {
        currentCategory = event.value;
    } else if (event.type === 'product') {
        categoryMap[event.value] = currentCategory;
    }
});

console.log("Found bindings for " + Object.keys(categoryMap).length + " products.");

// Now merge with the raw product data
const productsPath = path.join(__dirname, 'extracted_products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const grouped = {};

products.forEach(p => {
    const catName = categoryMap[p.proddispid] || "Uncategorized";
    if (!grouped[catName]) grouped[catName] = [];
    grouped[catName].push({
        id: p.proddispid.toString(),
        name: p.prodname,
        price: "Ask for Price", 
        image: p.image || "/placeholder.svg",
        description: `High-quality ${p.prodname}.`
    });
});

// Convert to final array structure & generate IDs from names
const finalCategories = Object.keys(grouped).map(catName => {
    // Improve Slug Generation
    const slug = catName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    return {
        id: slug,
        name: catName,
        image: grouped[catName][0]?.image || "/placeholder.svg",
        description: `${catName} services and products.`,
        products: grouped[catName]
    };
});

const finalJsonPath = path.join(__dirname, 'final_data.json');
fs.writeFileSync(finalJsonPath, JSON.stringify(finalCategories, null, 2));

console.log("Correctly mapped data saved to final_data.json");
