import { useState } from 'react';
import { AnswerCommentAPI, DeleteCommentAPI, EditCommentAPI, MakeCommentAPI } from '../services/private.service';
import { useSelector } from 'react-redux';
import SubmitData from './../utilities/SubmitData';
import { DefaultCommentModel } from '../models/CommentsModel';
import { DefaultEmptyComment, DefaultNotLoggedError } from '../models/GenericMessageError';

const UseComment = () => {
  const [comment, setComment] = useState("");
  const [showError, setShowError] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [typeAction, setTypeAction] = useState("answer");
  const [actionComment, setActionComment] = useState("");
  const [msgError, setMsgError] = useState(null);

  const userState = useSelector(store => store.user);

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
    if (type === "answer") {
      setTypeAction("answer");
      setShowAction(true);
      return;
    }
    if (type === "edit") {
      setTypeAction("edit");
      setShowAction(true);
      return;
    }
    return;
  }

  const MakeComment = async (e) => {
    e.preventDefault();
    if (comment.length === 0) {
      setMsgError(DefaultEmptyComment);
      setShowError(true);
      //console.log(comment);
      console.log("Hay un Error en el comentario");
      return;
    }
    else {
      if(Object.keys(userState).length <= 1) {
        setMsgError(DefaultNotLoggedError);
        setShowError(true);
        return;
      }
      try {
        let CommentModel = DefaultCommentModel;
        CommentModel.userId = userState?.idUser;
        CommentModel.comment = comment;
        let result = await SubmitData(MakeCommentAPI(CommentModel));
        console.log(result);
        return;
      } catch (error) {
        console.error(error);
        return;
      }
    }
  }

  const MakeAnswer = async (e, infoCommentToAnswer, comment) => {
    e.preventDefault();
    if (comment.length === 0 || actionComment.length === 0) {
      setMsgError(DefaultEmptyComment);
      setShowError(true);
      console.log("La respuesta está vacia")
      return;
    }
    else{
      if(Object.keys(userState).length <= 1) {
        setMsgError(DefaultNotLoggedError);
        setShowError(true);
        return;
      }
      console.log(infoCommentToAnswer?.idComment);
      console.log("Make Answer", actionComment);
      try {
        let CommentModel = {idToAnswer: infoCommentToAnswer?.idComment, ...DefaultCommentModel};
        CommentModel.userId = userState?.idUser;
        CommentModel.comment = actionComment;
        console.log(CommentModel);

        let result = await SubmitData(AnswerCommentAPI(CommentModel));

        console.log(result);
        return;
      } catch (error) {
        console.error(error);
        return;
      }
    }
  }

  const EditComment = async (e, infoCommentToEdit, comment) => {
    e.preventDefault();
    console.log(comment);
    if (comment.length === 0 || actionComment.length === 0) {
      setShowError(true);
      console.log("El edit no debe estar vacio");
      return;
    }
    else{
      console.log(infoCommentToEdit?.idComment);
      console.log("Edit comment", actionComment);
      try {
        let result = await SubmitData(EditCommentAPI({
          idComment: infoCommentToEdit.idComment,
          newComment: actionComment
        }));
        return;
      } catch (error) {
        console.error(error);
        return; 
      }
    }
  }
  const DeleteComment = async (e, InfoComment) => {
    e.preventDefault();
    try {
      let result = await SubmitData(DeleteCommentAPI({
        idComment: InfoComment.idComment,
        userId: userState.idUser
      }));
      console.log(result);
      return;
    } catch (error) {
      console.error(error);
      return;
    }
  }
  return { showError, typeAction, showAction, actionComment, msgError, DeleteComment, ChangeActionComment, ChangeShowAction, HideShowAction, EditComment, MakeAnswer, ChangeComment, MakeComment, HideError };
}
export default UseComment;