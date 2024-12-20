document.addEventListener('DOMContentLoaded', () => {
    const mainPage = document.getElementById('main-page');
    const formContainer = document.querySelector('.form-container');
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const backButtons = document.querySelectorAll('.back-button');

    loginBtn.addEventListener('click', () => {
        showSection(loginSection);
    });

    signupBtn.addEventListener('click', () => {
        showSection(signupSection);
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideSections();
        });
    });

    function showSection(section) {
        mainPage.style.display = 'none';
        formContainer.style.display = 'block';
        section.classList.add('active');
    }

    function hideSections() {
        mainPage.style.display = 'flex';
        formContainer.style.display = 'none';
        loginSection.classList.remove('active');
        signupSection.classList.remove('active');
    }
});
