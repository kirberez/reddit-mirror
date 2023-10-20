import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useModalClose } from "../../hooks/useModalClose";
import { usePostById } from "../../hooks/usePostById";
import { ICommentProps } from "../../hooks/usePostCommentsData";
import { RootState } from "../../store/store";
import { generateRandomIndex } from "../../utils/react/generateRandomIndex";
import { Comment } from "../CardsList/Card/Comment";
import { CommentForm } from "../CommentForm";
import styles from "./post.css";

interface IPostProps {
  onClose?: () => void;
}

export function Post({ onClose }: IPostProps) {
  const [ref] = useModalClose();

  let params = useParams();
  // let postId = useParams<'id'>();
  console.log("params: ", params.id);

  if (typeof window === "undefined" || !window?.document?.createElement) {
    return null;
  }
  const modalContainer = document.querySelector("#modal_root");
  if (!modalContainer || !params.id) return null;

  const post = usePostById(params.id); // достаём 1 нужный пост из всех
  const userAppeal = post.author + ", ";
  const mainComments = useSelector<RootState, ICommentProps[]>(
    (state) => state.commentListReducer.comments
  );
  console.log("mainComments in Post: ", mainComments);

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <CommentForm userAppeal={userAppeal} />
      {mainComments.map((comment) => {
        const key = generateRandomIndex();
        return (
          <Comment
            key={key}
            comment={comment}
            list={comment.replies?.data?.children}
          />
        );
      })}
    </div>,
    modalContainer
  );
}
