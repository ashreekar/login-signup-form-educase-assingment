# PopX App

PopX is a simple React-based user account management application with registration, login, and dashboard features. It uses **React**, **React Router**, **Redux Toolkit**, and **Tailwind CSS** for the frontend.

---

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Project Structure](#project-structure)
* [Usage](#usage)
* [Components](#components)
* [State Management](#state-management)
* [Styling](#styling)

---

## Features

* User Registration and Login
* Dashboard with user profile display
* Mobile-friendly design
* Input validation with React Hook Form
* Redux store for state management
* Error handling and invalid credential popup
* Landing page with navigation to login/signup

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ashreekar/login-signup-form-educase-assingment.git
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open in your browser:

```
http://localhost:5173
```

---

## Project Structure

```
src/
├─ assets/          # Images and icons
├─ page/            # React pages/components
│  ├─ Landing.tsx
│  ├─ CreateAccount.tsx
│  ├─ Login.tsx
│  ├─ Dashboard.tsx
│  ├─ WelcomePage.tsx
├─ state/           # Redux slices and store
│  ├─ appStore.ts
│  ├─ user.slice.ts
├─ App.tsx          # Routes and main component
├─ index.tsx        # App entry point
```

---

## Usage

### Routes

* `/` → Landing page
* `/create` → Create Account page
* `/login` → Login page
* `/you` → Dashboard/Profile page

### Form Validation

* **Registration**: Validates email format and phone number. Required fields show error messages.
* **Login**: Checks credentials against stored user in Redux state. Invalid login shows a mobile popup.

---

## Components

* **Landing.tsx**
  Displays welcome text and navigation to signup/login. Includes a footer with navigation icons.

* **CreateAccount.tsx**
  Registration form with validation, Redux dispatch to store user data.

* **Login.tsx**
  Login form, validates credentials, dispatches login action, and navigates to Dashboard.

* **Dashboard.tsx**
  Displays user name and email fetched from Redux. Shows profile image with camera icon overlay.

* **Profile.tsx**
  User profile view with dummy lorem text and layout styles.

---

## State Management

Using **Redux Toolkit**:

* **user.slice.ts**

  * `registerUser` → Save new user and mark authenticated
  * `loginUser` → Set authenticated user
  * `logoutUser` → Clear user and authentication

* **appStore.ts**
  Configures Redux store with `user` slice.

---

## Styling

* **Tailwind CSS** for responsive layouts, spacing, typography, and colors.
* Cards, buttons, and input fields use modern UI design.
* Shadow, dashed borders, and rounded corners implemented per design spec.
* Icons: Lucide React library and custom SVGs.

---

## Notes

* Currently, user registration is **stored in Redux state only** (no backend).
* All images and icons use placeholders or online dummy images.
* Mobile responsiveness is ensured via Tailwind’s flex utilities and spacing classes.