# [CoffeeStatus](https://github.com/jaimemendozadev/coffee-status)

A Coffee Shop Onboarding App that Sends Coffee Orders and Notifications with Twilio

## Table of contents

- Initial Setup
- Create a `.env` File
- Starting the App
- Created By

## Initial Setup

Open up your terminal and clone the repo locally to your computer by running the following command at the target destination: `$ git clone https://github.com/jaimemendozadev/coffee-status.git`


## Create a `.env` File

Fire up your terminal and create a new `.env` by simply running `$ touch .env.`

After creating the `.env` file, use your text editor to enter the PORT, ________, and _______ into separate lines inside the `.env` file. There should be no spacing between the lines and do not end the line with punctuation or spacing. The `.env` should appear like the following snippet:

```
PORT = 3000
[insert_key] = [insert_value]
[insert_key] = [insert_value]
```

After creating the `.env` and you fire up the app, the key value pairs in the file will correspond to any line of code that references `process.env`.

## Starting the App

In the root of the app, use your terminal to run `$ npm install` to install all the app dependencies. Wait until everything finishes loading.

Open a second tab in your terminal and run the command `$ npm run build` to build all the React components. Watch the terminal and wait until all the components finish building.

Finally in the first terminal tab, or in another opened terminal tab, run the command `$ npm start` to start the app.

Go to `http://localhost:3000` in your favorite browser to start using the app. 


## Created By

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)