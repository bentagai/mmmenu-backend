# mmmenu-backend

Project Description:
GCExplorer is a leisure guide to Gran Canaria, which helps you discover the best plans on the island, where to eat or buy.

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
favourites | objectId               |  Articles     | no       |                          |
is_admin   | boolean                |               |          | default: false           |

## Articles

KEY         | TYPE          | REQUIRED |
------------|---------------|----------|
title       | string        | yes      |
subtitle    | string        | yes      |
category    | string        | yes      |
img_url     | string        | yes      |
text        | string        | yes      |
created_at  | date          |          |


# API ROUTES
Port will be defined in .env file
````
Please note that all routes in this API should be called with the `/api` prefix before the endpoint, for example:
```
POST http://localhost:3000/api/auth/signup
```

## AUTHENTICATION ENDPOINTS
> token required: NO
METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | `auth/signup`      | Create a new account
POST   | `auth/login`       | Authenticates a user

## ARTICLE ENDPOINTS

METHOD | URL              | AUTH | What does it do
-------|------------------|------|---------------------------
GET    | `/articles`      | NO   | Get All Articles
POST   | `/articles`      | YES  | Create Article
GET    | `/articles/:id`  | NO   | Read One Article
PUT    | `/articles/:id`  | YES  | Update Article
DELETE | `/articles/:id`  | YES  | Delete Article

## USERS ENDPOINTS

METHOD | URL                  | AUTH | What does it do
-------|----------------------|------|---------------------------
GET    | `/`                  | NO   | Get All Users
GET    | `/me`                | YES  | Get A User
PUT    | `/me`                | YES  | Update User
PUT    | `/me/password`       | YES  | Update User Password    
DELETE | `/me`                | YES  | Delete User
GET    | `/me/favourites/`    | YES  | Get User's favourites
POST   | `/me/favourites/:id` | YES  | Add a favourite
DELETE | `/me/favourites/:id` | YES  | Delete a favourite

