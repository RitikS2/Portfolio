// Filter projects by category
const projectFilter = document.getElementById("project-filter");
const projects = document.querySelectorAll(".project");

projectFilter.addEventListener("change", () => {
    const selectedCategory = projectFilter.value;
    
    projects.forEach((project) => {
        if (selectedCategory === "all" || project.classList.contains(selectedCategory)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
});
