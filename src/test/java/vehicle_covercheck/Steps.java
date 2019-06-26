package vehicle_covercheck;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * Created by Dell on 24-06-2019.
 */
public class Steps {
    WebDriver driver;
    SearchPage searchPage = new SearchPage();

    @Given("^User is the homepage$")
    public void user_is_the_homepage() throws Throwable {

    }

    @When("^User searches the vehicle exists by \"([^\"]*)\"$")
    public void user_searches_the_vehicle_exists_by(String arg1) throws Throwable {
        searchPage.setEnterVehicleId(arg1);
        searchPage.setClickButton();
    }

    @Then("^the result page should display the information \"([^\"]*)\"$")
    public void the_result_page_should_display_the_information(String message) throws Throwable {
        Thread.sleep(1000);
        Assert.assertTrue(searchPage.getMessage().contains(message));
    }

}
