// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const chrome = require('selenium-webdriver/chrome');
const screen = {
	width: 640,
	height: 480
};





describe('TESTE', function() {
	this.timeout(30000)
	let driver
	let vars

	beforeEach(async function() {
		driver = await new Builder().forBrowser('chrome')
			//.setChromeOptions(new chrome.Options().headless().windowSize(screen))
			.build()
		vars = {}
	})
	afterEach(async function() {
		await driver.quit();
	})

	
	it('TESTE', async function() {
		await driver.get("https://www3.cin.ufpe.br/br/")
		await driver.findElement(By.css(".fa-search")).click()
		await driver.findElement(By.name("term")).click()
		await driver.findElement(By.name("term")).sendKeys("Busca teste")
		await driver.findElement(By.name("term")).sendKeys(Key.ENTER)

	})
	

	it('TESTE DE RESPOSTA CORRETA DA TEMPERATURA', async function() {
		await driver.get("file:///home/perso/proj/exercicio-tdd-martonpss/public/index.html")
		await driver.findElement(By.css("#valor")).click()
		await driver.findElement(By.css("#valor")).sendKeys("50")
		await driver.findElement(By.css("#de")).click()
		await driver.findElement(By.css("#de")).sendKeys("C")
		await driver.findElement(By.css("#para")).click()
		await driver.findElement(By.css("#para")).sendKeys("F")
		await driver.findElement(By.css("#button")).click()
		assert.equal(await driver.findElement(By.css("#resultado")).getAttribute("textContent"), '122')
	})

})