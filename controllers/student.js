


import StudentData from '../models/student.js';

export const getStudents=async(req,res)=>{
    try {
        const allStudents=await StudentData.find();
        //ok
        res.status(200).json(allStudents)
    } catch (error) {
        //filenotfound
        res.status(404).json({message:error.message})
    }


}

export const createStudents=async(req,res)=>{
    
    
    const student=req.body;
    const newStudent=new StudentData(student);
    try {
       await newStudent.save()
       //creeate
       res.status(201).json(newStudent);
    } catch (error) {
        //conflict in saving
        res.status(409).json({message:error.message});
        
    }
  }
  export const deleteStudent = async (req, res) => {
    const id = req.params.id;
  
    try { 
      await StudentData.findByIdAndRemove(id).exec();
      res.send("Succesfully deleted");
    }
    catch (err) {
      console.log(err);
    }
  }
  
   module.exports = { getStudents, createStudents, deleteStudent };




