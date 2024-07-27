import { veryImportantAndComplexCalculation } from "./addTwoNumbers"

describe("Test of complex calculations", ()=>{
    test('addTwoNumbers', ()=>{
        const result = veryImportantAndComplexCalculation("123", "1"); //124

        expect(result).toBe(124);
    });
})