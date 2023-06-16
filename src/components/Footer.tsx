import { Facebook, Instagram } from "iconsax-react";

function Footer() {
  return (
    <footer className="w-full bg-main-color pb-10 pt-12 text-center text-white">
      <p>جميع الحقوق محفوظة © 2023 - أثر</p>
      <ul className="mt-4 flex justify-center gap-4">
        <li>
          <a href="https://instagram.com/athr_sa.company?igshid=ZGUzMzM3NWJiOQ==">
            <Instagram variant="Bold" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Mohamed51136210?t=ND_CIKWegdhYdEaG3_uUww&s=08">
            <svg
              className="mt-0.5"
              width="20"
              height="20"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="81" height="81" rx="12" fill="white" />
              <path
                d="M15.5347 19.0265C24.7254 28.9973 35.5657 31.4901 39.8371 31.4901C39.3951 30.1547 38.5116 20.3619 46.907 17.6912C53.6233 15.5546 58.5426 18.8782 60.1628 20.807C63.6977 19.7387 66.6434 18.2847 67.6744 17.6912C65.907 20.8961 63.4031 23.4778 62.3721 24.368C63.786 24.368 67.3798 23.181 69 22.5875C67.9395 24.0119 64.7287 27.0388 63.2558 28.3742C62.814 55.5268 42.0465 64.4293 29.2326 63.9842C18.9814 63.6281 13.4729 60.2748 12 58.6427C18.3628 59.3549 25.845 55.6752 28.7907 53.7463C21.014 51.9658 18.186 47.3662 17.7442 45.2889C19.5116 45.645 22.0155 45.1406 23.0465 44.8438C15.9767 43.4194 13.9147 36.5348 13.7674 33.2706C14.8279 34.3389 17.7441 34.6059 19.0696 34.6059C12.3533 28.1961 13.9146 21.5489 15.5347 19.0265Z"
                fill="#45C4AE"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              className="mt-0.5"
              width="20"
              height="20"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="81" height="81" rx="12" fill="white" />
              <circle cx="20" cy="20" r="7" fill="#45C4AE" />
              <rect x="14" y="31" width="12" height="37" fill="#45C4AE" />
              <path
                d="M32.5 67.9997V31.4997H43.5V36.4997C44 34.333 49.5 29.8634 56.5 30.4999C65.3 31.3 67.5 38.9999 67.5 43.9997V67.9997H56.5C56.5 43.9997 56.5 40.4287 49 41.4999C44.5728 42.1322 43.5 46.333 43.5 48.4997V67.9997H32.5Z"
                fill="#45C4AE"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
