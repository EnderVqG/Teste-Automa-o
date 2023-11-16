describe('Teste Pratico Analista de QA Desbravador Software', () => {
  it('Gera um cenário de teste automatizado', () => {


  	//acessa o ambiente de teste Reservas Online
    cy.visit('https://reservas.desbravador.com.br/1111')
    
    //seleciona o valor nos dois primeiros selects com os valor 2 adultos e 1 criança
    cy.get('#cdadultos').select('2')
    cy.get('#cdchdfree').select('1')

    //clica no botão Continuar Reserva
    cy.get('#button').click()

    //ignora o erro em ativaAviso e em gebi('bt_addsegue').style.visibility = ''
    //são erros visuais da página mas o cypress não permite que o teste prossiga por conta deles
    cy.on('uncaught:exception', (err, runnable) => {

            return false

    })

    //seleciona o tipo de cama e clica no botão de compra do quarto STANDARD ST1
    cy.get('#bt_layout-ST1').select('Cama Casal, Berço')
    cy.get('#bt_compra-ST1').click()

	//espera por 5 segundos para que o elemento da parte de pagamento carregue
    cy.wait(5000)

    //clica no botão de Pagar
    cy.get('#bt_pagar > .btn').click()

    //clica na escrita do botão Já sou Cadastrado, pois clicar no botão em si não continua para a parte de login
    cy.get('.float-left > a').click()

    //digita o e-mail e senha criados por mim
    cy.get('#usuario').type('andersonteste@teste.com')
    cy.get('#senha').type('teste')

    //clica no botão Autenticar (Acessar) 
    cy.get('.largura_site > .cx').click()

    //espera por 5 segundos para que o iframe carregue completamente
    cy.wait(5000)

    //pega o elemento iframe procura pela checkbox de Concordo com as Condições e pelo botão Continuar Reserva
    //em minhas pesquisas vi que o cypress tem certa dificuldade em trabalhar em cima de iframes
    //não conseguia encontrar os elementos dentro do iframe utilizando get portanto usei find
    cy.get('#frame_politicas').then($iframe => {
    	const doc = $iframe.contents()

    	//marca a checkbox
    	doc.find("#lido").click()

    	//clica no botão Continuar Reserva
    	doc.find("button").click()
    })


    //a partir daqui não tive acesso a página de pagamento para inserir os dados do cartão de crédito
    //apenas mostrava o erro de página não encontrada


    
  })
})