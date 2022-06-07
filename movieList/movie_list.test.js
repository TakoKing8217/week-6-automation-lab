const { Builder, Capabilities, By } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5501/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test("I can make a movie", async () => {
  let searchBar = await driver.findElement(By.xpath("//input"));

  await searchBar.sendKeys("Speed Racer\n");

  await driver.sleep(2000);

  let strikeThrough = await driver.findElement(By.xpath("//ul/li/span"));

  await strikeThrough.click();

  let theAside = await driver.findElement(By.xpath("//aside"))

  

  await driver.sleep(2000);

  let deleteButton = await driver.findElement(By.xpath("//ul/li/button"));

  await deleteButton.click();

  await driver.sleep(2000);
});
