import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../features/noteSlice";
import { toast } from "react-toastify";
const UpdateNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notes);
  const updateNoteList = notesList.filter((notes) => notes.id === id);
  const updateNoteData = updateNoteList[0].noteData;
  const [updatedNote, setUpdateNoted] = useState(updateNoteData);
  const[titleErr,setTitleErr]=useState(false)
  const[highlightErr,setHighlightTitleErr]=useState(false)
  const[descriptionErr,setDescriptionTitleErr]=useState(false)
  const handleUpdate = (e) => {
    setUpdateNoted({
      ...updatedNote,
      [e.target.name]: e.target.value,
      id,
    });
  };
  const updateNotesHandle = () => {
    if(updatedNote.title===""){
      setTitleErr(true)
      setHighlightTitleErr(false)
      setDescriptionTitleErr(false)
    }
    else if(updatedNote.highlight===""){
      setHighlightTitleErr(true)
      setTitleErr(false)
      setDescriptionTitleErr(false)
    }
    else if(updatedNote.description===""){
      setDescriptionTitleErr(true)
      setHighlightTitleErr(false)
      setTitleErr(false)
    }
    else{
      toast.success("Note Updated Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(updateNote(updatedNote));
      navigate("/notes");
    }
   
  };
  return (
    <>
      <section className="container py-4 notes-heading">
        <h4 className=" text-start">Update Notes</h4>
        <p className=" text-start ">Make Notes Effectively</p>
        <div className="row" id="first-second">
          <div className="col-lg-7 order-md-1 order-2 col-md-12 col-sm-12">
            <div className="form">
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control  mr-auto"
                  placeholder="Please Enter Title"
                  value={updatedNote.title}
                  onChange={handleUpdate}
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
                  placeholder="Enter Note Highlight"
                  value={updatedNote.highlight}
                  onChange={handleUpdate}
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
                name="description"
                className="form-control  mr-auto"
                placeholder="Please Enter Description"
                value={updatedNote.description}
                onChange={handleUpdate}
                maxLength={300}
                onInput={()=>{setDescriptionTitleErr(false)}}
              ></textarea>
               {
                  descriptionErr &&   <div className="error py-2">
               <span className="text-danger font-bold">Please Enter Description</span>
              </div>
                }
              <div className="pt-3">
                <button
                  className="btn btn-custom"
                  onClick={() => {
                    updateNotesHandle();
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-md-5 order-md-2 order-1 text-center"
            id="custom-bg"
          >
            <img
              src="/images/updatenotes.svg"
              className="img-fluid w-75"
              alt="images"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateNotes;
