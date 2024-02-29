import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        //default:Date.now
        required:true
    }
})

const Notes = mongoose.model('notes',userSchema);

export default Notes;