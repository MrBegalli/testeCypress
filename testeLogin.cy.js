describe('Testes da página de login', () => {
  beforeEach(() => {
    cy.visit('https://egrc-app.homologacao.com.br');
  });

  it('Deve realizar login com credenciais corretas', () => {
  
    cy.get('button').contains('Entrar').should('not.be.disabled').click();

    // Verifica a presença do botão "Nova"
    cy.get('button').contains('Nova').should('be.visible');

    // Verifica que a tabela de empresas está visível
    cy.get('table').should('be.visible');

    cy.get('button').contains('Nova').should('not.be.disabled').click();

    cy.get('input[placeholder="Digite o nome da empresa"]').type('Nome da Nova Empresa');

  });

  it('Deve exibir mensagem de erro ao tentar login com credenciais erradas', () => {
    cy.get('input[name="email"]').type('email@invalido.com');
    cy.get('input[name="password"]').type('senha_errada');
    cy.get('button').contains('Entrar').click();
  });
});
