let homepage = require ('../pages/homepage');

describe('Demo Calculator Tests', function () {

  it('addition test', function () {
  
    homepage.get('https://juliemr.github.io/protractor-demo/');
  
    homepage.enterFirstNumber('4');
   
    homepage.enterSecondNumber('3');
  
    homepage.clickGo();
  
    homepage.verifyResult('7');
  
    browser.sleep(2000)
  
  });
});
