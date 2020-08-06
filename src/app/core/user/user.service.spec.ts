import { UserService } from './user.service';
import { TestBed } from '@angular/core/testing';

describe('O serviço UserService', () => {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU5NjYzNTYxOSwiZXhwIjoxNTk2NzIyMDE5fQ.POB5WalGvablwCQ3W9SuibsmfkQtFnt2qjGw98pKlGc';
  let service: UserService;

  beforeEach(() => {
    //Simula a criacao de um module, injeta dependencias...
    TestBed.configureTestingModule({
      providers: [UserService]
    });

    service = TestBed.get(UserService);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve, através de um token, configurar as informações de um usuário', () => {
    service.setToken(token);
    expect(service.isLogged()).toBeTruthy();
    expect(service.getUserName()).toBe('flavio');

    service.getUser()
      .subscribe(user => {
        expect(user.name).toBe('flavio');
      });
  });

  it('deve limpar as informações no logout', () => {
    service.setToken(token);
    service.logout();

    expect(service.isLogged()).toBeFalsy();
    expect(service.getUserName()).toBeTruthy();
  });
});