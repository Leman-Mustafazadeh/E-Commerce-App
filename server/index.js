const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 5050;
const CONNECTION_STRING =
  "mongodb+srv://Laman:Aztu116178@e-commerse-app.kiibsfy.mongodb.net/?retryWrites=true&w=majority&appName=E-Commerse-App";
const DB_USERNAME = "Laman";
const DB_PASSWORD = "Aztu116178";
app.use(bodyParser.json());
const cors =require("cors")
app.use(cors())

// CRUD-user


const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    profileImg: String,
    balance: Number,
    role: String,
    basketItems: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", userSchema);


//getall
app.get("/api/users", async (req, res) => {
  const users = await UserModel.find();

  if (users.length > 0) {
    res.send({
      message: "success",
      data: users,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

//getone
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  let user;
  try {
    user = await UserModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }

  if (user) {
    res.send({
      message: "succes id",
      data: user,
    });
  } else {
    res.send({
      message: "no content",
      data: null,
    });
  }
});

//delete
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  let response;
  try {
    response = await UserModel.findOneAndDelete(id);
  } catch (error) {
    res.send({ error: error });
  }
  res.send({
    message: "deleted",
    response: response,
  });
});

//post
app.post("/api/users", async (req, res) => {
  const user = new UserModel(req.body);
  await user.save();
  res.send({
    message: "post",
    data: user,
  });
});

//patch
app.patch("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  await UserModel.findByIdAndUpdate(id, req.body);
  const response = UserModel.find((x) => x.id == id);
  res.send({
    message: "patch",
    response: response,
  });
});

// CRUD-PRODUCTS

const productSchema = new mongoose.Schema(
  {
    name: String,
    salePrice: Number,
    costPrice: Number,
    imgSrc: String,
    discountPercentage: Number,
    description: String,
    categoryId: Number,
    stockCount: Number,
    count: Number,
  },
  { timestamps: true }
);

const productModel = mongoose.model("Products", productSchema);
//getall
app.get("/api/products", async (req, res) => {
  const product = await productModel.find();
  if (product.length > 0) {
    res.send({
      message: "succes",
      data: product,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

//getone
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  let product;
  try {
    product = await productModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }
  if (product) {
    res.send({
      message: "succes id",
      data: product,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

//delete
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  let product;
  try {
    product = await productModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({ error: error });
  }

  res.send({
    message: "deletd",
    data: product,
  });
});

//post
app.post("/api/products", async (req, res) => {
  const product = new productModel(req.body);
  await product.save();
  res.send({
    message: "post",
    data: product,
  });
});

//patch
app.patch("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await productModel.findByIdAndUpdate(id, req.body);
  res.send({
    message: "patch",
    data: product,
  });
});

// CRUD-CATEGORIES

const categoriesSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const categoriesModel = mongoose.model("Categories", categoriesSchema);
//getall
app.get("/api/categories", async (req, res) => {
  const category = await categoriesModel.find();
  if (category.length > 0) {
    res.send({
      message: "succes",
      data: category,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

//getone
app.get("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  let category;
  try {
    category = await categoriesModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }
  if (category) {
    res.send({
      message: "succes id",
      data: category,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

//delete
app.delete("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  let category;
  try {
    category = await categoriesModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({ error: error });
  }
  res.send({
    message: "deletd",
    data: category,
  });
});

//post
app.post("/api/categories", async (req, res) => {
  const category = new categoriesModel(req.body);
  await category.save();
  res.send({
    message: "post",
    data: category,
  });
});

//patch
app.patch("/api/categories/:id", async (req, res) => {
  const { id } = req.params;
  const category = await categoriesModel.findByIdAndUpdate(id, req.body);
  res.send({
    message: "patch",
    data: category,
  });
});

// CRUD-MESSAGES

const messagesSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    title: String,
    message: String,
  },
  { timestamps: true }
);

const messagesModel = mongoose.model("MESSAGES", messagesSchema);
//getall
app.get("/api/messages", async (req, res) => {
  const messag = await messagesModel.find();
  if (messag.length > 0) {
    res.send({
      message: "succes",
      data: messag,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

//getone
app.get("/api/messages/:id", async (req, res) => {
  const { id } = req.params;
  let messag;
  try {
    messag = await messagesModel.findById(id);
  } catch (error) {
    res.send({ error: error });
  }
  if (messag) {
    res.send({
      message: "succes id",
      data: messag,
    });
  } else {
    res.send({
      message: "not found",
      data: null,
    });
  }
});

//delete
app.delete("/api/messages/:id", async (req, res) => {
  const { id } = req.params;
  let messag;
  try {
    messag = await messagesModel.findByIdAndDelete(id);
  } catch (error) {
    res.send({ error: error });
  }
  res.send({
    message: "deletd",
    data: messag,
  });
});

//post
app.post("/api/messages", async (req, res) => {
  const messag = new messagesModel(req.body);
  await messag.save();
  res.send({
    message: "post",
    data: messag,
  });
});

//patch
app.patch("/api/messages/:id", async (req, res) => {
  const { id } = req.params;
  const messag = await messagesModel.findByIdAndUpdate(id, req.body);
  res.send({
    message: "patch",
    data: messag,
  });
});

mongoose.connect(CONNECTION_STRING).then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Example app listening ${PORT}`);
});
