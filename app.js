var express     = require("express"),
    app         = express();
app.use(express.static("public"));
    
app.get("/",function(req,res){
    res.render("index.ejs");
});
app.get("*",function(req,res){
    res.render("index.ejs");
});
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server started");
})