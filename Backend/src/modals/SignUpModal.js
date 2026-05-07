import mongoose from "mongoose";

const signupmodel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email"],
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true,
    maxlength: [10, "phone number must 10 integers"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const SignUpModel = mongoose.model("signupmodel", signupmodel);


export default SignUpModel;