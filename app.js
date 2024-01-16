document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");

    // Sample project data
    const projects = [
        { name: "Project 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "project1.jpg" },
        { name: "Project 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "project2.jpg" },
        // Add more projects as needed
    ];

    // Render projects
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <img src="${project.image}" alt="${project.name}">
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectElement);
    });
});
