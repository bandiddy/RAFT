const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a page', function () {
    this.timeout('10s')
    let nightmare = null
    beforeEach(() => {
        nightmare = new Nightmare()
    })

    describe('/ (Home Page)', () => {
        it('should load without error', done => {
            nightmare
            .goto('https://raft-travel.herokuapp.com')
            .on('page', (type, message) => {
                if (type == 'alert') done()
              })
              .type('#email-input', 'searagan@gmail.com')
              .type('#password-input', 'alvin')
              .click('#login-submit')
              .click('#raft-survey')
              .wait(2000)
              .end()
              .then()
              .catch(done)
        })
    })
})