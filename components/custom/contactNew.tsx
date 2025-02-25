import React from "react";
import { Button  } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

export function ContactNew() {
  return (
    <section id="book" className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        {/* <h5
 
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Customer Care
        </h5> */}
        <h1
 
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </h1>
        <p className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          appointment, or suggestions for improvement, our team is
          eager to hear from you.
        </p>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          {/* <img
            src="/image/map.svg"
            alt="map"
            className="w-full h-full lg:max-h-[510px]"
          /> */}
              <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5890806034145!2d73.87586067592643!3d18.456957371112875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebe0041ebf53%3A0x500cad1912749b12!2sGrincraft%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1740217531415!5m2!1sen!2sin"
      width="100%" height="100%"  loading="lazy"></iframe>
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            <p

              className="text-left !font-semibold !text-gray-600"
            >
              Get in touch
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p

                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </p>
                <Input
                  color="gray"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900 !min-w-full"
                />
              </div>
              <div>
                <p
           
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </p>
                <Input
                  color="gray"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900 !min-w-full"
                />
              </div>
            </div>
            <div>
              <p
          
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </p>
              <Input
                  color="gray"
                  placeholder="name@email.com"
                  name="email"
                  className="focus:border-t-gray-900 !min-w-full"
                />
            </div>
            <div>
              <p
             
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </p>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900 !min-w-full"
              />
            </div>
            <Button className="w-full" color="#3d8b80">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactNew;