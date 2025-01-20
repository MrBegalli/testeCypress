describe('Testes da página de menu lateral', () => {
  beforeEach(() => {
    cy.visit('https://egrc-app.homologacao.com.br');
  });

  it('Deve clicar na seta dupla no canto superior esquerdo', () => {
    // Realiza login ou ações iniciais
    cy.get('button').contains('Entrar').should('not.be.disabled').click();

    // Aguarda o carregamento da página principal
    cy.get('button').contains('Nova').should('be.visible');

    // Clica na seta dupla usando o atributo 'aria-label'
    cy.get('button[aria-label="open drawer"]').should('be.visible').click();

  });
});
