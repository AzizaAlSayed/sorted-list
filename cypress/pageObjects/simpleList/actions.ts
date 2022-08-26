class SimpleListPageActions {
  openSortableWebsite() {
    cy.visit("/");
    return this;
  }

  clickOnSimpleListLink() {
    cy.get("a[href='#simple-list']").click();
    return this;
  }
}

export default SimpleListPageActions;
