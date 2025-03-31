import { TestBed } from '@angular/core/testing';
import { CalculatriceService } from './calculatrice.service';

describe('CalculatriceService', () => {
  let service: CalculatriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('devrait additionner deux nombres', () => {
    const result = service.calculer(2, 3, '+');
    expect(result).toBe(5);
  });

  it('devrait soustraire deux nombres', () => {
    const result = service.calculer(5, 3, '-');
    expect(result).toBe(2);
  });

  it('devrait multiplier deux nombres', () => {
    const result = service.calculer(4, 5, '*');
    expect(result).toBe(20);
  });

  it('devrait diviser deux nombres', () => {
    const result = service.calculer(6, 3, '/');
    expect(result).toBe(2);
  });

  it('devrait renvoyer NaN pour une division par zéro', () => {
    const result = service.calculer(6, 0, '/');
    expect(result).toBeNaN();
  });

  it('devrait lancer une erreur pour un opérateur inconnu', () => {
    expect(() => service.calculer(2, 3, '%')).toThrowError('Opérateur non supporté');
  });

  it('devrait additionner un nombre négatif', () => {
    const result = service.calculer(-5, 3, '+');
    expect(result).toBe(-2);
  });

  it('devrait soustraire un nombre négatif', () => {
    const result = service.calculer(5, -3, '-');
    expect(result).toBe(8);
  });

  it('devrait multiplier un nombre négatif', () => {
    const result = service.calculer(-4, 5, '*');
    expect(result).toBe(-20);
  });

  it('devrait diviser un nombre négatif', () => {
    const result = service.calculer(-6, 3, '/');
    expect(result).toBe(-2);
  });

  it('Ajouter a l\'historique', () => {
    service.calculer(2, 3, '+');
    service.calculer(5, 3, '-');
    
    
    const history = service.getHistory();
    expect(history.length).toBe(2);
    expect(history[0]).toBe('2 + 3 = 5');
    expect(history[1]).toBe('5 - 3 = 2');
  });
});

