## Bloggr api

API for Bloggr App, which is a simple CRUD blog that uses Node.js, Postgres, and Bookshelf.


## Routes
```
  USERS
    GET /users
      Returns list of all users.

    POST /users
      Creates a new user.

    GET /users/:id
      Returns a single user based on id.

    GET /users/:id/posts
      Returns a list of user id's posts.

    GET /users/:id/comments
      Returns a list of user id's comments.

  POSTS
    GET /posts
      Returns a list of all posts.

    POST /posts
      Creates a new post.

    GET /posts/:id
      Returns a single post based on id.


  COMMENTS
    GET /comments
    Returns a list of all comments.

    POST /comments
    Creates a new comment.

    GET /comments/:id
    Returns a single comment based on id.
```
