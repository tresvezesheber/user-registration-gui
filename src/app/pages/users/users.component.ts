import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Astrofoboldo Silveira',
      email: 'astro@astro.il',
      password: 'Husu&55SHJkaka1_00a',
    },
    {
      id: 2,
      name: 'Guilhermina da Silva',
      email: 'mina@mina.br',
      password: '(88UJHsao!oa&6ggTt3',
    },
    {
      id: 3,
      name: 'Giuseppe Caccini',
      email: 'giucacci@giucacci.it',
      password: 'aII8ÇL&hbbTtA433',
    },
  ];
}
