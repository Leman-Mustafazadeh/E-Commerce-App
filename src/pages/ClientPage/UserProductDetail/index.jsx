import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getOne } from '../../../API'
import endpoints from '../../../API/base'
import { Link } from 'react-router-dom'

const UserProductDetail = () => {
  const {id} = useParams()
  const [getData,setGetData] = useState({
    name:'',
    description:'',
    salePrice:''
  })

  useEffect(()=>{
    getOne(endpoints.products,id).then((res)=>{
      setGetData(res.data)
    })
  },[id])
 
  return (
    <div style={{width:'30%',margin:'50px auto'}}>
      <Link to={"/userproducts"} style={{backgroundColor:'gray',padding:'8px 10px',textDecoration:'none',color:'white'}}>Go back</Link>
      <img src={getData.imgSrc} alt=""  style={{width:'100%'}}/>
      <h1>{getData.name}</h1>
      <h3>{getData.description}</h3>
      <h5>PRICE:  {getData.salePrice}</h5>
      <h4>STOCKCOUNT:  {getData.stockCount}</h4>
      
    </div>
  )
}

export default UserProductDetail
