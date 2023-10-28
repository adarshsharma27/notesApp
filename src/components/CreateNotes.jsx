import React, { useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import { addNote } from "../features/noteSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CreateNotes = () => {
  const[createNote,setCreateNote]=useState({})
  const navigate = useNavigate();
   const dispatch =useDispatch()
  const addNotesHandle=()=>{
    dispatch(addNote(createNote))
    navigate('/notes')
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
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="highlight"
                  className="form-control  mr-auto"
                  placeholder="Enter Note Highlight"
                  value={createNote.highlight}
                  onChange={handleInput}
                  maxLength={100}
                />
              </div>
              <textarea
                className="form-control  mr-auto"
                placeholder="Please Enter Description"
                name="description"
                value={createNote.description}
                onChange={handleInput}
                maxLength={300}
              ></textarea>
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
