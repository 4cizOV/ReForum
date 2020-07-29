![logo](./docs/design_assets/logo.png)


# ReForum
A simple, easy-to-deploy forum application

### Todo

- [x] Signup with email backend
- [ ] Signup with email frontend
- [ ] Hide GitHub username if user signed up with email
- [ ] Make the UI design better
- [ ] Dark mode




#### Home View
[home view](./docs/design_assets/home_view.jpg)

#### Admin View
[admin view](./docs/design_assets/admin_view.jpg)


---

Before you deploy the app make sure to add the URL to your Mongo database and add your GitHub api credentials.
On Heroku you can install the mLab MongoDB addon.

To run the app in development environment:
```
$ npm run start:dev
```

To run the app in production environment:
```
$ npm run start
```


Deployed on Heroku: https://forum3.herokuapp.com/

If it's showing you `Sorry, couldn't find the forum` you didn't create any forum yet. The first user who signs up can visit the admin panel with the url [https://forum3.herokuapp.com/admin](https://forum3.herokuapp.com/admin).


## License
[MIT License](https://github.com/shoumma/Mister-Poster/blob/master/LICENSE).
[Provash Shoumma](https://twitter.com/proshoumma)
