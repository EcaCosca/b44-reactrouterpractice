# React - Vite - React Router

### 1. **Install React Router DOM**

In your terminal, navigate to your project directory and install `react-router-dom`:

```bash
npm create vite my-vite-app --template react
```

### 2. **Wrap Your App with BrowserRouter**

In your `main.jsx` file, import `BrowserRouter` from `react-router-dom` and wrap your `App` component:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
```

By wrapping your `App` component with `BrowserRouter`, you enable routing for your application.

### 3. **Implement Routes**

In your `App.jsx` file, import `Routes` and `Route` from `react-router-dom`. Define your routes using the `Route` component within the `Routes` component:

```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Parent from './components/Parent';
import Profile from './components/Profile';
import Store from './components/Store';
import Vite from './components/Vite';
import ReactComponent from './components/ReactComponent';

const App = () => {
  return (
    <div className="App">
      {/* Navigation bar */}
      {/* ... (your navigation code) */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<h1>Hello, welcome home!</h1>} />
        <Route path="parent" element={<Parent />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/store/:productId" element={<Store />} />
        <Route path="/vite" element={<Vite />} />
        <Route path="/react" element={<ReactComponent />} />
      </Routes>
    </div>
  );
};

export default App;
```

Here, `<Route>` components are used to map specific paths to corresponding components. The `:userId` and `:productId` are URL parameters indicating dynamic segments in the route.

### 4. **Create Navigation Links**

In your navigation component, use `NavLink` components for navigation. They provide styling options and automatically apply active styles to the current route.

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/parent">Parent</NavLink></li>
        <li><NavLink to="/profile/1">Profile 1</NavLink></li>
        <li><NavLink to="/store/1">Store 1</NavLink></li>
        <li><NavLink to="/vite">Vite</NavLink></li>
        <li><NavLink to="/react">React</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
```

In the above code, `NavLink` components are used for each navigation item, providing a seamless way to navigate between different routes while maintaining a consistent user experience.

### 5. Use useParams for Dynamic Parameters
In your Profile and Store components, you can use the useParams hook to access the dynamic route parameters:

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>Profile ID is: {userId}</h1>
    </div>
  );
};

export default Profile;
```

###6. Use useNavigate for Programmatic Navigation
In any component where you need to navigate programmatically, use the useNavigate hook:

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired route
    navigate('/profile/1');
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Profile 1</button>
    </div>
  );
};

export default MyComponent;
```
###7. Use isActive with NavLink
In your navigation component, you can use the isActive function to customize styles based on the active route:

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            isActive={(match, location) => {
              // Customize active styles based on the root route
              if (!match && location.pathname === '/') {
                return true;
              }
              return match;
            }}
          >
            Home
          </NavLink>
        </li>
        {/* Other NavLink components */}
      </ul>
    </nav>
  );
};

export default Navigation;
```

## Resources

1. **Official React Router Documentation:**
   - [React Router Documentation](https://reactrouter.com/)

2. **Tutorials and Learning Resources:**
   - [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial) (v6.17.0)

3. **npm Package:**
   - [react-router-dom on npm](https://www.npmjs.com/package/react-router-dom)
   - Installation: `npm i react-router-dom`

4. **GitHub Repository:**
   - [GitHub Repository - b44-reactrouterpractice](https://github.com/EcaCosca/b44-reactrouterpractice)

5. **Specific Component Documentation:**
   - [Link Component Documentation](https://reactrouter.com/en/main/components/link) (v6.17.0)

6. **API Endpoint for Testing:**
   - [Fake Store API](https://fakestoreapi.com/)

7. **Additional Learning Resources:**
   - [WBS Coding School - Full Stack Web App Course](https://learn.wbscodingschool.com/courses/full-stack-web-app/lessons/react-router/)
