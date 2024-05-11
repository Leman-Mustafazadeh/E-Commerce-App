import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/uselocalstroage'
import { Outlet, useNavigate } from 'react-router'
import AdminNavbar from '../../components/AdminNavbar'
import { getAll } from '../../API'
import endpoints from '../../API/base'

const AdminRouter = () => {
    const [users,setUsers] = useState([])
    const [adProducts,setadProduct] = useState([])
    const [localStorageId,setlocalStorageId] = useLocalStorage("AdminId",null)
    const localId = JSON.parse(localStorage.getItem("AdminId"))
    const [adminId,setAdminId] = useState(localId? localId :null)
    const navigate = useNavigate()
    useEffect(()=>{
        getAll(endpoints.users).then((res) => {
            setUsers(res.data)
        })
        getAll(endpoints.products).then((res)=>[
            setadProduct(res.data)
        ])
         
        if(localStorageId===null){
            navigate('/admin/login')
        }
    },[localStorageId])
  return (
    <div>
        <AdminNavbar adminId={adminId} setAdminId={setAdminId} setlocalStorageId={setlocalStorageId}localStorageId={localStorageId}/>
        <Outlet context={[users,setUsers,adminId,setAdminId,localStorageId,setlocalStorageId,adProducts,setadProduct]}/>
    </div>
  )
}

export default AdminRouter
