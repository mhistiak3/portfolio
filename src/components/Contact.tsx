import { ContactType } from "@/types";
import { getData } from "@/utils/fetchData";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const contactData: ContactType = getData("contact") as ContactType;
  return (
    <section className="section">
      <h2 className="section-heading text-lg text-white">Contact Me</h2>
      <div className="grid sm:grid-cols-5 mt-6 items-center gap-y-6">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-x-4 mb-8">
            <FaPhoneAlt className="text-3xl text-primary" />

            <div>
              <h3 className="mb-0.5">Free To Call Me:</h3>
              <a
                href={`tel:${contactData.phone}`}
                className="text-sm font-light"
              >
                {contactData.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-x-4 mb-8">
            <FaEnvelope className="text-3xl text-primary" />

            <div>
              <h3 className="mb-0.5">Mail Me:</h3>
              <a
                href={`mailto:${contactData.email}`}
                className="text-sm font-light"
              >
                {contactData.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-4 mb-8">
            <FaLocationDot className="text-3xl text-primary" />

            <div>
              <h3 className="mb-0.5">Find Me:</h3>
              <p className="text-sm font-light">{contactData.address}</p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3">
          <form
            action={contactData.form_action}
            className="grid grid-cols-2 gap-6"
          >
            <div className="col-span-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                required
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                required
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                required
                rows={4}
              ></textarea>
            </div>
            <div className="col-span-2">
              <button className="btn bg-primary text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
