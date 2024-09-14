// Get the form and resume container elements
var form = document.getElementById("resumeForm");
var resumeContainer = document.getElementById("resume");
var personalInfoSection = document.getElementById("personal-info");
var educationSection = document.getElementById("education-info");
var workExperienceSection = document.getElementById("work-experience-info");
var skillsSection = document.getElementById("skills-info");
// Listen to form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get input values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value.split(",");
    var experience = document.getElementById("experience").value.split(",");
    var skills = document.getElementById("skills").value.split(",");
    // Generate the Personal Information section
    personalInfoSection.innerHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n    ");
    // Generate the Education section
    educationSection.innerHTML = "\n        <h3>Education</h3>\n        <ul>".concat(education.map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join(""), "</ul>\n    ");
    // Generate the Work Experience section
    workExperienceSection.innerHTML = "\n        <h3>Work Experience</h3>\n        <ul>".concat(experience.map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join(""), "</ul>\n    ");
    // Generate the Skills section
    skillsSection.innerHTML = "\n        <h3>Skills</h3>\n        <ul>".concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "</ul>\n    ");
    // Show the resume container
    resumeContainer.classList.remove("hidden");
});
