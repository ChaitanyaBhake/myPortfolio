'use client';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState('');
  const text = 'Say Hello';
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationError('');

    const form = formRef.current;
    const email = form.user_email.value.trim();
    const message = form.user_message.value.trim();

    // Basic validations
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }

    if (!message) {
      setValidationError('Please enter a message.');
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full relative overflow-auto"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="z-80 h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-[40%] lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className=''>
            {text.split('').map((letter, index) => (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                key={index}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* Form Container */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="h-[70%] p-6 lg:h-full lg:w-1/2 rounded-3xl bg-gradient-to-b from-blue-50 to-pink-100 shadow-2xl text-xl flex flex-col gap-8 justify-center lg:p-24 gradient-anim2"
        >
          <span>Dear Chaitanya,</span>
          <textarea
            rows={6}
            className=" bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 lg:p-4 cursor-pointer p-2 w-1/2 lg:w-full mx-auto">
            Send
          </button>

          {/* Validation error */}
          {validationError && (
            <span className="text-red-500 font-semibold">{validationError}</span>
          )}
          {/* Success or Error from emailjs */}
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
