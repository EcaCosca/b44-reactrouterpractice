import reactLogo from '../assets/react.svg'; // Use a relative path here
import '../App.css';

const React = () => {
  return (
    <div>
        <h1>React</h1>
        {/* Displaying the React logo using an <img> tag */}
        <img className='logo' src={reactLogo} alt="React Logo" />
    </div>
  );
}

export default React;
