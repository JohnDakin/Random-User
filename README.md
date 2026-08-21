# 👤 Random User

## 📖 Overview

**Random User** is an interactive web application that fetches random user profiles from the **Random User API** and dynamically displays their information in the browser.

The project demonstrates how to consume an external REST API using JavaScript's built-in **Fetch API**, process JSON data, and update HTML elements through the **DOM (Document Object Model)**.

The application is built using **HTML, CSS, and vanilla JavaScript**, without requiring a JavaScript framework.

---

# 🌐 Live Demo

The application is deployed on Vercel and can be accessed directly from your browser:

👉 **[randuser.vercel.app](https://randuser.vercel.app/)**

### 🚀 Try It

**Live Application:**
https://randuser.vercel.app/

No installation is required to use the deployed version. Simply open the link in a web browser and click **"Click to Get Random User"** to generate a random user profile.

---

# 🎯 Project Objective

The main purpose of this project is to demonstrate how JavaScript can communicate with an external API and dynamically display the returned information on a webpage.

The project provides practical experience with:

* REST APIs
* JavaScript Fetch API
* Asynchronous programming
* `async/await`
* JSON data
* DOM manipulation
* Error handling
* Dynamic web content
* Responsive web design

---

# ⚙️ How the Project Works

The application follows this workflow:

```text
User Opens Website
        ↓
User Clicks "Get Random User"
        ↓
JavaScript Calls Fetch API
        ↓
Random User API
        ↓
JSON Response
        ↓
JavaScript Processes Response
        ↓
User Information Extracted
        ↓
HTML DOM Updated
        ↓
Random User Displayed
```

The application communicates with the Random User API:

```text
https://randomuser.me/api/
```

Each request returns a randomly generated user profile in JSON format.

---

# 📂 Project Structure

```text
Random-User/
│
├── index.html
├── scripts.js
├── styles.css
└── README.md
```

### Files

| File         | Purpose                                                            |
| ------------ | ------------------------------------------------------------------ |
| `index.html` | Defines the structure and content of the web application.          |
| `scripts.js` | Handles API requests, processes the response, and updates the DOM. |
| `styles.css` | Controls the application's appearance and responsive layout.       |
| `README.md`  | Contains documentation for the project.                            |

---

# 🏗️ HTML Structure

The `index.html` file provides the basic structure of the application.

It contains elements for displaying:

* Random user profile picture
* User name
* Gender
* Email address
* City
* Country
* Login information
* Button for requesting another user

The application includes a button that triggers the JavaScript function:

```html
<button onclick="getRandomUser(url)" class="clickBtn">
    Click to Get Random User
</button>
```

When clicked, the function makes a new API request.

---

# 🔄 Fetch API Implementation

The main functionality is contained in `scripts.js`.

The API URL is defined as:

```javascript
const url = "https://randomuser.me/api/";
```

The application uses an asynchronous function:

```javascript
async function getRandomUser(url) {
    // API request
}
```

The Fetch API is then used to request information from the server:

```javascript
let response = await fetch(url);
```

Because the request is asynchronous, `await` allows the program to wait for the API response without blocking the browser.

---

# 📦 Processing the API Response

Once the API responds, the application checks whether the request was successful:

```javascript
if (!response.ok) {
    throw new Error("Unable to fetch resource");
}
```

The response is then converted from JSON into a JavaScript object:

```javascript
let data = await response.json();
```

The Random User API returns user information inside a `results` array.

The application accesses the first user using:

```javascript
data.results[0]
```

The returned object contains the user's profile information.

---

# 👤 Extracting User Information

## Profile Picture

The application extracts the user's large profile image:

```javascript
let randomUserImage = data.results[0].picture.large;
```

The image is then displayed on the webpage:

```javascript
htmlImage.src = randomUserImage;
```

---

## Name

The API provides the user's name as separate properties:

```text
title
first
last
```

The application combines these values before displaying the name.

For example:

```text
Username: Mr. John Doe
```

---

## Gender

The application retrieves the user's gender:

```javascript
data.results[0].gender
```

The result is then displayed on the page.

Example:

```text
Gender: Male
```

---

## Email

The user's email is retrieved from:

```javascript
data.results[0].email
```

and dynamically inserted into the webpage.

---

## Location

The API provides location information inside a nested object:

```javascript
const locationObject = data.results[0].location;
```

The application extracts information such as:

* City
* Country

The result is displayed on the page.

Example:

```text
City: Nairobi
Country: Kenya
```

---

# 🔐 Login Information

The Random User API also provides a `login` object.

The application retrieves it with:

```javascript
let loginDetailObject = data.results[0].login;
```

The project then loops through the available properties:

```javascript
for (let detail in loginDetailObject) {
    loginDetail.innerHTML +=
        `<p>${detail}: ${loginDetailObject[detail]}</p>`;
}
```

This allows the application to dynamically display the available login-related information.

> **Note:** The Random User API provides synthetic/test user data. Login information displayed by the application should not be treated as real credentials.

---

# 🖥️ Dynamic DOM Manipulation

One of the main concepts demonstrated by this project is **DOM manipulation**.

JavaScript retrieves HTML elements using:

```javascript
document.getElementById(...)
```

The application can then update their content dynamically.

For example:

```javascript
htmlUsername.innerText = "Username: ...";
```

The image can also be changed dynamically:

```javascript
htmlImage.src = randomUserImage;
```

This means the webpage does not need to reload whenever a new user is requested.

Instead, JavaScript updates the existing HTML elements.

---

# 🔁 Getting Another Random User

The application provides a button:

```text
Click to Get Random User
```

When the button is clicked:

```javascript
getRandomUser(url)
```

is executed.

The function sends another request to the API.

The returned profile then replaces the information currently displayed on the webpage.

This allows users to generate multiple random profiles without refreshing the page.

---

# ❌ Error Handling

The application uses `try...catch` to handle errors during API requests:

```javascript
try {
    let response = await fetch(url);

    // Process response

} catch (error) {
    console.log("Error", error.message);
}
```

If the request fails or an error occurs while processing the response, the error is caught and displayed in the browser console.

This prevents the application from failing without any indication of what went wrong.

---

# 🎨 Styling

The application's appearance is controlled by `styles.css`.

The stylesheet provides styling for:

* Page layout
* User profile
* Profile image
* User information
* Button
* Footer
* GitHub information
* Mobile layout

The user profile image is displayed as a circular image using CSS:

```css
.randomImage {
    width: 100px;
    border-radius: 56px;
}
```

---

# 📱 Responsive Design

The project includes responsive CSS for smaller screens.

For example:

```css
@media (max-width: 480px) {
    footer {
        flex-direction: column;
        gap: 5px;
        padding: 8px;
        text-align: center;
    }
}
```

This allows the footer to adapt to smaller mobile screens.

---

# 🧪 Example API Response

The application receives data approximately structured like this:

```json
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "John",
        "last": "Doe"
      },
      "location": {
        "city": "Nairobi",
        "country": "Kenya"
      },
      "email": "john.doe@example.com",
      "picture": {
        "large": "https://example.com/image.jpg"
      },
      "login": {}
    }
  ]
}
```

The JavaScript extracts the required information from this object and inserts it into the corresponding HTML elements.

---

# 🛠️ Technologies Used

| Technology          | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| **HTML5**           | Creates the webpage structure.                         |
| **CSS3**            | Styles the application and provides responsive design. |
| **JavaScript**      | Provides application logic and DOM manipulation.       |
| **Fetch API**       | Makes HTTP requests to the external API.               |
| **Random User API** | Provides randomly generated user profiles.             |

---

# 🚀 Running the Project Locally

## 1. Clone the Repository

```bash
git clone https://github.com/JohnDakin/Random-User.git
```

## 2. Navigate to the Project

```bash
cd Random-User
```

## 3. Open the Application

You can open `index.html` directly in your browser.

Alternatively, if you use **Visual Studio Code**, you can use the **Live Server** extension.

### Using Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The application will open in your browser.

---

# 💡 Development Workflow

A typical development workflow for this project is:

```text
HTML
 ↓
Create User Interface
 ↓
CSS
 ↓
Style User Interface
 ↓
JavaScript
 ↓
Connect to API
 ↓
Fetch JSON Data
 ↓
Process Response
 ↓
Update DOM
 ↓
Display User
```

---

# 📚 What This Project Demonstrates

This project provides practical experience with several important web-development concepts.

### Asynchronous JavaScript

```javascript
async function getRandomUser(url) {
```

### Fetch API

```javascript
await fetch(url);
```

### JSON Processing

```javascript
await response.json();
```

### Error Handling

```javascript
try {
    // Request
} catch (error) {
    // Handle error
}
```

### DOM Manipulation

```javascript
document.getElementById(...)
```

### Dynamic Content

```javascript
element.innerText = ...
```

### Object Iteration

```javascript
for (let detail in loginDetailObject)
```

---

# 🔮 Possible Future Improvements

The project could be expanded with additional features such as:

* Loading animations
* A visible error message instead of console-only errors
* Multiple users displayed at once
* Search and filtering
* Nationality filtering
* Age information
* Date of birth
* Phone number
* Previous/next user navigation
* Dark mode
* Improved accessibility
* Enhanced mobile styling
* API loading states
* Favorite users
* Copy user information
* Download profile information

---

# 🔐 Privacy & API Information

The application uses the **Random User API**, which generates fictional user profiles for development and demonstration purposes.

The profiles displayed by this application should not be interpreted as real people's personal information.

For more information about the API, visit:

**[Random User API](https://randomuser.me/)**

---

# 👨‍💻 Author

**John Dakin**

GitHub: [JohnDakin](https://github.com/JohnDakin)

Repository: [Random-User](https://github.com/JohnDakin/Random-User)

---

# 📄 License

This project is intended primarily for educational and demonstration purposes.

---

## ⭐ Support

If you find this project useful for learning **JavaScript, APIs, asynchronous programming, or the Fetch API**, consider giving the repository a ⭐ on GitHub.

### 🌐 Try the Application

**https://randuser.vercel.app/**
