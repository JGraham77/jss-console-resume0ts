var firstName = "Joshua";
var middleName = "Reynolds";
var lastName = "Graham";
var fullName = firstName + " " + middleName + " " + lastName;
var fullNameCaps = fullName.toUpperCase();
displayDescription(fullNameCaps, "(Aspiring) Full Stack Developer / Banker", "I like cats");
function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}
console.log("My Interests: ");
displayInterests("Video Games");
displayInterests("Hanging out with friends");
displayInterests("Cooking");
displayInterests("Watching TV");
displayInterests("Hiking");
function displayInterests(myInterest) {
    console.log("*  " + myInterest);
}
console.log("My Previous Experiences: ");
displayPosition("ServisFirst Bank", "Banker", "Helped clients with all banking needs");
displayPosition("Booster", "Program Specialist", "Put together programs for elemtary schools to help them fundraise");
displayPosition("Regions", "Teller", "Helped clients with their every day banking needs");
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ");
}
;
displaySkill("JavaScript", true);
displaySkill("Cooking", true);
displaySkill("Playing Saxophone", true);
displaySkill("Banking", false);
displaySkill("Git / GitHub", false);
function displaySkill(mySkill, bamBam) {
    if (bamBam == true) {
        console.log("*  BAM: " + mySkill);
    }
    else if (bamBam == false) {
        console.log("*  " + mySkill);
    }
    ;
}
