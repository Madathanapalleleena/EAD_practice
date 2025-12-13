const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
let users=[];
app.post('/register',(req,res)=>{
    const {username,password}=req.body;
    if (!username || !password){
        return res.status(400).json({message:"Username and password are required"});
    }
    users.push({username,password});
    return res.json({message:"User registered successfully",users});

});
app.get('/users',(req,res)=>{
    res.json(users);
})

app.get('/api/calc/:operation',(req,res)=>{
    const {operation} =req.params;
    const {num1,num2}=req.query;
    const a=parseFloat(num1);
    const b=parseFloat(num2);
    let result;
    switch(operation){
        case "add":
            result=a+b;
            break;
        case "substract":
            result=a-b;
            break;
        case "multiply":
            result=a*b;
            break;
        case "divide":
            if (b===0){
                return res.status(400).json({message:"Cannot divide by zero"});
            }   
            result=a/b;
            break; 
        default:
            return res.status(400).json({message:"Invalid operation"});
        
    }

     res.json({operation,num1:a,num2:b,result});
})


app.get('/greet/:name',(req,res)=>{
    const {name}=req.params;
    const {title}=req.query;
    if (!name){
        return res.status(400).json({message:"Name is required"});
    }

    const greeting= title? `hello ${title} ${name}`:`hello ${name}`;
    res.json({greeting});
})


let products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
  { id: 2, name: "Shoes", category: "Fashion", price: 1500 }
];

// GET /products/:id
app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) return res.status(404).json({ message: "Product not found" });

  res.json(product);
});

// POST /products
app.post("/products", (req, res) => {
  const { id, name, category, price } = req.body;

  if (!id || !name || !category || !price) {
    return res.status(400).json({ message: "All fields required" });
  }

  products.push({ id, name, category, price });
  res.json({ message: "Product added", products });
});

const SECRET = "secret123";

// Login → returns JWT
app.post('/login', (req, res) => {
  const token = jwt.sign({ username: req.body.username }, SECRET);
  res.json({ token });
});

// Protected route
app.get('/home', (req, res) => {
  try {
    const data = jwt.verify(req.headers.authorization, SECRET);
    res.json({ message: "Hello " + data.username });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});


app.listen(5000,()=>{console.log("Server running on port 5000");});
