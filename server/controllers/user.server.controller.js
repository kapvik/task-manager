import mongoose from 'mongoose';

//import models
import User from '../models/User';

export const getUser = (req,res) => {
  User.find().exec((err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Todos fetched successfully',user});
  });
}

export const updateUser = (req,res) => {
  User.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,user) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(user);
    return res.json({'success':true,'message':'Updated successfully',user});
  })
}
