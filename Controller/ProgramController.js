const ProgramModel=require('../models/ProgramModel')


exports.addProgram = async(req,res)=>{
    let prgramToAdd=await ProgramModel.create({
        title:req.body.title
    })
if(!prgramToAdd){
    return res.status(400).json({error:'Something went wrong'})
}
res.send(programToAdd)
}