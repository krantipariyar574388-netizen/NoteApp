import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/schema";
import type { FormValues } from "../schemas/schema";
import FormField from "./FormField";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
    alert("Success! Check console.");
    reset();
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      style={{ maxWidth: "400px", margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h2>Create Post</h2>
      
      <FormField 
        label="Title" 
        register={register("title")} 
        error={errors.title} 
      />

      <FormField 
        label="Content" 
        register={register("content")} 
        error={errors.content} 
        type="textarea"
      />

      <button type="submit" style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
};

export default PostForm;