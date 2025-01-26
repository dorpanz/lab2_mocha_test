//mocha test cases to validate
const assert = require('assert')
const Arithmetic = require('../calculator')

describe("Validating Arithmetic functions", () =>{
    
    it("add(5, 2) expected result 7", ()=>{
        assert.equal(Arithmetic.add(5,2),7)
    })

    it("add(5,2) expected result 8", ()=>{
        assert.equal(Arithmetic.add(5,2),8)
    })
    
    it("sub(5, 2) expected result 3", ()=>{
        assert.equal(Arithmetic.sub(5,2),3)
    })

    it("sub(5,2) expected result 5", ()=>{
        assert.equal(Arithmetic.sub(5,2),5)
    })

    it("mul(5, 2) expected result 10", ()=>{
        assert.equal(Arithmetic.mul(5, 2), 10)
    })

    it("mul(5,2) expected result 12", ()=>{
        assert.equal(Arithmetic.mul(5, 2), 12)
    })

    it("div(10, 2) expected result 5", ()=>{
        assert.equal(Arithmetic.div(10, 2), 5)
    })
    it("div(10,2) expected result 2", ()=>{
        assert.equal(Arithmetic.div(10, 2), 2)
    })

} )