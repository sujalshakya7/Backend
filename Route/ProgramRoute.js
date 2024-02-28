const router=require('express').Router()
const {addProgram}=require('../Controller/ProgramController');


router.post('/addprogram',addProgram)

module.exports=router