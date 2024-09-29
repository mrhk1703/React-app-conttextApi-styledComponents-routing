import React, { useEffect } from 'react'
import { useCustomers } from '../hooks/useCustomers'

export const Home = () => {
    const {getCustomers} = useCustomers();
    useEffect(()=>{
        getCustomers();
    },[])
  return (
    <div>Home</div>
  )
}
