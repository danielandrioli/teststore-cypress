class BasePage {

    elements = {
        loginBtn : () => cy.get('hidden-sm-down')
    }

    goToLogin() {
        this.elements.loginBtn().click()
    }
}

export default new BasePage()