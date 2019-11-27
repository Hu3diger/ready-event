import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { environment } from 'src/environments/environment';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppInjector } from '../app.injector';

export class GraphQlService{
  apollo: Apollo;
  httpLink: HttpLink;

  constructor(){
    const injector = AppInjector.getInjector();
    this.apollo = injector.get(Apollo);
    this.httpLink = injector.get(HttpLink);
    this.apollo.create({
      link: this.httpLink.create({uri: environment.apiUrl}),
      cache: new InMemoryCache()
    });
  }
}
