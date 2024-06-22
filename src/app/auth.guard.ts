import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  return true;


  const authService = inject(AuthService)
  const router = inject(Router)
  const valorLogged = authService.isLogged()
  if(valorLogged == true){
    return true
  }

  router.navigate(["login"], {queryParams:{BlockedPage: state.url}})


};
