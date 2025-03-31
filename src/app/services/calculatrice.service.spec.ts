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
});
