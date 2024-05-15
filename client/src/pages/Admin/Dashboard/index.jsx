import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PieChart } from "@mui/x-charts";
import { useOutletContext } from "react-router";
const Dashboard = () => {

  const [users, setUsers, adminId, setAdminId, localStorageId, setlocalStorageId, adProducts, setadProduct] = useOutletContext();
const FilterAdmin = users.filter(item=> item.role === "admin")
const FilterSuperA = users.filter(item=> item.role === "super-admin")
const FilterClient = users.filter(item=> item.role === "client")
/* [
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
            ] */
  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <h1>Admin Panel Dashboard</h1>
      <Grid container sx={{ width: "80%", margin: "30px auto" }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <BarChart
            series={adProducts.map(item=>(
              {data:[item.costPrice,item.salePrice,item.stockCount]}
            ))}
            height={290}
            xAxis={[{ data: ["costPrice", "salePrice", "stockCount"], scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: FilterSuperA.length, label: "Super-admin" },
                  { id: 1, value: FilterAdmin.length, label: "Admin" },
                  { id: 2, value: FilterClient.length, label: "Client" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
