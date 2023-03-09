import { useState } from 'react';

const UseComment = () => {
  const [comment, setComment] = useState("");
  const [showError, setShowError] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [typeAction, setTypeAction] = useState("answer");
  const ChangeComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
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

  const MakeAnswer = (e, comment) => {
    e.preventDefault();
    setShowAction(true);
    console.log(comment?.idComment);
    console.log("Making Answer");
  }

  const EditComment = (e, comment) => {
    e.preventDefault();
    setShowAction(true);
    console.log(comment?.idComment);
    console.log("Edit Comment");
  }
  
  return {showError,typeAction, showAction, ChangeShowAction, HideShowAction, EditComment, MakeAnswer,ChangeComment, MakeComment, HideError};
}
export default UseComment;