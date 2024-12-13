describe('Testes da página de login', () => {
  beforeEach(() => {
    cy.visit('https://egrc-app.homologacao.com.br');
  });

  it('Deve realizar login com credenciais corretas', () => {
    cy.get('input[name="email"]').type('info@codedthemes.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button').contains('Entrar').should('not.be.disabled').click();

    // Ajuste para verificar redirecionamento ou elemento pós-login
    cy.url().should('include', 'https://egrc-app.homologacao.com.br/apps/processos/empresas-lista'); // Atualize o endpoint conforme necessário
    
  });

  it('Deve exibir mensagem de erro ao tentar login com credenciais erradas', () => {
    cy.get('input[name="email"]').type('email@invalido.com');
    cy.get('input[name="password"]').type('senha_errada');
    cy.get('button').contains('Entrar').click();

    // Atualize o seletor e texto esperados
    cy.get('.error-message') // Substitua por um seletor correto
      .should('contain', 'Must be a valid email'); // Substitua pelo texto exibido na interface
  });
});