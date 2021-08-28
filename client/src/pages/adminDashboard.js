import React, { useEffect } from 'react'
import Main from '../components/adminDashboard/main/Main';
import Sidebar from "../components/adminDashboard/sidebar/Sidebar";


const AdminDashboard = () => {
  let scroll = 0;
    window.addEventListener('scroll', () => {
      if(window.location.pathname === '/'){
          scroll = window.pageYOffset
          return scroll;
      }
  })

  useEffect(() => {
      setTimeout(() => {
          window.scrollTo({top: scroll, behavior: 'smooth'})
      }, 100)
  },[])

  return (
    <div className="container1">
      
      <Sidebar />
      
    </div>
  );
}

export default AdminDashboard;
