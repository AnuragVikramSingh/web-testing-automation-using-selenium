const webdriver = require('selenium-webdriver');
const { Builder, Capabilities } = webdriver
let capabilities = Capabilities.chrome();

describe("Test if AngularSampleApp home page's title is correct", () => {
    let driver;
    beforeAll(async () => {
        driver = new Builder()
            .usingServer('http://localhost:4444')
            .withCapabilities(capabilities)
            .build();
        await driver.get("http://localhost:4200");
    }, 30000);

    it('test', async () => {
        try {
            let title = (await driver.getTitle()).trim()
            expect(title).toEqual("AngularSampleApp");
        } catch (err) {
            throw err;
        }
    }, 35000);
    
    afterAll(async () => {
        await driver.quit();
    }, 40000);
});