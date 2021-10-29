import React from "react";
import { LocationMarker, Phone, Mail } from "react-hero-icon/solid";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="font-nunito h-auto md:h-screen my-10 md:m-20 lg:mx-48">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:my-10 ml-10 md:border-r-2">
          <div className="text-xl font-semibold my-2">Contact Me!</div>
          <p className="md:h-16 mr-2">
            If you have any criticism and suggestions or maybe a new project,
            you can contact me from my number/email below! I will try my best to
            answer :D{" "}
          </p>
          <div>
            <div className="flex my-4">
              <i class="text-red-600">
                <LocationMarker className="h-10" />
              </i>
              <div className="ml-4 flex flex-col">
                <div>Address</div>
                <div>D.I. Yogyakarta</div>
              </div>
            </div>
            <div className="flex my-4">
              <i class="text-red-600">
                <Phone className="h-10" />
              </i>
              <div className="ml-4 flex flex-col">
                <div>Phone/WhatsApp</div>
                <div>+62 85691317892</div>
              </div>
            </div>
            <div className="flex my-4">
              <i class="text-red-600">
                <Mail className="h-10" />
              </i>
              <div className="ml-4 flex flex-col">
                <div>Email</div>
                <div>bonifasiusdias9@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10">
          <div className="text-xl font-semibold my-2">Social Media</div>
          <p className="md:h-16">
            Don't forget to check my social media account below for any updates
            from me! And don't be shy to follow
          </p>
          <div>
            <div className="flex my-4">
              <a
                class="text-red-600"
                href="https://www.linkedin.com/in/bonifasiusdias/"
              >
                <BsLinkedin className="h-10" />
              </a>
              <div className="ml-4 flex flex-col">
                <div>LinkedIn</div>
                <div>bonifasiusdias</div>
              </div>
            </div>
            <div className="flex my-4">
              <a
                class="text-red-600"
                href="https://www.instagram.com/bonifasiusdias/"
              >
                <BsInstagram className="h-10" />
              </a>
              <div className="ml-4 flex flex-col">
                <div>Instagram</div>
                <div>bonifasiusdias</div>
              </div>
            </div>
            <div className="flex my-4">
              <a
                class="text-red-600"
                href="https://www.facebook.com/bonifasius.dias/"
              >
                <BsFacebook className="h-10" />
              </a>
              <div className="ml-4 flex flex-col">
                <div>Facebook</div>
                <div>bonifasiusdias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" md:ml-20 ml-10">
        <div class="text-lg font-bold">Message me!</div>
        <form
          className="flex flex-col md:flex-row mb-4"
          action=""
          method="POST"
        >
          <div class="md:w-1/2 my-2">
            <textarea
              className="w-11/12 border rounded-lg py-1 px-2 h-36 "
              placeholder="Message.."
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <div className="md:w-2/6">
            <div>
              <div>
                <input
                  className="w-11/12 md:w-full my-2 py-1 px-2 border rounded-lg "
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div class="">
              <input
                className="w-11/12 md:w-full my-2  py-1 px-2 border rounded-lg "
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
            </div>
            <div class="">
              <input
                className="w-11/12 md:w-full my-2  py-1 px-2 border rounded-lg "
                type="text"
                placeholder="Subject"
                id="subject"
                name="subject"
                required
              />
            </div>
          </div>
        </form>
        <div>
          <button
            className="ml-32 md:ml-0 bg-red-600 text-white py-1 px-6 rounded-lg hover:text-red-600 border-2 border-red-600 hover:bg-white"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
