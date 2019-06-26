package vehicle_covercheck;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

/**
 * Created by Dell on 24-06-2019.
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = ".",
         tags = "@1",
        format = { "json:target/cucumber.json","html:target/site/cucumber.pretty" })
public class RunTest {
    @BeforeClass
    public static void setUp()throws Throwable
    {
        new BrowserFactory().openBrowser();

    }
    @AfterClass
    public static void tearDown()

    {
        new BrowserFactory().closeBrowser();
    }
}
