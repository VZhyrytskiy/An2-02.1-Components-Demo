import { TaskAnswer2Page } from './app.po';

describe('task-answer2 App', function() {
  let page: TaskAnswer2Page;

  beforeEach(() => {
    page = new TaskAnswer2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
