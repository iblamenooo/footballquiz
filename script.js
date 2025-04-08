function welcomeMessage() {
    alert("Welcome to the Football Knowledge Quiz! Get ready to test your skills ⚽🏆");
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.quiz-img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.target.style.transform = "scale(1.1) rotate(2deg)";
            setTimeout(() => {
                e.target.style.transform = "scale(1) rotate(0deg)";
            }, 300);
        });
    });
});
