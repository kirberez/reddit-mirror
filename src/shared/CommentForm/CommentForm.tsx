import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EIcon, Icon } from '../Icon';
import styles from './commentform.css';
import { updateCommentInFormSuccess, updateCommentInFormFailed } from '../../store/commentInForm/actions';
import { RootState } from '../../store/store';
// import { makeAutoObservable } from 'mobx';
// import { observer } from "mobx-react-lite";
// import { RecoilRoot, atom, useRecoilState } from 'recoil';

type CommentFormProps = {
  userAppeal: string;
}
type CommentFormFields = {
  comment?: string; 
}

// const myComment = atom({
//   key: 'commentText',
//   default: {
//     commentText: 'Recoil',
//     error: '',
//     touched: false,
//   }
// })

// // Recoil
// export function CommentForm({ userAppeal }: CommentFormProps) {


//   const dispatch = useDispatch();
//   const commentText = useSelector<RootState, string>(state => state.commentInFormReducer.commentText);
//   const commentTextTouched = useSelector<RootState, boolean>(state => state.commentInFormReducer.touched);
//   const [commentTextError, setCommentTextError] = useState(''); // - validation

//   const handleCommentTextSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log('Touched? ', commentTextTouched);
//     console.log('Errors? ', commentTextError ? commentTextError : 'No');    

//     setCommentTextError(validateCommentText());
//     const isFormValid = !validateCommentText();
//     if (!isFormValid) return;
//     alert(`New comment is submitted: ${commentText}`);
//   };

//   const handleCommentTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     try {
//       dispatch(updateCommentInFormSuccess(event.target.value))
//     } catch (error) {
//       dispatch(updateCommentInFormFailed(error))
//     }
//   }

//   const validateCommentText = () => {
//     if (commentText.length < 3) return 'Need at least 3 syms in textarea!';
//     return '';
//   }

//   return (
//     <RecoilRoot>
//       <Form />
//     </RecoilRoot>
//   )
// };

// export function Form () {
//   const [comment, setComment] = useRecoilState(myComment);

//   const handleCommentTextSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log('Touched? ', comment.touched);
//     console.log('Errors? ', comment.error ? comment.error : 'No');    
//     setComment({
//       commentText: comment.commentText,
//       touched: comment.touched,
//       error: validateCommentText()
//     })
//     const isFormValid = !validateCommentText();
//     if (!isFormValid) return;
//     alert(`New comment is submitted: ${comment.commentText}`);
//   };

//   const handleCommentTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     try {
//       setComment({
//         commentText: event.target.value,
//         touched: true,
//         error: ''
//       })
//     } catch (error) {
//       setComment({
//         commentText: comment.commentText,
//         touched: true,
//         error: String(error)
//       })
//     }
//   }

//   const validateCommentText = () => {
//     if (comment.commentText.length < 3) return 'Need at least 3 syms in textarea!';
//     return '';
//   }


//   return (
//     <form onSubmit={handleCommentTextSubmit}>
//       <label className={styles.label} htmlFor="comment">Введите новый комментарий</label>
//       <textarea 
//         className={styles.input} 
//         id='commment' 
//         value={comment.commentText} 
//         onChange={handleCommentTextChange}
//         aria-invalid={comment.error ? 'true' : undefined}
//       />
//       {comment.touched && comment.error && (<div>{comment.error}</div>)}
//       <div className={styles.formFooterWrap}>  
//         <div className={styles.actionButtons}>
//           <Icon name={EIcon.leftAndRightArrows} width={20} height={12}/>
//           <Icon name={EIcon.pictureIcon} width={18} height={18}/>
//           <Icon name={EIcon.documentIcon} width={16} height={20}/>
//           <Icon name={EIcon.download} width={14} height={17}/>
//           <Icon name={EIcon.personPicture} width={18} height={18}/>
//           <Icon name={EIcon.roundArrows} width={22} height={16}/>
//           <Icon name={EIcon.connectIcon} width={20} height={10}/>
//           <Icon name={EIcon.voiceCamera} width={20} height={18}/>
//           <Icon name={EIcon.dialog} width={20} height={20}/>
//           <Icon name={EIcon.editIcon} width={18} height={18}/>
//           <Icon name={EIcon.aIcon} width={16} height={18}/>
//           <Icon name={EIcon.pdfDocument} width={20} height={20}/>
//         </div>
//         <button 
//           type='submit' 
//           className={styles.button} 
//           // aria-disabled={commentTextError ? "true" : undefined} // validation rules here!
//         >
//           Комментировать
//         </button>
//       </div>
//     </form>
//   )
// }



// // MobX
// class Comment {
//   commentText = 'MobX initial value'
//   touched = false
//   error = ''

//   constructor() {
//     makeAutoObservable(this)
//   }
//   updateCommentText(newCommentText: string) {
//     this.commentText = newCommentText
//   }
//   setTouched(isTouched: boolean) {
//     this.touched = isTouched
//   }
//   setCommentTextError(error: string) {
//     this.error = error
//   }
// }

// const myComment = new Comment(); // obj of class Comment

// export const CommentForm = observer(({ userAppeal }: CommentFormProps) => {
//   const commentText = myComment.commentText;
//   const commentTextTouched = myComment.touched;
//   const commentTextError = myComment.error;

//   const handleCommentTextSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log('Touched? ', commentTextTouched);
//     console.log('Errors? ', commentTextError ? commentTextError : 'No');    

//     myComment.setCommentTextError(validateCommentText());
//     const isFormValid = !validateCommentText();
//     if (!isFormValid) return;
//     alert(`New comment is submitted: ${commentText}`);
//   };

//   const handleCommentTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     try {
//       myComment.updateCommentText(event.target.value)
//     } catch (error) {
//       myComment.setCommentTextError(String(error))
//     }
//   }

//   const validateCommentText = () => {
//     if (commentText.length < 3) return 'Need at least 3 syms in textarea!';
//     return '';
//   }

//   return (
//     <form onSubmit={handleCommentTextSubmit}>
//       <label className={styles.label} htmlFor="comment">Введите новый комментарий</label>
//       <textarea 
//         className={styles.input} 
//         id='commment' 
//         value={commentText} 
//         onChange={handleCommentTextChange}
//         aria-invalid={commentTextError ? 'true' : undefined}
//       />
//       {commentTextTouched && commentTextError && (<div>{commentTextError}</div>)}
//       <div className={styles.formFooterWrap}>  
//         <div className={styles.actionButtons}>
//           <Icon name={EIcon.leftAndRightArrows} width={20} height={12}/>
//           <Icon name={EIcon.pictureIcon} width={18} height={18}/>
//           <Icon name={EIcon.documentIcon} width={16} height={20}/>
//           <Icon name={EIcon.download} width={14} height={17}/>
//           <Icon name={EIcon.personPicture} width={18} height={18}/>
//           <Icon name={EIcon.roundArrows} width={22} height={16}/>
//           <Icon name={EIcon.connectIcon} width={20} height={10}/>
//           <Icon name={EIcon.voiceCamera} width={20} height={18}/>
//           <Icon name={EIcon.dialog} width={20} height={20}/>
//           <Icon name={EIcon.editIcon} width={18} height={18}/>
//           <Icon name={EIcon.aIcon} width={16} height={18}/>
//           <Icon name={EIcon.pdfDocument} width={20} height={20}/>
//         </div>
//         <button 
//           type='submit' 
//           className={styles.button} 
//           // aria-disabled={commentTextError ? "true" : undefined} // validation rules here!
//         >
//           Комментировать
//         </button>
//       </div>
//     </form>
//   )
// })

 // With Redux
export function CommentForm({ userAppeal }: CommentFormProps) {
  const dispatch = useDispatch();
  const commentText = useSelector<RootState, string>(state => state.commentInFormReducer.commentText);
  const commentTextTouched = useSelector<RootState, boolean>(state => state.commentInFormReducer.touched);
  const [commentTextError, setCommentTextError] = useState(''); // - validation

  // // Обращение по имени. !TODO
  // const moveCareAtEnd = (event: React.FocusEvent<HTMLTextAreaElement>) => {
  //   const cur_value = event.target.value;
  //   if (!cur_value) {
  //     event.target.value = '';
  //     event.target.value = userAppeal + cur_value;
  //   }
  // }

  const handleCommentTextSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Touched? ', commentTextTouched);
    console.log('Errors? ', commentTextError ? commentTextError : 'No');    

    setCommentTextError(validateCommentText());
    const isFormValid = !validateCommentText();
    if (!isFormValid) return;
    alert(`New comment is submitted: ${commentText}`);
  };

  const handleCommentTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    try {
      dispatch(updateCommentInFormSuccess(event.target.value))
    } catch (error) {
      dispatch(updateCommentInFormFailed(error))
    }
  }

  const validateCommentText = () => {
    if (commentText.length < 3) return 'Need at least 3 syms in textarea!';
    return '';
  }

  return (
    <form onSubmit={handleCommentTextSubmit}>
      <label className={styles.label} htmlFor="comment">Введите новый комментарий</label>
      <textarea 
        className={styles.input} 
        id='commment' 
        value={commentText} 
        onChange={handleCommentTextChange}
        aria-invalid={commentTextError ? 'true' : undefined}
      />
      {commentTextTouched && commentTextError && (<div>{commentTextError}</div>)}
      <div className={styles.formFooterWrap}>  
        <div className={styles.actionButtons}>
          <Icon name={EIcon.leftAndRightArrows} width={20} height={12}/>
          <Icon name={EIcon.pictureIcon} width={18} height={18}/>
          <Icon name={EIcon.documentIcon} width={16} height={20}/>
          <Icon name={EIcon.download} width={14} height={17}/>
          <Icon name={EIcon.personPicture} width={18} height={18}/>
          <Icon name={EIcon.roundArrows} width={22} height={16}/>
          <Icon name={EIcon.connectIcon} width={20} height={10}/>
          <Icon name={EIcon.voiceCamera} width={20} height={18}/>
          <Icon name={EIcon.dialog} width={20} height={20}/>
          <Icon name={EIcon.editIcon} width={18} height={18}/>
          <Icon name={EIcon.aIcon} width={16} height={18}/>
          <Icon name={EIcon.pdfDocument} width={20} height={20}/>
        </div>
        <button 
          type='submit' 
          className={styles.button} 
          // aria-disabled={commentTextError ? "true" : undefined} // validation rules here!
        >
          Комментировать
        </button>
      </div>
    </form>
  )
};
//   // return (
//   //   <Formik
//   //     initialValues={{comment: userAppeal ? userAppeal : ''}}
//   //     validationSchema={Yup.object({
//   //       comment: Yup.string()
//   //         .min(
//   //           userAppeal
//   //             ? userAppeal.length + 1
//   //             : 3,
//   //           'Need at least any symbols besides user appeal in textarea.'
//   //         )
//   //         // .min(3, 'Need at least 3 symbols in textarea.')
//   //         .required('Required!'),
//   //     })}
//   //     onSubmit={(values, actions) => {
//   //       setTimeout(() => {
//   //         console.log(JSON.stringify(values, null, 2))
//   //         actions.setSubmitting(false)
//   //         actions.resetForm()
//   //       }, 400)
//   //     }}
//   //   >
//   //     {
//   //       formik => (
//   //         <form 
//   //           onSubmit={formik.handleSubmit}
//   //         >
//   //           <label className={styles.label} htmlFor="comment">Введите новый комментарий</label>
//   //           <Field
//   //             className={styles.input}
//   //             {
//   //               ...formik.getFieldProps('comment')
//   //             }
//   //             {
//   //               ...formik.handleChange((e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   //                 console.log('HandleChange in Formik: ', e);
//   //                 try {
//   //                   dispatch(updateCommentInFormSuccess(e.target.value))
//   //                 } catch (error) {
//   //                   dispatch(updateCommentInFormFailed(error))
//   //                 }
//   //               })
//   //             }
//   //             aria-invalid={formik.errors.comment ? 'true' : undefined}
//   //           />
//   //           {formik.errors.comment && formik.touched.comment && (
//   //             <div>{formik.errors.comment}</div>
//   //           )}
//   //           <div className={styles.formFooterWrap}>  
//   //             <div className={styles.actionButtons}>
//   //               <Icon name={EIcon.leftAndRightArrows} width={20} height={12}/>
//   //               <Icon name={EIcon.pictureIcon} width={18} height={18}/>
//   //               <Icon name={EIcon.documentIcon} width={16} height={20}/>
//   //               <Icon name={EIcon.download} width={14} height={17}/>
//   //               <Icon name={EIcon.personPicture} width={18} height={18}/>
//   //               <Icon name={EIcon.roundArrows} width={22} height={16}/>
//   //               <Icon name={EIcon.connectIcon} width={20} height={10}/>
//   //               <Icon name={EIcon.voiceCamera} width={20} height={18}/>
//   //               <Icon name={EIcon.dialog} width={20} height={20}/>
//   //               <Icon name={EIcon.editIcon} width={18} height={18}/>
//   //               <Icon name={EIcon.aIcon} width={16} height={18}/>
//   //               <Icon name={EIcon.pdfDocument} width={20} height={20}/>
//   //             </div>
//   //             <button 
//   //               type='submit' 
//   //               aria-disabled={formik.errors.comment ? 'true' : undefined}
//   //               className={styles.button}
//   //             >
//   //               Комментировать
//   //             </button>
//   //           </div>
//   //         </form>
//   //       )
//   //     }
//   //   </Formik>
//   // )
// };
