import React from 'react';
import { useForm } from 'react-hook-form';
import { FormSchema, Field } from '../types';

interface Props {
  schema: FormSchema;
}

const FormGenerator: React.FC<Props> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Submitted:', data);
    alert('Form submitted successfully!');
  };

  const renderField = (field: Field) => {
    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <div key={field.id} className="mb-4">
            <label className="block font-bold mb-2">{field.label}</label>
            <input
              {...register(field.id, {
                required: field.required,
                pattern: field.validation ? new RegExp(field.validation.pattern) : undefined,
              })}
              placeholder={field.placeholder}
              className="border p-2 w-full"
            />
            {errors[field.id] && <p className="text-red-500">{field.validation?.message}</p>}
          </div>
        );
      case 'select':
        return (
          <div key={field.id} className="mb-4">
            <label className="block font-bold mb-2">{field.label}</label>
            <select
              {...register(field.id, { required: field.required })}
              className="border p-2 w-full"
            >
              <option value="">Select...</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      // Add cases for other field types...
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h1 className="text-2xl font-bold mb-4">{schema.formTitle}</h1>
      {schema.fields.map(renderField)}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
