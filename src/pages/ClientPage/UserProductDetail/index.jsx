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
      setGetData(res)
      console.log(res);
    })
  },[id])
  console.log(getData);
  return (
    <div>
      <Link to={"/userproducts"}>Go back</Link>
      <h1>{getData.name}</h1>
      <p>{getData.description}</p>
    </div>
  )
}

export default UserProductDetail
