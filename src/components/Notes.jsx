import React, { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash, BsEyeFill, BsXCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../features/noteSlice";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { NotificationAudio } from "../ulits/Noticafication";
import { motion, AnimatePresence } from "framer-motion"
const Notes = () => {
  const notesList = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const deleteNotesHandle = (id) => {
    dispatch(deleteNote(id));
    toast.success("Note Deleted Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    NotificationAudio();
  };
  return (
    <>
      <div className="container py-4 my-md-4">
        <div className="row py-md-4 my-md-4">
          <AnimatePresence>
            {notesList.length ? (
              notesList.map((element, index) => (
                <motion.div
                  className="col-xl-4 col-md-5 col-sm-12"
                  key={index}
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index* 0.3,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    staggerChildren: 0.3,
                    delayChildren: 0.2,
                    duration: 1,
                  }}
                >
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
                          <NavLink to={`/update/${element.id}`}>
                            {" "}
                            <BsPencilSquare className="fas fa-edit" />
                          </NavLink>
                          <BsTrash
                            className="fas fa-delete"
                            onClick={() => deleteNotesHandle(element.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-md-12 col-sm-12 text-center  py-4"
                id="custom-bg"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay:0.2,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    staggerChildren: 0.3,
                    delayChildren: 0.2,
                    duration: 1,
                  }}
              >
                <h4 className="font-weight-bold">No Notes Exists</h4>
                <img
                  src="images/nodata.svg"
                  className="img-fluid py-4 w-25"
                  alt="images"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Notes;
