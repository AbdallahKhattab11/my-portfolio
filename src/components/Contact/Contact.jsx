import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Message from '../Message/Message';


const Contact = () => {

  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o3nyyqr', 'template_8ir07p9', form.current, {
        publicKey: 'c93Z0wAu4N7gIbjsX',
      })
      .then(
        () => {
          setIsSending(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSending(false);
        },
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user_name && formData.user_email && formData.message) {
      if(formData.user_name.length > 4) {
        if(formData.message.length > 3) {
          sendEmail(e);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        }else {
          alert("Message must be at least 4 characters long");
        }
      }else {
        alert("Name must be at least 5 characters long");
      }
    }else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div className="contact py-10 overflow-hidden relative">
      <div className="container">
        <div className="title flex justify-center">
          <h2 className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent text-[clamp(26px,3vw,32px)] font-semibold nameFont">
            Contact
          </h2>
        </div>
        <div className="content mt-10">
          <div className="">
            <p className="text-[16px] md:text-[18px] text-secondary leading-7 font-medium ">
              I'm always excited to connect with fellow developers, tech
              enthusiasts, and creative minds! Whether you want to collaborate
              on an exciting project, discuss the latest trends in web
              development, or just say hi, feel free to reach out.
            </p>
          </div>
          <div className="mt-10">
            <p className="text-[16px] md:text-[18px] text-secondary leading-7 font-medium mb-3">
              Your can find me on : -{" "}
            </p>
            <div className="cursor-pointer text-[16px] md:text-[18px] text-secondary leading-7 font-medium pl-5 mb-3">
              <a
                href="https://github.com/AbdallahKhattab11"
                target="_blank"
                className="text-blue-400 font-medium"
              >
                <FaGithub className="inline-block mr-1 text-[20px] -mt-1" /> GitHub{" "}
              </a>
              - Check out my latest projects and contributions
            </div>
            <div className="cursor-pointer text-[16px] md:text-[18px] text-secondary leading-7 font-medium pl-5">
              <a
                href="https://www.linkedin.com/in/abdallah-khattab-653729247/"
                target="_blank"
                className="text-blue-400 font-medium"
              >
                <FaLinkedin className="inline-block mr-1 text-[20px] -mt-1" /> LinkedIn{" "}
              </a>{" "}
              - Let’s network and share knowledge
            </div>
          </div>
        </div>
        <div className="form flex justify-center ">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-5 w-fit border-1 border-gray-800 rounded-2xl p-5 "
          >
            <div className="flex gap-5 flex-col md:flex-row">
              <div className="name flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[16px] md:text-[18px] text-secondary leading-7 font-medium"
                >
                  Name
                </label>
                <input
                  value={formData.user_name}
                  onChange={handleFormChange}
                  name="user_name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="bg-gray-700 text-secondary w-[250px] md:w-[300px] h-[40px] rounded-[8px] pl-3 outline-none"
                />
              </div>
              <div className="email flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[16px] md:text-[18px] text-secondary leading-7 font-medium"
                >
                  Email
                </label>
                <input
                  required
                  value={formData.user_email}
                  onChange={handleFormChange}
                  name="user_email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-gray-700 text-secondary  w-[250px] md:w-[300px] h-[40px] rounded-[8px] pl-3 outline-none"
                />
              </div>
            </div>
            <div className="message flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[16px] md:text-[18px] text-secondary leading-7 font-medium"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleFormChange}
                name="message"
                id="message"
                cols="30"
                rows="20"
                className="bg-gray-700 text-secondary w-[250px] md:w-[300px] h-[120px] rounded-[8px] pl-3 py-2 outline-none"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-sky-600 text-white  w-[250px] md:w-[300px] h-[40px] rounded-[8px] cursor-pointer hover:scale-105 transition-all duration-300 mt-5"
            >
              Send
            </button>
            <div className={`absolute top-1/2 -translate-y-1/2 ${isSending ? "right-4" : "-right-72"} transition-all duration-300`}>
              <Message setIsSending={setIsSending} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
