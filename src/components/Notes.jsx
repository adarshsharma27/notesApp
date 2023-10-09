import React, { useState } from "react";
import { BsPencilSquare, BsTrash, BsEyeFill, BsXCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../features/noteSlice";
import { NavLink } from "react-router-dom";
const Notes = () => {
  const notesList = useSelector((state) => state.noteReducer.notes);
  const dispatch = useDispatch();
  const deleteNotesHandle = (id) => {
    dispatch(deleteNote(id));
  };
  return (
    <>
      <div className="container py-4 my-md-4">
        <div className="row py-md-4 my-md-4">
          {notesList.length ? notesList.map((element, index) => (
            <div className="col-xl-4 col-md-5 col-sm-12" key={index}>
              <div className="product-card text-left">
                <div className="product-image-caption">
                  <div className="product-image-txt">
                    <div className="heading">
                      <h3>{element.noteData.title}</h3>
                    </div>
                    <div className="highlight">
                      <h5>!{element.noteData.highlight}!</h5>
                    </div>
                    <div className="description">
                      <p>{element.noteData.description}</p>
                    </div>
                    <div className="icons d-flex justify-content-end">
                    <NavLink to={`/update/${element.id}`}>  <BsPencilSquare className="fas fa-edit" /></NavLink>
                      <BsTrash
                        className="fas fa-delete"
                        onClick={() => deleteNotesHandle(element.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )):  <div
              className="col-md-12 col-sm-12 text-center  py-4"
              id="custom-bg"
            >
             <h4 className="font-weight-bold">No Notes Exists</h4>
              <img src="images/nodata.svg" className="img-fluid py-4 w-25" alt="images" />
            </div>}
        </div>
      </div>
    </>
  );
};

export default Notes;
