# mmmenu-backend

Project Description:
Mmenu is a leisure guide to Gran Canaria, which helps you discover the best plans on the island, where to eat or buy.

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

We differentiate between registered and unregistered users.

Characteristics of a user account:
- Users can signup.
- Users can delete account.
- Users can login.
- Users can logout.

Unregistered users can:
- Read articles and their comments.
- Search and filter by tags and subcategories.
- Use the map to see the locations of the published sites.

Registered users can:
- Read articles.
- Add and edit comments in an article.
- Save an article as a favorite.
- See a map with all the locations of the published sites.
- Search and filter by tags and subcategories.

# DB Schemas

## Users

KEY        | TYPE                   | REFERENCE     | REQUIRED | VALIDATIONS              |
-----------|------------------------|---------------|----------|--------------------------|
name       | string                 |               | yes      |                          |
email      | string                 |               | yes      | RegExp                   |
password   | string                 |               | yes      | min 6                    |
favourites | array  ref 'articles'  | articles      |          |                          |


## Articles

KEY         | TYPE          | EMBEDED        | REQUIRED |
------------|---------------|----------------|----------|
img_url     | array         |                | yes      |
title       | string        |                | yes      |
subtitle    | string        |                | yes      |
text        | string        |                | yes      |
date        | date          |                | yes      |
address     | string        |                |          |
tags        | array         |                | yes      |
comments    | array         | commentSchema  |          |

## Comments

KEY         | TYPE           | REFERENCE | REQUIRED |   DEFAULT    |
------------|----------------|-----------|----------|--------------|
user        | ObjectId       | Users     | yes      | current_user |
text        | string         |           | yes      |              |
date        | date           |           | yes      |              |

# API ROUTES
Port will be defined in .env file.
````
Please note that all routes in this API should be called with the `/api` prefix before the endpoint, for example:
```
POST http://localhost:3000/api/auth/signup
```
## AUTHENTICATION ENDPOINTS

METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | `auth/signup`      | Create a new account
POST   | `auth/login`       | Authenticates a user

## ARTICLE ENDPOINTS

METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
GET    | `articles`             | Get All Articles
GET    | `articles/:articleId`  | Read One Article

## ADMIN ENDPOINTS (Authenticated)

All these endpoints require a `token` to be sent within the HTTP Headers.
METHOD | URL                          | What does it do
-------|------------------------------|---------------------------------
POST   | `admin/articles`             | Create Article
PUT    | `admin/articles/:articleId`  | Update Article
DELETE | `admin/articles/:articleId`  | Delete Article

## USER ENDPOINTS (Authenticated)

All these endpoints require a `token` to be sent within the HTTP Headers.
METHOD | URL                                                         | What does it do
-------|-------------------------------------------------------------|---------------------------------
POST   | `me/favourites/:articleId`                                  | Add article to user favourites.
GET    | `me/favourites`                                             | Show all favourites user articles.
DELETE | `me/favourites/:articleId`                                  | Remove article from favourites.
POST   | `me/articles/:articleId/comments`                           | Add comment to an article.
PUT    | `me/articles/:articleId/comments/:commentId`                | Update comment.
DELETE | `me/articles/:articleId/comments/:commentId`                | Delete comment.
GET    | `me/profile`                                                | Get info from User
PUT    | `me/profile`                                                | Modify User info
DELETE | `me/profile`                                                | Delete user account