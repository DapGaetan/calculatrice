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
    console.log('Résultat :', result);
    expect(result).toEqual(5);
  });
});
