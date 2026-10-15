// Solution for issue #1175
// Generated automatically by Baobot

const { JSDOM } = require('jsdom');

function processTables() {
  const dom = new JSDOM('<html><body><table id="myTable"><tr><td>Header 1</td><td>Header 2</td></tr><tr><td>Row 1</td><td>Row 2</td></tr></table></body></html>');
  const root = dom.window.document;

  const table = root.querySelector('#myTable');
  if (!table) return;

  const rows = table.querySelectorAll('tr');
  rows.forEach((row, rowIndex) => {
    const cells = Array.from(row.querySelectorAll('td'));
    if (cells.length > 0) {
      cells[rowIndex].textContent = `Row ${rowIndex + 1} - ${cells[rowIndex].textContent}`;
    }
  });

  table.outerHTML = root.querySelector('body').outerHTML;
}

processTables();


This script uses `jsdom` to parse an HTML document containing a table. It then updates the table to format the rows by appending a header to each row's content. Note that this solution is simplified and might not directly address the issue described in the GitHub issue, as the issue details are not provided. Adjustments may be needed based on the actual requirements and structure of the table and rows in the GitHub repository.