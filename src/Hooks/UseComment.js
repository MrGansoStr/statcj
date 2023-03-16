import { useState } from 'react';

const UseComment = () => {
  const [comment, setComment] = useState("");
  const [showError, setShowError] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [typeAction, setTypeAction] = useState("answer");
  const [actionComment, setActionComment] = useState("");

  const ChangeComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  }

  const ChangeActionComment = (e) => {
    e.preventDefault();
    setActionComment(e.target.value);
  }

  const HideError = (e) => {
    e.preventDefault();
    setShowError(false);
  }

  const HideShowAction = (e) => {
    e.preventDefault();
    setShowAction(false);
  }

  const ChangeShowAction = (e, type) => {
    e.preventDefault();
    if(type === "answer") {
      setTypeAction("answer");
      setShowAction(true);
      return;
    }
    else {
      setTypeAction("edit");
      setShowAction(true);
    }
  }

  const MakeComment = (e) => {
    e.preventDefault();
    if(comment.length === 0) {
      setShowError(true)
      console.log("Hay un Error en el comentario");
      return
    }
    else {
      console.log("Comentario Registrado");
      return;
    }
  }

  const MakeAnswer = (e, infoCommentToAnswer, comment) => {
    e.preventDefault();
    if(comment.length === 0){
      setShowError(true);
      console.log("La respuesta está vacia")
      return;
    }
    console.log(infoCommentToAnswer?.idComment);
    console.log("Make Answer s", actionComment);
  }

  const EditComment = (e, infoCommentToAnswer, comment) => {
    e.preventDefault();
    if(comment.length === 0){
      setShowError(true);
      console.log("El edit no debe estar vacio");
      return;
    }
    console.log(infoCommentToAnswer?.idComment);
    console.log("Edit comment", actionComment);
  }
  
  return {showError,typeAction, showAction, actionComment, ChangeActionComment, ChangeShowAction, HideShowAction, EditComment, MakeAnswer,ChangeComment, MakeComment, HideError};
}
export default UseComment;