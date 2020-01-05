
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
chai.should();

process.env.CONN_STRING = 'mongodb://localhost:27017/';
let app = require('../app');

chai.use(chaiHttp);

// describe('DATA',() => {
//     beforeEach((done)=>{
//         model.remove({},(err) => {
//             done();
//         });
//     });        
// });

describe('GET DATA',() => {
    it('should return all data',((done)=>{
        chai.request(app)
        .get('/orgs/Abhimanyu/Comments')
        .end((err,res) => {
            res.should.have.status(200);
            res.body.Data.length.should.be.eql(1);
            done();
        });        
    }));
});
           

