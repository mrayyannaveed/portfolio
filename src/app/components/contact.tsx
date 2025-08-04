const ContactCom = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-bold text-white hover:text-lime-600 text-center mb-10 transition-all duration-300 hover:uppercase">
          Contact us
        </h1>

      <form
        className="bg-zinc-400 shadow-lg rounded-xl p-6 w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[40%] space-y-4"
      >
        {/* Name */}
        <div className="flex flex-col">
          
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Type your message here..."
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#ffac1d] hover:bg-[#fbcd7f] text-white font-semibold py-2 px-6 rounded-lg transition shadow-md hover:shadow-lg cursor-pointer" 
          >
            Send
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactCom
