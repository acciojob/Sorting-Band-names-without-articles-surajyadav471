//your code here
const cleanedNames = bandNames.map(name => name.replace(/^(a |an |the )/i, ''));

  // Sort the cleaned names array in lexicographic order
  const sortedNames = cleanedNames.sort((a, b) => a.localeCompare(b));

  // Generate the HTML string with the sorted band names
  let html = '<ul id="band">';
  sortedNames.forEach(name => {
    html += `<li>${name}</li>`;
  });
  html += '</ul>';

  return html;
}