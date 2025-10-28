document.addEventListener('DOMContentLoaded', function() {
    // ============ DADOS DE EXEMPLO ============
    const alunos = [
        {
            id: 1,
            nome: "Ana Silva",
            ano: "9º ano",
            turma: "9B",
            status: "Ativo",
            ultimaAtualizacao: "26/04/2023",
            matricula: "2023/001",
            dataNascimento: "01/05/2010",
            endereco: "Rua das Flores, 123, Jardim Primavera, São Paulo - SP",
            telefone: "011-9396-4321",
            telefoneResponsavel: "011-9324-5075",
            email: "ana.silva@aluno.escola.com",
            emailResponsavel: "responsavel.ana@gmail.com",
            informacoesAdicionais: "Altura: 1,50m | Peso: 42kg",
            numeroMatricula: "A-2201-9001",
            desempenho: [
                { disciplina: "Português", professor: "Álvaro Pereira", bim1: 8.5, bim2: 7.2, bim3: 8.0, bim4: 9.1, media: 8.2, situacao: "Aprovado" },
                { disciplina: "Matemática", professor: "Camila Santos", bim1: 7.0, bim2: 6.5, bim3: 7.0, bim4: 7.0, media: 7.0, situacao: "Aprovado" },
                { disciplina: "Cidadania", professor: "Bruna Moreira", bim1: 9.0, bim2: 9.5, bim3: 8.5, bim4: 9.8, media: 9.2, situacao: "Aprovado" },
                { disciplina: "História", professor: "Ricardo Lopes", bim1: 8.0, bim2: 8.5, bim3: 7.5, bim4: 8.0, media: 8.0, situacao: "Aprovado" },
                { disciplina: "Geografia", professor: "Ricardo Lopes", bim1: 7.5, bim2: 8.0, bim3: 7.0, bim4: 8.5, media: 7.8, situacao: "Aprovado" },
                { disciplina: "Ciências", professor: "Camila Santos", bim1: 8.0, bim2: 7.5, bim3: 8.5, bim4: 8.0, media: 8.0, situacao: "Aprovado" }
            ]
        },
        {
            id: 2,
            nome: "Carlos Oliveira",
            ano: "7º ano",
            turma: "7A",
            status: "Ativo",
            ultimaAtualizacao: "26/04/2023",
            matricula: "2023/002",
            dataNascimento: "12/08/2012",
            endereco: "Av. Paulista, 1000, Bela Vista, São Paulo - SP",
            telefone: "011-9567-8901",
            telefoneResponsavel: "011-9456-1234",
            email: "carlos.oliveira@aluno.escola.com",
            emailResponsavel: "responsavel.carlos@gmail.com",
            informacoesAdicionais: "Alergia a frutos do mar",
            numeroMatricula: "A-2201-7001",
            desempenho: [
                { disciplina: "Português", professor: "Álvaro Pereira", bim1: 7.5, bim2: 8.0, bim3: 7.0, bim4: 8.5, media: 7.8, situacao: "Aprovado" },
                { disciplina: "Matemática", professor: "Camila Santos", bim1: 8.0, bim2: 8.5, bim3: 7.5, bim4: 8.0, media: 8.0, situacao: "Aprovado" },
                { disciplina: "Cidadania", professor: "Bruna Moreira", bim1: 9.5, bim2: 9.0, bim3: 9.5, bim4: 9.0, media: 9.3, situacao: "Aprovado" },
                { disciplina: "História", professor: "Ricardo Lopes", bim1: 7.0, bim2: 7.5, bim3: 7.0, bim4: 7.5, media: 7.3, situacao: "Aprovado" },
                { disciplina: "Geografia", professor: "Ricardo Lopes", bim1: 8.5, bim2: 8.0, bim3: 8.5, bim4: 8.0, media: 8.3, situacao: "Aprovado" },
                { disciplina: "Ciências", professor: "Camila Santos", bim1: 8.0, bim2: 7.5, bim3: 8.0, bim4: 7.5, media: 7.8, situacao: "Aprovado" }
            ]
        },
        {
            id: 3,
            nome: "Juliana Santos",
            ano: "10º ano",
            turma: "10C",
            status: "Ativo",
            ultimaAtualizacao: "27/06/2023",
            matricula: "2023/003",
            dataNascimento: "23/03/2009",
            endereco: "Rua Augusta, 500, Consolação, São Paulo - SP",
            telefone: "011-9345-6789",
            telefoneResponsavel: "011-9789-0123",
            email: "juliana.santos@aluno.escola.com",
            emailResponsavel: "responsavel.juliana@gmail.com",
            informacoesAdicionais: "Usa óculos",
            numeroMatricula: "A-2201-1001",
            desempenho: [
                { disciplina: "Português", professor: "Álvaro Pereira", bim1: 9.0, bim2: 9.5, bim3: 8.5, bim4: 9.8, media: 9.2, situacao: "Aprovado" },
                { disciplina: "Matemática", professor: "Camila Santos", bim1: 8.5, bim2: 9.0, bim3: 8.0, bim4: 9.5, media: 8.8, situacao: "Aprovado" },
                { disciplina: "Cidadania", professor: "Bruna Moreira", bim1: 9.0, bim2: 9.5, bim3: 9.0, bim4: 9.5, media: 9.3, situacao: "Aprovado" },
                { disciplina: "História", professor: "Ricardo Lopes", bim1: 8.0, bim2: 8.5, bim3: 8.0, bim4: 8.5, media: 8.3, situacao: "Aprovado" },
                { disciplina: "Geografia", professor: "Ricardo Lopes", bim1: 9.5, bim2: 9.0, bim3: 9.5, bim4: 9.0, media: 9.3, situacao: "Aprovado" },
                { disciplina: "Ciências", professor: "Camila Santos", bim1: 8.5, bim2: 9.0, bim3: 8.5, bim4: 9.0, media: 8.8, situacao: "Aprovado" }
            ]
        },
        {
            id: 4,
            nome: "Pedro Almeida",
            ano: "8º ano",
            turma: "8B",
            status: "Ativo",
            ultimaAtualizacao: "26/04/2023",
            matricula: "2023/004",
            dataNascimento: "15/11/2011",
            endereco: "Rua da Consolação, 200, Consolação, São Paulo - SP",
            telefone: "011-9456-7890",
            telefoneResponsavel: "011-9678-9012",
            email: "pedro.almeida@aluno.escola.com",
            emailResponsavel: "responsavel.pedro@gmail.com",
            informacoesAdicionais: "Pratica natação",
            numeroMatricula: "A-2201-8001",
            desempenho: [
                { disciplina: "Português", professor: "Álvaro Pereira", bim1: 6.5, bim2: 7.0, bim3: 6.0, bim4: 7.5, media: 6.8, situacao: "Aprovado" },
                { disciplina: "Matemática", professor: "Camila Santos", bim1: 7.0, bim2: 7.5, bim3: 6.5, bim4: 7.0, media: 7.0, situacao: "Aprovado" },
                { disciplina: "Cidadania", professor: "Bruna Moreira", bim1: 8.0, bim2: 8.5, bim3: 7.5, bim4: 8.0, media: 8.0, situacao: "Aprovado" },
                { disciplina: "História", professor: "Ricardo Lopes", bim1: 6.0, bim2: 6.5, bim3: 6.0, bim4: 6.5, media: 6.3, situacao: "Aprovado" },
                { disciplina: "Geografia", professor: "Ricardo Lopes", bim1: 7.5, bim2: 7.0, bim3: 7.5, bim4: 7.0, media: 7.3, situacao: "Aprovado" },
                { disciplina: "Ciências", professor: "Camila Santos", bim1: 7.0, bim2: 6.5, bim3: 7.0, bim4: 6.5, media: 6.8, situacao: "Aprovado" }
            ]
        },
        {
            id: 5,
            nome: "Mariana Costa",
            ano: "11º ano",
            turma: "11A",
            status: "Ativo",
            ultimaAtualizacao: "26/04/2023",
            matricula: "2023/005",
            dataNascimento: "30/07/2008",
            endereco: "Av. Brigadeiro Faria Lima, 1500, Itaim Bibi, São Paulo - SP",
            telefone: "011-9789-0123",
            telefoneResponsavel: "011-9456-7890",
            email: "mariana.costa@aluno.escola.com",
            emailResponsavel: "responsavel.mariana@gmail.com",
            informacoesAdicionais: "Monitora de matemática",
            numeroMatricula: "A-2201-1101",
            desempenho: [
                { disciplina: "Português", professor: "Álvaro Pereira", bim1: 9.5, bim2: 9.0, bim3: 9.5, bim4: 9.0, media: 9.3, situacao: "Aprovado" },
                { disciplina: "Matemática", professor: "Camila Santos", bim1: 9.0, bim2: 9.5, bim3: 9.0, bim4: 9.5, media: 9.3, situacao: "Aprovado" },
                { disciplina: "Cidadania", professor: "Bruna Moreira", bim1: 9.0, bim2: 9.5, bim3: 9.0, bim4: 9.5, media: 9.3, situacao: "Aprovado" },
                { disciplina: "História", professor: "Ricardo Lopes", bim1: 8.5, bim2: 9.0, bim3: 8.5, bim4: 9.0, media: 8.8, situacao: "Aprovado" },
                { disciplina: "Geografia", professor: "Ricardo Lopes", bim1: 9.0, bim2: 9.5, bim3: 9.0, bim4: 9.5, media: 9.3, situacao: "Aprovado" },
                { disciplina: "Ciências", professor: "Camila Santos", bim1: 9.5, bim2: 9.0, bim3: 9.5, bim4: 9.0, media: 9.3, situacao: "Aprovado" }
            ]
        }
    ];

    // ============ FUNÇÕES PRINCIPAIS ============
    
    // Função para preencher a tabela de alunos
    function preencherTabelaAlunos() {
        const tbody = document.getElementById('studentsTableBody');
        tbody.innerHTML = '';

        alunos.forEach(aluno => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${aluno.nome}</td>
                <td>${aluno.ano}</td>
                <td>${aluno.turma}</td>
                <td><span class="status-badge active">${aluno.status}</span></td>
                <td>${aluno.ultimaAtualizacao}</td>
                <td class="actions">
                    <button class="action-btn view" onclick="visualizarAluno(${aluno.id})"><i class="fas fa-eye"></i></button>
                    <button class="action-btn edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Função para visualizar detalhes do aluno
    window.visualizarAluno = function(id) {
        const aluno = alunos.find(a => a.id === id);
        if (!aluno) return;

        // Preencher os detalhes do aluno
        const container = document.getElementById('studentDetailsContainer');
        container.innerHTML = `
            <div class="student-header">
                <div>
                    <h2 class="student-name">${aluno.nome}</h2>
                    <p class="student-matricula">Matrícula: ${aluno.matricula}</p>
                </div>
                <button class="btn primary" onclick="voltarParaListaAlunos()">Voltar para Lista</button>
            </div>

            <div class="student-info-grid">
                <div class="info-section">
                    <h3>Informações Pessoais</h3>
                    <div class="info-row">
                        <span class="info-label">Nome:</span>
                        <span class="info-value">${aluno.nome}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Data de Nascimento:</span>
                        <span class="info-value">${aluno.dataNascimento}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Endereço:</span>
                        <span class="info-value">${aluno.endereco}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Telefone:</span>
                        <span class="info-value">${aluno.telefone}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">E-mail:</span>
                        <span class="info-value">${aluno.email}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Informações Adicionais:</span>
                        <span class="info-value">${aluno.informacoesAdicionais}</span>
                    </div>
                </div>

                <div class="info-section">
                    <h3>Informações Acadêmicas</h3>
                    <div class="info-row">
                        <span class="info-label">Ano:</span>
                        <span class="info-value">${aluno.ano}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Turma:</span>
                        <span class="info-value">${aluno.turma}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Número de Matrícula:</span>
                        <span class="info-value">${aluno.numeroMatricula}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Status:</span>
                        <span class="info-value"><span class="status-badge active">${aluno.status}</span></span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Última Atualização:</span>
                        <span class="info-value">${aluno.ultimaAtualizacao}</span>
                    </div>
                </div>

                <div class="info-section">
                    <h3>Contato do Responsável</h3>
                    <div class="info-row">
                        <span class="info-label">Telefone:</span>
                        <span class="info-value">${aluno.telefoneResponsavel}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">E-mail:</span>
                        <span class="info-value">${aluno.emailResponsavel}</span>
                    </div>
                </div>
            </div>

            <div class="info-section">
                <h3>Desempenho Acadêmico</h3>
                <table class="grades-table">
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>Professor</th>
                            <th>1º Bim</th>
                            <th>2º Bim</th>
                            <th>3º Bim</th>
                            <th>4º Bim</th>
                            <th>Média</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${aluno.desempenho.map(disciplina => `
                            <tr>
                                <td>${disciplina.disciplina}</td>
                                <td>${disciplina.professor}</td>
                                <td>${disciplina.bim1}</td>
                                <td>${disciplina.bim2}</td>
                                <td>${disciplina.bim3}</td>
                                <td>${disciplina.bim4}</td>
                                <td>${disciplina.media}</td>
                                <td class="situacao-aprovado">${disciplina.situacao}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        // Navegar para a página de detalhes do aluno
        navegarParaPagina('student-details');
    };

    // Função para voltar para a lista de alunos
    window.voltarParaListaAlunos = function() {
        navegarParaPagina('students');
    };

    // Sistema de navegação entre páginas
    function navegarParaPagina(pageId) {
        // Esconder todas as páginas
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Mostrar a página selecionada
        document.getElementById(pageId).classList.add('active');

        // Atualizar menu ativo
        document.querySelectorAll('.sidebar-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
    }

    // ============ SISTEMA DE AUTENTICAÇÃO ============
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
    const backToLoginFromRecovery = document.getElementById('backToLoginFromRecovery');

    // Elementos de recuperação de senha
    const recoveryStep1 = document.getElementById('recoveryStep1');
    const recoveryStep2 = document.getElementById('recoveryStep2');
    const recoveryStep3 = document.getElementById('recoveryStep3');
    const sendCodeButton = document.getElementById('sendCodeButton');
    const verifyCodeButton = document.getElementById('verifyCodeButton');
    const resetPasswordButton = document.getElementById('resetPasswordButton');
    const backToEmailStep = document.getElementById('backToEmailStep');
    const backToCodeStep = document.getElementById('backToCodeStep');
    const resendCode = document.getElementById('resendCode');
    const recoverySuccessMessage = document.getElementById('recoverySuccessMessage');
    const recoveryErrorMessage = document.getElementById('recoveryErrorMessage');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });

    // Show loading
    function showLoading(button) {
        button.classList.add('loading');
        loadingOverlay.classList.add('active');
    }

    // Hide loading
    function hideLoading(button) {
        button.classList.remove('loading');
        loadingOverlay.classList.remove('active');
    }

    // Form navigation
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

    // CORREÇÃO: Adicionar evento para o botão "Fazer login" na tela de recuperação de senha
    backToLoginFromRecovery.addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });

    // Login form
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

    // Register form
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

    // Logout
    logoutBtn.addEventListener('click', function() {
        appContainer.classList.remove('active');
        authPage.style.display = 'flex';
        showLoginForm();
    });

    // ============ SISTEMA DE RECUPERAÇÃO DE SENHA CORRIGIDO ============
    // Função para avançar para a próxima etapa
    function avancarParaEtapa(etapaAtual, proximaEtapa) {
        document.querySelectorAll('.recovery-form').forEach(form => {
            form.classList.remove('active');
        });
        document.getElementById(proximaEtapa).classList.add('active');
        
        // Atualizar os passos
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        document.getElementById(`step${proximaEtapa.charAt(proximaEtapa.length-1)}`).classList.add('active');
    }

    // Enviar código
    sendCodeButton.addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.getElementById('recoveryEmail').value;
        
        if (email) {
            showLoading(sendCodeButton);
            
            setTimeout(() => {
                recoverySuccessMessage.classList.add('show');
                recoveryErrorMessage.classList.remove('show');
                
                // Avançar para a próxima etapa
                avancarParaEtapa('recoveryStep1', 'recoveryStep2');
                
                hideLoading(sendCodeButton);
                
                setTimeout(() => {
                    recoverySuccessMessage.classList.remove('show');
                }, 3000);
            }, 1500);
        } else {
            recoveryErrorMessage.textContent = 'Por favor, insira um e-mail válido.';
            recoveryErrorMessage.classList.add('show');
        }
    });

    // Verificar código
    verifyCodeButton.addEventListener('click', function(e) {
        e.preventDefault();
        const code1 = document.getElementById('code1').value;
        const code2 = document.getElementById('code2').value;
        const code3 = document.getElementById('code3').value;
        const code4 = document.getElementById('code4').value;
        const code5 = document.getElementById('code5').value;
        const code6 = document.getElementById('code6').value;
        
        if (code1 && code2 && code3 && code4 && code5 && code6) {
            showLoading(verifyCodeButton);
            
            setTimeout(() => {
                // Avançar para a próxima etapa
                avancarParaEtapa('recoveryStep2', 'recoveryStep3');
                hideLoading(verifyCodeButton);
            }, 1500);
        } else {
            recoveryErrorMessage.textContent = 'Por favor, preencha todos os campos do código.';
            recoveryErrorMessage.classList.add('show');
        }
    });

    // Redefinir senha
    resetPasswordButton.addEventListener('click', function(e) {
        e.preventDefault();
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (newPassword && confirmPassword) {
            if (newPassword === confirmPassword) {
                showLoading(resetPasswordButton);
                
                setTimeout(() => {
                    recoverySuccessMessage.textContent = 'Senha redefinida com sucesso!';
                    recoverySuccessMessage.classList.add('show');
                    recoveryErrorMessage.classList.remove('show');
                    
                    setTimeout(() => {
                        showLoginForm();
                        recoverySuccessMessage.classList.remove('show');
                    }, 3000);
                    
                    hideLoading(resetPasswordButton);
                }, 1500);
            } else {
                recoveryErrorMessage.textContent = 'As senhas não coincidem.';
                recoveryErrorMessage.classList.add('show');
            }
        } else {
            recoveryErrorMessage.textContent = 'Por favor, preencha todos os campos.';
            recoveryErrorMessage.classList.add('show');
        }
    });

    // Voltar para a etapa de e-mail
    backToEmailStep.addEventListener('click', function(e) {
        e.preventDefault();
        avancarParaEtapa('recoveryStep2', 'recoveryStep1');
    });

    // Voltar para a etapa de código
    backToCodeStep.addEventListener('click', function(e) {
        e.preventDefault();
        avancarParaEtapa('recoveryStep3', 'recoveryStep2');
    });

    // Reenviar código
    resendCode.addEventListener('click', function(e) {
        e.preventDefault();
        recoverySuccessMessage.textContent = 'Código reenviado com sucesso!';
        recoverySuccessMessage.classList.add('show');
        
        setTimeout(() => {
            recoverySuccessMessage.classList.remove('show');
        }, 3000);
    });

    // ============ SISTEMA DE ALUNOS ============
    const addStudentBtn = document.getElementById('addStudentBtn');
    const addStudentModal = document.getElementById('addStudentModal');
    const closeStudentModal = document.getElementById('closeStudentModal');
    const cancelStudentBtn = document.getElementById('cancelStudentBtn');
    const saveStudentBtn = document.getElementById('saveStudentBtn');
    const studentFormTabs = document.querySelectorAll('.tab-button');

    // Abrir modal de adicionar aluno
    addStudentBtn.addEventListener('click', function() {
        addStudentModal.classList.add('active');
    });

    // Fechar modal de adicionar aluno
    closeStudentModal.addEventListener('click', function() {
        addStudentModal.classList.remove('active');
    });

    cancelStudentBtn.addEventListener('click', function() {
        addStudentModal.classList.remove('active');
    });

    // Salvar aluno
    saveStudentBtn.addEventListener('click', function() {
        const studentName = document.getElementById('studentName').value;
        const studentMatricula = document.getElementById('studentMatricula').value;
        const studentYear = document.getElementById('studentYear').value;
        const studentClass = document.getElementById('studentClass').value;
        
        if (studentName && studentMatricula && studentYear && studentClass) {
            showLoading(saveStudentBtn);
            
            setTimeout(() => {
                // Adicionar o aluno à lista
                const novoAluno = {
                    id: alunos.length + 1,
                    nome: studentName,
                    ano: `${studentYear}º ano`,
                    turma: `${studentYear}${studentClass}`,
                    status: "Ativo",
                    ultimaAtualizacao: new Date().toLocaleDateString('pt-BR'),
                    matricula: studentMatricula,
                    dataNascimento: document.getElementById('studentBirthDate').value || "Não informado",
                    endereco: document.getElementById('studentAddress').value || "Não informado",
                    telefone: document.getElementById('studentPhone').value || "Não informado",
                    telefoneResponsavel: document.getElementById('responsiblePhone').value || "Não informado",
                    email: document.getElementById('studentEmail').value || "Não informado",
                    emailResponsavel: document.getElementById('responsibleEmail').value || "Não informado",
                    informacoesAdicionais: document.getElementById('studentAdditionalInfo').value || "Não informado",
                    numeroMatricula: studentMatricula,
                    desempenho: []
                };
                
                alunos.push(novoAluno);
                preencherTabelaAlunos();
                
                showToast('Aluno adicionado com sucesso!', 'success');
                addStudentModal.classList.remove('active');
                
                // Resetar formulário
                document.getElementById('addStudentForm').reset();
                
                hideLoading(saveStudentBtn);
            }, 1500);
        } else {
            showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
        }
    });

    // Navegação por abas no formulário de aluno
    studentFormTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remover classe active de todas as abas
            studentFormTabs.forEach(t => t.classList.remove('active'));
            
            // Adicionar classe active à aba clicada
            this.classList.add('active');
            
            // Esconder todos os conteúdos de abas
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Mostrar o conteúdo da aba clicada
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Upload de foto
    const photoPlaceholder = document.querySelector('.photo-placeholder');
    const studentPhoto = document.getElementById('studentPhoto');
    
    photoPlaceholder.addEventListener('click', function() {
        studentPhoto.click();
    });
    
    studentPhoto.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                photoPlaceholder.innerHTML = `<img src="${e.target.result}" alt="Foto do aluno" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--border-radius);">`;
            }
            
            reader.readAsDataURL(this.files[0]);
        }
    });

    // ============ OUTRAS FUNCIONALIDADES ============
    
    // Menu navigation
    const menuLinks = document.querySelectorAll('.sidebar-menu a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            navegarParaPagina(pageId);
        });
    });

    // Toast notification system
    function showToast(message, type = 'info') {
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        toast.innerHTML = `
            <div class="toast-icon"><i class="${icons[type]}"></i></div>
            <div class="toast-content">
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">&times;</button>
        `;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease-out';
        }, 10);
        
        toast.querySelector('.toast-close').addEventListener('click', function() {
            toast.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                toast.remove();
            }, 300);
        });
        
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 5000);
    }

    // Action buttons
    document.querySelectorAll('.action-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('view')) return; // Já tratado separadamente
            const action = this.classList.contains('edit') ? 'editar' : 'excluir';
            showToast(`Funcionalidade de ${action} será implementada aqui!`, 'info');
        });
    });

    // Other buttons
    document.querySelectorAll('.report-card button, .events-container button, .calendar-container button, .btn.primary').forEach(button => {
        if (!button.id) { // Evitar duplicação com botões já tratados
            button.addEventListener('click', function() {
                showToast('Funcionalidade em desenvolvimento!', 'info');
            });
        }
    });

    // ============ INICIALIZAÇÃO ============
    preencherTabelaAlunos();
});