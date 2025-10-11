document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginErrorMessage = document.getElementById('loginErrorMessage');
    const registerErrorMessage = document.getElementById('registerErrorMessage');
    const registerSuccessMessage = document.getElementById('registerSuccessMessage');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const authPage = document.getElementById('authPage');
    const appContainer = document.getElementById('appContainer');
    const logoutBtn = document.getElementById('logoutBtn');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const showRecovery = document.getElementById('showRecovery');
    const loginFormContainer = document.getElementById('loginFormContainer');
    const registerFormContainer = document.getElementById('registerFormContainer');
    const recoveryFormContainer = document.getElementById('recoveryFormContainer');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    
    const addUserModal = document.getElementById('addUserModal');
    const addUserBtn = document.getElementById('addUserBtn');
    const closeUserModal = document.getElementById('closeUserModal');
    const cancelUserBtn = document.getElementById('cancelUserBtn');
    const saveUserBtn = document.getElementById('saveUserBtn');
    const addUserForm = document.getElementById('addUserForm');

   
    const recoveryStep1 = document.getElementById('recoveryStep1');
    const recoveryStep2 = document.getElementById('recoveryStep2');
    const recoveryStep3 = document.getElementById('recoveryStep3');
    const sendCodeButton = document.getElementById('sendCodeButton');
    const verifyCodeButton = document.getElementById('verifyCodeButton');
    const resetPasswordButton = document.getElementById('resetPasswordButton');
    const recoveryErrorMessage = document.getElementById('recoveryErrorMessage');
    const recoverySuccessMessage = document.getElementById('recoverySuccessMessage');
    const resendCode = document.getElementById('resendCode');
    const resendCodeContainer = document.getElementById('resendCodeContainer');
    const backToEmailStep = document.getElementById('backToEmailStep');
    const backToCodeStep = document.getElementById('backToCodeStep');
    const backToLoginFromRecovery = document.getElementById('backToLoginFromRecovery');
    const toggleNewPassword = document.getElementById('toggleNewPassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    
    
    const codeInputs = document.querySelectorAll('.code-input');

    
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🔒';
    });
    
    
    function showLoading(button) {
        button.classList.add('loading');
        loadingOverlay.style.display = 'flex';
    }
    
    
    function hideLoading(button) {
        button.classList.remove('loading');
        loadingOverlay.style.display = 'none';
    }
    
    
    function showLoginForm() {
        loginFormContainer.classList.add('active');
        registerFormContainer.classList.remove('active');
        recoveryFormContainer.classList.remove('active');
    }
    
    function showRegisterForm() {
        loginFormContainer.classList.remove('active');
        registerFormContainer.classList.add('active');
        recoveryFormContainer.classList.remove('active');
    }

    function showRecoveryForm() {
        loginFormContainer.classList.remove('active');
        registerFormContainer.classList.remove('active');
        recoveryFormContainer.classList.add('active');
        resetRecoverySteps();
    }
    
    showRegister.addEventListener('click', function() {
        showRegisterForm();
    });
    
    showLogin.addEventListener('click', function() {
        showLoginForm();
    });

    showRecovery.addEventListener('click', function() {
        showRecoveryForm();
    });
    
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
       
        showLoading(loginButton);
        
        
        setTimeout(() => {
            if (email && password) {
                
                
                if (email === 'admin@escola.edu.br' && password === 'admin123') {
                    
                    authPage.style.display = 'none';
                    appContainer.classList.add('active');
                } else {
                    
                    loginErrorMessage.classList.add('show');
                    
                    
                    setTimeout(() => {
                        loginErrorMessage.classList.remove('show');
                    }, 5000);
                }
            }
            
            
            hideLoading(loginButton);
        }, 1500);
    });
    
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('registerEmail').value;
        const phone = document.getElementById('phone').value;
        const position = document.getElementById('position').value;
        const reason = document.getElementById('reason').value;
        
        
        showLoading(registerButton);
        
        
        setTimeout(() => {
            if (fullName && email && phone && position && reason) {
                
                registerSuccessMessage.classList.add('show');
                registerErrorMessage.classList.remove('show');
                
                
                registerForm.reset();
                
               
                setTimeout(() => {
                    registerSuccessMessage.classList.remove('show');
                   
                    showLoginForm();
                }, 5000);
            } else {
                
                registerErrorMessage.classList.add('show');
                registerSuccessMessage.classList.remove('show');
            }
            
            
            hideLoading(registerButton);
        }, 1500);
    });

    
    toggleNewPassword.addEventListener('click', function() {
        const type = newPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        newPasswordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🔒';
    });
    
    
    toggleConfirmPassword.addEventListener('click', function() {
        const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🔒';
    });
    
    function resetRecoverySteps() {
        
        step1.classList.remove('completed');
        step2.classList.remove('completed', 'active');
        step3.classList.remove('completed', 'active');
        step1.classList.add('active');
        
        
        recoveryStep1.classList.add('active');
        recoveryStep2.classList.remove('active');
        recoveryStep3.classList.remove('active');
        
        
        document.getElementById('recoveryEmail').value = '';
        codeInputs.forEach(input => input.value = '');
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
        
        
        recoveryErrorMessage.classList.remove('show');
        recoverySuccessMessage.classList.remove('show');
        
        
        resendCodeContainer.classList.remove('disabled');
    }
    
    
    codeInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value.length === 1 && index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
                codeInputs[index - 1].focus();
            }
        });
    });
    
    
    recoveryStep1.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('recoveryEmail').value;
        
        if (!email) {
            recoveryErrorMessage.textContent = 'Por favor, insira seu e-mail.';
            recoveryErrorMessage.classList.add('show');
            return;
        }
        
        showLoading(sendCodeButton);
        
        
        setTimeout(() => {
            hideLoading(sendCodeButton);
            
           
            step1.classList.add('completed');
            step1.classList.remove('active');
            step2.classList.add('active');
            
            recoveryStep1.classList.remove('active');
            recoveryStep2.classList.add('active');
            
            
            recoverySuccessMessage.textContent = 'Código enviado com sucesso! Verifique seu e-mail.';
            recoverySuccessMessage.classList.add('show');
            
            
            codeInputs[0].focus();
            
            
            resendCodeContainer.classList.add('disabled');
            let countdown = 60;
            
            const timer = setInterval(() => {
                countdown--;
                resendCode.textContent = `Reenviar (${countdown}s)`;
                
                if (countdown <= 0) {
                    clearInterval(timer);
                    resendCodeContainer.classList.remove('disabled');
                    resendCode.textContent = 'Reenviar';
                }
            }, 1000);
        }, 1500);
    });
    
    
    resendCode.addEventListener('click', function() {
        if (resendCodeContainer.classList.contains('disabled')) return;
        
        showLoading(verifyCodeButton);
        
        
        setTimeout(() => {
            hideLoading(verifyCodeButton);
            
            
            recoverySuccessMessage.textContent = 'Código reenviado com sucesso!';
            recoverySuccessMessage.classList.add('show');
            
            
            resendCodeContainer.classList.add('disabled');
            let countdown = 60;
            
            const timer = setInterval(() => {
                countdown--;
                resendCode.textContent = `Reenviar (${countdown}s)`;
                
                if (countdown <= 0) {
                    clearInterval(timer);
                    resendCodeContainer.classList.remove('disabled');
                    resendCode.textContent = 'Reenviar';
                }
            }, 1000);
        }, 1000);
    });
    
    
    recoveryStep2.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        let code = '';
        let allFilled = true;
        
        codeInputs.forEach(input => {
            code += input.value;
            if (!input.value) allFilled = false;
        });
        
        if (!allFilled) {
            recoveryErrorMessage.textContent = 'Por favor, preencha todos os dígitos do código.';
            recoveryErrorMessage.classList.add('show');
            return;
        }
        
        showLoading(verifyCodeButton);
        
        
        setTimeout(() => {
            hideLoading(verifyCodeButton);
            
            
            if (code.length === 6) {
                
                step2.classList.add('completed');
                step2.classList.remove('active');
                step3.classList.add('active');
                
                recoveryStep2.classList.remove('active');
                recoveryStep3.classList.add('active');
                
                
                recoveryErrorMessage.classList.remove('show');
                recoverySuccessMessage.classList.remove('show');
            } else {
                recoveryErrorMessage.textContent = 'Código inválido. Tente novamente.';
                recoveryErrorMessage.classList.add('show');
            }
        }, 1500);
    });
    
    
    recoveryStep3.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (!newPassword || !confirmPassword) {
            recoveryErrorMessage.textContent = 'Por favor, preencha todos os campos.';
            recoveryErrorMessage.classList.add('show');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            recoveryErrorMessage.textContent = 'As senhas não coincidem.';
            recoveryErrorMessage.classList.add('show');
            return;
        }
        
        if (newPassword.length < 6) {
            recoveryErrorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            recoveryErrorMessage.classList.add('show');
            return;
        }
        
        showLoading(resetPasswordButton);
        
        
        setTimeout(() => {
            hideLoading(resetPasswordButton);
            
            
            step3.classList.add('completed');
            
           
            recoverySuccessMessage.textContent = 'Senha redefinida com sucesso! Redirecionando para o login...';
            recoverySuccessMessage.classList.add('show');
            
            
            setTimeout(() => {
                alert('Senha redefinida com sucesso! Você será redirecionado para a página de login.');
                showLoginForm();
            }, 2000);
        }, 1500);
    });
    
   
    backToEmailStep.addEventListener('click', function(e) {
        e.preventDefault();
        step1.classList.add('active');
        step2.classList.remove('active');
        
        recoveryStep1.classList.add('active');
        recoveryStep2.classList.remove('active');
        
        recoveryErrorMessage.classList.remove('show');
        recoverySuccessMessage.classList.remove('show');
    });
    
    
    backToCodeStep.addEventListener('click', function(e) {
        e.preventDefault();
        step2.classList.add('active');
        step3.classList.remove('active');
        
        recoveryStep2.classList.add('active');
        recoveryStep3.classList.remove('active');
        
        recoveryErrorMessage.classList.remove('show');
        recoverySuccessMessage.classList.remove('show');
    });
    
    
    backToLoginFromRecovery.addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });
    
    
    logoutBtn.addEventListener('click', function() {
        appContainer.classList.remove('active');
        authPage.style.display = 'flex';
        
        showLoginForm();
    });
    
    
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('rememberMe').checked = true;
    }
    
    
    document.getElementById('rememberMe').addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('savedEmail', document.getElementById('email').value);
        } else {
            localStorage.removeItem('savedEmail');
        }
    });

    
    const menuLinks = document.querySelectorAll('.sidebar-menu a');
    const pages = document.querySelectorAll('.page');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            
            menuLinks.forEach(l => l.classList.remove('active'));
            
            
            this.classList.add('active');
            
        
            pages.forEach(page => page.classList.remove('active'));
            
            
            const pageId = this.getAttribute('data-page');
            document.getElementById(pageId).classList.add('active');
        });
    });

    
    const toggleSwitches = document.querySelectorAll('.toggle-switch');
    toggleSwitches.forEach(switchEl => {
        switchEl.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    
    const scheduleOptions = document.querySelectorAll('.schedule-option');
    scheduleOptions.forEach(option => {
        option.addEventListener('click', function() {
            scheduleOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });


    addUserBtn.addEventListener('click', function() {
        addUserModal.classList.add('active');
    });

    closeUserModal.addEventListener('click', function() {
        addUserModal.classList.remove('active');
    });

    cancelUserBtn.addEventListener('click', function() {
        addUserModal.classList.remove('active');
    });

    saveUserBtn.addEventListener('click', function() {
        
        addUserModal.classList.remove('active');
        
        
        alert('Usuário adicionado com sucesso!');
    });

    
    document.getElementById('addStudentBtn').addEventListener('click', function() {
        alert('Funcionalidade de adicionar aluno será implementada aqui!');
    });

    document.getElementById('addStaffBtn').addEventListener('click', function() {
        alert('Funcionalidade de adicionar membro da equipe será implementada aqui!');
    });

    document.getElementById('addClassBtn').addEventListener('click', function() {
        alert('Funcionalidade de adicionar turma será implementada aqui!');
    });
});