$(document).ready(function () {

    var patientJSON = {
        "resourceType": "Patient", //added ,
        "id": "xcda",
        "text": { // added {
            "status": "generated",
            "div": "\n      \n      <p>Henry Levin the 7th</p>\n    \n    </div>"
        },
        "identifier": [ // added :
            {
                "use": "usual",
                "type": {
                    "coding": [
                        {
                            "system": "htt://hl7.org/fhir/v2/0203", //added ,
                            "code": "MR"
                        }
                    ]
                },
                "system": "urn:oid:2.16.840.1.113883.19.5", //added ,
                "value": "12345",
                "active": "true", // added " "
                "name": [
                    {
                        "family": [
                            "Levin"
                        ], //added ,
                        "given": [
                            "Henry"
                        ]
                    }
                ], //added ,
                "gender": "male", //added "  removed line breaks
                "birthDate": "2020-09-24",       //added comma
                "managingOrganization": {
                    "reference": "Organization/2.16.840.1.113883.19.5",
                    "display": "University Health Network"
                },
                "conditions": [
                    "Diabetes",
                    "High blood pressure",
                    //added comma
                    "Asthma"
                ]
            }  //added }
        ]  //added ]
    };

    var generateHTML = function (patientJSON) {
        var patientJQ = $("#patient");
        var patientName = patientJSON.identifier[0].name[0].given[0] + " " + patientJSON.identifier[0].name[0].family[0];
        var OrganizationName = patientJSON.identifier[0].managingOrganization.display;
        var gender = patientJSON.identifier[0].gender;
        var numberOfConditions = patientJSON.identifier[0].conditions.length;
        var listOfCondition = patientJSON.identifier[0].conditions;
        patientJQ.append($("<p/>").text("Name of Patient: " + patientName));
        patientJQ.append($("<p/>").text("Organization name: " + OrganizationName));
        patientJQ.append($("<p/>").text("Gender: " + gender));
        patientJQ.append($("<p/>").text("Number of conditions: " + numberOfConditions));
        var conditionsDIV = $("<div/>").text("List of all conditions:");
        patientJQ.append(conditionsDIV);
        listOfCondition.forEach(function(condition){
            conditionsDIV.append($("<p/>").text("- "  + condition));
        });
    };
    generateHTML(patientJSON);
});