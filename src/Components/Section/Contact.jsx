import React from "react";
import { LocationMarker, Phone, Mail } from "react-hero-icon/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  return (
    <div className="font-nunito h-screen">
      <div className="grid grid-cols-2">
        <div className="m-10">
          <div>Contact Me!</div>
          <p>
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
          <div>Social Media</div>
          <p>
            Don't forget to check my social media account below for any updates
            from me! And don't be shy to follow
          </p>
          <div>
            <div className="flex my-4">
              <a href="https://www.linkedin.com/in/bonifasiusdias/">
                <FontAwesomeIcon icon={["fab", "apple"]} />
              </a>
              <div>
                <div>LinkedIn</div>
                <div>bonifasiusdias</div>
              </div>
            </div>
            <div className="flex my-4">
              <a
                href="https://www.instagram.com/bonifasiusdias/"
                class="fab fa-instagram"
              >
                <FontAwesomeIcon icon={["fab", "apple"]} />
              </a>
              <div>
                <div>Instagram</div>
                <div>bonifasiusdias</div>
              </div>
            </div>
            <div className="flex my-4">
              <a
                href="https://www.facebook.com/bonifasius.dias/"
                class="fab fa-facebook-f"
              >
                <FontAwesomeIcon icon={["fab", "apple"]} />
              </a>
              <div>
                <div>Facebook</div>
                <div>bonifasiusdias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bawah">
        <div class="text">Message me</div>
        <form action="" method="POST">
          <div class="fields">
            <div class="field name">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                required
              />
            </div>
            <div class="field textarea">
              <textarea
                cols="30"
                rows="10"
                placeholder="Message.."
                id="message"
                name="message"
                required
              ></textarea>
            </div>
          </div>
          <div class="field email">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="field subject">
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div class="button-area">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
