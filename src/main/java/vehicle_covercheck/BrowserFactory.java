package vehicle_covercheck;

import cucumber.api.Scenario;
import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.FirefoxDriverManager;
import io.github.bonigarcia.wdm.InternetExplorerDriverManager;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

/**
 * Created by Dell on 24-06-2019.
 */
public class BrowserFactory {

    public static WebDriver driver;
    org.apache.log4j.Logger logger = Logger.getLogger("BrowserFactory");

    public BrowserFactory() {
        PageFactory.initElements(driver, this);
    }

    public void openBrowser() throws Throwable {
        Properties properties = new Properties();
        FileInputStream fileInputStream = new FileInputStream("config.properties");
        properties.load(fileInputStream);
        String URL = properties.getProperty("url");
        String BROWSER = properties.getProperty("browser");
        WebDriverManager.chromedriver().setup();
        WebDriverManager.firefoxdriver().setup();
        WebDriverManager.iedriver().setup();

        if (BROWSER.equals("Firefox")) {
            driver = new FirefoxDriver();
            System.out.println("Firefox Browser is opened");
            logger.info("Firefox Browser is opened");

        } else if (BROWSER.equals("Chrome")) {
            driver = new ChromeDriver();
            logger.info("Chrome browser is opened");
        }
        driver.get(URL);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        System.out.println("The Title of the application  : " + driver.getTitle());
        logger.info("the title is printed");
    }

    public void takeSceenShotMethod(Scenario scenario) {
        if (scenario.isFailed()) {
            System.out.println("Scenario failed");
            File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            try {
                FileUtils.copyFile(scrFile, new File("screenshot.png"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void closeBrowser() {
        System.out.println("the browser is closed");
        driver.quit();
    }
}