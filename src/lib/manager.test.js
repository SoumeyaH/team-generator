const manager = require("./manager")

// @ponicode
describe("getOfficeNumber", () => {
    let inst

    beforeEach(() => {
        inst = new manager({ _name: "Edmond", _id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", _email: "email@Google.com", _officeNumber: 12 })
    })

    test("0", () => {
        let callFunction = () => {
            inst.getOfficeNumber()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getRole", () => {
    let inst

    beforeEach(() => {
        inst = new manager({ _name: "George", _id: "a85a8e6b-348b-4011-a1ec-1e78e9620782", _email: "user@host:300", _officeNumber: "bc23a9d531064583ace8f67dad60f6bb" })
    })

    test("0", () => {
        let callFunction = () => {
            inst.getRole()
        }
    
        expect(callFunction).not.toThrow()
    })
})
