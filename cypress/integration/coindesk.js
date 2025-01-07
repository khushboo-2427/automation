

describe('CoinDesk Test', () => {

    it('Get Method', () => {

        cy.request(
            {
                method: 'GET', 
                url: "https://api.coindesk.com/v1/bpi/currentprice.json",
            })
            .then((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body.bpi).to.have.property('USD');
                expect(response.body.bpi).to.have.property('GBP');
                expect(response.body.bpi).to.have.property('EUR');
                expect(response.body.bpi.GBP).to.have.property('description','British Pound Sterling');

            })
})
})