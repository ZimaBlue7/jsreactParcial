import { funcionDivision } from "./Dividir"

describe('Probando', ()=> {

    test('no divisibles',() => {
        let testFuncion = funcionDivision(10);
            expect(testFuncion).toEqual(0);
        
    })

})

