/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('index', {
  path: '/',
  template: 'index'
});

Router.route('apiKey', {
  path: '/api-key',
  template: 'apiKey'
});

Router.route('prueba', {
  path: '/prueba',
  template: 'destino'
});
Router.route('entrar', {
  path: '/enter',
  template: 'accounts_passwordless-ui'
});
