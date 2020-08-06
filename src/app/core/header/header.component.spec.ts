import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';
import { UserService } from '../user/user.service';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';

describe('O componente Header', () => {
  let component: HeaderComponent;
  let userService: UserService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        MenuModule,
        AlertModule,
        LoadingModule
      ],
      providers: [UserService]
    }).compileComponents;
  }));

  beforeEach(() => {
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);

    spyOn(userService, 'getUser')
      .and
      .returnValue(of({
        id: 1,
        name: 'Alvaro',
        email: 'alvaro@gmail.com'
      }));

    const fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve realizar o logout', () => {
    const spy = spyOn(userService, 'logout')
      .and
      .returnValue(null)

    const navigateSpy = spyOn(router, 'navigate');
    
    component.logout();

    expect(spy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  })
});