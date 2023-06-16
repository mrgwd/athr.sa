function ContactForm() {
  return (
    <form
      className="absolute top-1/2 flex w-[28rem] flex-col gap-3 rounded-[3rem] bg-white p-8 py-12 shadow-3xl max-sm:w-full sm:px-12 sm:max-md:left-1/2 sm:max-md:-translate-x-1/2 md:top-1/2 md:mr-8 md:-translate-y-1/2 lg:mr-12 xl:mr-16 2xl:mr-32"
      action=""
    >
      <h4 className="mb-4 text-center font-semibold text-main-color sm:text-xl">
        أحصل على إستشارتك
      </h4>
      <div className="group relative z-0 w-full">
        <input
          type="text"
          name="name"
          id="name"
          className="peer block w-full appearance-none rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label
          htmlFor="name"
          className="absolute right-5 top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0"
        >
          الإسم الكامل
        </label>
      </div>
      <div className="group relative z-0 w-full">
        <input
          type="email"
          name="email"
          id="email"
          className="peer block w-full appearance-none rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="absolute right-5 top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0"
        >
          البريد الإلكتروني
        </label>
      </div>
      <div className="group relative z-0 w-full">
        <input
          type="text"
          name="subject"
          id="subject"
          className="peer block w-full appearance-none rounded-full border border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label
          htmlFor="subject"
          className="absolute right-5 top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0"
        >
          الموضوع
        </label>
      </div>
      <div className="group relative z-0 w-full">
        <textarea
          cols={30}
          rows={12}
          name="details"
          id="details"
          className="peer block w-full resize-none appearance-none rounded-3xl border border-gray-200 bg-gray-50 px-6 py-3 text-sm text-gray-900 focus:border-main-color focus:outline-none focus:ring-0"
          placeholder=" "
          required
        ></textarea>
        <label
          htmlFor="details"
          className="absolute right-5 top-3 z-10 -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600/0"
        >
          التفاصيل
        </label>
      </div>
      <button className="block w-full rounded-full bg-gradient-to-r from-main-color to-main-blue-gradient py-2 text-white max-md:mx-auto sm:text-lg">
        إرسال
      </button>
    </form>
  );
}
export default ContactForm;
