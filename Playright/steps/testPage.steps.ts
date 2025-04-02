import { expect, test } from "@playwright/test";
import { TestPage } from "../pages/testPage";

export default class TestPageSteps {
  constructor(testPage: TestPage) {
    this.testPage = testPage;
  }
  private testPage: TestPage;

  //Steps------------------------------------------------------------------------
  async verifyTestPageTitle() {
    await test.step(`Verify Test Page Title`, async () => {
      await expect(this.testPage.getPageTitle()).toHaveText("Basic HTML Form Example");
    });
  }

  async verifyUserNameImpIsVisible() {
    await test.step(`Verify Username Field Is Visible`, async () => {
      await expect(this.testPage.getUserNameImp()).toBeVisible();
    });
  }

  async fillUserNameImp(userName: string) {
    await test.step(`Fill Username Field with : ${userName}`, async () => {
      await this.testPage.getUserNameImp().fill(userName);
    });
  }

  async verifyUserNameImpContainsValue(userName: string) {
    await test.step(`Verify UserName Field Contains Value: ${userName}`, async () => {
      await expect(this.testPage.getUserNameImp()).toHaveValue(userName);
    });
  }
  async verifyPasswordImpIsVisible() {
    await test.step(`Verify Password Field Is Visible`, async () => {
      await expect(this.testPage.getPasswordImp()).toBeVisible();
    });
  }
  async fillPasswordImp(password: string) {
    await test.step(`Fill Password Field with : ${password}`, async () => {
      await this.testPage.getPasswordImp().fill(password);
    });
  }
  async verifyPasswordImpContainsValue(password: string) {
    await test.step(`Verify Password Field Contains Value: ${password}`, async () => {
      await expect(this.testPage.getPasswordImp()).toHaveValue(password);
    });
  }
  async verifyTextAreaImpIsVisible() {
    await test.step(`Verify TextArea Is Visible`, async () => {
      await expect(this.testPage.getTextAreaImp()).toBeVisible();
    });
  }
  async fillTextAreaImp(freetext: string) {
    await test.step(`Fill TextArea with : ${freetext}`, async () => {
      await this.testPage.getTextAreaImp().fill(freetext);
    });
  }
  async verifyTextAreaImpContainsValue(freetext: string) {
    await test.step(`Verify TextArea Contains Value: ${freetext}`, async () => {
      await expect(this.testPage.getTextAreaImp()).toHaveValue(freetext);
    });
  }
  async verifyCheckBox2IsVisible() {
    await test.step(`Verify CheckBox2 Is Visible`, async () => {
      await expect(this.testPage.getCheckBox2()).toBeVisible();
    });
  }

  async checkCheckBox2() {
    await test.step(`Check The CheckBox2`, async () => {
      await this.testPage.getCheckBox2().check();
    });
  }

  async verifyCheckBox2IsChecked() {
    await test.step(`Verify CheckBox2 Is Checked`, async () => {
      await expect(this.testPage.getCheckBox2()).toBeChecked();
    });
  }
  async verifyRadioBtn1IsVisible() {
    await test.step(`Verify RadioBtn1 Is Visible`, async () => {
      await expect(this.testPage.getRadioBtn1()).toBeVisible();
    });
  }

  async checkRadioBtn1() {
    await test.step(`Check The RadioBtn1`, async () => {
      await this.testPage.getRadioBtn1().check();
    });
  }

  async verifyRadioBtn1IsChecked() {
    await test.step(`Verify RadioBtn1 Is Checked`, async () => {
      await expect(this.testPage.getRadioBtn1()).toBeChecked();
    });
  }
  async verifyDropDownIsVisible() {
    await test.step(`Verify Dropdown Is Visible`, async () => {
      await expect(this.testPage.getDropdown()).toBeVisible();
    });
  }

  async setDropDownValue(ddOption: string) {
    await test.step(`Set Dropdown Option to ${ddOption}`, async () => {
      await this.testPage.getDropdown().selectOption(ddOption);
    });
  }

  async verifyDropDownContainsValue(ddOption: string) {
    await test.step(`Verify Dropdown Option is: ${ddOption}`, async () => {
      await expect(this.testPage.getDropdown()).toHaveValue("dd2");
    });
  }
  async verifySubmitBtnIsVisible() {
    await test.step(`Verify Submit Button Is Visible`, async () => {
      await expect(this.testPage.getSubmitBtn()).toBeVisible();
    });
  }

  async clickSubmitBtn() {
    await test.step(`Click Submit Button`, async () => {
      await this.testPage.getSubmitBtn().click();
    });
  }

  async verifySubmittedValues(userName: string, password: string, freetext: string, checkBox2: string, radioBtn1: string, dropdown: string, submited: string) {
    await test.step(`verify Submitted Values are: ${userName}, ${password}, ${freetext}, ${freetext}, ${checkBox2}, ${radioBtn1}, ${dropdown}, ${submited},`, async () => {
      await expect.soft(this.testPage.getUserNameSub()).toHaveText(userName);
      await expect.soft(this.testPage.getPasswordSub()).toHaveText(password);
      await expect.soft(this.testPage.getTextAreaSub()).toHaveText(freetext);
      await expect.soft(this.testPage.getCheckBox2Sub()).toHaveText(checkBox2);
      await expect.soft(this.testPage.getRadioBtn1Sub()).toHaveText(radioBtn1);
      await expect.soft(this.testPage.getDropdownSub()).toHaveText(dropdown);
      await expect.soft(this.testPage.getSubmitSub()).toHaveText(submited);
    });
  }
}
