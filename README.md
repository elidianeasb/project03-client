# Project Name

<br>

# Quick Compo

<br>

## Description

This is an app to build a scheduling journey that is easy for customers to book appointments and for users/admin to manage their schedule and client appointments. The app helps to organize, manage and track appointments.

## User Stories

-  **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing tournaments.
-  **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing tournaments.
-  **Logout:** As a logged in user I can logout from the platform so no one else can use it.
-  **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of tournaments I have created.
-  **Add Tournaments:** As a logged in user I can access the add tournament page so that I can create a new tournament.
-  **Edit Tournaments:** As a logged in user I can access the edit tournament page so that I can edit the tournament I created.
-  **Add Players:** As a user I can add players to a tournament.
-  **View Tournament Table:** As a user I want to see the tournament details, players list and the time table.
-  **View Ranks:** As a user I can see the rankings list for the tournament.




## Backlog

- Users/admin can add available schedule
- Client can make appointments


<br>


# Client / Frontend

## React Router Routes (React App)

| Path                         | Component            | Permissions                | Behavior                                                  |
| ---------------------------- | -------------------- | -------------------------- | --------------------------------------------------------- |
| `/user/login`                | UserLoginPage        | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/admin/login`               | AdminLoginPage       | anon only `<AnonRoute>`    | Login form, navigates to home page after login.           |
| `/signup`                    | SignupPage           | anon only  `<AnonRoute>`   | Signup form, navigates to home page after signup.         |
| `/`                          | HomePage             | public `<Route>`           | Home page.                                                |
| `/services`                  | Services             | public `<Route>`           | Services                                                  |
| `/book`                      | Book                 | public `<Route>`           | Show available schedule                                   |
| `/book/add`                  | CreateAppointment    | user only `<PrivateRoute>` | Create new appointment.                                   |
| `/userId/appoitments`        | AppointmentList      | user only `<PrivateRoute>` | Appointments List.                                        |
| `/book/:bookId`              | BookDetailPage       | user only `<PrivateRoute>` | Appointment details.                                      |
| `/appointments-list`         | AppointmentsList     | user only `<PrivateRoute>` | Appointments List.                                        |




## Components

Pages:

- UserLoginPage

- AdminLoginPage

- SignupPage

- HomePage

- EditAppointment

- CreateAppointment

- AppointmentList

  

Components:

- UserCard
- AdminCard
- BookCard
- Navbar






## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`


<br>


# Server / Backend


## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

}
```



**Client model**

```javascript
 {
   name: { type: String, required: true },
   contact: { type: String, required: true },
 }
```



**Book model**

```javascript
{
  date: Date,
  local: { type: String, required: true }

}
```




<br>


## API Endpoints (backend routes)



| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
POST        | `/api/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/api/auth/login`          | {email, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/api/auth/logout`         |                              | 204            | 400          | Logs out the user                                            |
| GET         | `/api/appointments`     |                              |                | 400          | List appointments                                         |
| GET         | `/api/appointments/:id` |                              |                |              | Show specific appointments                                     |
| POST        | `/api/appointments`     | { name, local, data, service, contact...}       | 201            | 400          | Create and save a new appointments                             |
| PUT         | `/api/appointments/:id` | { name, local, data, service, contact...}       | 200            | 400          | edit appointments                                              |
| DELETE      | `/api/appointments/:id` |                              | 201            | 400          | cancel appointments                                            |
| POST         | `/api/services` | {name, type, price, description}                             | 201            | 400          | Create a new service                                             |
| PUT         | `/api/services` | {name, type, price, description}                             | 201            | 400          | Edit a service                                             |
| DELETE         | `/api/services` |                              | 201            | 400          | Delete service                                             |



<br>

## API's
https://www.make.com/en/help/app/whatsapp-business-cloud

<br>

## Packages

<br>


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/PBqtkUFX/curasan) or a picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/elidianeasb/project03-client)

[Server repository Link](https://github.com/elidianeasb/project03-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your *public* presentation slides

### Contributors

Elidiane Bezerra - <github-username> - <linkedin-profile-link>