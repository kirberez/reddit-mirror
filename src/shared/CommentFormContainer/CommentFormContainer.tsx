import React, { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCommentInFormFailed,
  updateCommentInFormSuccess,
} from "../../store/commentInForm/actions";
import { RootState } from "../../store/store";
import { CommentForm } from "../CommentForm";

interface ICommentFormContainerProps {
  margin?: string;
  authorName?: string;
  onClose?: () => void;
}

export function CommentFormContainer({
  onClose,
  authorName,
  margin,
}: ICommentFormContainerProps) {
  const userAppeal = authorName ? authorName + ", " : ""; // Делаем обращение к автору поста
  const value = useSelector<RootState, string>(
    (state) => state.commentInFormReducer.commentText
  );
  const dispatch = useDispatch(); // манипулирует экшенами (передаёт их в редьюсер)
  const ref = useRef<HTMLTextAreaElement>(null);

  // Это для обращения по имени
  const moveCareAtEnd = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const temp_value = event.target.value;
    if (!temp_value) {
      event.target.value = "";
      event.target.value = userAppeal + temp_value;
    }
  };

  function modalHandlerClick(event: MouseEvent) {
    if (event.target instanceof Node && !ref.current?.contains(event.target)) {
      onClose?.();
    }
  }

  //
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", modalHandlerClick);
    return () => document.removeEventListener("click", modalHandlerClick);
  }, [ref]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    try {
      dispatch(updateCommentInFormSuccess(event.target.value));
    } catch (error) {
      dispatch(updateCommentInFormFailed(error));
    }
  }

  return (
    <CommentForm
      // value={value}
      // onChange={handleChange}
      // onSubmit={handleSubmit}
      userAppeal={userAppeal}
      // refer={ref}
    />
  );
}
