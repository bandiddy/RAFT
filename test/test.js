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
            nightmare.goto('http://localhost:8080/')
        })
    })
})