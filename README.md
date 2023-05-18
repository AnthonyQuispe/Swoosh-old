
## Deployment

To deploy this project run

```bash
  npm install
```

```bash
  npm start
```
```bash
  npm install firebase-tools
```
```bash
  firebase init
```
```bash
  firebase run build
```

```bash
  firebase deploy
```
## API Reference



| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `REACT_APP_GOOGLE_API` | `string` | **Required**. Your API key 



## Deployment

To deploy this project run the following

```bash
  npm install
```

```bash
  npm start
```
```bash
  npm install -g firebase-tools
```
```bash
  firebase login
```
```bash
  firebase init
```
```bash
  npm run build
```
```bash
  firebase deploy
```


## Documentation

[Firestore](https://firebase.google.com/docs/firestore)

[Firestore](https://firebase.google.com/docs/auth)

[Firebase](https://firebase.google.com/)

## Features

HomePage

- The homepage presents a map view of all the pickup games happening nearby in real time.
- Users can filter the games based on the desired sport and see active games marked on the Google Map.

Game Details Page
- When a user taps on a game marker on the map.
- (Coming Soon) Users can view the list of players who have joined the game and have the ability to rate other players based on their performance.
- (Coming Soon) The app includes a chat feature that enables users to communicate with other players.
User Profile Page
- Users have their own profile page where they can edit their personal information, preferences, and settings.
- (Coming Soon) They can access their game history, view performance stats, and see the badges they have earned.
## Authors

- [@Anthony Quispe](https://github.com/AnthonyQuispe)


## Tech Stack

**Client:** React, HTML, SASS, JavaScript, Google Maps API

**Server:** Firebase Authentication, Firebase Firestore (Database)
## Screenshots

![App Screenshot](https://i.postimg.cc/fVh1LmDH/Screenshot-2023-05-17-at-11-50-21-PM.png, 
)
![App Screenshot](https://i.postimg.cc/zyS6Rvfq/Screenshot-2023-05-17-at-11-50-27-PM.png
)




## Lessons Learned

During the development of the Pickup Game app, several valuable lessons were learned. These lessons helped to improve the understanding of certain technologies and provided insights into the challenges faced during the development process. Here are the key lessons learned:

1. Working with Google Maps API
Integrating and working with the Google Maps API can be a challenging task. It requires a thorough understanding of the API documentation and its various functionalities. Some of the key points learned during this process include:

Familiarizing oneself with the API documentation and understanding the available features and functionalities.
Handling API key management and ensuring proper security practices.
Implementing map views, markers, and other interactive elements on the map.
Understanding the concepts of geolocation and how to utilize it for real-time location tracking.
Dealing with API limitations, usage restrictions, and pricing considerations.
By investing time in learning the intricacies of the Google Maps API, developers can leverage its capabilities effectively and create a seamless user experience within their applications.

2. Utilizing Firebase for Authentication
Firebase Authentication proved to be a valuable tool for user authentication within the Pickup Game app. However, it is essential to explore and understand the full range of capabilities provided by Firebase. Key lessons learned include:

Familiarizing oneself with the Firebase Authentication documentation, including the available authentication methods and best practices for secure user authentication.
Understanding the integration process between the frontend and Firebase Authentication, including setting up appropriate configurations and handling user authentication flows.
Exploring additional features such as social media authentication (e.g., sign-in with Google or Facebook) and implementing them effectively.
Ensuring proper error handling and user feedback during the authentication process.
By thoroughly understanding Firebase Authentication, developers can implement robust and secure user authentication mechanisms within their applications.

3. Harnessing the Power of Firebase Firestore
Firebase Firestore, as a NoSQL database, provides powerful features for managing application data. However, to fully utilize its capabilities, it is important to delve into its functionalities and best practices. Some of the lessons learned include:

Understanding the structure and organization of data within Firestore, including collections, documents, and subcollections.
Utilizing Firestore queries effectively to retrieve and manipulate data.
Implementing security rules to control access and ensure data integrity.
Utilizing Firestore's real-time updates to provide live data to the application.
Optimizing data modeling and structuring to achieve better performance and scalability.
By exploring the capabilities of Firebase Firestore and understanding its features, developers can create robust and efficient data management solutions for their applications.

Overall, the development of the Pickup Game app provided valuable insights into working with Google Maps API, Firebase Authentication, and Firebase Firestore. By investing time in understanding these technologies, developers can overcome challenges, create seamless user experiences, and build robust backend infrastructures for their applications.
