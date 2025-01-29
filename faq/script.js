function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const emoji = button.querySelector('.emoji');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        emoji.style.transform = "rotate(0deg)";
    } else {
        answer.style.display = "block";
        emoji.style.transform = "rotate(180deg)";
    }
}
