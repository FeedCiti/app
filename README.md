# FeedCiti - App
🐦📱HooHacks 2020 (🏆Winner) | React Native app for FeedCiti
- Devpost: https://devpost.com/software/feedciti
![feedciti](https://i.imgur.com/DVya4LZ.png)
## Inspiration
In the United States alone, over 37 million people (including 11 million children) were not able to consistently provide food for their families in 2019. The United States is on the lower end of the poverty spectrum in comparison to many other underdeveloped countries. This is extremely alarming and tied with the recent outbreak of COVID-19 and the economic effects it will bring will only make this issue grow stronger. Many people waste food on a daily basis, and this was our inspiration to make a change.

## What it does
FeedCiti is a mobile application that acts as a centralized, community-based approach to solving modern hunger problems. The main premise is to allow users to store and review contributions that themselves and other members of their community have made. We believe that by providing a central forum for storing this information, it will motivate and inspire others to donate as well. The application consists of a map of the user's city, which has a waypoint for all of the local food banks and homeless shelters. This is accompanied by a global list of the 10 most recent contributions that people have made to their community. At the bottom of the main page, there are cards that link to charities and featured products, which are crowdfunded opportunities for our users to donate to. Notifications will be sent out on a regular basis to remind users of the state of affairs within their current community to inspire future donations. 

## How I built it
FeedCiti was built using React Native and NodeJS as the backend. The app uses MongoDB Atlas as a database running on a Google Cloud instance. Auth0 was employed to allow multiple forms of authentication. In the app itself, we used Redux for state management and Mapbox to display our map. Two external API's [GlobalGiving](https://www.globalgiving.org/api/) and [FeedingAmerica](https://www.feedingamerica.org/find-your-local-foodbank) were utilized, the prior to gather charities while the latter to find local foodbanks.

## Challenges I ran into
It was our first time using react-native so we ran into many issues that came up when using new technology for the first time. This also caused some issues with identifying problems with our authentication system which killed a lot of our time. This was mainly related to trying to build our application Expo, which is a framework ran on top of react-native, so we had to spend many hours converting over from the framework to pure react-native.

## What I learned
How to use react-native and auth0. We learned the hard way that Axios does not do well with using a body in a GET request.

## What's next for FeedCiti
Expanding outside of the United States. Poverty and homelessness is a global issue that we believe this app can help tackle, especially by starting at a community-based level and allowing that to expand into a fully containing application.
