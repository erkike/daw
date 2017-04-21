import { Fase4Page } from './app.po';

describe('fase4 App', () => {
  let page: Fase4Page;

  beforeEach(() => {
    page = new Fase4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
