import { PracticaDawPage } from './app.po';

describe('practica-daw App', function() {
  let page: PracticaDawPage;

  beforeEach(() => {
    page = new PracticaDawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
