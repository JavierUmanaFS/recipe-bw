# Secret Family Recipes CookBook API Documentation

### Base Url:

_https://bw-secret-recipe.herokuapp.com/_

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

### GET to _`/api/recipes?category=${categoryName}`_

> Returns all recipes with that category name


### GET to _/api/recipes/my-recipes_

> Returns  _**recipes tied to the user logged in**_



### GET to _/api/recipes/:id_

> id of the recipe you want

> Returns recipe linked to that recipe_id


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


### PUT to _/api/recipes/:id_

> id must be the recipe_id

expects:

```json
{
  "title": "title",
  "source": "source",
  "ingredients" : "ingredients",
  "instructions" : "instruction",
  "category":"category"
}
```

### DELETE to _/api/recipes/:id_

> id must be the recipe_id
