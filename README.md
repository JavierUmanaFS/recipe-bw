# Secret Family Recipes CookBook API Documentation

### Base Url:

_https://essentialism-pg-be.herokuapp.com/_

** Status Codes
>200 Successful

>400 Bad Request

>401 Unauthorized

>404 Not Found

>500 Server Error

### POST to _/api/auth/register_ expects:

```json
{
  "username": "username",
  "password": "password"
}
```
> Returns message

### POST to _/api/auth/login_ expects:

```json
{
  "username": "email",
  "password": "password"
}
```

> Returns message, token and user_id.


## The following endpoints require a JWT => axiosWithAuth( ) 

### GET to _/api/recipes_

> Returns _**all recipes**_

### GET to _/api/recipes/my-recipes_

> Returns  _**recipes tied to the user logged in**_


### GET to _/api/recipes/:id_

> id of the recipe you want

> returns recipe linked to that recipe_id

### POST to _/api/recipes_

expects:

```json
{
    "title": "title",
    "source": "source",
    "ingredients": "ingredients",
    "instructions": "instructions",
    "category": "category"
}
```

> There will be pre-determined categories

> Maybe a drop down ?

### PUT to _/api/recipes/:id_

> id must be the recipe_id

expects:

```json
{
  "title": "CREATIVTY todo",
  "body": "A CREATIVE TODO BODY"
}
```

### DELETE to _/api/recipes/:id_

> id must be the recipe_id
