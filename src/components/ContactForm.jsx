import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    return;
  };
  return (
    <section className='min-h-[calc(100vh-15rem)] bg-opacity-50'>
      <div className='layout flex flex-col items-center py-10'>
        <form
          className='flex min-w-full flex-col gap-x-4 border p-8'
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className='text-center'>Send me a message</h2>
          <input
            type='text'
            className='input-bordered input-primary input mt-4'
            placeholder='Name'
            {...register('name', { required: true })}
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className='input-bordered input-primary input mt-2'
            type='email'
            placeholder='Email'
            {...register('email', { required: true })}
          />

          <textarea
            className='input-bordered input-primary input mt-2 h-20'
            rows='5'
            type='text'
            placeholder='Message'
            {...register('message', { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input className='btn mt-4' type='submit' />
        </form>
      </div>
    </section>
  );
};
