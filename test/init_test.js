Feature('ProjectInitTest');

Scenario('프로젝트 실행 후 첫 화면을 확인할 수 있다.', (I) => {
  const testMessage = 'Hello, HAE Sign';
  const accessToken = 'testToken';

  I.amOnPage('/');

  I.see(testMessage);
  I.see(accessToken);
});
