import Notes from "../Models/noteModel.js";

export const getAllNote = async (req,res)=>{
    try{
        const note = await Notes.find()

        res.status(200).json(note)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const createNote = async (req,res)=>{
    try{
        const {title,description} = req.body

        const newNote = new Notes({title,description,date:Date()})

        const saveNote = await newNote.save()
        res.status(201).json(saveNote)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const updateNote = async (req,res)=>{
    try{
        const {title,description} = req.body
        const note = await Notes.findById(req.parames.id)
        if(note){
            note.title = title
            note.description = description
            note.date = new Date()
            const saveNote = await note.save()
            res.status(200).json(saveNote)
        }       
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const DeletedNote = async (req,res)=>{
    try{
            const note = await Notes.findByIdAndDelete(req.params.id)        
            res.status(200).json({message:"Deleted Successfully"})              
    }catch(error){
        res.status(500).json({error: error.message})
    }
}


///..........................................

// import Notes from "../Models/noteModel.js";

// export const getAllNotes = async (req,res)=>{   
//     try{
//         const notes = await Notes.find()
//         res.status(200).json(notes)
        
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// }

// export const createNote = async (req,res)=>{   
//     try{
//         const {title,description} = req.body

//         const createNotes = new Notes(
//             {
//                 title:title,
//                 description:description
//             })
//         const saveNotes = await createNotes.save()
//         res.status(201).json(saveNotes)
        
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// }


// export const updateNote = async (req,res)=>{   
//     try{
//         const {title,description} = req.body

//         const note = await Notes.findById(req.params.id)
//         if(note){
//             note.title = title
//             note.description = description
//             const saveNote = await note.save()
//             res.status(200).json(saveNote)
//         }               
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// }


// export const deletedNote = async (req,res)=>{   
//     try{
//        const note = await Notes.findByIdAndDelete(req.params.id)
//         res.status(200).json({error: error.message})
        
//     }catch(error){
//         res.status(500).json({error: error.message})
//     }
// }