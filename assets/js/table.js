const gridTableCells = document.querySelectorAll('.grid-table > div');

gridTableCells.forEach((cell) => {
  const orderNum = cell.getAttribute('order');
  (orderNum % 2 !== 0) && (cell.className = '--is-striped');
});