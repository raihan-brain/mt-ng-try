import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';

interface Hero {
  id: string;
  name: string;
  superPower: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor() {}

  getHero(id: string): Hero {
    console.log('==== in the product api service');
    const hero: Hero = {
      id,
      name: 'batman',
      superPower: "I'm rich",
    };
    return hero;
  }
}

export const heroResolver: ResolveFn<Hero> = (
  route: ActivatedRouteSnapshot
) => {
  console.log('==== in the product api service ->>> heroResolver');
  return inject(ProductApiService).getHero(route.paramMap.get('id')!);
};
