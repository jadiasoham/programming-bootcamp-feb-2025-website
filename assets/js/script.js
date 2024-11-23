// Toggle syllabus visibility
document.getElementById("toggle-syllabus").addEventListener("click", function () {
    const syllabusContent = document.getElementById("syllabus-content");
    syllabusContent.style.display = syllabusContent.style.display === "none" ? "block" : "none";

    if (syllabusContent.style.display === "block") {
        fetchSyllabus();
    }
});

// Toggle FAQ visibility
document.getElementById("toggle-faq").addEventListener("click", function () {
    const faqContent = document.getElementById("faq-content");
    faqContent.style.display = faqContent.style.display === "none" ? "block" : "none";

    if (faqContent.style.display === "block") {
        fetchFAQs();
    }
});

// Fetch and populate syllabus
function fetchSyllabus() {
    fetch('data/syllabus.json')
        .then(response => response.json())
        .then(data => {
            const syllabusContent = document.getElementById("syllabus-content");
            syllabusContent.innerHTML = data.syllabus.map(item => `<p>${item}</p>`).join('');
        })
        .catch(error => console.error('Error fetching syllabus:', error));
}

// Fetch and populate FAQs
function fetchFAQs() {
    fetch('data/faq.json')
        .then(response => response.json())
        .then(data => {
            const faqContent = document.getElementById("faq-content");
            faqContent.innerHTML = data.faqs.map(faq => `
                <div>
                    <strong>Q: ${faq.question}</strong>
                    <p>A: ${faq.answer}</p>
                </div>
            `).join('');
        })
        .catch(error => console.error('Error fetching FAQs:', error));
}

// Register button functionality
document.getElementById("register-button").addEventListener("click", function () {
    window.location.href = "https://example.com/register"; // Replace with actual registration link
});
