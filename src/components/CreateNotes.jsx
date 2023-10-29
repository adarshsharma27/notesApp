import React, { useState } from "react";
import { addNote } from "../features/noteSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
const CreateNotes = () => {
  const[titleErr,setTitleErr]=useState(false)
  const[highlightErr,setHighlightTitleErr]=useState(false)
  const[descriptionErr,setDescriptionTitleErr]=useState(false)
  const[createNote,setCreateNote]=useState({
    title:"",
    highlight:"",
    description:""
  })
  const navigate = useNavigate();
   const dispatch =useDispatch()
  const addNotesHandle=()=>{
    if(createNote.title===""){
      setTitleErr(true)
      setHighlightTitleErr(false)
      setDescriptionTitleErr(false)
    }
    else if(createNote.highlight===""){
      setHighlightTitleErr(true)
      setTitleErr(false)
      setDescriptionTitleErr(false)
    }
    else if(createNote.description===""){
      setDescriptionTitleErr(true)
      setHighlightTitleErr(false)
      setTitleErr(false)
    }
    else{
      setTitleErr(false)
      setHighlightTitleErr(false)
      setDescriptionTitleErr(false)
      dispatch(addNote(createNote))
      toast.success("Note Created Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/notes')
    }
    
   
  }
  const handleInput=(e)=>{
    setCreateNote({...createNote,[e.target.name]:e.target.value})
  }
  return (
    <>
      <section className="container py-4 notes-heading">
        <h4 className="text-start">Make Notes</h4>
        <p className=" text-start">Make Notes Effectively</p>
        <div className="row" id="first-second">
          <div className="col-lg-7 order-md-1 order-2 col-md-12 col-sm-12">
            <div className="form">
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control  mr-auto"
                  placeholder="Please Enter Title"
                  value={createNote.title}
                  onChange={handleInput}
                  maxLength={100}
                  onInput={()=>{setTitleErr(false)}}
                />
                {
                  titleErr &&   <div className="error py-2">
               <span className="text-danger font-bold">Please Enter Title</span>
              </div>
                }
               
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="highlight"
                  className="form-control  mr-auto"
                  placeholder="Please Enter Highlight"
                  value={createNote.highlight}
                  onChange={handleInput}
                  maxLength={100}
                  onInput={()=>{setHighlightTitleErr(false)}}
                />
                {
                  highlightErr &&   <div className="error py-2">
               <span className="text-danger font-bold">Please Enter Highlight</span>
              </div>
                }
              </div>
              <textarea
                className="form-control  mr-auto"
                placeholder="Please Enter Description"
                name="description"
                value={createNote.description}
                onChange={handleInput}
                maxLength={300}
                onInput={()=>{setDescriptionTitleErr(false)}}
              ></textarea>
              {
                  descriptionErr &&   <div className="error py-2">
               <span className="text-danger font-bold">Please Enter Description</span>
              </div>
                }
              <div className="pt-3">
                <button className="btn btn-custom"  onClick={()=>addNotesHandle()} >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-md-5 order-md-2 order-1 text-center"
            id="custom-bg"
          >
            <img
              src="images/addnotes.svg"
              className="img-fluid w-75"
              alt="images"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateNotes;
