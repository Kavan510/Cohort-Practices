const express = require("express");
const { nextTick } = require("process");
const app = express();

app.listen(3000, () => {
  console.log("listining on port 3000");
});

function isOldEnough(age) {
  return age >= 14;
}

function isOldEnoughMiddleware(req,res,next) {
  let age=req.query.age;
  if(age>=14) {
    next();
  }
  else{
    res.json({
      msg:"no old enough"
    })
  }
}

//if we want to use middleware for many time simply write
// order matters here where you introduced middlewares like jya define karyo hashe eni nichena j kam karshe upr nai kare simple


// app.use(isOldEnoughMiddleware);

app.get("/ride2", isOldEnoughMiddleware, (req, res) => {
  
    res.json({
      msg: "you are allowed ride this ride",
    });

});


app.get("/ride1",isOldEnoughMiddleware, (req, res) => {
    res.json({
      msg: "you are allowed ride this ride",
    });
  
});
