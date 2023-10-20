import React from "react";
import { getValue } from "../utils/react";
import { preventDefault } from "../utils/react/preventDefault";
import { stopPropagation } from "../utils/react/stopPropagation";

function InputExample({ value, onChange }: any) {
  return (
    <input 
      value={value}
      onChange={preventDefault(stopPropagation(getValue(onChange)))}
      // onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      // onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
      />
  )
}

function compose<U>(...fns: Function[]) {
  return <E, >(initialValue: any): U => {
    return fns.reduceRight( (previousValue, fn ) => fn(previousValue), initialValue )
  }
}

function pipe<U>(...fns: Function[]) {
  return <E, >(initialValue: any): U => 
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

function cond(b: boolean) {
  return !b;
}

const comments = [{ id: 22, text: 'text one' }, { id: 44, text: 'text two' }];
// const filteredComments = comments.filter( item => item.id !== 22 );

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond)
const filterWithId = createFilterBy('id');
const filterByValue = createFilterBy('value');

const filteredComments = comments.filter(filterWithId(22));