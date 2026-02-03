const fs = require('fs');
const path = require('path');

// 1. Read existing data.js
const dataJsPath = path.join(__dirname, 'src/app/data/data.js');
let dataJsContent = fs.readFileSync(dataJsPath, 'utf8');

// Load new data (semantic)
const newDataPath = path.join(__dirname, 'final_data_semantic.json');
const newData = JSON.parse(fs.readFileSync(newDataPath, 'utf8'));

// Parse old data safely
const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);
const scriptCode = dataJsContent.replace('export const categories =', 'categories =');
vm.runInContext(scriptCode, sandbox);
const oldCategories = sandbox.categories;

// Merge process
newData.forEach(newCat => {
    // Direct ID match now
    const targetCat = oldCategories.find(c => c.id === newCat.id);

    if (targetCat) {
        console.log(`Merging ${newCat.products.length} items into ${targetCat.name}`);
        newCat.products.forEach(p => {
            // Check for duplicate by Name
            const exists = targetCat.products.find(oldP => oldP.name === p.name);
            if (!exists) {
                targetCat.products.push({
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    image: p.image,
                    description: p.description
                });
            }
        });
    } else {
        // Should not happen if I mapped everything, but if so:
        console.log(`Adding new category ${newCat.name}`);
        oldCategories.push(newCat);
    }
});

// Re-generate the file content
const outputContent = `export const categories = ${JSON.stringify(oldCategories, null, 2)};`;

fs.writeFileSync(dataJsPath, outputContent);
console.log("Merged data saved to src/app/data/data.js");
