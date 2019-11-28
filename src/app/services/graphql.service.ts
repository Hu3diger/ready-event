import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { environment } from 'src/environments/environment';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppInjector } from '../app.injector';
import { HttpHeaders } from '@angular/common/http';

export class GraphQlService{
  apollo: Apollo;
  httpLink: HttpLink;
  headers: HttpHeaders;

  constructor(){
    const injector = AppInjector.getInjector();
    this.apollo = injector.get(Apollo);
    this.httpLink = injector.get(HttpLink);
    this.headers = new HttpHeaders();
    this.headers.append("Authorization", localStorage.getItem('authToken'))
    this.apollo.create({
      link: this.httpLink.create({uri: environment.apiUrl, headers: this.headers}),
      cache: new InMemoryCache()
    });
  }
}
