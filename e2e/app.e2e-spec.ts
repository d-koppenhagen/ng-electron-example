import { NgElectronExamplePage } from './app.po';

describe('ng-electron-example App', () => {
  let page: NgElectronExamplePage;

  beforeEach(() => {
    page = new NgElectronExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('elex works!');
  });
});
