document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById("content");

    const chapters = [
        {
            title: "Introduction to JavaScript",
            description: "JavaScript is a powerful language used for web development.",
            resources: [
                { title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
                { title: "JavaScript.info", url: "https://javascript.info/" }
            ]
        },
        // Add other chapters here following the same structure
    ];

    chapters.forEach(chapter => {
        const chapterElement = document.createElement("div");
        chapterElement.innerHTML = <h2>${chapter.title}</h2><p>${chapter.description}</p>;
        chapter.resources.forEach(resource => {
            chapterElement.innerHTML += <a href="${resource.url}" target="_blank">${resource.title}</a><br>;
        });
        contentDiv.appendChild(chapterElement);
    });
});
