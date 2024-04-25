import { getColor } from "./color.js";

describe('getColor', () => {
    // Teste: Deve renderizar sem problemas
    it('Deve retornar verde para notas a partir de 8', () => {
      const result = getColor(8);
  
      expect(result).toEqual('green');

    });

    it('Deve retornar laranja para notas a partir de 5', () => {
        const result = getColor(5);
    
        expect(result).toEqual('orange');
  
      });

    it('Deve retornar vermelho para notas abaixo de 5', () => {
        const result = getColor(3);
    
        expect(result).toEqual('red');
  
      });
  });

