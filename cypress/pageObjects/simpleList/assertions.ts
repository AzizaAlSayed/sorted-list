class SimpleListPageAssertions {
  checkSortedList() {
    let cellContents = [];
    cy.get("#example1")
      .children()
      .each((elements) => {
        cellContents.push(elements.text());
      })
      .then(() => cellContents)
      .then((cellContents) => {
        cy.wrap(cellContents.slice()).should("deep.eq", cellContents.sort());
      });
  }
}

export default SimpleListPageAssertions;
