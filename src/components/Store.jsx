// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

// Define a functional component called Store
const Store = () => {
    // Extract the productId parameter from the current route's parameters using the useParams hook
    const { productId } = useParams();

    // Declare state variables using the useState hook
    const [product, setProduct] = useState(null);

    // Use the useEffect hook to fetch data when the productId parameter changes
    useEffect(() => {
        // Define an asynchronous function to fetch data from an API using axios
        const getData = async () => {
            try {
                // Fetch product data based on the productId from the API
                const response = await axios(`https://fakestoreapi.com/products/${productId}`);
                console.log(response);

                // If there is no data in the response, log a message and return early
                if (!response.data) return console.log('No data');

                // Update the product state with the fetched data
                setProduct(response.data);
            } catch (error) {
                // Log any errors that occur during the API request
                console.log(error);
            }
        };

        // Call the getData function to fetch data when the productId parameter changes
        getData();
    }, [productId]);

    // Render the component's UI
    return (
        <div>
            {/* Static navigation links to different products within the store */}
            <h1>Store</h1>
            <ul>
                <li>
                    {/* NavLink to product with id 1 */}
                    <NavLink 
                        to="/store/1"
                        style={({ isActive }) => ({ 
                            color: isActive ? "green" : "red",
                            backgroundColor: isActive ? "#32ffc3" : "white" 
                        })}
                    >
                        Product 1
                    </NavLink>
                </li>
                <li>
                    {/* NavLink to product with id 2 */}
                    <NavLink 
                        to="/store/2"
                        style={({ isActive }) => ({ 
                            color: isActive ? "green" : "red",
                            backgroundColor: isActive ? "#32ffc3" : "white" 
                        })}
                    >
                        Product 2
                    </NavLink>
                </li>
                <li>
                    {/* NavLink to product with id 3 */}
                    <NavLink 
                        to="/store/3"
                        style={({ isActive }) => ({ 
                            color: isActive ? "green" : "red",
                            backgroundColor: isActive ? "#32ffc3" : "white" 
                        })}
                    >
                        Product 3
                    </NavLink>
                </li>
            </ul>

            {/* Display loading message while product data is being fetched */}
            {!product ? <p className="loading-message">Loading...</p> : 
                    <div className="product-container">
                        {/* Display product details if product data is available */}
                        <h1 className="product-title">{product.title}</h1>
                        <img className="product-image" src={product.image} alt={product.title} />
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                    </div>
            }    
        </div>
    );
}

// Export the Store component as the default export of this module
export default Store;