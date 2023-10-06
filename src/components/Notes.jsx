import React, { useState } from "react";
import { BsPencilSquare, BsTrash, BsEyeFill, BsXCircle } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todoSlice";
const Notes = () => {
  const todosList = useSelector((state) => state.todoReducer.todos);
  console.log(todosList);
  const dispatch = useDispatch();
  const deleteTodoHandle = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <div className="container py-4">
        <div className="row">
          {todosList?.map((element, index) => (
            <div className="col-xl-4 col-md-5 col-sm-12" key={index}>
              <div className="product-card text-left">
                <div className="product-image-caption">
                  <div className="product-image-txt">
                    <div className="heading">
                      <h3>{element.title}</h3>
                    </div>
                    <div className="highlight">
                      <h5>!{element.highlight}!</h5>
                    </div>
                    <div className="description">
                      <p>{element.description}</p>
                    </div>
                    <div className="icons d-flex justify-content-end">
                      <BsPencilSquare className="fas fa-edit" />
                      <BsTrash
                        className="fas fa-delete"
                        onClick={() => deleteTodoHandle(element.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
