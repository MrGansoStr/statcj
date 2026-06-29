import { useState } from "react";
import {
  AnswerCommentAPI,
  DeleteCommentAPI,
  EditCommentAPI,
  MakeCommentAPI,
} from "../services/private.service";
import { useSelector } from "react-redux";
import SubmitData from "./../utilities/SubmitData";
import { DefaultCommentModel } from "../models/CommentsModel";
import {
  DefaultEmptyComment,
  DefaultNotLoggedError,
} from "../models/GenericMessageError";

const UseComment = () => {
  const [comment, setComment] = useState("");
  const [showError, setShowError] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [typeAction, setTypeAction] = useState("answer");
  const [actionComment, setActionComment] = useState("");
  const [msgError, setMsgError] = useState(null);
  const [ModalDelete, setModalDelete] = useState(false);

  const userState = useSelector((store) => store.user);

  const ChangeComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const ChangeActionComment = (e) => {
    e.preventDefault();
    setActionComment(e.target.value);
  };

  const HideError = (e) => {
    e.preventDefault();
    setShowError(false);
  };

  const HideShowAction = (e) => {
    e.preventDefault();
    setShowAction(false);
  };

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
  };

  const MakeComment = async (e) => {
    e.preventDefault();
    if (comment.length === 0) {
      setMsgError(DefaultEmptyComment);
      setShowError(true);
      return;
    } else {
      if (Object.keys(userState).length <= 1) {
        setMsgError(DefaultNotLoggedError);
        setShowError(true);
        return;
      }
      try {
        let CommentModel = DefaultCommentModel;
        CommentModel.userId = userState?.idUser;
        CommentModel.comment = comment;
        let result = await SubmitData(MakeCommentAPI(CommentModel));
        return;
      } catch (error) {
        return;
      }
    }
  };

  const MakeAnswer = async (e, infoCommentToAnswer, comment) => {
    e.preventDefault();
    if (comment.length === 0 || actionComment.length === 0) {
      setMsgError(DefaultEmptyComment);
      setShowError(true);
      return;
    } else {
      if (Object.keys(userState).length <= 1) {
        setMsgError(DefaultNotLoggedError);
        setShowError(true);
        return;
      }
      try {
        let CommentModel = {
          idToAnswer: infoCommentToAnswer?.idComment,
          ...DefaultCommentModel,
        };
        CommentModel.userId = userState?.idUser;
        CommentModel.comment = actionComment;
        let result = await SubmitData(AnswerCommentAPI(CommentModel));
        if (result) {
          window.location.reload();
        }
        return;
      } catch (error) {
        return;
      }
    }
  };

  const EditComment = async (e, infoCommentToEdit, comment) => {
    e.preventDefault();
    if (comment.length === 0 || actionComment.length === 0) {
      setShowError(true);
      return;
    } else {
      try {
        let result = await SubmitData(
          EditCommentAPI({
            idComment: infoCommentToEdit.idComment,
            newComment: actionComment,
          }),
        );
        if (result) {
          window.location.reload();
        }
      } catch (error) {
        return;
      }
    }
  };

  const OpenModalDelete = (e) => {
    e.preventDefault();
    setModalDelete(true);
  };

  const HideModalDelete = () => {
    setModalDelete(false);
  };
  const DeleteComment = async (e, InfoComment) => {
    e.preventDefault();
    try {
      let result = await SubmitData(
        DeleteCommentAPI({
          idComment: InfoComment.idComment,
          userId: userState.idUser,
        }),
      );
      setModalDelete(false);
      return;
    } catch (error) {
      return;
    }
  };
  return {
    showError,
    typeAction,
    showAction,
    actionComment,
    msgError,
    ModalDelete,
    HideModalDelete,
    OpenModalDelete,
    DeleteComment,
    ChangeActionComment,
    ChangeShowAction,
    HideShowAction,
    EditComment,
    MakeAnswer,
    ChangeComment,
    MakeComment,
    HideError,
  };
};
export default UseComment;

