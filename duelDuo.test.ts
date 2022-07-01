
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test(' game', async ()=> {
    await driver.findElement(By.xpath('//input')).sendKeys('new')
    await driver.findElement(By.xpath('//button')).click()
})

test('delete game', async() => {
    await driver.findElement(By.css('#New Game')).sendKeys('Delete')
    
})