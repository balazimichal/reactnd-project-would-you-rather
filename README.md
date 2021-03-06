# Udacity REACT NANODEGREE - Woul You Rather Project

This is the final assessment project for Udacity's React - Redux course. This app a web app that lets a user play the “Would You Rather?” game. This project solidify understanding of React and Redux, improving the predictability of the application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components.

You can preview this app on surge:
https://wouldyourather.surge.sh

## Features

- login screen with option to select user
- option to logout any time
- option to vote on questions asked by other users
- option to create new questions
- option to see the leaderboard and being moved on the leaderbord by getting one point for each created / answered question

![alt text](/src/images/screencapture-wouldyourather.png)

## Installation instructions

To run this project follow this steps:

- Clone the project with `git clone https://github.com/balazimichal/reactnd-project-would-you-rather.git`
- CD into the project and install the dependencies with `yarn install` or `npm i`
- Run the app with `yarn start` or `npm start`

## Deployment instructions

- Install surge globally with `npm install --global surge`
- Deploy with `surge -p build`
- Redeploy with `surge --domain wouldyourather.surge.sh`
- OR create a CNAME file in the root with the name of the domain inside only `wouldyourather.surge.sh` and redeploy with `surge` (no need to type domain afterwards)

## Requirements for the project

- Code adheres to udacity HTML, CSS, JavaScript, and Git style guidelines.
- Project must pass following rubic: https://review.udacity.com/#!/rubrics/1567/view
