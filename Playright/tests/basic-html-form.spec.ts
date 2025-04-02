import { test, expect } from "@playwright/test";
import TestPageSteps from "../steps/testPage.steps";
import { TestPage } from "../pages/testPage";

let testPage: TestPage;
let testPageSteps: TestPageSteps;

test.beforeEach("Navigate to the home page", async ({ page }) => {
  testPage = new TestPage(page);
  testPageSteps = new TestPageSteps(testPage);
  await page.goto(process.env.TEST_URL as string);
});

test.afterEach("Close the Browser", async ({ page }) => {
  await page.close();
});

test("Has h1 title", async ({}) => {
  await testPageSteps.verifyTestPageTitle();
});

test("Test Username field", async ({}) => {
  await testPageSteps.verifyUserNameImpIsVisible();
  await testPageSteps.fillUserNameImp("TestUser");
  await testPageSteps.verifyUserNameImpContainsValue("TestUser");
});

test("Test Password field", async ({}) => {
  await testPageSteps.verifyPasswordImpIsVisible();
  await testPageSteps.fillPasswordImp("MyPassword");
  await testPageSteps.verifyPasswordImpContainsValue("MyPassword");
});

test("Test Checkbox2 selection", async ({}) => {
  await testPageSteps.verifyCheckBox2IsVisible();
  await testPageSteps.checkCheckBox2();
  await testPageSteps.verifyCheckBox2IsChecked();
});

test("Test Radio button selection", async ({}) => {
  await testPageSteps.verifyRadioBtn1IsVisible();
  await testPageSteps.checkRadioBtn1();
  await testPageSteps.verifyRadioBtn1IsChecked();
});

test("Select dropdown option", async ({}) => {
  await testPageSteps.verifyDropDownIsVisible();
  await testPageSteps.setDropDownValue("dd2");
  await testPageSteps.verifyDropDownContainsValue("dd2");
});

test("Complete the Submit Form, Submit it And Verify all submited info", async ({}) => {
  await testPageSteps.fillUserNameImp("FulltestUser");
  await testPageSteps.fillPasswordImp("MyPassword");
  await testPageSteps.fillTextAreaImp("This is my Comment in the TextArea");
  await testPageSteps.checkCheckBox2();
  await testPageSteps.checkRadioBtn1();
  await testPageSteps.setDropDownValue("dd2");
  await testPageSteps.clickSubmitBtn();
  await testPageSteps.verifySubmittedValues("FulltestUser", "MyPassword", "This is my Comment in the TextArea", "cb2", "rd1", "dd2", "submit");
});
