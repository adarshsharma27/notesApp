import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../features/noteSlice";
import { toast } from "react-toastify";
import { NotificationAudio } from "../ulits/Noticafication";
import { motion } from "framer-motion";
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
      NotificationAudio();
      navigate("/notes");
    }
   
  };
  return (
    <>
      <section className="container py-4 notes-heading">
        <motion.h4
          className=" text-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          Update Notes
        </motion.h4>
        <motion.p
          className=" text-start "
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          Make Notes Effectively
        </motion.p>
        <div className="row" id="first-second">
          <div className="col-lg-7 order-md-1 order-2 col-md-12 col-sm-12">
            <motion.div
              className="form"
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control  mr-auto"
                  placeholder="Please Enter Title"
                  value={updatedNote.title}
                  onChange={handleUpdate}
                  maxLength={100}
                  onInput={() => {
                    setTitleErr(false);
                  }}
                />
                {titleErr && (
                  <motion.div
                    className="error py-2"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                      x: [-30, -20, -10, 0, 10, 20, 30, 30, 20, 10, 0],
                      opacity: 1,
                    }}
                    exit={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      y: { type: "spring", stiffness: 500 },
                      opacity: { duration: 0.4 },
                      ease: "easeIn",
                      duration: 0.5,
                    }}
                  >
                    <span className="text-danger font-bold">
                      Please Enter Title
                    </span>
                  </motion.div>
                )}
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
                  onInput={() => {
                    setHighlightTitleErr(false);
                  }}
                />
                {highlightErr && (
                  <motion.div
                    className="error py-2"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                      x: [-30, -20, -10, 0, 10, 20, 30, 30, 20, 10, 0],
                      opacity: 1,
                    }}
                    exit={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      y: { type: "spring", stiffness: 500 },
                      opacity: { duration: 0.4 },
                      ease: "easeIn",
                      duration: 0.5,
                    }}
                  >
                    <span className="text-danger font-bold">
                      Please Enter Highlight
                    </span>
                  </motion.div>
                )}
              </div>
              <textarea
                name="description"
                className="form-control  mr-auto"
                placeholder="Please Enter Description"
                value={updatedNote.description}
                onChange={handleUpdate}
                maxLength={300}
                onInput={() => {
                  setDescriptionTitleErr(false);
                }}
              ></textarea>
              {descriptionErr && (
                <motion.div
                  className="error py-2"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{
                    x: [-30, -20, -10, 0, 10, 20, 30, 30, 20, 10, 0],
                    opacity: 1,
                  }}
                  exit={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", stiffness: 500 },
                    opacity: { duration: 0.4 },
                    ease: "easeIn",
                    duration: 0.5,
                  }}
                >
                  <span className="text-danger font-bold">
                    Please Enter Description
                  </span>
                </motion.div>
              )}
              <div className="pt-3">
                <motion.button
                  className="btn btn-custom"
                  onClick={() => {
                    updateNotesHandle();
                  }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#2bc48a",
                    transition: { type: "spring", stiffness: 500 },
                  }}
                >
                  Update
                </motion.button>
              </div>
            </motion.div>
          </div>
          <div
            className="col-md-5 order-md-2 order-1 text-center"
            id="custom-bg"
          >
            <motion.img
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
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
