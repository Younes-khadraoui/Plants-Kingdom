import { forwardRef } from "react";

interface Props {}

const Contact = forwardRef<HTMLDivElement, Props>(({},ref) => {
  return (
    <div ref={ref} className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 font-poppins">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-[#828282] sm:text-xl font-poppins">
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:outline-none"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:outline-none"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm text-center text-blue-700 font-semibold rounded-lg bg-transparent sm:w-fit hover:bg-blue-500 hover:text-white border border-blue-500 hover:border-transparent"
        >
          Send message
        </button>
      </form>
    </div>
  );
});

export default Contact;
