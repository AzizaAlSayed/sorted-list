class SharedListPageAssertions {
  checkItimDroped() {
    cy.get("#example2-right")
      .children()
      .eq(0)
      .invoke("attr", "draggable")
      .then((currentStatus) => {
        expect(currentStatus).to.eq(false);
      });
    return this;
  }

  checkItimContainsDroped(item: string, isContains = true) {
    cy.get("#example2-right")
      .children()
      .eq(0)
      .should(isContains ? "contain" : "not.contain", item);
    return this;
  }
}

export default SharedListPageAssertions;
