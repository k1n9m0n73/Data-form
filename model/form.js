//Requiring mongoose package
var mongoose=require("mongoose");

// Schema
var formSchema=new mongoose.Schema({
	first_name : String,
	last_name : String,
	pvc_number : Number,
	acct_number : Number,
	bank : String,
	state : String,
	lga : String,
	ward : String,
	pvc_image : { data: Buffer, contentType: String }

});

module.exports=mongoose.model("Form",formSchema);
