import SharedListPageActions from "@pageObjects/sharedList/actions";
import SharedListPageAssertions from "@pageObjects/sharedList/assertions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedListPageActions = new SharedListPageActions();
const sharedListPageAssertions = new SharedListPageAssertions();
const dataTransfer = new DataTransfer();

Given("A user was on the Shared List section", () => {
  sharedListPageActions.openSharedListSection();
});

When("The user drags item number 3 from left list", () => {
  sharedListPageActions.dragThirdItem(dataTransfer);
});

When("The user drops item number 3 to the right list", () => {
  sharedListPageActions.dropItem(dataTransfer);
});

Then("item number 3 should from left list be shown at the right list", () => {
  sharedListPageAssertions.checkItimDroped().checkItimContainsDroped("Item 3");
});
