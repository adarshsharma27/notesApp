import React, { useState } from "react";
import { addNote } from "../features/noteSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NotificationAudio } from "../ulits/Noticafication";
import { motion } from "framer-motion";
const CreateNotes = () => {
  const [titleErr, setTitleErr] = useState(false);
  const [highlightErr, setHighlightTitleErr] = useState(false);
  const [descriptionErr, setDescriptionTitleErr] = useState(false);
  const [createNote, setCreateNote] = useState({
    title: "",
    highlight: "",
    description: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addNotesHandle = () => {
    if (createNote.title === "") {
      setTitleErr(true);
      setHighlightTitleErr(false);
      setDescriptionTitleErr(false);
    } else if (createNote.highlight === "") {
      setHighlightTitleErr(true);
      setTitleErr(false);
      setDescriptionTitleErr(false);
    } else if (createNote.description === "") {
      setDescriptionTitleErr(true);
      setHighlightTitleErr(false);
      setTitleErr(false);
    } else {
      setTitleErr(false);
      setHighlightTitleErr(false);
      setDescriptionTitleErr(false);
      dispatch(addNote(createNote));
      toast.success("Note Created Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      NotificationAudio();
      navigate("/notes");
    }
  };
  const handleInput = (e) => {
    setCreateNote({ ...createNote, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="container py-4 notes-heading">
        <motion.h4
          className="text-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          Make Notes
        </motion.h4>
        <motion.p
          className=" text-start"
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
                x: { type: "spring", stiffness: 60 },
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
                  value={createNote.title}
                  onChange={handleInput}
                  autoComplete="off"
                  maxLength={100}
                  onInput={() => {
                    setTitleErr(false);
                  }}
                />
                {titleErr && (
                  <div className="error py-2">
                    <span className="text-danger font-bold">
                      Please Enter Title
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="highlight"
                  className="form-control  mr-auto"
                  placeholder="Please Enter Highlight"
                  value={createNote.highlight}
                  onChange={handleInput}
                  autoComplete="off"
                  maxLength={100}
                  onInput={() => {
                    setHighlightTitleErr(false);
                  }}
                />
                {highlightErr && (
                  <div className="error py-2">
                    <span className="text-danger font-bold">
                      Please Enter Highlight
                    </span>
                  </div>
                )}
              </div>
              <textarea
                className="form-control  mr-auto"
                placeholder="Please Enter Description"
                name="description"
                value={createNote.description}
                onChange={handleInput}
                autoComplete="off"
                maxLength={300}
                onInput={() => {
                  setDescriptionTitleErr(false);
                }}
              ></textarea>
              {descriptionErr && (
                <div className="error py-2">
                  <span className="text-danger font-bold">
                    Please Enter Description
                  </span>
                </div>
              )}
              <div className="pt-3">
                <motion.button
                  className="btn btn-custom"
                  onClick={() => addNotesHandle()}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#2bc48a",
                    transition: { type: "spring", stiffness: 500 },
                  }}
                >
                  Create
                </motion.button>
              </div>
            </motion.div>
          </div>
          <div
            className="col-md-5 order-md-2 order-1 text-center"
            id="custom-bg"
          >
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
              }}
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
