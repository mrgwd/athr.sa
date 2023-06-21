import { useRef } from "react";
import useAnimation from "../hooks/useAnimation";

function HowWeWork() {
  const step1 = useRef<HTMLDivElement | null>(null);
  const step2 = useRef<HTMLDivElement | null>(null);
  const step3 = useRef<HTMLDivElement | null>(null);
  const step4 = useRef<HTMLDivElement | null>(null);
  useAnimation(step1, 600, "opacity-0", "translate-y-20");
  useAnimation(step2, 600, "opacity-0", "translate-x-8");
  useAnimation(step3, 600, "opacity-0", "-translate-x-8");
  useAnimation(step4, 800, "opacity-0", "translate-y-12");
  return (
    <div className="container mx-auto my-24 px-4 md:mt-44">
      <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-20 lg:text-2xl">
        كيف نعمل؟
      </h2>
      <div>
        <div className="hidden md:block">
          <div
            ref={step1}
            className="relative translate-y-20 opacity-0 transition duration-500 child:text-wd-service"
          >
            <div className="absolute right-1/2 top-0 mr-20">
              <h4 className=" font-semibold  lg:mb-2 lg:text-xl xl:text-2xl">
                دراسة وتحليل الأعمال
              </h4>
              <p className="text-xs lg:text-[0.78rem] xl:text-base">
                ● دراسة الوضع الحالــــي للعلامـــــة التجاريـــــة <br />
                ● دراسة وضع المحتوى والسوشيال ميديا <br />
                ● تحلــــيـــــــــــــــــــــل
                المـــوقــــــــــــــــــــــــــع
                الإلـكـــترونــــــــــــــــــــــــي <br />●
                تحلــــيـــــــــــــــــــــل
                المنـــــــــــــــافسيــــــــــــــــــن
                بالســــــــــــــــوق <br />
              </p>
            </div>
          </div>
          <div
            ref={step2}
            className="relative top-48 translate-x-8 opacity-0 transition duration-500 child:text-wd-service xl:top-56"
            dir="ltr"
          >
            <div className="absolute left-3/4 top-1/4 mt-16">
              <h4 className="font-semibold lg:mb-2 lg:text-xl xl:text-2xl">
                بناء استراتيجية تسويقية
              </h4>
              <p className="text-xs lg:text-[0.78rem] xl:text-base">
                ● استراتيجية عمــــل بتوقيتـــــــات محددة
                <br />● أهــــــداف محـــددة قابلــــــــــــة
                للقيـــــــــــــــــــاس <br />
                ● خطـــــــة تسويقية واضحـــــــــــة ودقيقـــــــــة <br />●
                توزيع مناسب للتكلفة على المنصات <br />
              </p>
            </div>
          </div>
          <div
            ref={step3}
            className="relative top-80 -translate-x-8 opacity-0 transition duration-500 child:text-wd-service xl:top-[26rem]"
          >
            <div className="absolute right-3/4 top-1/2 mt-16">
              <h4 className="font-semibold lg:mb-2 lg:text-xl xl:text-2xl">
                التنفيذ والمراقبة
              </h4>
              <p className="text-xs lg:text-[0.78rem] xl:text-base">
                ● توزيع المهــــــام للفــــــــرق المختصــــــــــة <br />
                ● تنفيذ خــــــــــطة التســـــويق والإعلانات <br />
                ● مراقبـــــــــة الحــــــــــــــــملات
                ونتــــــــــــــــــــائجها
                <br />
                ● مراقبة وسائل التواصل الاجتماعي
                <br />
                ● تحسيــــــــــــن الحمـــــــــــــلات
                الإعـــــــــــــــــــــلانية
                <br />
              </p>
            </div>
          </div>
          <div
            ref={step4}
            className="relative top-[48rem] translate-y-12 opacity-0 transition duration-500 child:text-wd-service xl:top-[60rem]"
            dir="ltr"
          >
            <div className="absolute bottom-0 left-1/2 ml-20 mt-16">
              <h4 className="font-semibold lg:mb-2 lg:text-xl xl:text-2xl">
                قياس النتائج
              </h4>
              <p className="text-xs lg:text-[0.78rem] xl:text-base">
                ● قياس نتائـــــــــج الحملات الإعلانيـــــــة <br />
                ● تقرير مواقع التواصل الاجتماعــي <br />
                ● نتائج زيارات الموقـــع الالكترونــــــي <br />● قياس النتائج
                بالخطة التسويقية <br />
              </p>
            </div>
          </div>
          <svg
            className="mx-auto h-[44rem] xl:h-[56rem]"
            width="519"
            height="859"
            viewBox="0 0 519 859"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M259 103.5V148.5C259 178.323 283.177 202.5 313 202.5H357C386.823 202.5 411 226.677 411 256.5V378C411 407.823 386.823 432 357 432H259"
              stroke="#45C4AE"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M259 762V715.5C259 685.677 234.823 661.5 205 661.5H161C131.177 661.5 107 637.323 107 607.5V486C107 456.177 131.177 432 161 432H259"
              stroke="#45C4AE"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="258.5" cy="32.5" r="32.5" fill="#45C4AE" />
            <path
              d="M270.031 49.5834C271.504 49.5834 272.916 48.9985 273.957 47.9572C274.998 46.916 275.583 45.5038 275.583 44.0313C275.583 42.5588 274.998 41.1466 273.957 40.1054C272.916 39.0642 271.504 38.4792 270.031 38.4792C268.559 38.4792 267.146 39.0642 266.105 40.1054C265.064 41.1466 264.479 42.5588 264.479 44.0313C264.479 45.5038 265.064 46.916 266.105 47.9572C267.146 48.9985 268.559 49.5834 270.031 49.5834ZM270.458 25.6667C271.817 25.6667 273.121 25.1268 274.082 24.1657C275.043 23.2045 275.583 21.901 275.583 20.5417C275.583 19.1825 275.043 17.8789 274.082 16.9178C273.121 15.9567 271.817 15.4167 270.458 15.4167C269.099 15.4167 267.795 15.9567 266.834 16.9178C265.873 17.8789 265.333 19.1825 265.333 20.5417C265.333 21.901 265.873 23.2045 266.834 24.1657C267.795 25.1268 269.099 25.6667 270.458 25.6667ZM246.542 25.6667C247.901 25.6667 249.204 25.1268 250.165 24.1657C251.127 23.2045 251.667 21.901 251.667 20.5417C251.667 19.1825 251.127 17.8789 250.165 16.9178C249.204 15.9567 247.901 15.4167 246.542 15.4167C245.182 15.4167 243.879 15.9567 242.918 16.9178C241.956 17.8789 241.417 19.1825 241.417 20.5417C241.417 21.901 241.956 23.2045 242.918 24.1657C243.879 25.1268 245.182 25.6667 246.542 25.6667Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M246.251 25.7009C247.059 28.0206 248.569 30.0314 250.57 31.4548C252.572 32.8781 254.967 33.6434 257.424 33.6447H257.475L263.505 33.6276C266.102 33.5934 268.425 35.353 269.126 37.8813V41.0418C269.126 41.3861 269.263 41.7163 269.506 41.9598C269.75 42.2033 270.08 42.3401 270.424 42.3401C270.768 42.3401 271.099 42.2033 271.342 41.9598C271.586 41.7163 271.722 41.3861 271.722 41.0418V21.8743C271.722 21.5299 271.586 21.1997 271.342 20.9562C271.099 20.7127 270.768 20.5759 270.424 20.5759C270.08 20.5759 269.75 20.7127 269.506 20.9562C269.263 21.1997 269.126 21.5299 269.126 21.8743V33.1834C267.585 31.8036 265.591 31.0376 263.522 31.0309H263.488L257.458 31.048H257.424C253.512 31.048 250.01 28.5709 248.728 24.8638C248.639 24.6087 248.473 24.3876 248.253 24.2314C248.032 24.0753 247.768 23.9918 247.498 23.9926C247.362 23.9926 247.208 24.0097 247.071 24.0609C246.371 24.2659 246.012 25.0176 246.251 25.7009Z"
              fill="white"
            />
            <circle cx="258.5" cy="826.5" r="32.5" fill="#45C4AE" />
            <path
              opacity="0.4"
              d="M256.365 810.185C257.543 809.177 259.474 809.177 260.67 810.185L263.369 812.509C263.881 812.953 264.838 813.312 265.521 813.312H268.425C270.236 813.312 271.723 814.798 271.723 816.609V819.513C271.723 820.179 272.081 821.153 272.525 821.665L274.849 824.365C275.857 825.543 275.857 827.474 274.849 828.67L272.525 831.369C272.081 831.881 271.723 832.838 271.723 833.521V836.425C271.723 838.236 270.236 839.722 268.425 839.722H265.521C264.855 839.722 263.881 840.081 263.369 840.525L260.67 842.849C259.491 843.857 257.561 843.857 256.365 842.849L253.666 840.525C253.153 840.081 252.196 839.722 251.513 839.722H248.558C246.747 839.722 245.261 838.236 245.261 836.425V833.504C245.261 832.838 244.902 831.881 244.475 831.369L242.168 828.652C241.178 827.474 241.178 825.56 242.168 824.382L244.475 821.665C244.902 821.153 245.261 820.196 245.261 819.53V816.592C245.261 814.781 246.747 813.295 248.558 813.295H251.513C252.179 813.295 253.153 812.936 253.666 812.492L256.365 810.185Z"
              fill="white"
            />
            <path
              d="M256.433 831.917C256.093 831.917 255.768 831.782 255.528 831.541L251.393 827.407C251.155 827.166 251.021 826.841 251.021 826.502C251.021 826.163 251.155 825.837 251.393 825.596C251.889 825.101 252.709 825.101 253.204 825.596L256.433 828.825L263.779 821.479C264.274 820.984 265.094 820.984 265.59 821.479C266.085 821.975 266.085 822.795 265.59 823.29L257.338 831.541C257.098 831.782 256.773 831.917 256.433 831.917Z"
              fill="white"
            />
            <circle cx="486.5" cy="326.5" r="32.5" fill="#45C4AE" />
            <path
              d="M499.09 314.356L489.08 309.897C487.61 309.248 485.39 309.248 483.92 309.897L473.91 314.356C471.381 315.483 471.005 317.021 471.005 317.841C471.005 318.661 471.381 320.198 473.91 321.326L483.92 325.784C484.655 326.109 485.577 326.28 486.5 326.28C487.422 326.28 488.345 326.109 489.08 325.784L499.09 321.326C501.619 320.198 501.995 318.661 501.995 317.841C501.995 317.021 501.636 315.483 499.09 314.356Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M486.5 335.11C485.851 335.11 485.202 334.973 484.604 334.717L473.09 329.592C471.33 328.806 469.963 326.705 469.963 324.775C469.963 324.074 470.527 323.51 471.228 323.51C471.928 323.51 472.492 324.074 472.492 324.775C472.492 325.697 473.26 326.893 474.115 327.269L485.629 332.394C486.175 332.633 486.808 332.633 487.354 332.394L498.868 327.269C499.723 326.893 500.491 325.714 500.491 324.775C500.491 324.074 501.055 323.51 501.755 323.51C502.456 323.51 503.02 324.074 503.02 324.775C503.02 326.688 501.653 328.806 499.893 329.592L488.379 334.717C487.798 334.973 487.149 335.11 486.5 335.11Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M486.5 343.583C485.851 343.583 485.202 343.447 484.604 343.19L473.09 338.065C472.158 337.651 471.368 336.975 470.813 336.12C470.258 335.265 469.963 334.267 469.963 333.248C469.963 332.547 470.527 331.984 471.228 331.984C471.928 331.984 472.492 332.547 472.492 333.248C472.492 334.324 473.124 335.298 474.115 335.742L485.629 340.867C486.175 341.106 486.808 341.106 487.354 340.867L498.868 335.742C499.842 335.315 500.491 334.324 500.491 333.248C500.491 332.547 501.055 331.984 501.755 331.984C502.456 331.984 503.02 332.547 503.02 333.248C503.02 335.332 501.79 337.211 499.893 338.065L488.379 343.19C487.798 343.447 487.149 343.583 486.5 343.583Z"
              fill="white"
            />
            <circle cx="32.5" cy="547.5" r="32.5" fill="#45C4AE" />
            <path
              d="M48.7293 545.621V534.004C48.7293 531.442 47.636 530.417 44.9197 530.417H38.0181C35.3018 530.417 34.2085 531.442 34.2085 534.004V545.621C34.2085 548.183 35.3018 549.208 38.0181 549.208H44.9197C47.636 549.208 48.7293 548.183 48.7293 545.621ZM30.7918 549.379V560.996C30.7918 563.558 29.6985 564.583 26.9822 564.583H20.0806C17.3643 564.583 16.271 563.558 16.271 560.996V549.379C16.271 546.817 17.3643 545.792 20.0806 545.792H26.9822C29.6985 545.792 30.7918 546.817 30.7918 549.379Z"
              fill="white"
            />
            <path
              opacity="0.4"
              d="M48.7293 560.996V556.213C48.7293 553.65 47.636 552.625 44.9197 552.625H38.0181C35.3018 552.625 34.2085 553.65 34.2085 556.213V560.996C34.2085 563.558 35.3018 564.583 38.0181 564.583H44.9197C47.636 564.583 48.7293 563.558 48.7293 560.996ZM30.7918 538.788V534.004C30.7918 531.442 29.6985 530.417 26.9822 530.417H20.0806C17.3643 530.417 16.271 531.442 16.271 534.004V538.788C16.271 541.35 17.3643 542.375 20.0806 542.375H26.9822C29.6985 542.375 30.7918 541.35 30.7918 538.788Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="relative md:hidden">
          <div className="absolute right-1/4 top-0 mb-6 mr-4 child:text-wd-service sm:mr-12">
            <h5 className="font-semibold lg:mb-2 lg:text-xl xl:text-2xl">
              دراسة وتحليل الأعمال
            </h5>
            <p className="text-xs lg:text-[0.78rem] xl:text-base">
              ● دراسة الوضع الحالــــي للعلامـــــة التجاريـــــة <br />
              ● دراسة وضع المحتوى والسوشيال ميديا <br />
              ● تحلــــيـــــــــــــــــــــل
              المـــوقــــــــــــــــــــــــــع
              الإلـكـــترونــــــــــــــــــــــــي <br />●
              تحلــــيـــــــــــــــــــــل
              المنـــــــــــــــافسيــــــــــــــــــن بالســــــــــــــــوق{" "}
              <br />
            </p>
          </div>
          <div
            className="absolute left-1/4 top-1/4 ml-4 child:text-wd-service sm:ml-12 sm:mt-6"
            dir="ltr"
          >
            <h5 className="font-semibold lg:mb-2 lg:text-xl xl:text-2xl">
              بناء استراتيجية تسويقية
            </h5>
            <p className="text-xs lg:text-[0.78rem] xl:text-base">
              ● استراتيجية عمــــل بتوقيتـــــــات محددة
              <br />● أهــــــداف محـــددة قابلــــــــــــة
              للقيـــــــــــــــــــاس <br />
              ● خطـــــــة تسويقية واضحـــــــــــة ودقيقـــــــــة <br />●
              توزيع مناسب للتكلفة على المنصات <br />
            </p>
          </div>
          <div className="absolute left-1/4 top-1/2 -ml-4 mt-12 child:text-wd-service sm:left-0 sm:right-1/3 sm:-ml-0 sm:mt-16">
            <h5 className="font-semibold lg:mb-2 lg:text-xl xl:text-2xl">
              التنفيذ والمراقبة
            </h5>
            <p className="text-xs lg:text-[0.78rem] xl:text-base">
              ● توزيع المهــــــام للفــــــــرق المختصــــــــــة <br />
              ● تنفيذ خــــــــــطة التســـــويق والإعلانات <br />
              ● مراقبـــــــــة الحــــــــــــــــملات
              ونتــــــــــــــــــــائجها
              <br />
              ● مراقبة وسائل التواصل الاجتماعي
              <br />
              ● تحسيــــــــــــن الحمـــــــــــــلات
              الإعـــــــــــــــــــــلانية
              <br />
            </p>
          </div>
          <div
            className="absolute right-1/4 top-3/4 mt-20 child:text-wd-service sm:right-1/3 sm:mt-24"
            dir="ltr"
          >
            <h5 className="font-semibold lg:mb-2 lg:text-xl xl:text-2xl">
              قياس النتائج
            </h5>
            <p className="text-xs lg:text-[0.78rem] xl:text-base">
              ● قياس نتائـــــــــج الحملات الإعلانيـــــــة <br />
              ● تقرير مواقع التواصل الاجتماعــي <br />
              ● نتائج زيارات الموقـــع الالكترونــــــي <br />● قياس النتائج
              بالخطة التسويقية <br />
            </p>
          </div>
          <svg
            className="mx-auto h-[36rem] w-max sm:h-[44rem]"
            width="375"
            height="793"
            viewBox="0 0 375 793"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_271_6)">
              <path
                d="M349.843 48.6792V97.6199C349.843 121.036 330.836 140.018 307.39 140.018H68.3962C44.9504 140.018 25.9434 159 25.9434 182.416V358.42C25.9434 381.836 44.9504 400.818 68.3962 400.818H288.129M25.9434 753.35V704.409C25.9434 680.993 44.9504 662.011 68.3962 662.011H307.39C330.836 662.011 349.843 643.029 349.843 619.613V443.216C349.843 419.801 330.836 400.818 307.39 400.818H108.884"
                stroke="#45C4AE"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M348.664 51.0347C362.775 51.0347 374.214 39.6102 374.214 25.5173C374.214 11.4245 362.775 0 348.664 0C334.553 0 323.113 11.4245 323.113 25.5173C323.113 39.6102 334.553 51.0347 348.664 51.0347Z"
                fill="#45C4AE"
              />
              <path
                d="M357.729 38.9302C358.302 38.9303 358.87 38.8176 359.399 38.5985C359.929 38.3795 360.41 38.0584 360.815 37.6535C361.634 36.8362 362.094 35.7276 362.094 34.571C362.094 33.4145 361.634 32.3059 360.815 31.4885C360.41 31.0837 359.929 30.7626 359.399 30.5435C358.87 30.3245 358.302 30.2118 357.729 30.2119C356.572 30.2119 355.461 30.6712 354.643 31.4885C353.824 32.3059 353.364 33.4145 353.364 34.571C353.364 35.7276 353.824 36.8362 354.643 37.6535C355.461 38.4709 356.572 38.9302 357.729 38.9302ZM358.065 20.1518C359.133 20.1518 360.158 19.7278 360.914 18.9733C361.669 18.2187 362.094 17.1949 362.094 16.1279C362.094 15.0609 361.669 14.037 360.914 13.2825C360.158 12.528 359.133 12.104 358.065 12.104C356.996 12.104 355.971 12.528 355.216 13.2825C354.46 14.037 354.036 15.0609 354.036 16.1279C354.036 17.1949 354.46 18.2187 355.216 18.9733C355.971 19.7278 356.996 20.1518 358.065 20.1518ZM339.263 20.1518C340.331 20.1518 341.356 19.7278 342.111 18.9733C342.486 18.5999 342.783 18.1564 342.986 17.6681C343.188 17.1799 343.293 16.6565 343.293 16.1279C343.293 15.5993 343.188 15.0759 342.986 14.5877C342.783 14.0994 342.486 13.6559 342.111 13.2825C341.356 12.528 340.331 12.104 339.263 12.104C338.194 12.104 337.169 12.528 336.414 13.2825C336.039 13.6559 335.742 14.0994 335.539 14.5877C335.336 15.0759 335.232 15.5993 335.232 16.1279C335.232 16.6565 335.336 17.1799 335.539 17.6681C335.742 18.1564 336.039 18.5999 336.414 18.9733C337.169 19.7278 338.194 20.1518 339.263 20.1518Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M339.034 20.1793C339.669 22.0005 340.856 23.5793 342.43 24.697C344.003 25.8143 345.886 26.4157 347.818 26.4165H347.858L352.599 26.4031C354.64 26.3765 356.467 27.7583 357.018 29.7432V32.2242C357.018 32.4944 357.126 32.7534 357.317 32.9444C357.508 33.1354 357.768 33.2429 358.038 33.2434C358.309 33.2433 358.568 33.136 358.76 32.945C358.952 32.7534 359.058 32.4943 359.058 32.2242V17.1745C359.058 16.9044 358.952 16.6445 358.76 16.4537C358.568 16.2629 358.309 16.1558 358.038 16.1558C357.767 16.1558 357.508 16.2629 357.316 16.4537C357.125 16.645 357.018 16.9042 357.018 17.1745V26.0538C355.806 24.9704 354.238 24.3691 352.612 24.3641H352.585L347.845 24.3775H347.818C344.742 24.3775 341.989 22.4327 340.981 19.5221C340.911 19.3219 340.781 19.1485 340.607 19.0259C340.434 18.9034 340.227 18.8378 340.014 18.8382C339.908 18.8382 339.786 18.8516 339.679 18.8916C339.128 19.0526 338.846 19.643 339.034 20.1793Z"
                fill="white"
              />
              <path
                d="M25.5503 793C39.6614 793 51.1006 781.575 51.1006 767.483C51.1006 753.39 39.6614 741.965 25.5503 741.965C11.4393 741.965 0 753.39 0 767.483C0 781.575 11.4393 793 25.5503 793Z"
                fill="#45C4AE"
              />
              <path
                opacity="0.4"
                d="M23.8718 754.674C24.7987 753.882 26.316 753.882 27.2563 754.674L29.3781 756.498C29.7814 756.846 30.533 757.128 31.07 757.128H33.353C34.0396 757.131 34.6973 757.404 35.1828 757.889C35.6683 758.374 35.9423 759.031 35.945 759.717V761.997C35.9777 762.611 36.198 763.201 36.5762 763.687L38.4025 765.806C39.195 766.732 39.195 768.247 38.4025 769.186L36.5762 771.305C36.2272 771.707 35.945 772.459 35.945 772.995V775.276C35.945 776.697 34.7767 777.865 33.353 777.865H31.07C30.4547 777.897 29.8642 778.117 29.3781 778.495L27.2563 780.319C26.3294 781.11 24.8121 781.11 23.8718 780.319L21.75 778.495C21.3467 778.146 20.5951 777.865 20.0582 777.865H17.735C16.3113 777.865 15.1431 776.697 15.1431 775.276V772.982C15.109 772.374 14.8938 771.79 14.5251 771.305L12.7122 769.173C11.9332 768.247 11.9332 766.745 12.7122 765.82L14.5251 763.687C14.8608 763.284 15.1431 762.533 15.1431 762.01V759.703C15.1458 759.018 15.4197 758.361 15.9052 757.876C16.3907 757.391 17.0484 757.117 17.735 757.115H20.0582C20.5817 757.115 21.3475 756.833 21.7508 756.484L23.8718 754.674Z"
                fill="white"
              />
              <path
                d="M23.9253 771.736C23.7931 771.736 23.6622 771.71 23.5402 771.659C23.4181 771.608 23.3072 771.534 23.2138 771.441L19.9638 768.195C19.7765 768.005 19.6714 767.75 19.6714 767.483C19.6714 767.217 19.7767 766.962 19.9638 766.773C20.1536 766.586 20.4093 766.481 20.6757 766.481C20.9421 766.481 21.1978 766.586 21.3876 766.773L23.9261 769.308L29.7013 763.54C29.891 763.354 30.1467 763.249 30.4131 763.249C30.6795 763.249 30.9353 763.354 31.125 763.54C31.312 763.73 31.4168 763.985 31.4168 764.251C31.4168 764.518 31.312 764.773 31.125 764.962L24.6384 771.441C24.545 771.534 24.4341 771.608 24.312 771.659C24.19 771.71 24.0591 771.736 23.9269 771.736H23.9253Z"
                fill="white"
              />
              <path
                d="M25.5503 288.935C39.6614 288.935 51.1006 277.51 51.1006 263.417C51.1006 249.324 39.6614 237.9 25.5503 237.9C11.4393 237.9 0 249.324 0 263.417C0 277.51 11.4393 288.935 25.5503 288.935Z"
                fill="#45C4AE"
              />
              <path
                d="M35.4481 253.881L27.5778 250.381C26.4229 249.871 24.6768 249.871 23.522 250.381L15.6517 253.881C13.6643 254.767 13.3687 255.974 13.3687 256.618C13.3687 257.262 13.6643 258.469 15.6517 259.354L23.522 262.855C24.0998 263.11 24.8246 263.244 25.5503 263.244C26.2759 263.244 27.0007 263.11 27.5786 262.855L35.4488 259.354C37.4363 258.469 37.7319 257.262 37.7319 256.618C37.7319 255.974 37.4488 254.767 35.4481 253.881Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M25.5503 270.177C25.0401 270.177 24.5299 270.069 24.0597 269.868L15.0078 265.845C13.6242 265.227 12.5503 263.578 12.5503 262.062C12.5503 261.799 12.655 261.546 12.8413 261.36C13.0277 261.174 13.2805 261.069 13.544 261.069C13.8076 261.069 14.0603 261.174 14.2467 261.36C14.433 261.546 14.5377 261.799 14.5377 262.062C14.5377 262.786 15.1423 263.725 15.8137 264.021L24.8655 268.045C25.2956 268.232 25.7924 268.232 26.2217 268.045L35.2736 264.021C35.9449 263.725 36.5495 262.8 36.5495 262.062C36.5495 261.799 36.6542 261.546 36.8406 261.36C37.0269 261.174 37.2797 261.069 37.5432 261.069C37.8068 261.069 38.0595 261.174 38.2459 261.36C38.4322 261.546 38.5369 261.799 38.5369 262.062C38.5369 263.565 37.4622 265.227 36.0794 265.845L27.0275 269.868C26.5707 270.069 26.0605 270.177 25.5503 270.177ZM25.5503 276.83C25.0401 276.83 24.5299 276.723 24.0597 276.522L15.0078 272.498C14.2759 272.172 13.6541 271.641 13.2177 270.97C12.7816 270.299 12.5497 269.515 12.5503 268.715C12.5503 268.452 12.655 268.199 12.8413 268.013C13.0277 267.827 13.2805 267.723 13.544 267.723C13.8076 267.723 14.0603 267.827 14.2467 268.013C14.433 268.199 14.5377 268.452 14.5377 268.715C14.5379 269.13 14.6586 269.536 14.8851 269.883C15.1116 270.231 15.4341 270.505 15.8137 270.673L24.8655 274.697C25.2956 274.885 25.7924 274.885 26.2217 274.697L35.2736 270.673C36.0393 270.338 36.5495 269.56 36.5495 268.715C36.5495 268.452 36.6542 268.199 36.8406 268.013C37.0269 267.827 37.2797 267.723 37.5432 267.723C37.8068 267.723 38.0595 267.827 38.2459 268.013C38.4322 268.199 38.5369 268.452 38.5369 268.715C38.5355 269.515 38.3029 270.298 37.8669 270.969C37.431 271.64 36.8103 272.171 36.0794 272.498L27.0275 276.522C26.5707 276.723 26.0605 276.83 25.5503 276.83Z"
                fill="white"
              />
              <path
                d="M349.45 559.811C363.561 559.811 375 548.387 375 534.294C375 520.201 363.561 508.776 349.45 508.776C335.339 508.776 323.899 520.201 323.899 534.294C323.899 548.387 335.339 559.811 349.45 559.811Z"
                fill="#45C4AE"
              />
              <path
                d="M362.208 532.818V523.697C362.208 521.686 361.349 520.881 359.214 520.881H353.788C351.652 520.881 350.792 521.686 350.792 523.697V532.818C350.792 534.83 351.652 535.635 353.788 535.635H359.214C361.349 535.635 362.208 534.83 362.208 532.818ZM348.107 535.769V544.89C348.107 546.901 347.247 547.706 345.112 547.706H339.686C337.55 547.706 336.691 546.901 336.691 544.89V535.769C336.691 533.757 337.55 532.953 339.686 532.953H345.112C347.247 532.953 348.107 533.757 348.107 535.769Z"
                fill="white"
              />
              <path
                opacity="0.4"
                d="M362.208 544.89V541.134C362.208 539.122 361.349 538.317 359.214 538.317H353.788C351.652 538.317 350.792 539.122 350.792 541.134V544.89C350.792 546.901 351.652 547.706 353.788 547.706H359.214C361.349 547.706 362.208 546.901 362.208 544.89ZM348.107 527.453V523.697C348.107 521.686 347.247 520.881 345.112 520.881H339.686C337.55 520.881 336.691 521.686 336.691 523.697V527.453C336.691 529.465 337.55 530.27 339.686 530.27H345.112C347.247 530.27 348.107 529.465 348.107 527.453Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_271_6">
                <rect width="375" height="793" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default HowWeWork;
