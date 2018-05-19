import { FollowersPage } from './app.po';

describe('followers App', () => {
  let page: FollowersPage;

  beforeEach(() => {
    page = new FollowersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
