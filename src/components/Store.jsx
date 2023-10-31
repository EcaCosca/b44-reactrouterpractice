import React, {useState, useEffect} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import axios from 'axios'

const Store = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getData()
    }, [productId])

    const getData = async () => {
        try{
            const response = await axios(`https://fakestoreapi.com/products/${productId}`)
            console.log(response);

            if(!response.data) return console.log('No data')
            
            setProduct(response.data)
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div>
    <h1>
        Store
    </h1>
    <ul>
        <li>
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

    
    {
        !product ? <p>Loading</p> : 
            <div>
                <h1>{product.title}</h1>
                <img src={product.image} alt={product.title} />
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
    }    
    
    </div>
  )
}

export default Store