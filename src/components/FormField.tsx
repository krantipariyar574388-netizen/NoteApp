import React from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  type?: string;
}

const FormField = ({ label, error, register, type = "text" }: Props) => {
  return (
    <div style={{ marginBottom: "1rem", display: "flex", flexDirection: "column" }}>
      <label style={{ fontWeight: "bold" }}>{label}</label>
      {type === "textarea" ? (
        <textarea {...register} rows={4} />
      ) : (
        <input type={type} {...register} />
      )}
      {error && <span style={{ color: "red", fontSize: "0.8rem" }}>{error.message}</span>}
    </div>
  );
};

export default FormField;