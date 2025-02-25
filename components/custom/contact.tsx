import React from "react";

const Contact = () => {
  return (
//     <section id="book"
//     classNameName="relative z-10 w-full overflow-hidden bg-white dark:bg-dark py-20 px-8 lg:py-[120px]"
//     >
//     <div classNameName="container mx-auto">
//        <div classNameName="flex flex-wrap -mx-4 lg:justify-between">
//           <div classNameName="w-full px-4 lg:w-1/2 xl:w-6/12">
//              <div classNameName="mb-12 max-w-[570px] lg:mb-0">
//                 <span classNameName="block mb-4 text-base font-semibold text-primary">
//                 We’d love to hear from you! 
//                 </span>
//                 <h2
//                    classNameName="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]"
//                    >
//                    GET IN TOUCH 
//                 </h2>
//                 <p
//                    classNameName="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9"
//                    >
//         Whether you have questions, need an appointment, or just want to say hello, our team is ready to assist.

// Reach out today and let’s take care of your smile together!
//                 </p>
//                 <div classNameName="mb-8 flex w-full max-w-[370px]">
//                    <div
//                       classNameName="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
//                       >
//                       <svg
//                          width="32"
//                          height="32"
//                          viewBox="0 0 32 32"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          >
//                          <path
//                             d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
//                             fill="currentColor"
//                             />
//                       </svg>
//                    </div>
//                    <div classNameName="w-full">
//                       <h4 classNameName="mb-1 text-xl font-bold text-dark dark:text-white">
//                          Our Location
//                       </h4>
//                       <p classNameName="text-base text-body-color dark:text-dark-6">
//                       3rd Floor, Chordiya Corner, Above Namo
// Hospital, Gangagham - Shatrunjay Road,
// Near Shanti Nagar Society, Pune - 411048
//                       </p>
//                    </div>
//                 </div>
//                 <div classNameName="mb-8 flex w-full max-w-[370px]">
//                    <div
//                       classNameName="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
//                       >
//                       <svg
//                          width="32"
//                          height="32"
//                          viewBox="0 0 32 32"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          >
//                          <g clip-path="url(#clip0_941_17577)">
//                             <path
//                                d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
//                                fill="currentColor"
//                                />
//                             <path
//                                d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
//                                fill="currentColor"
//                                />
//                             <path
//                                d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
//                                fill="currentColor"
//                                />
//                          </g>
//                          <defs>
//                             <clipPath id="clip0_941_17577">
//                                <rect width="32" height="32" fill="white" />
//                             </clipPath>
//                          </defs>
//                       </svg>
//                    </div>
//                    <div classNameName="w-full">
//                       <h4 classNameName="mb-1 text-xl font-bold text-dark dark:text-white">
//                          Phone Number
//                       </h4>
//                       <p classNameName="text-base text-body-color dark:text-dark-6">
//                        (+91)92265 23232
//                       </p>
//                    </div>
//                 </div>
//                 <div classNameName="mb-8 flex w-full max-w-[370px]">
//                    <div
//                       classNameName="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
//                       >
//                       <svg
//                          width="32"
//                          height="32"
//                          viewBox="0 0 32 32"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          >
//                          <path
//                             d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
//                             fill="currentColor"
//                             />
//                       </svg>
//                    </div>
//                    <div classNameName="w-full">
//                       <h4 classNameName="mb-1 text-xl font-bold text-dark dark:text-white">
//                          Email Address
//                       </h4>
//                       <p classNameName="text-base text-body-color dark:text-dark-6">
//                          grincraftdentalclinic@gmail.com
//                       </p>
//                    </div>
//                 </div>
//              </div>
//           </div>
//           <div classNameName="w-full px-4 lg:w-1/2 xl:w-5/12">
//              <div
//                 classNameName="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12"
//                 >
//                 <form>
//                    <div classNameName="mb-6">
//                       <input
//                          type="text"
//                          placeholder="Your Name"
//                          classNameName="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
//                          />
//                    </div>
//                    <div classNameName="mb-6">
//                       <input
//                          type="email"
//                          placeholder="Your Email"
//                          classNameName="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
//                          />
//                    </div>
//                    <div classNameName="mb-6">
//                       <input
//                          type="text"
//                          placeholder="Your Phone"
//                          classNameName="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
//                          />
//                    </div>
//                    <div classNameName="mb-6">
//                       <textarea
//                          rows="6"
//                          placeholder="Your Message"
//                          classNameName="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
//                          ></textarea>
//                    </div>
//                    <div>
//                       <button
//                          type="submit"
//                          classNameName="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
//                          >
//                       Send Message
//                       </button>
//                    </div>
//                 </form>
//                 <div>
//                    <span classNameName="absolute -top-10 -right-9 z-[-1]">
//                       <svg
//                          width="100"
//                          height="100"
//                          viewBox="0 0 100 100"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          >
//                          <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
//                             fill="#3056D3"
//                             />
//                       </svg>
//                    </span>
//                    <span classNameName="absolute -right-10 top-[90px] z-[-1]">
//                       <svg
//                          width="34"
//                          height="134"
//                          viewBox="0 0 34 134"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          >
//                          <circle
//                             cx="31.9993"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 1.66665)"
//                             fill="#13C296"
//                             />
//                       </svg>
//                    </span>
//                    <span classNameName="absolute -left-7 -bottom-7 z-[-1]">
//                       <svg
//                          width="107"
//                          height="134"
//                          viewBox="0 0 107 134"
//                          fill="none"
//                          xmlns="http://www.w3.org/2000/svg"
//                          >
//                          <circle
//                             cx="104.999"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 104.999 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 104.999 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 104.999 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 104.999 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 104.999 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 104.999 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 104.999 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 104.999 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 104.999 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="104.999"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 104.999 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="90.3333"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 90.3333 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="75.6654"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 75.6654 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="31.9993"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 31.9993 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="60.9993"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 60.9993 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="17.3333"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 17.3333 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="132"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 132)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="117.333"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 117.333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="102.667"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 102.667)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="88"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 88)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="73.3333"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 73.3333)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="45"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 45)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="16"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 16)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="59"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 59)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="30.6666"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 30.6666)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="46.3333"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 46.3333 1.66665)"
//                             fill="#13C296"
//                             />
//                          <circle
//                             cx="2.66536"
//                             cy="1.66665"
//                             r="1.66667"
//                             transform="rotate(180 2.66536 1.66665)"
//                             fill="#13C296"
//                             />
//                       </svg>
//                    </span>
//                 </div>
//              </div>
//           </div>
//        </div>
//     </div>
//  </section>


<section id="book" className="mb-32 mt-10">
  <div className="flex flex-col justify-center items-center text-center">
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
  </div>

  <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5890806034145!2d73.87586067592643!3d18.456957371112875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebe0041ebf53%3A0x500cad1912749b12!2sGrincraft%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1740217531415!5m2!1sen!2sin"
      width="100%" height="480"  loading="lazy"></iframe>
  </div>
  <div className="container px-6 md:px-12">
    <div
      className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <form>
         <div className="relative   mb-6" data-te-input-wrapper-init>
              <input type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput90" />
              <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                >Name
                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput91" />
              <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                >Email address
                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleFormControlTextarea1" rows={3}></textarea>
              <label 
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
            </div>
            <button type="button"
                className="mb-6 w-full rounded bg-[#469f93] text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                Send
              </button>
          </form>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-[#cae8e3] p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">
                    Technical support
                  </p>
                  <p className="text-sm text-neutral-500">
                    grincraftdentalclinic@gmail.com
                  </p>
                  {/* <p className="text-sm text-neutral-500">
                    1-600-890-4567
                  </p> */}
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="srink-0">
                  <div className="inline-block rounded-md bg-[#cae8e3] p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" className="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">
                    Address
                  </p>
                  <p className="text-sm text-neutral-500">
                       3rd Floor, Chordiya Corner, Above Namo
 Hospital, Gangagham - Shatrunjay Road,
 Near Shanti Nagar Society, Pune - 411048
                       </p>
                </div>
              </div>
            </div>
            <div
              className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-[#cae8e3] p-4 text-primary">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                      x="0px" y="0px" className="w-7 h-7"
                      viewBox="0 0 111.756 122.879" enable-background="new 0 0 111.756 122.879" >
                      <g>
                        <path
                          d="M27.953,5.569v96.769h19.792V5.569H37.456H27.953L27.953,5.569z M21.898,105.123V2.785C21.898,1.247,23.254,0,24.926,0 h12.53h13.316C52.443,0,53.8,1.247,53.8,2.785v102.338c0,1.537-1.356,2.783-3.028,2.783H24.926 C23.254,107.906,21.898,106.66,21.898,105.123L21.898,105.123z M13.32,17.704c1.671,0,3.027,1.247,3.027,2.785 s-1.355,2.784-3.027,2.784H7.352c-0.161,0-0.292,0.022-0.39,0.064c-0.129,0.056-0.276,0.166-0.429,0.325 c-0.161,0.167-0.281,0.346-0.353,0.528c-0.083,0.208-0.125,0.465-0.125,0.759v90.803c0,0.287,0.043,0.537,0.125,0.74l0.034,0.092 c0.068,0.135,0.165,0.264,0.284,0.383c0.126,0.125,0.258,0.217,0.39,0.27c0.123,0.051,0.279,0.074,0.466,0.074h97.052 c0.188,0,0.346-0.025,0.467-0.074c0.133-0.053,0.264-0.145,0.389-0.27c3.035-3.035,0.441,1.799,0.441-1.215V24.949 c0-3.667,3.039,2.357-0.477-1.288c-0.143-0.146-0.287-0.254-0.43-0.314c-0.113-0.048-0.246-0.075-0.391-0.075H62.563 c-1.672,0-3.027-1.247-3.027-2.784s1.355-2.785,3.027-2.785h41.842c1.041,0,2.029,0.204,2.943,0.597 c0.895,0.385,1.699,0.945,2.393,1.663c0.664,0.686,1.17,1.468,1.514,2.334c0.332,0.839,0.502,1.726,0.502,2.652v90.803 c0,0.938-0.168,1.826-0.502,2.654c-0.344,0.859-0.865,1.639-1.549,2.324c-0.701,0.703-1.506,1.234-2.398,1.598 c-0.906,0.367-1.879,0.551-2.902,0.551H7.352c-1.022,0-1.995-0.184-2.901-0.551c-0.894-0.363-1.698-0.896-2.399-1.598 c-0.621-0.623-1.107-1.33-1.45-2.107c-0.036-0.07-0.069-0.143-0.099-0.217C0.168,117.574,0,116.684,0,115.752V24.949 c0-0.921,0.17-1.811,0.504-2.652c0.342-0.863,0.849-1.648,1.512-2.334c0.683-0.707,1.488-1.263,2.393-1.652 c0.929-0.401,1.917-0.607,2.943-0.607H13.32L13.32,17.704z M65.902,29.03h27.049c0.803,0,1.566,0.145,2.291,0.431 c0.076,0.03,0.15,0.063,0.223,0.099c0.607,0.269,1.166,0.635,1.666,1.096c0.584,0.533,1.027,1.128,1.326,1.782 c0.047,0.104,0.088,0.21,0.119,0.317c0.225,0.584,0.34,1.189,0.34,1.812v12.611c0,0.744-0.156,1.45-0.459,2.118l-0.004,0.009 l0.004,0.002c-0.291,0.64-0.725,1.224-1.291,1.75c-0.58,0.546-1.227,0.956-1.932,1.231c-0.736,0.287-1.5,0.426-2.283,0.426H65.902 c-0.777,0-1.535-0.14-2.27-0.426c-0.693-0.269-1.33-0.668-1.912-1.198c-0.588-0.539-1.031-1.144-1.326-1.81 c-0.033-0.078-0.063-0.157-0.09-0.235c-0.234-0.605-0.35-1.228-0.35-1.867V34.567c0-0.723,0.146-1.424,0.445-2.099l-0.006-0.002 c0.295-0.666,0.738-1.271,1.326-1.81l0.037-0.032l-0.002-0.001c0.877-0.78,2.039-1.219,2.119-1.244 C64.537,29.147,65.215,29.03,65.902,29.03L65.902,29.03z M93.475,34.599h-28.08v12.547h28.08V34.599L93.475,34.599z M78.877,63.42 c1.072,0,2.01,0.41,2.807,1.207s1.188,1.734,1.188,2.785c0,1.148-0.389,2.104-1.188,2.865c-0.799,0.758-1.734,1.129-2.807,1.129 c-1.129,0-2.084-0.371-2.844-1.129c-0.76-0.762-1.148-1.717-1.148-2.865c0-1.051,0.391-1.988,1.148-2.785 S77.748,63.42,78.877,63.42L78.877,63.42z M90.977,63.42c1.072,0,2.008,0.41,2.805,1.207s1.189,1.734,1.189,2.785 c0,1.148-0.391,2.104-1.189,2.865c-0.799,0.758-1.732,1.129-2.805,1.129c-1.131,0-2.086-0.371-2.846-1.129 c-0.76-0.762-1.148-1.717-1.148-2.865c0-1.051,0.391-1.988,1.148-2.785S89.846,63.42,90.977,63.42L90.977,63.42z M66.662,75.518 c1.15,0,2.105,0.389,2.865,1.148s1.129,1.715,1.129,2.865c0,1.051-0.371,1.988-1.129,2.785s-1.715,1.209-2.865,1.209 c-1.053,0-1.988-0.412-2.785-1.209s-1.209-1.734-1.209-2.785c0-1.15,0.41-2.105,1.209-2.865S65.609,75.518,66.662,75.518 L66.662,75.518z M78.877,75.518c1.072,0,2.008,0.389,2.807,1.148s1.188,1.715,1.188,2.865c0,1.051-0.391,1.988-1.188,2.785 s-1.734,1.209-2.807,1.209c-1.129,0-2.086-0.412-2.844-1.209s-1.148-1.734-1.148-2.785c0-1.15,0.389-2.105,1.148-2.865 S77.748,75.518,78.877,75.518L78.877,75.518z M90.977,75.518c1.072,0,2.006,0.389,2.805,1.148s1.189,1.715,1.189,2.865 c0,1.051-0.393,1.988-1.189,2.785s-1.732,1.209-2.805,1.209c-1.131,0-2.088-0.412-2.846-1.209s-1.148-1.734-1.148-2.785 c0-1.15,0.389-2.105,1.148-2.865S89.846,75.518,90.977,75.518L90.977,75.518z M66.662,87.518c1.15,0,2.107,0.393,2.865,1.189 s1.129,1.773,1.129,2.922c0,1.053-0.369,1.988-1.129,2.787s-1.715,1.207-2.865,1.207c-1.053,0-1.986-0.408-2.785-1.207 s-1.209-1.734-1.209-2.787c0-1.148,0.412-2.125,1.209-2.922S65.609,87.518,66.662,87.518L66.662,87.518z M78.877,87.518 c1.072,0,2.01,0.393,2.807,1.189s1.188,1.773,1.188,2.922c0,1.053-0.389,1.988-1.188,2.787s-1.734,1.207-2.807,1.207 c-1.129,0-2.084-0.408-2.844-1.207s-1.148-1.734-1.148-2.787c0-1.148,0.391-2.125,1.148-2.922S77.748,87.518,78.877,87.518 L78.877,87.518z M90.977,87.518c1.072,0,2.008,0.393,2.805,1.189s1.189,1.773,1.189,2.922c0,1.053-0.391,1.988-1.189,2.787 s-1.732,1.207-2.805,1.207c-1.131,0-2.086-0.408-2.846-1.207s-1.148-1.734-1.148-2.787c0-1.148,0.391-2.125,1.148-2.922 S89.846,87.518,90.977,87.518L90.977,87.518z M78.877,99.617c1.072,0,2.008,0.389,2.807,1.188s1.188,1.734,1.188,2.807 c0,1.129-0.389,2.084-1.188,2.844s-1.734,1.148-2.807,1.148c-1.129,0-2.084-0.389-2.844-1.148s-1.148-1.715-1.148-2.844 c0-1.072,0.389-2.008,1.148-2.807S77.748,99.617,78.877,99.617L78.877,99.617z M66.662,63.42c1.15,0,2.107,0.41,2.865,1.207 s1.129,1.734,1.129,2.785c0,1.148-0.369,2.104-1.129,2.865c-0.76,0.758-1.715,1.129-2.865,1.129c-1.053,0-1.986-0.371-2.785-1.129 c-0.799-0.762-1.209-1.717-1.209-2.865c0-1.051,0.412-1.988,1.209-2.785S65.609,63.42,66.662,63.42L66.662,63.42z" />
                      </g>
                    </svg>

                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">Land Line</p>
                  {/* <p className="text-neutral-500">     1-600-890-4567
                  </p> */}
                </div>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-[#cae8e3] p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 grow">
                  <p className="mb-2 font-bold ">Mobile</p>
                  <p className="text-neutral-500"> (+91) 92265 23232
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
</section>
  );
};

export default Contact;

