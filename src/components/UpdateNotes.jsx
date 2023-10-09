import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
const UpdateNotes = () => {
  const {id} =useParams()
  const notesList = useSelector((state) => state.noteReducer.notes);
  const updateNote= notesList.filter((notes)=>notes.id ===id)
  const updateNoteData= updateNote[0]
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
                  className="form-control  mr-auto"
                  placeholder="Please Enter Title"
                  value={updateNoteData.noteData.title}
                  onChange={(e) => {}}
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  className="form-control  mr-auto"
                  placeholder="Enter Note Highlight"
                  value={updateNoteData.noteData.highlight}
                  onChange={(e) => {}}
                />
              </div>
              <textarea
                className="form-control  mr-auto"
                placeholder="Please Enter Description"
                value={updateNoteData.noteData.description}
              ></textarea>
              <div className="pt-3">
                <button className="btn btn-custom" onClick={() => {}}>
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
