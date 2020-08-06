import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from './footer.component';
import { UserService } from '../user/user.service';
import { of } from 'rxjs';

describe('O componente Footer', () => {
  let component: FooterComponent;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [RouterTestingModule],
      providers: [UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const userService: UserService = TestBed.get(UserService);

    spyOn(userService, 'getUser')
      .and
      .returnValue(of({
        id: 1,
        name: 'Alvaro',
        email: 'alvaro@alvaro.com'
      }))

    const fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });
});