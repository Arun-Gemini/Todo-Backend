const Todo = require("../models/Todo");
exports.getTodo = async(req,res) => {
     try{
          // fetch all todo items from database
          const todoss = await Todo.find({}); //-> find will fetch all todo items

          // response
          res.status(200).json({
               success : true,
               data : todoss,
               message : "entire todo data is fetched",
          })
     }
     catch(err){
          console.error(err);
          response.status(500).json({
               success : false,
               error:err.message,
               message : "Server Error",
          })
     }
}

exports.getTodoById = async(req,res) => {
     try{

          // extracting items basis on id
          const id = req.params.id;
          const todo = await Todo.findById({_id : id});

          if(!todo){
               return res.status(404).json({
                    success : false,
                    message : "No data found with given id",
               });

          }
          // data for given id is found

          res.status(200).json({
               success : true,
               data : todo,
               message  : `Todo ${id} data successfully fetched`,
          })
     }
     catch(err){
          console.error(err);
          res.staus(500).json({
               success: false,
               error : err.message,
               message : "Server Error"
          })
     }
}