import {Page , Locator} from "@playwright/test"

export class TestPage {
  constructor(page: Page) {
    this.page = page;
  }
  private page: Page;

  /**
   * @returns Page Title
   */
  public getPageTitle(): Locator {
    return this.page.locator("xpath=//h1");
  }
  /**
   * @returns Username Imput Field element
   */
  public getUserNameImp(): Locator {
    return this.page.locator("xpath=//input[@name='username']");
  }
  /**
   * @returns Password Input element
   */
  public getPasswordImp(): Locator {
    return this.page.locator('xpath=//input[@name="password"]');
  }
  /**
   * @returns TextArea Input element
   */
  public getTextAreaImp(): Locator {
    return this.page.locator('xpath=//textarea[@name="comments"]');
  }
  /**
   * @returns Check box 2 element
   */
  public getCheckBox2(): Locator {
    return this.page.locator('xpath=//input[@value="cb2"]');
  }
  /**
   * @returns Radio Button 1 element
   */
  public getRadioBtn1(): Locator {
    return this.page.locator('xpath=//input[@value="rd1"]');
  }
  /**
   * @returns Dropdown element
   */
  public getDropdown(): Locator {
    return this.page.locator('xpath=//select[@name="dropdown"]');
  }
  /**
   * @returns Submit Button element
   */
  public getSubmitBtn(): Locator {
    return this.page.locator('xpath=//input[@value="submit"]');
  }
  //--------------------------------------------------------------------------------------------------
  //Submitted Values
  /**
   * @returns Submitted Username element
   */
  public getUserNameSub(): Locator {
    return this.page.locator('xpath=//li[@id="_valueusername"]');
  }
  /**
   * @returns Submitted Password element
   */
  public getPasswordSub(): Locator {
    return this.page.locator('xpath=//li[@id="_valuepassword"]');
  }
  /**
   * @returns Submitted Text Area Comment element
   */
  public getTextAreaSub(): Locator {
    return this.page.locator('xpath=//li[@id="_valuecomments"]');
  }
  /**
   * @returns Submitted CheckBox 2 option element
   */
  public getCheckBox2Sub(): Locator {
    return this.page.locator('xpath=//li[@id="_valuecheckboxes0"]');
  }
  /**
   * @returns Submitted Radio Button 1 element
   */
  public getRadioBtn1Sub(): Locator {
    return this.page.locator('xpath=//li[@id="_valueradioval"]');
  }
  /**
   * @returns Submitted Dropdown option element
   */
  public getDropdownSub(): Locator {
    return this.page.locator('xpath=//li[@id="_valuedropdown"]');
  }
  /**
   * @returns Submitted element
   */
  public getSubmitSub(): Locator {
    return this.page.locator('xpath=//li[@id="_valuesubmitbutton"]');
  }
}
