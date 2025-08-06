// Employment history data using the STAR method
const jobs = [
  {
    role: "Cloud Support Engineer (Remote)",
    company: "AzureTech Global Solutions, UAE",
    duration: "Jan 2024 – Present",
    star: `
    • Situation: Company migrating 20+ legacy apps to AWS.<br>
    • Task: Migrate infrastructure and improve uptime.<br>
    • Action: Deployed VPC, EC2, RDS, and monitoring with Lambda.<br>
    • Result: Achieved 99.99% uptime with automated backups and alerts.
    `
  },
  {
    role: "DevOps Intern (Remote)",
    company: "TechNova Solutions, Australia",
    duration: "May 2023 – Dec 2023",
    star: `
    • Situation: Development delays due to manual deployment.<br>
    • Task: Automate CI/CD and cloud provisioning.<br>
    • Action: Built pipelines with GitHub Actions and Terraform.<br>
    • Result: Deployment time cut by 40%, improved team velocity.
    `
  }
];

// Render timeline
const timeline = document.getElementById("timeline");

jobs.forEach((job, index) => {
  const div = document.createElement("div");
  div.classList.add("timeline-item");
  div.innerHTML = `
    <strong>${job.role}</strong><br>
    <em>${job.company}</em> <br>
    <small>${job.duration}</small><br><br>
    <span class="star-details" style="display:none;">${job.star}</span>
  `;

  div.addEventListener("click", () => {
    const starDetails = div.querySelector(".star-details");
    const isVisible = starDetails.style.display === "block";
    starDetails.style.display = isVisible ? "none" : "block";
  });

  timeline.appendChild(div);
});
