import { UrbanbirdPage } from './app.po';

describe('urbanbird App', () => {
  let page: UrbanbirdPage;

  beforeEach(() => {
    page = new UrbanbirdPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
