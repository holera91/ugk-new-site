// Проста функція для перевірки форми розрахунку вартості
/*document.getElementById("calcForm").addEventListener("submit", function (e) {
    let workType = document.querySelector('input[name="workType"]:checked');
    if (!workType) {
        alert("Будь ласка, виберіть тип роботи.");
        e.preventDefault();
    }
}); */
document.addEventListener("DOMContentLoaded", function () {
    function loadTemplate(id, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error(`Помилка завантаження ${url}:`, error));
    }

    loadTemplate("header", "../includes/header.html");
    loadTemplate("footer", "../includes/footer.html");
});
