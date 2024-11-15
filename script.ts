document.addEventListener( 'DOMContentLoaded', () => {
    const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
    const skillsContent = document.querySelector('.skillsContent');

    if (toggleSkillsBtn && skillsContent) {
        toggleSkillsBtn.addEventListener('click', () => {
            skillsContent.classList.toggle('show');
        }
    );
   }
  }
);
