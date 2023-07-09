import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzrpQGUpmYXjw7z5azA5k7Fl0GVI1uTeCjurh6K-a115eT9eOYM0dkZjbSEavwFd58p/exec'; // Replace with the URL of your script
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validate form fields
      const nameField = document.getElementById('name');
      const emailField = document.getElementById('email');
      const messageField = document.getElementById('message');
      if (!nameField.value || !emailField.value || !messageField.value) {
        setIsFormError(true);
        return;
      }

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
          if (response.ok) {
            setIsFormSubmitted(true);
            form.reset();
          } else {
            setIsFormError(true);
          }
        })
        .catch(() => {
          setIsFormError(true);
        });
    });
  }, []);

  useEffect(() => {
    if (isFormError || isFormSubmitted) {
      const timeout = setTimeout(() => {
        setIsFormError(false);
        setIsFormSubmitted(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isFormError, isFormSubmitted]);

  return (
    <div className="bg-secondary-light-green py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Reach out to us for any inquiries or questions.
          </p>
        </div>
        <div className="mt-12">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <form className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8" id="submit-to-google-sheet" name="submit-to-google-sheet">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    placeholder="Enter your name"
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md ${isFormError ? 'border-red-500' : ''}`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md ${isFormError ? 'border-red-500' : ''}`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Enter your message"
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md ${isFormError ? 'border-red-500' : ''}`}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                {isFormSubmitted && (
                  <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">Message sent successfully!</span>
                  </div>
                )}
                {isFormError && (
                  <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">Error sending message. Please try again.</span>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
