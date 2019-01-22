var Nightmare = require('nightmare');

var nightmare = Nightmare({ show: true });

describe('test RAFT survey', () => {
    it('should complete survey with no errors', (done) => {
        jest.setTimeout(20000);
        nightmare
            .goto('https://raft-travel.herokuapp.com/')
            .type('#email-input', 'james.je.cho@gmail.com')
            .type('#password-input', 'test')
            .click('#login-submit')
            .wait(1000)
            .click('#raft-survey')
            .select('Snowy', '#q1')
            .select('Winter', '#q2')
            .select('Relaxing', '#q3')
            .select('Yes', '#q5')
            .select('No', '#q6')
            .select('Yes', '#q7')
            .select('Drive', '#q8')
            .click('#submit')
            .evaluate(function () {
                var text = document.querySelector('.modal-title').innerHTML
                return text;
            })
            .end()
            .then(function (result) {
                console.log(result);
                expect(result).toContain('A RAFT has saved your travel planning');
                done();
            })
            .catch(function (error) {
                console.error('Search failed:', error);
            });
    });
});