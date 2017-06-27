import { Ablink3Page } from './app.po';

describe('ablink3 App', () => {
  let page: Ablink3Page;

  beforeEach(() => {
    page = new Ablink3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
