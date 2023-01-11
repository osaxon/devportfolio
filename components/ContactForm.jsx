'use client';

import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { sendMessage } from '../lib/queries';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const send = useMutation({
    mutationFn: (data) => sendMessage(data),
    onSettled: async () => {
      reset();
    },
  });

  const onSubmit = async (data) => {
    send.mutate(data);
  };

  return (
    <div className='layout flex w-full flex-col items-center bg-primary bg-opacity-20 p-10 md:w-[600px]'>
      {send.status === 'success' ? (
        <div className='alert alert-success shadow-lg'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 flex-shrink-0 stroke-current'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>thanks for your message</span>
          </div>
        </div>
      ) : (
        <h2 className='text-center'>Get in touch</h2>
      )}
      <form
        className='flex w-full flex-col gap-x-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='text'
          className='input-bordered input-primary input mt-4 disabled:input-disabled'
          placeholder='Name'
          aria-disabled={!send.isLoading}
          {...register('name', { required: 'Please provide your name' })}
        />
        {errors.name && (
          <p className='italic text-error' role='alert'>
            {errors.name.message}
          </p>
        )}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className='input-bordered input-primary input mt-2 disabled:input-disabled'
          type='email'
          aria-disabled={!send.isLoading}
          placeholder='Email'
          {...register('email', { required: 'Please provide your email' })}
        />
        {errors.email && (
          <p className='italic text-error' role='alert'>
            {errors.email.message}
          </p>
        )}

        <textarea
          className='input-bordered input-primary input mt-2 h-20 disabled:input-disabled'
          rows='5'
          aria-disabled={!send.isLoading}
          type='text'
          placeholder='Message'
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message', {
            required: 'Please provide a message body',
          })}
        />
        {errors.message && (
          <p className='italic text-error' role='alert'>
            {errors.message.message}
          </p>
        )}

        <button className='btn mt-4' type='submit'>
          {send.status === 'loading' ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
