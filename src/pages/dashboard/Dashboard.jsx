import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/product/productList/ProductList';
import ProductSummary from '../../components/product/productSummary/ProductSummary';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice';
import { getProducts } from '../../redux/features/product/productSlice';


const Dashboard = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    useRedirectLoggedOutUser("/login");
    const { products, isLoading, isError, message } = useSelector((state) => state.product)

    useEffect(() => {
        if(isLoggedIn === true) {
            dispatch(getProducts())
        }
        if (isError) {
            console.log(message);
        }
    }, [isLoggedIn, isError, message, dispatch]);

    return (
        <div>
            <ProductSummary products ={products}/>
            <ProductList products ={products} isLoading ={isLoading}/>
        </div>
    );
};

export default Dashboard;