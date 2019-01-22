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
            .wait(3000)
            .click('#raft-survey')
            .select('#q1', 'Sunny')
            .select('#q2', 'Summer')
            .select('#q3', '1')
            .select('#q4', '1')
            .select('#q5', '2')
            .select('#q6', '2')
            .select('#q7', '1')
            .select('#q8', '1')
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