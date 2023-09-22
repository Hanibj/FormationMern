var mongoose=require("mongoose")
const Schema = mongoose.Schema;
let userSchema = new Schema({

nom : String,
prenom:String,
email:String,
password:String,
});
let user = mongoose.model("user", userSchema);
module.exports = user;