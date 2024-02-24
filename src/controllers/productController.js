const db = require("../app")


const getProducts = (req,res)=>{
    console.log("Reached")
    const query = 'Select * from products'
    db.query(query,(err,results)=>{
        if(err){
            console.log("Error fetching products:",err)
            res.status(500).json({error:"An error occured while fetching products"})
            return;
        }
        res.status(200).json({message:"Fetched the products"})
    })
    
}

module.exports = {
    getProducts
}