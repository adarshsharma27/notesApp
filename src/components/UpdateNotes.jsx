import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../features/noteSlice";
const UpdateNotes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.noteReducer.notes);
  const updateNoteList = notesList.filter((notes) => notes.id === id);
  const updateNoteData = updateNoteList[0].noteData;
  const [updatedNote, setUpdateNoted] = useState(updateNoteData);
  const handleUpdate = (e) => {
    setUpdateNoted({
      ...updatedNote,
      [e.target.name]: e.target.value,
      id,
    });
  };
  const updateNotesHandle = () => {
    dispatch(updateNote(updatedNote));
    navigate("/notes");
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
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="highlight"
                  className="form-control  mr-auto"
                  placeholder="Enter Note Highlight"
                  value={updatedNote.highlight}
                  onChange={handleUpdate}
                />
              </div>
              <textarea
                name="description"
                className="form-control  mr-auto"
                placeholder="Please Enter Description"
                value={updatedNote.description}
                onChange={handleUpdate}
              ></textarea>
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
