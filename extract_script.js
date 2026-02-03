const fs = require('fs');
const path = require('path');

// 1. Read the HTML file
const htmlPath = path.join(__dirname, 'Foundation Bolt & Spindle Maintenance from Vadodara.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 2. Extract the JSON string
// Looking for: var top_prd = '[{...}]';
// We'll use a regex to capture the content inside the single quotes
const regex = /top_prd\s*=\s*'(\[.*?\])';/;
const match = htmlContent.match(regex);

if (!match) {
    console.error("Could not find top_prd JSON data in the HTML file.");
    process.exit(1);
}

// 3. Parse the JSON
let rawData;
try {
    // The JSON string in the HTML is escaped (e.g., https:\/\/), so JSON.parse should handle it
    rawData = JSON.parse(match[1]);
} catch (e) {
    console.error("Failed to parse extracted JSON:", e);
    process.exit(1);
}

// 4. Transform Data
// Group by Category (mcatId or infer from catid - wait, the JSON has 'catid' and 'mcatId', but no category NAME in this array)
// We might need to look elsewhere for Category Names or just list them all.
// Actually, let's look at the structure: 
// { "prodname": "...", "proddispid": ..., "image": "...", "catid": "..." }

// The HTML file had sidebar links mapping category names to URLs/IDs, but 'top_prd' doesn't have category names.
// However, we can group them first and see what we have. 
// OR, we can try to map 'mcatId' to a name if we can find that mapping in the HTML.
// Let's just dump the raw data first to see what we have.

const outputPath = path.join(__dirname, 'extracted_products.json');
fs.writeFileSync(outputPath, JSON.stringify(rawData, null, 2));

console.log(`Successfully extracted ${rawData.length} products to ${outputPath}`);
