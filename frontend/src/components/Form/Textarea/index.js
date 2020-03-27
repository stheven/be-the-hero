import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Textarea as TextareaStyle } from "../../../styles/Form";

export default function Textarea({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    });
  }, [fieldName, registerField]);

  return <TextareaStyle ref={inputRef} defaultValue={defaultValue} {...rest} />;
}
