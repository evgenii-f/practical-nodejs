const boot = require('../app').boot;
const shutwodn = require('../app').shutdown;
const port = require('../app').port;
const superagent = require('superagent');
const expect = require('expect.js');

describe('server', () => {
    before(() => {
        boot();
    });

    describe('homepage', () => {
        it("Should respond to 'GET", () => {
            superagent
                .get(`http://localhost:${port}`)
                .end((er, res) => {
                    expect(res.status).to.equal(200);
                    done();
                });
        });
    });

    after(() => {
        shutdown();
    });
});
