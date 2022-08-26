import SimpleListPageActions from "@pageObjects/simpleList/actions";
import SimpleListPageAssertions from "@pageObjects/simpleList/assertions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const simpleListPageActions = new SimpleListPageActions();
const simpleListPageAssertions = new SimpleListPageAssertions();

Given("A user was on Sortable website", () => {
  simpleListPageActions.openSortableWebsite();
});

When("The user clicks on the Simple List section", () => {
  simpleListPageActions.clickOnSimpleListLink();
});

Then("A sorted list should be shown", () => {
  simpleListPageAssertions.checkSortedList();
});
