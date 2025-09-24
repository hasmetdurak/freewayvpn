const fs = require('fs');
const path = require('path');

const translationsFile = path.join(__dirname, '../src/utils/translations.ts');

// Read the current translations file
let content = fs.readFileSync(translationsFile, 'utf8');

// Fix missing commas before Brand sections
const patterns = [
  // Pattern: 'faq.answer117': '...' followed by newline and '// Brand'
  {
    regex: /('faq\.answer117': '[^']*')\s*\n\s*\/\/ Brand/g,
    replacement: "$1,\n    \n    // Brand"
  },
  // Pattern: 'faq.contactExperts': '...' followed by newline and '// Brand'
  {
    regex: /('faq\.contactExperts': '[^']*')\s*\n\s*\/\/ Brand/g,
    replacement: "$1,\n    \n    // Brand"
  },
  // Pattern: 'faq.relatedGuides': '...' followed by newline and '// Brand'
  {
    regex: /('faq\.relatedGuides': '[^']*')\s*\n\s*\/\/ Brand/g,
    replacement: "$1,\n    \n    // Brand"
  }
];

// Apply all patterns
patterns.forEach(pattern => {
  content = content.replace(pattern.regex, pattern.replacement);
});

// Write the updated content back to the file
fs.writeFileSync(translationsFile, content, 'utf8');
console.log('Missing commas fixed successfully!');
