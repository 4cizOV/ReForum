![logo](./docs/design_assets/logo.png)


# ReForum
A minimal forum application built with the following technologies:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Webpack](https://webpack.js.org/)
* [ExpressJS](https://expressjs.com/)
* [PassportJS](http://passportjs.org/)
* [MongoDB](https://www.mongodb.com/)

### Application Features
* Users can post a discussion
* Users can reply their opinions regarding discussion
* Users can favorite discussions
* Users have their own profile page
* Admin can create new forum categories
* Admin have a lot of power over every users discussions and opinions :-p

### Documentations
* [API Docs](https://github.com/shoumma/ReForum/blob/master/docs/api.md)
* [System Overview](https://github.com/shoumma/ReForum/blob/master/docs/system_overview.md)

### Home View
![home view](./docs/design_assets/home_view.jpg)

### Admin View
![admin view](./docs/design_assets/admin_view.jpg)


To run the app in development environment:
```
$ npm run start:dev
```

To run the app in production environment:
```
$ npm run start
```


Deployed on Heroku: https://forum3.herokuapp.com/

It's showing you `Sorry, couldn't find the forum`. That is because, we didn't create any forum yet. The first user who signs up can visit the admin panel with the url [https://forum3.herokuapp.com/admin](https://forum3.herokuapp.com/admin). The application is currently configured in a way that, the first user will become the admin for the system.

Here we can create new forums and that forum will be displayed in the application. The first forum will be used as default forum.

## Path for Future Work
* Add local user accounts instead of GitHub authentication

## License
[MIT License](https://github.com/shoumma/Mister-Poster/blob/master/LICENSE).


[Provash Shoumma](https://twitter.com/proshoumma)
