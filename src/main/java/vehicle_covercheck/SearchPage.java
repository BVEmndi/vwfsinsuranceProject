package vehicle_covercheck;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by Dell on 24-06-2019.
 */
public class SearchPage extends BrowserFactory {



    @FindBy(xpath = "//input[@id='vehicleReg']")
    WebElement entervehicleid;

    @FindBy(name = "btnfind")
    WebElement Click_submit;

    public SearchPage() {

    }

    public void setEnterVehicleId(String keyword) {
        entervehicleid.clear();
        entervehicleid.sendKeys(keyword);
    }

    public void setClickButton() {
        Click_submit.click();
    }

    public void done() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", Click_submit);
        Click_submit.click();
    }

    public String getMessage() {
        return driver.findElement(By.tagName("body")).getText();
    }
}
