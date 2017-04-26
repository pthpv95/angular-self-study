import { Angular2SelfStudiedPage } from './app.po';

describe('angular2-self-studied App', function() {
  let page: Angular2SelfStudiedPage;

  beforeEach(() => {
    page = new Angular2SelfStudiedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
