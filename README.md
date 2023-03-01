# Survey Site

#### _Site for storing Surveys and Responses, 09/06/2022_

#### By _**Tristen Everett**_

## Description

This project was to gain practice with setting up and using Firebase Firestore Databases and connecting them to a React project with Redux.  In this project, I built a page that lets the user create surveys, respond to other user's surveys, and review answers other users submitted to their own surveys.  When the webpage initially loads there will be a navigation bar along the top of the screen to travel between "Surveys", "Dashboard", and "Account".  The user will start in "Surveys" where they will be able to select a survey from those in the database to leave a response.  When the user navigates to "Account", they will be able to log-in or register an account if they are not currently authenticated, otherwise they will be able to click a button to log-out.  When an authenticated user navigates to "Dashboard" they will see a button to create new surveys with a list of all surveys they have created below.  Each survey in the list will allow the user to: view responses to the survey that other users have submitted, edit the questions or title of the survey, or delete the survey and all related responses from the database.

### Basic User Stories

* A user should be able to create, update and delete a survey. All surveys should be stored in the database.
* A user should be able to fill out and submit surveys. Survey results should be submitted to the database. (A survey result can be associated to a survey by mimicking a one-to-many relationship.)
* A user should be able to sign up, sign in, and sign out.
* A user should have their own dashboard which lists the surveys they've created.

### Diagram

* [Diagram 1](diagram/Survey-Site.html)

## Setup/Installation Requirements

To use this program you will need to set up a Firebase database which will require a Firebase account (tied to google as the same account).  Webpage Setup instructions require use of [nodeJS](https://nodejs.org/).

### Database Setup

1. Log in to [Firebase](https://firebase.google.com/)
2. Navigate to [Firebase Console](https://console.firebase.google.com/)
3. Select _Add Project_ and navigate through creation of your project until arriving at __Project Overview__
4. Select _Firestore Database_ from the __Build__ menu
5. Select _Create Database_ then _Start in test mode_ and pick whatever Cloud Firestore location works best for your usage
   * Database will stop functioning after 30 days unless connection rules are updated
   * [Read more](https://firebase.google.com/docs/firestore/security/get-started?authuser=0&hl=en) and update security rules as you feel is appropriate
6. Navigate back to __Project Overview__ and select _</>_ (web)
7. Input an App nickname such as "survey-site" and select _Register app_
8. Select _Continue to console_
9. Select _Project settings_ and navigate to __Your apps__ to find your `firebaseConfig` information for use in setting up webpage following instructions below

### Webpage Setup

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) this Repo
2. Run `npm install` from within the root directory of the cloned project
3. Make sure you have followed [above instructions to set up database](#database-setup)
4. Set up your `.env` file
   1. Create a new file named `.env` in the same level as the `template.env`
   2. Copy the data from within [template.env](template.env) into your new `.env` 
   3. Replace dummy values in the quotation marks with the information found in your database's `firebaseConfig`
5. Run `npm start` from within the root directory of the cloned project
6. The webpage should start automatically in your default browser. If it doesn't go to http://localhost:3000 in your preferred browser

## Technologies Used

* [Create React App](https://github.com/facebook/create-react-app)
* Redux
* [Firebase](https://firebase.google.com/)
* Firestore
* React-Redux
* React-Router

### License

This software is licensed under the MIT license

Copyright (c) 2022 **_Tristen Everett_**