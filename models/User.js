/**
 * Created by baolei on 4/2/2018.
 */
"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:{type:String,trim:true},
    email:{type:String,trim:true,required:true}
})