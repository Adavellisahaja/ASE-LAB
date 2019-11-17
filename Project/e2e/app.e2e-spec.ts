import { BootstrapAngularPage } from './app.po';

describe('bootstrap-angular App', function() {
  let page: BootstrapAngularPage;

  beforeEach(() => {
    page = new BootstrapAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
