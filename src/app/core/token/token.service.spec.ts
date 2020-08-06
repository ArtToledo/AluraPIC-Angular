import { TokenService } from './token.service';

describe('O servico TokenService', () => {
  let token: string, service: TokenService;

  it('deve ser instaciado', () => {
    const service = new TokenService();
    expect(service).toBeTruthy();
  });

  it('deve guardar um token', () => {
    service.setToken(token);

    expect(service.hasToken()).toBeTruthy();
    expect(service.getToken()).toBe('testetoken');
  });

  it('deve remover um token', () => {
    service.setToken(token);
    service.removeToken();

    expect(service.hasToken()).toBeFalsy();
    expect(service.getToken()).toBeFalsy();
  });

  //antes de cada teste, execute
  beforeEach(() => {
    token = 'testetoken';
    service = new TokenService();
  })

  //depois de cada teste, execute uma acao
  afterEach(() => {
    localStorage.clear();
  });
});