import { useRef } from "react";
import useAnimation from "../hooks/useAnimation";
import { CallCalling, I24Support, Location } from "iconsax-react";
import ContactForm from "./ContactForm";

function Contact() {
  const cfSection = useRef<HTMLDivElement | null>(null);
  useAnimation(cfSection, 800, "opacity-0", "translate-x-12");
  return (
    <>
      <div className="container mx-auto my-24 px-4 md:mt-44" id="contact">
        <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-48 lg:text-2xl">
          تواصل معنا
        </h2>
      </div>
      <div>
        <div className="mb-24 w-full">
          <iframe
            className="-z-10 w-full max-sm:rounded-3xl md:h-[26rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20515.698651988758!2d46.733962165249736!3d24.634111918293375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05b8dec0cf19%3A0x2ecf2cc954b12e2a!2sAlmarqab%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1686847290339!5m2!1sen!2seg"
            title="ATHRLocatin"
            width="800"
            height="600"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div
            ref={cfSection}
            className="relative bottom-72 translate-x-12 opacity-0 transition duration-500  md:bottom-48"
          >
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-20 mt-96 grid grid-cols-1 gap-y-10 max-sm:pr-12 sm:grid-cols-2 sm:justify-items-center sm:gap-y-6 md:mt-48 lg:grid-cols-3">
        <div className="flex items-start gap-4">
          <div className="inline-block rounded-full bg-main-color/25 p-4">
            <Location variant="Bulk" className="text-main-color" />
          </div>
          <div className="inline-block">
            <h5 className="text-lg font-semibold text-wd-service">العنوان</h5>
            <p className="text-main-color">
              حفر الباطن - حي العزيزية
              <span className="block text-wd-service">المجمعة - حي المرقب</span>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="inline-block rounded-full bg-main-color/25 p-4">
            <CallCalling variant="Bulk" className="text-main-color" />
          </div>
          <div className="inline-block">
            <h5 className="text-lg font-semibold text-wd-service">
              رقم الهاتف
            </h5>
            <p className="text-main-color" dir="ltr">
              +966 506 354 147
              <span className="block text-wd-service" dir="rtl">
                9:00ص - 6:00م
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="inline-block rounded-full bg-main-color/25 p-4">
            <I24Support variant="Bulk" className="text-main-color" />
          </div>
          <div className="inline-block">
            <h5 className="text-lg font-semibold text-wd-service">
              البريد الإلكتروني
            </h5>
            <p className="text-main-color">
              Info@athr-sa.com
              <span className="block text-wd-service">دعم 24 × 7</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
