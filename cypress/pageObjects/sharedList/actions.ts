class SharedListPageActions {
  openSharedListSection() {
    cy.visit("/#shared-lists");
    return this;
  }

  dragThirdItem(dataTransfer: DataTransfer) {
    cy.get("#example2-left").children().eq(2).trigger("dragstart", {
      dataTransfer,
    });
  }

  dropItem(dataTransfer: DataTransfer) {
    cy.get("#example2-right").trigger("drop", {
      dataTransfer,
    });
  }
}

export default SharedListPageActions;
