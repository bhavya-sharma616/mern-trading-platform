const {Schema}=require('mongoose')
const bcrypt=require("bcryptjs")

const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
    },
    password: {
    type: String,
    required: [true, "Your password is required"],
    },

})

UserSchema.pre("save",async function() {
    if(!this.isModified("password"))return;
    this.password=await bcrypt.hash(this.password,12);
})

module.exports = { UserSchema };