import { TestBed } from '@angular/core/testing';
import { PizzarioService } from './pizzario.service';
describe('PizzarioService', () => {
  let service: PizzarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
