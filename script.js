document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    var skillsContent = document.querySelector('.skillsContent');
    if (toggleSkillsBtn && skillsContent) {
        toggleSkillsBtn.addEventListener('click', function () {
            skillsContent.classList.toggle('show');
        });
    }
});
