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
import { json, useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { patch } from "../../../API";
import endpoints from "../../../API/base";

const UserProducts = () => {

  
  

  const [localBasket,setBasketState,messages, setMessages, alluser, setAllUsers, handUsersId, setHandUsersId, localStorageUserId, setLocalStorageUserId, userProduct, setUserProduct]= useOutletContext();
  const [basket, setBasket] = useState(localBasket ? localBasket : [])

  const calculateDiscountedPrice = (salePrice, discountPercentage) => {
    const discountAmount = salePrice * (discountPercentage / 100);
    const discountedPrice = salePrice - discountAmount;
    return discountedPrice;
  };
  const [filteredProduct, setfilteredProduct] = useState(userProduct)
  const handleSearch = (inpvalue) => {
    const filtered = userProduct.filter((x) => x.name.toLowerCase().trim().includes(inpvalue.toLowerCase().trim()))
    setfilteredProduct(filtered)
  }

  useEffect(() => {
    setfilteredProduct(userProduct)
  }, [userProduct])

  const sortbyPrice = (value) => {
    let sortedProduct = [...filteredProduct]
    if (value == "a") {
      sortedProduct.sort((a, z) => a.salePrice - z.salePrice)
    } else if (value == "z") {
      sortedProduct.sort((a, z) => z.salePrice - a.salePrice)
    }
    setfilteredProduct(sortedProduct)
  }

  const sortbyName = (value) => {
    const sortName = [...filteredProduct]
    if (value == 'a') {
      sortName.sort((a, b) => a.name.localeCompare(b.name))
    }
    else if (value == 'b') {
      sortName.sort((a, b) => b.name.localeCompare(a.name))
    }
    setfilteredProduct(sortName)
  }






  /* busket function */

  const getBusket = (id) => {
   
    userProduct.map((item) => {

      if (id === item.id) {
        console.log(item);
        if (basket.includes(item)) {
          basket.map(pro => {
            if (pro.id == id) {
              pro.count++
              patch(endpoints.products,id,pro);
              return pro
            }
          })
         
          setBasket(basket)
          localStorage.setItem('basket', JSON.stringify(basket))
        } else {
          
          setBasket([...basket, item]);
          setBasketState(count => count + 1);
        }

        localStorage.setItem('basket', JSON.stringify(basket))
      }
    })

  }




  return (
    <>
      <input type="text" placeholder="Search..." style={{ padding: '5px', width: '300px' }} onChange={(e) => handleSearch(e.target.value)} />

      <select name="" id="" onChange={(e) => sortbyPrice(e.target.value)} style={{ padding: '5px 20px', marginLeft: '10px' }}>
        <option value="a">Min price</option>
        <option value="z">Max price</option>
      </select>

      <select name="" id="" onChange={(e) => sortbyName(e.target.value)} style={{ padding: '5px 20px', marginLeft: '10px' }}>
        <option value="a">A-Z sort for name</option>
        <option value="b">Z-A sort for name</option>
      </select>

      <Grid container spacing={2} style={{ marginTop: '50px' }}>
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

                  <Typography variant="body2" color="text.secondary">STOCKCOUNT:
                    {el.stockCount}
                  </Typography>
                  <Typography variant="body1">
                    Price: ${el.salePrice} (Discounted: $
                    {calculateDiscountedPrice(
                      el.salePrice,
                      el.discountPercentage
                    )}
                    )
                  </Typography>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "23px", fontFamily: "sans-serif" }}>                  <Button color="secondary"><Link to={"/userproductdetail/" + el._id} style={{ backgroundColor: 'gray', padding: '3px 10px', textDecoration: 'none', color: 'white' }}>Detail</Link></Button>
                    {handUsersId ? <Button onClick={() => getBusket(el.id)} style={{ border: "2px solid blue" }} color="primary"><ShoppingBasketIcon /></Button> : <div>Alis ucun login lazimdir</div>}</div>
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
