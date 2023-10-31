// Import the useParams hook from react-router-dom
import { useParams } from 'react-router-dom';

// Define a functional component called Profile
const Profile = () => {
    // Extract the userId parameter from the current route's parameters using the useParams hook
    const { userId } = useParams();

    // Log the userId to the console
    console.log(userId);
    
    // Render the component's UI
    return (
        <div>
            {/* Display the extracted userId parameter in an h1 element */}
            <h1>
                Profile ID is: {userId}
            </h1>
        </div>
    );
}

// Export the Profile component as the default export of this module
export default Profile;
