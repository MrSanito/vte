const fs = require('fs');
const path = require('path');
// Removed cheerio dependency
// Actually, 'cheerio' might not be available. I'll use regex if needed, but let's try to infer from the text I see in the HTML first.

// Analyzing the HTML file content again...
// Line 527: <li ...><a href=".../cnc-job-work.html" ...>CNC Job Work</a><ul>...
// inside this ul, there are products with links like "...#26118687533" which matches 'proddispid' 26118687533.
// So, I can map products to categories by parsing the HTML structure:
// Category Name -> List of Product IDs.

// Let's write a script that parses the HTML to create a map of ProductID -> CategoryName
// Using regex to find the category sections and then the product links within them.

const htmlPath = path.join(__dirname, 'Foundation Bolt & Spindle Maintenance from Vadodara.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// The HTML has a structure like:
// <a href=".../CATEGORY-SLUG.html" ...>CATEGORY NAME</a>
//   <ul>
//     <li><a href="...#PRODUCTID">PRODUCT NAME</a></li>
//   </ul>

// Strategy:
// 1. Find the sidebar navigation section.
// 2. Extract Category Name and the list of Product IDs under it.
// 3. Merge this with our existing JSON data.

const categoryMap = {}; // ProductID -> CategoryName

// Regex to find "Categories" in the sidebar
// Looking at the provided HTML snippet (lines 527+):
// <a href=".../cnc-job-work.html" class="Fm_lh18 FM_Db">CNC Job Work</a><ul class="FM_p52"><li ...><a href="...#26118687533" ...>
// Pattern: 
// 1. Capture Category: <a href="[^"]+" class="Fm_lh18 FM_Db">([^<]+)</a>
// 2. Capture Products in the following <ul>: <a href="[^"]+#(\d+)"

// Better approach with plain strings manipulation since regex across lines is tricky without flags or good parser.
// I will assume the file is small enough to split by lines or blocks.
// Actually, the HTML is minified-ish in parts but has newlines.

const lines = htmlContent.split('\n');
let currentCategory = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for Category Header
    // <a href="..." class="Fm_lh18 FM_Db">Category Name</a>
    const catMatch = line.match(/class="Fm_lh18 FM_Db">([^<]+)<\/a>/);
    if (catMatch) {
        currentCategory = catMatch[1].trim();
        // console.log("Found Category:", currentCategory);
    }

    // Check for Product Link
    // <a href="...#26118687533" ...>
    if (currentCategory) {
        // Find all product IDs in this line (or subsequent lines until next category)
        // Since 'currentCategory' stays set until changed, this works if products follow immediately.
        // The structure seems to be nested <ul> for products under the category <a>.
        
        const prodMatches = line.matchAll(/href="[^"]+#(\d+)"/g);
        for (const match of prodMatches) {
            const prodId = match[1];
            categoryMap[prodId] = currentCategory;
        }
    }
}

// Now merge with products.json
const productsPath = path.join(__dirname, 'extracted_products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const enrichedProducts = products.map(p => {
    return {
        ...p,
        category: categoryMap[p.proddispid] || "Uncategorized"
    };
});

// Group by Category
const grouped = {};
enrichedProducts.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
});

// Output formatted data for src/app/data/data.js
// We need to convert this to the structure used in data.js
// const categories = [ { id: "slug", name: "Name", image: "...", products: [...] } ]

const finalCategories = Object.keys(grouped).map((catName, index) => {
    const prods = grouped[catName].map(p => ({
        id: p.proddispid.toString(),
        name: p.prodname,
        price: "Ask for Price", // Data doesn't have price easily accessible in JSON, default to this
        image: p.image || "/placeholder.svg", // Use direct URL for now
        description: `High-quality ${p.prodname}.`
    }));

    return {
        id: catName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: catName,
        image: prods[0]?.image || "/placeholder.svg", // Use first product image as category image
        description: `${catName} services and products.`,
        products: prods
    };
});

const finalJsonPath = path.join(__dirname, 'final_data.json');
fs.writeFileSync(finalJsonPath, JSON.stringify(finalCategories, null, 2));

console.log("Mapped and grouped data saved to final_data.json");
