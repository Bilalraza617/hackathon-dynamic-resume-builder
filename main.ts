// Get the form and resume container elements
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeContainer = document.getElementById("resume") as HTMLDivElement;

const personalInfoSection = document.getElementById(
  "personal-info"
) as HTMLDivElement;
const educationSection = document.getElementById(
  "education-info"
) as HTMLDivElement;
const workExperienceSection = document.getElementById(
  "work-experience-info"
) as HTMLDivElement;
const skillsSection = document.getElementById("skills-info") as HTMLDivElement;

// Listen to form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get input values from the form
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value.split(",");
  const experience = (
    document.getElementById("experience") as HTMLTextAreaElement
  ).value.split(",");
  const skills = (
    document.getElementById("skills") as HTMLTextAreaElement
  ).value.split(",");

  // Generate the Personal Information section
  personalInfoSection.innerHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;

  // Generate the Education section
  educationSection.innerHTML = `
        <h3>Education</h3>
        <ul>${education.map((item) => `<li>${item.trim()}</li>`).join("")}</ul>
    `;

  // Generate the Work Experience section
  workExperienceSection.innerHTML = `
        <h3>Work Experience</h3>
        <ul>${experience.map((item) => `<li>${item.trim()}</li>`).join("")}</ul>
    `;

  // Generate the Skills section
  skillsSection.innerHTML = `
        <h3>Skills</h3>
        <ul>${skills.map((skill) => `<li>${skill.trim()}</li>`).join("")}</ul>
    `;

  // Show the resume container
  resumeContainer.classList.remove("hidden");
});
