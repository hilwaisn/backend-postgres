import express from "express";
import { pool } from "../database.js";

const app = express();
app.use(express.json());

app.get("/api/coba", async(_req,res)=>{
    res.send("Hello Hilwa");
});

app.post("/api/products", async(req,res)=>{
    const result = await pool.query("INSERT INTO products (name,price,imageUrl) VALUES ($1, $2, $3) RETURNING * ",
        [req.body.name, req.body.price, req.body.imageUrl]
    );
    res.json(result.rows[0]);
})
app.listen(3000,()=>
    console.log("Server berjalan")
)