const compareWords = require('./wordle')

describe('compareWords', ()=> {
    it('checks that the characters are the same ', ()=>{
        expect(compareWords('a', 'a')).toEqual("2")
    });
    it('checks that the target character is in the guess word but not same position', () =>{
        expect(compareWords('ab', 'bb')).toEqual("12")
    });
    it('checks that the letter is not in the target word', () => {
        expect(compareWords('ab', 'cd')).toEqual("00");
    });
    it('checks that the letter is not in the target word as many times as it is in the guess', () => {
        expect(compareWords("reads", "elect")).toEqual("10000")
    })
})