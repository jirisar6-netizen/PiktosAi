const fs = require('fs');
const files = ['index.html', 'style.css', 'app.js', 'api.js', 'voice.js'];
let context = "Zde je aktuální stav mého projektu:\n\n";

files.forEach(file => {
  if (fs.existsSync(file)) {
    context += `--- SOUBOR: ${file} ---\n${fs.readFileSync(file, 'utf8')}\n\n`;
  }
});

fs.writeFileSync('project_context.txt', context);
console.log("Kontext uložen do project_context.txt - vlož ho do chatu!");
