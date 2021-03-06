$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/SearchFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Search",
  "description": "As a User\r\nI want to check whether cover of the vehicle exists\r\nSo that it is legally approved to go on roads",
  "id": "search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify whether a vehicle exists",
  "description": "",
  "id": "search;verify-whether-a-vehicle-exists",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User searches the vehicle exists by \"\u003cRegistration_Number\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result page should display the information \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "search;verify-whether-a-vehicle-exists;",
  "rows": [
    {
      "cells": [
        "Registration_Number",
        "Message"
      ],
      "line": 15,
      "id": "search;verify-whether-a-vehicle-exists;;1"
    },
    {
      "cells": [
        "OV12UYY",
        "Result for : OV12UYY"
      ],
      "line": 16,
      "id": "search;verify-whether-a-vehicle-exists;;2"
    },
    {
      "cells": [
        "OV120YY",
        "Sorry record not found"
      ],
      "line": 17,
      "id": "search;verify-whether-a-vehicle-exists;;3"
    },
    {
      "cells": [
        ")(\u0026)\u0026)",
        "Please enter a valid car registration"
      ],
      "line": 18,
      "id": "search;verify-whether-a-vehicle-exists;;4"
    },
    {
      "cells": [
        "",
        "Please enter a valid car registration"
      ],
      "line": 19,
      "id": "search;verify-whether-a-vehicle-exists;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify whether a vehicle exists",
  "description": "",
  "id": "search;verify-whether-a-vehicle-exists;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User searches the vehicle exists by \"OV12UYY\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result page should display the information \"Result for : OV12UYY\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_the_homepage()"
});
formatter.result({
  "duration": 2350351429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OV12UYY",
      "offset": 37
    }
  ],
  "location": "Steps.user_searches_the_vehicle_exists_by(String)"
});
formatter.result({
  "duration": 286871023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Result for : OV12UYY",
      "offset": 48
    }
  ],
  "location": "Steps.the_result_page_should_display_the_information(String)"
});
formatter.result({
  "duration": 1063493953,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify whether a vehicle exists",
  "description": "",
  "id": "search;verify-whether-a-vehicle-exists;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User searches the vehicle exists by \"OV120YY\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result page should display the information \"Sorry record not found\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_the_homepage()"
});
formatter.result({
  "duration": 153946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OV120YY",
      "offset": 37
    }
  ],
  "location": "Steps.user_searches_the_vehicle_exists_by(String)"
});
formatter.result({
  "duration": 131992182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry record not found",
      "offset": 48
    }
  ],
  "location": "Steps.the_result_page_should_display_the_information(String)"
});
formatter.result({
  "duration": 1123656922,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify whether a vehicle exists",
  "description": "",
  "id": "search;verify-whether-a-vehicle-exists;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User searches the vehicle exists by \")(\u0026)\u0026)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result page should display the information \"Please enter a valid car registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_the_homepage()"
});
formatter.result({
  "duration": 257398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": ")(\u0026)\u0026)",
      "offset": 37
    }
  ],
  "location": "Steps.user_searches_the_vehicle_exists_by(String)"
});
formatter.result({
  "duration": 138976821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid car registration",
      "offset": 48
    }
  ],
  "location": "Steps.the_result_page_should_display_the_information(String)"
});
formatter.result({
  "duration": 1041842969,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify whether a vehicle exists",
  "description": "",
  "id": "search;verify-whether-a-vehicle-exists;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User searches the vehicle exists by \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the result page should display the information \"Please enter a valid car registration\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_the_homepage()"
});
formatter.result({
  "duration": 286956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "Steps.user_searches_the_vehicle_exists_by(String)"
});
formatter.result({
  "duration": 121151501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid car registration",
      "offset": 48
    }
  ],
  "location": "Steps.the_result_page_should_display_the_information(String)"
});
formatter.result({
  "duration": 1044896849,
  "status": "passed"
});
});