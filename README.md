# mmmenu-backend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# user stories
Diferenciamos entre usuarios registrado y no registrados.

Características de una cuenta de usuario:
- Users can signup.
- Users can delete account.
- Users can login.
- Users can logout.

Los usuarios no registrados pueden:
- Leer artículos y sus comentarios.
- Buscar y filtrar por tags y subcategorías.
- Usar el mapa para ver las localizaciones de los sitios publicados.

Los usuario registrado pueden:

- Leer artículos.
- Añadir y editar comentarios en un artículo.
- Guardar un artículo como favorito.
- Ver un mapa con todas las localizaciones de los sitios publicados.
- Buscar y filtrar por tags y subcategorías.

## API ROUTES
Please note that all routes in this API should be called with the `/api` prefix before the endpoint:
```
POST http://localhost:3000/api/auth/signup
```
### AUTHENTICATION ENDPOINTS

METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | `auth/signup`      | Create a new account
POST   | `auth/login`       | Authenticates a user

### ARTICLE ENDPOINTS

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
GET    | `articles`             | Get All Articles
GET    | `articles/:articleId`  | Read One Article

### ADMIN ENDPOINTS (Authenticated)

All these endpoints require a `token` to be sent within the HTTP Headers.
METHOD | URL                          | What does it do
-------|------------------------------|---------------------------------
POST   | `admin/articles`             | Create Article
PUT    | `admin/articles/:articleId`  | Update Article
DELETE | `admin/articles/:articleId`  | Delete Article

### USER ENDPOINTS (Authenticated)

All these endpoints require a `token` to be sent within the HTTP Headers.
METHOD | URL                          | What does it do
-------|------------------------------|---------------------------------
POST   | `me/favourites/:articleId`   | Add article to user favourites.
GET    | `me/favourites`              | Show all favourites user articles.
GET    | `me/favourites/:articleId`   | Read one favourite article.
DELETE | `me/favourites/:articleId`   | Remove article from favourites.

POST   | `me/articles/:articleId/comments`              | Add comment to an article.
PUT    | `me/articles/:articleId/comments/:commentId`   | Update comment.
DELETE | `me/articles/:articleId/comments/:commentId`   | Delete comment.


/// Wishlist
GET    | `me/profile`                 | Get info from User
PUT    | `me/profile`                 | Modify User info
DELETE | `me/profile`                 | Delete user account