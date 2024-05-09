import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";

const UserProducts = () => {
  const [
    alluser,
    setallUsers,
    handUsersId,
    sethandUsersId,
    localStorageUserId,
    setlocalStorageUserId,
    products,
    setProduct,
  ] = useOutletContext();
  const calculateDiscountedPrice = (salePrice, discountPercentage) => {
    const discountAmount = salePrice * (discountPercentage / 100);
    const discountedPrice = salePrice - discountAmount;
    return discountedPrice;
  };
  const [ filteredProduct,setfilteredProduct] = useState(products)
   const handleSearch = (inpvalue)=>{
    const filtered = products.filter((x)=>x.name.toLowerCase().trim().includes(inpvalue.toLowerCase().trim()))
    setfilteredProduct(filtered)
   }

   useEffect(()=>{
    setfilteredProduct(products)
   },[products])

   const sortbyName = (value)=>{
    let sortedProduct = [...filteredProduct]
    if(value=="a"){
      sortedProduct.sort((a,z)=>a.salePrice-z.salePrice)
    }else if(value=="z"){
      sortedProduct.sort((a,z)=>z.salePrice-a.salePrice)
    }
    setfilteredProduct(sortedProduct)
   }
  return (
    <>
      <input type="text" placeholder="Search..." style={{padding:'5px',width:'300px'}} onChange={(e)=>handleSearch(e.target.value)}/>

      <select name="" id="" onChange={(e)=>sortbyName(e.target.value)} style={{padding:'5px 20px',marginLeft:'10px'}}>
        <option value="a">Min price</option>
        <option value="z">Max price</option>
      </select>

      <Grid container spacing={2}>
        {filteredProduct.map((el) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={el.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={el.imgSrc}
                  alt={el.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {el.description}
                  </Typography>
                  <Typography variant="body1">
                    Price: ${el.salePrice} (Discounted: $
                    {calculateDiscountedPrice(
                      el.salePrice,
                      el.discountPercentage
                    )}
                    )
                  </Typography>
                  <Button color="secondary"><Link to={"/userproductdetail/"+el.id}>Detail</Link></Button>

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UserProducts;
