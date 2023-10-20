import React from "react";
import { pickFromSyntheticEvent } from "./pickFromSyntheticEvent";
import { preventDefault } from "./preventDefault";
import { stopPropagation } from "./stopPropagation";

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

function NotStandardLink(props: any) {
  return (
    <a onClick={stopPropagation(props.onClick)}>Hello</a>
  )
}


interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

function Input({value, onChange}: InputProps) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  )
}

