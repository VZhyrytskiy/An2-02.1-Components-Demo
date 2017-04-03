import { V4Page } from './app.po';

describe('v4 App', () => {
  let page: V4Page;

  beforeEach(() => {
    page = new V4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
