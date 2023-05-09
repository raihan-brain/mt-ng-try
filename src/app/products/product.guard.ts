import { CanActivateFn } from '@angular/router';

export const productGuard: CanActivateFn = (route, state) => {
  console.log('==== in the product guard ----- > ');
  return true;
};
