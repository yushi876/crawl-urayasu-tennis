var casper = require('casper').create();

casper.start(); //開始

casper.open("https://s-yoyaku.city.urayasu.chiba.jp/cultos/reserve/gin_menu"); //URLを開く

// function sendKeys_CtrlA(casper) {
//   casper.sendKeys("a", {modifier: "alt"}); // "ctrl" on windows
// }

/*　実行したいステップをthenで追加する　*/
casper.then(function(){
    this.echo(this.getCurrentUrl()); //thisはcasperインスタンスを指す／ecoでハイライト
  // this.evaluate(function(){
    this.capture('snap1.png', { top: 50, left: 50, width: 800,height: 600 });

    this.click('INPUT[alt="多機能操作"]');
    this.waitForUrl(/\/cultos\/reserve\/gml_init/);
  // })
});

casper.then(function() {
    this.capture('snap2.png', { top: 50, left: 50, width: 800,height: 600 });
    this.click('dl#local-navigation > dd > ul > li:nth-child(1) > a', 10, 10);
    this.waitForUrl(/\/cultos\/reserve\/gml_z_group_sel_1/);
      // this.evaluate(function(){
    this.echo(this.getCurrentUrl()); //thisはcasperインスタンスを指す／ecoでハイライト
  // })
});

casper.then(function() {
  this.click('form[name="selBunrui1"] select', 10, 10);
  this.click('form[name="selBunrui1"] input[value="確定"]', 10, 10);
  this.wait(1000);
});
casper.then(function() {
  this.click('form[name="selBunrui2"] select', 10, 25);
  this.click('form[name="selBunrui2"] input[value="確定"]', 10, 10);
  this.wait(1000);
});
casper.then(function() {
  this.click('form[name="selForm_1"] select[name="riyosmk"]', 10, 10);
  this.capture('snap3.png', { top: 100, left: 80, width: 800,height: 1200 });
  this.wait(1000);
});

casper.then(function() {
  this.click('form[name="selForm_1"] select[name="riyosmk"]', 10, 25);
  casper.page.sendEvent("keypress", casper.page.event.key.Down);
  casper.page.sendEvent("keypress", casper.page.event.key.Enter);
  this.click('form[name="selForm_1"] input[value="確定"]', 10, 10);
  this.capture('snap4.png', { top: 100, left: 80, width: 800,height: 1200 });
  this.wait(1000);
});
casper.then(function() {
  this.click('form[name="basyoForm_3"] select[name="g_basyonm"]', 10, 10);
  for (var i = 0; i < 8; i++)
    casper.page.sendEvent("keypress", casper.page.event.key.Down, null, null, 0x02000000);
  this.click('form[name="basyoForm_3"] input[value="確定"]', 10, 10);
  this.wait(1000);
});
casper.then(function() {
  this.click('form[name="heyaform"] select[name="g_heyacd"]', 10, 10);
  for (var i = 0; i < 30; i++)
    casper.page.sendEvent("keypress", casper.page.event.key.Down, null, null, 0x02000000);
  this.click('form[name="heyaform"] input[value="確定"]', 10, 10);
  this.wait(1000);
  this.capture('snap5.png', { top: 400, left: 80, width: 800,height: 1200 });
});
casper.then(function() {
  this.click('form[name="formDate"] input[onclick="clickYobi(0)"]', 10, 10);
  this.click('form[name="formDate"] input[onclick="clickYobi(5)"]', 10, 10);
  this.click('form[name="formDate"] input[onclick="clickYobi(6)"]', 10, 10);
  this.click('form[name="formDate"] input[value="確定"]', 10, 10);
  this.wait(1000);
  // })
});
casper.then(function() {
  this.capture('snap6.png', { top: 100, left: 80, width: 800,height: 1700 });
  this.click('input[id="btnOK"]', 50, 10);
  this.waitForUrl(/\/cultos\/reserve\/gml_z_datetime_display/);
});
casper.then(function() {
  this.capture('snap7.png', { top: 100, left: 80, width: 800,height: 600 });
  this.captureSelector('result.png', 'div#contents');
});
// casper.then(function() {
//   this.echo(this.click('#local-navigation > dd > ul > li:nth-child(1) > a'));
// });




casper.run(); //実行
