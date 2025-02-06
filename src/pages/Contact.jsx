export default function Contact() {
    return (
      <main className="max-w-lg mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg mt-8 mb-6">
        {/* Contact Intro */}
        <section className="text-center mb-6">
          <h2 className="text-2xl font-serif font-semibold tracking-wide mb-2">CONTACT US</h2>
          <p className="text-gray-800 text-base leading-relaxed">
            We are always available on the chat to help you get an answer as quickly as possible.
          </p>
        </section>
  
        {/* Contact Form */}
        <section>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col flex-1">
                <label htmlFor="firstName" className="text-gray-600 text-sm font-medium mb-1">
                  First Name
                </label>
                <input type="text" id="firstName" required className="border p-2 rounded text-sm w-full" />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="lastName" className="text-gray-600 text-sm font-medium mb-1">
                  Last Name
                </label>
                <input type="text" id="lastName" required className="border p-2 rounded text-sm w-full" />
              </div>
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 text-sm font-medium mb-1">
                Email*
              </label>
              <input type="email" id="email" required className="border p-2 rounded text-sm w-full" />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-600 text-sm font-medium mb-1">
                Message
              </label>
              <textarea id="message" rows="3" required className="border p-2 rounded text-sm w-full resize-none"></textarea>
            </div>
  
            <div className="flex justify-center">
              <button type="submit" className="bg-yellow-700 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-800 transition">
                Submit
              </button>
            </div>
          </form>
        </section>
  
        {/* Contact Info */}
        <section className="mt-6 bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-serif font-semibold mb-4">Our Contact Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Visit Us", details: ["Aurora Luxe Jewelry Boutique", "123 Luxury Lane, New York, NY"] },
              { title: "Call Us", details: ["+1 (555) 123-4567", "+1 (555) 987-6543"] },
              { title: "Email Us", details: ["support@auroraluxe.com", "inquiries@auroraluxe.com"] }
            ].map((info, index) => (
              <div key={index} className="p-4 bg-white shadow rounded-lg">
                <h3 className="text-lg font-medium">{info.title}</h3>
                {info.details.map((line, idx) => (
                  <p key={idx} className="text-gray-700 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
  