import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';

import MenuBlockIcon from '../Icons/MenuBlockIcon';
import MenuCommentIcon from '../Icons/MenuCommentIcon';
import MenuIcon from '../Icons/MenuIcon';
import MenuWarningIcon from '../Icons/MenuWarningIcon';
import MenuEditIcon from '../Icons/MenuEditIcon';
import MenuSaveIcon from '../Icons/MenuSaveIcon';
import MenuShareIcon from '../Icons/MenuShareIcon';
import MenuViewedIcon from '../Icons/MenuViewedIcon';
import IconAnon from '../Icons/IconAnon';
import CommentFormLeftAndRightArrowsIcon from '../Icons/CommentFormLeftAndRightArrowsIcon';
import CommentFormAIcon from '../Icons/CommentFormAIcon';
import CommentFormConnectIcon from '../Icons/CommentFormConnectIcon';
import CommentFormDialogIcon from '../Icons/CommentFormDialogIcon';
import CommentFormDocumentIcon from '../Icons/CommentFormDocumentIcon';
import CommentFormDownloadIcon from '../Icons/CommentFormDownloadIcon';
import CommentFormEditIcon from '../Icons/CommentFormEditIcon';
import CommentFormPdfDocumentIcon from '../Icons/CommentFormPdfDocumentIcon';
import CommentFormPersonPictureIcon from '../Icons/CommentFormPersonPictureIcon';
import CommentFormPictureIcon from '../Icons/CommentFormPictureIcon';
import CommentFormRoundArrowsIcon from '../Icons/CommentFormRoundArrowsIcon';
import CommentFormVoiceCameraIcon from '../Icons/CommentFormVoiceCameraIcon';

export enum EIcon {
  menu = 'menu',
  block = 'block',
  warning = 'warning',
  comment = 'comment',
  edit = 'edit',
  save = 'save',
  share = 'share',
  view = 'view',
  anon = 'anon',
  leftAndRightArrows = 'leftAndRightArrows',
  pictureIcon = 'pictureIcon',
  documentIcon = 'documentIcon',
  download = 'download',
  personPicture = 'personPicture',
  roundArrows = 'roundArrows',
  connectIcon = 'connectIcon',
  voiceCamera = 'voiceCamera',
  dialog = 'dialog',
  editIcon = 'editIcon',
  aIcon = 'aIcon',
  pdfDocument = 'pdfDocument',
}

const icons = {
  [EIcon.menu]: <MenuIcon />,
  [EIcon.block]: <MenuBlockIcon />,
  [EIcon.warning]: <MenuWarningIcon />,
  [EIcon.comment]: <MenuCommentIcon />,
  [EIcon.edit]: <MenuEditIcon />,
  [EIcon.save]: <MenuSaveIcon />,
  [EIcon.share]: <MenuShareIcon />,
  [EIcon.view]: <MenuViewedIcon />,
  [EIcon.anon]: <IconAnon />,
  [EIcon.leftAndRightArrows]: <CommentFormLeftAndRightArrowsIcon />,
  [EIcon.pictureIcon]: <CommentFormPictureIcon /> ,
  [EIcon.documentIcon]: <CommentFormDocumentIcon /> ,
  [EIcon.download]: <CommentFormDownloadIcon /> ,
  [EIcon.personPicture]: <CommentFormPersonPictureIcon /> ,
  [EIcon.roundArrows]: <CommentFormRoundArrowsIcon /> ,
  [EIcon.connectIcon]: <CommentFormConnectIcon /> ,
  [EIcon.voiceCamera]: <CommentFormVoiceCameraIcon /> ,
  [EIcon.dialog]: <CommentFormDialogIcon /> ,
  [EIcon.editIcon]: <CommentFormEditIcon /> ,
  [EIcon.aIcon]: <CommentFormAIcon /> ,
  [EIcon.pdfDocument]: <CommentFormPdfDocumentIcon /> ,
}

interface IIconProps {
  name: EIcon;
  size?: 5 | 8 | 10 | 12 | 14 | 16 | 17 | 18 | 20 | 22 | 30 | 50;
  width?: 5 | 8 | 10 | 12 | 14 | 16 | 17 | 18 | 20 | 22 | 30 | 50;
  height?: 5 | 8 | 10 | 12 | 14 | 16 | 17 | 18 | 20 | 22 | 30 | 50;
  otherClasses?: string,
}


export function Icon({name, size=12, width=12, height=12, otherClasses}: IIconProps) {
  const classes = classNames(
    styles[`icon-container`],
    styles[`width-${size}`],
    styles[`height-${size}`],
    styles[`width-${width}`],
    styles[`height-${height}`],
    otherClasses
  );
  return (
    <div className={classes}>
      {icons[name]}
    </div>
  );
}
