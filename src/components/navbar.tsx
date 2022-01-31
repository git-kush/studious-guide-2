import { useCallback } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./Settings";

const Navbar = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const open = useCallback(() => setModelOpen(true), [setModelOpen]);
  const close = useCallback(() => setModelOpen(false), [setModelOpen]);
  const toggleModal = useCallback(() => {
    modelOpen ? close() : open();
  }, [open, close, modelOpen]);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.ctrlKey && e.key === "s") {
      e.preventDefault();
      open();
    }
  });

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#home" className="nav-link">
              <span className="link-text logo-text">Studious Guide</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  />
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  />
                </g>
              </svg>
            </a>
          </li>

          <li className="nav-item">
            <a href="#real_numbers" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 300 300"
                fill="none"
              >
                <g id="divide">
                  <g id="svg-secondary">
                    <circle
                      id="circle2"
                      cx="150.05"
                      cy="80.7"
                      r="29.7"
                      fill="var(--color-secondary)"
                    />
                    <circle
                      id="circle1"
                      cx="150.05"
                      cy="219.3"
                      r="29.7"
                      fill="var(--color-secondary)"
                    />
                  </g>
                  <g id="svg-primary">
                    <rect
                      id="rectangle"
                      x="243.481"
                      y="127.106"
                      width="45.7875"
                      height="187.481"
                      rx="10"
                      transform="rotate(90 243.481 127.106)"
                      fill="var(--color-primary)"
                    />
                  </g>
                </g>
              </svg>
              <span className="link-text">Real Numbers</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#polynomials" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 300 300"
                fill="none"
              >
                <g clipPath="url(#clip0_6_30)">
                  <path
                    d="M36.4 97.98C39.04 97.6867 42.0467 97.76 45.42 98.2C52.46 99.8133 57.4467 103.333 60.38 108.76L61.26 110.52L63.24 108.76C69.2533 103.333 75.8533 99.8133 83.04 98.2C87.2933 97.6133 91.2533 97.6867 94.92 98.42C101.08 99.74 106.213 102.453 110.32 106.56C113.987 110.227 116.627 114.7 118.24 119.98C120.733 127.313 121.1 135.307 119.34 143.96C116.407 159.947 108.853 173.22 96.68 183.78C94.48 185.687 92.28 187.373 90.08 188.84C85.5333 191.773 81.28 193.9 77.32 195.22C73.2133 196.54 69.18 197.2 65.22 197.2C62.2867 197.2 60.5267 197.127 59.94 196.98C54.66 195.807 50.48 193.46 47.4 189.94C46.52 189.06 46.08 188.693 46.08 188.84L37.28 224.04C37.28 224.48 37.5 224.7 37.94 224.7C39.26 225.14 42.78 225.36 48.5 225.36C51.2867 225.36 52.8267 225.507 53.12 225.8C54 226.093 54.44 226.753 54.44 227.78L52.24 236.36C51.6533 237.24 50.26 237.607 48.06 237.46C47.4733 237.46 46.3733 237.46 44.76 237.46C26.1333 236.873 12.42 236.947 3.62 237.68H1.86L1.2 237.02C0.613333 236.433 0.319999 235.92 0.319999 235.48L2.52 226.9V226.68C3.54667 225.8 5.6 225.36 8.68 225.36C12.9333 225.213 15.4267 224.773 16.16 224.04C16.6 223.6 21.0733 206.44 29.58 172.56C38.0867 138.533 42.4867 120.713 42.78 119.1C43.8067 112.06 42.4133 108.393 38.6 108.1C38.16 108.1 37.72 108.1 37.28 108.1C32.88 108.98 28.9933 116.167 25.62 129.66C25.0333 131.42 24.74 132.373 24.74 132.52C23.1267 133.4 21.3667 133.84 19.46 133.84H15.28L14.62 133.18C14.0333 132.593 14.0333 131.053 14.62 128.56C17.4067 118.293 20.8533 110.593 24.96 105.46C28.1867 101.5 32 99.0067 36.4 97.98ZM90.96 108.76C88.9067 108.027 86.4867 107.953 83.7 108.54C76.9533 109.713 70.3533 114.333 63.9 122.4L61.92 124.82L56.2 147.92C52.3867 163.32 50.48 171.093 50.48 171.24C50.48 172.707 51.4333 175.347 53.34 179.16C54.9533 181.947 57.1533 184.073 59.94 185.54C66.54 188.913 73.4333 187.227 80.62 180.48C85.46 176.08 89.4933 168.453 92.72 157.6C95.2133 148.213 96.9733 140.807 98 135.38C99.9067 126.58 100.053 120.127 98.44 116.02C96.9733 112.353 94.48 109.933 90.96 108.76Z"
                    fill="var(--color-primary)"
                  />
                  <path
                    d="M200 113.62C202.88 113.14 205.88 113.26 209 113.98C215 115.3 219.44 118.06 222.32 122.26C222.8 122.98 223.16 123.34 223.4 123.34L224.48 121.9C227.36 118.54 230.78 116.08 234.74 114.52C239.3 112.84 243.86 113.02 248.42 115.06C251.9 116.86 254.36 119.26 255.8 122.26C258.2 127.06 258.26 132.1 255.98 137.38C255.02 139.42 253.82 140.98 252.38 142.06C248.06 145.18 243.98 145.78 240.14 143.86C239.42 143.5 238.82 143.08 238.34 142.6C236.54 140.8 235.82 138.52 236.18 135.76C236.9 130.36 239.66 126.82 244.46 125.14L245.9 124.6L245.18 123.88C243.02 121.96 240.38 121.42 237.26 122.26C237.02 122.26 236.78 122.32 236.54 122.44C232.94 123.76 230.06 127.24 227.9 132.88C226.7 135.88 223.52 148.54 218.36 170.86C217.76 172.9 217.46 174.16 217.46 174.64C216.86 178.36 216.92 180.88 217.64 182.2C218.6 184 220.1 185.26 222.14 185.98C222.74 186.22 224 186.34 225.92 186.34C227.72 186.34 229.04 186.22 229.88 185.98C233 185.02 236.12 183.1 239.24 180.22C242.96 176.38 245.42 172.18 246.62 167.62C246.98 166.42 247.46 165.76 248.06 165.64C248.54 165.52 249.62 165.46 251.3 165.46C253.58 165.46 254.9 165.58 255.26 165.82C255.5 166.06 255.62 166.48 255.62 167.08C255.62 169.6 254.06 173.38 250.94 178.42C250.82 178.78 250.64 179.08 250.4 179.32C245 187.6 237.86 192.7 228.98 194.62C226.22 195.1 223.1 195.1 219.62 194.62C213.5 193.3 208.94 190.6 205.94 186.52L204.86 184.9L204.32 185.44C199.64 191.44 194.36 194.62 188.48 194.98C181.64 195.34 176.54 192.82 173.18 187.42C172.46 186.46 171.92 185.38 171.56 184.18C170.72 181.54 170.48 178.72 170.84 175.72C171.68 170.56 174.08 167.02 178.04 165.1C181.88 163.3 185.3 163.24 188.3 164.92C191.06 166.24 192.32 168.64 192.08 172.12C191.72 176.92 189.5 180.4 185.42 182.56C184.82 182.92 183.98 183.28 182.9 183.64L182.18 183.82L182.72 184.36C184.4 185.68 186.32 186.34 188.48 186.34C190.04 186.46 191.66 186.04 193.34 185.08C196.46 182.92 198.8 179.62 200.36 175.18L210.26 135.58C211.1 131.26 211.22 128.26 210.62 126.58C210.02 124.66 208.46 123.28 205.94 122.44C203.54 121.72 201.08 121.72 198.56 122.44C195.08 123.4 192.02 125.2 189.38 127.84C185.9 131.44 183.38 135.46 181.82 139.9C181.46 141.34 181.1 142.24 180.74 142.6C180.5 142.84 179.24 142.96 176.96 142.96H173.54L173 142.42C172.64 142.06 172.46 141.58 172.46 140.98C172.82 139.18 173.54 137.14 174.62 134.86C175.7 132.34 177.08 129.94 178.76 127.66C180.68 124.78 183.32 122.08 186.68 119.56C186.8 119.44 186.98 119.32 187.22 119.2C191.18 116.44 195.44 114.58 200 113.62Z"
                    fill="var(--color-primary)"
                  />
                  <path
                    d="M165.5 63.72L166.58 63H170.18C172.7 63 174.14 63.12 174.5 63.36C175.34 63.84 175.76 64.56 175.76 65.52C175.76 66.24 174.92 67.5 173.24 69.3C160.04 82.86 151.76 101.7 148.4 125.82C145.76 143.94 145.76 162.12 148.4 180.36C151.88 204.84 160.28 223.8 173.6 237.24C174.44 238.08 175.04 238.86 175.4 239.58C176.24 240.78 175.94 241.86 174.5 242.82C174.14 243.06 172.7 243.18 170.18 243.18H166.58L165.5 242.46C164.66 241.86 163.64 241.08 162.44 240.12C151.88 231.6 143.36 220.98 136.88 208.26C126.68 187.98 122.72 165.42 125 140.58C126.8 121.98 131.96 105.6 140.48 91.44C146.24 81.72 153.56 73.26 162.44 66.06C163.64 65.1 164.66 64.32 165.5 63.72Z"
                    fill="var(--color-secondary)"
                  />
                  <path
                    d="M249.96 63.18C250.32 63.06 251.7 63 254.1 63H257.7L258.78 63.72C259.62 64.32 260.64 65.1 261.84 66.06C270.72 73.26 278.04 81.72 283.8 91.44C295.2 110.28 300.54 132.18 299.82 157.14C299.22 175.98 295.08 193.02 287.4 208.26C280.92 220.98 272.4 231.6 261.84 240.12C260.64 241.08 259.62 241.86 258.78 242.46L257.7 243.18H254.1C251.34 243.18 249.66 242.88 249.06 242.28C248.58 241.68 248.46 240.9 248.7 239.94C248.82 239.46 249.54 238.5 250.86 237.06C256.98 230.58 261.9 223.38 265.62 215.46C271.38 203.7 275.04 190.08 276.6 174.6C278.28 160.32 278.28 145.98 276.6 131.58C273.96 105.18 265.38 84.36 250.86 69.12C249.54 67.68 248.82 66.72 248.7 66.24C248.22 64.8 248.64 63.78 249.96 63.18Z"
                    fill="var(--color-secondary)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_30">
                    <rect width="300" height="300" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="link-text">Polynomials</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#linear_equations" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 305 305"
                fill="none"
              >
                <rect
                  x="58"
                  y="135"
                  width="50"
                  height="189"
                  rx="10"
                  transform="rotate(-90 58 135)"
                  fill="var(--color-primary)"
                />
                <rect
                  x="247.618"
                  y="171.308"
                  width="49.7098"
                  height="188.64"
                  rx="10"
                  transform="rotate(90 247.618 171.308)"
                  fill="var(--color-secondary)"
                />
              </svg>
              <span className="link-text">Linear Equations</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#quadratic_equations" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 300 300"
                fill="none"
              >
                <g clipPath="url(#clip0_1_10)">
                  <path
                    d="M94 91.7C98.8 90.9 103.8 91.1 109 92.3C119 94.5 126.4 99.1 131.2 106.1C132 107.3 132.6 107.9 133 107.9L134.8 105.5C139.6 99.9 145.3 95.8 151.9 93.2C159.5 90.4 167.1 90.7 174.7 94.1C180.5 97.1 184.6 101.1 187 106.1C191 114.1 191.1 122.5 187.3 131.3C185.7 134.7 183.7 137.3 181.3 139.1C174.1 144.3 167.3 145.3 160.9 142.1C159.7 141.5 158.7 140.8 157.9 140C154.9 137 153.7 133.2 154.3 128.6C155.5 119.6 160.1 113.7 168.1 110.9L170.5 110L169.3 108.8C165.7 105.6 161.3 104.7 156.1 106.1C155.7 106.1 155.3 106.2 154.9 106.4C148.9 108.6 144.1 114.4 140.5 123.8C138.5 128.8 133.2 149.9 124.6 187.1C123.6 190.5 123.1 192.6 123.1 193.4C122.1 199.6 122.2 203.8 123.4 206C125 209 127.5 211.1 130.9 212.3C131.9 212.7 134 212.9 137.2 212.9C140.2 212.9 142.4 212.7 143.8 212.3C149 210.7 154.2 207.5 159.4 202.7C165.6 196.3 169.7 189.3 171.7 181.7C172.3 179.7 173.1 178.6 174.1 178.4C174.9 178.2 176.7 178.1 179.5 178.1C183.3 178.1 185.5 178.3 186.1 178.7C186.5 179.1 186.7 179.8 186.7 180.8C186.7 185 184.1 191.3 178.9 199.7C178.7 200.3 178.4 200.8 178 201.2C169 215 157.1 223.5 142.3 226.7C137.7 227.5 132.5 227.5 126.7 226.7C116.5 224.5 108.9 220 103.9 213.2L102.1 210.5L101.2 211.4C93.4 221.4 84.6 226.7 74.8 227.3C63.4 227.9 54.9 223.7 49.3 214.7C48.1 213.1 47.2 211.3 46.6 209.3C45.2 204.9 44.8 200.2 45.4 195.2C46.8 186.6 50.8 180.7 57.4 177.5C63.8 174.5 69.5 174.4 74.5 177.2C79.1 179.4 81.2 183.4 80.8 189.2C80.2 197.2 76.5 203 69.7 206.6C68.7 207.2 67.3 207.8 65.5 208.4L64.3 208.7L65.2 209.6C68 211.8 71.2 212.9 74.8 212.9C77.4 213.1 80.1 212.4 82.9 210.8C88.1 207.2 92 201.7 94.6 194.3L111.1 128.3C112.5 121.1 112.7 116.1 111.7 113.3C110.7 110.1 108.1 107.8 103.9 106.4C99.9 105.2 95.8 105.2 91.6 106.4C85.8 108 80.7 111 76.3 115.4C70.5 121.4 66.3 128.1 63.7 135.5C63.1 137.9 62.5 139.4 61.9 140C61.5 140.4 59.4 140.6 55.6 140.6H49.9L49 139.7C48.4 139.1 48.1 138.3 48.1 137.3C48.7 134.3 49.9 130.9 51.7 127.1C53.5 122.9 55.8 118.9 58.6 115.1C61.8 110.3 66.2 105.8 71.8 101.6C72 101.4 72.3 101.2 72.7 101C79.3 96.4 86.4 93.3 94 91.7Z"
                    fill="var(--color-primary)"
                  />
                  <path
                    d="M224.808 34.912C227.496 34.72 230.952 34.768 235.176 35.056C247.464 36.688 255.192 41.584 258.36 49.744C258.936 51.088 259.32 52.48 259.512 53.92C259.8 56.224 259.704 58.336 259.224 60.256C258.648 62.272 257.736 64.096 256.488 65.728C254.184 68.512 249.144 71.584 241.368 74.944C238.2 76.288 233.4 78.784 226.968 82.432L219.768 86.608H233.736C243.72 86.416 248.76 86.32 248.856 86.32L250.008 86.176L250.44 85.456C251.016 84.496 251.544 82.768 252.024 80.272C252.408 78.544 252.84 77.584 253.32 77.392C253.704 77.296 254.616 77.248 256.056 77.248H258.648L259.08 77.68C259.176 77.776 259.368 78.064 259.656 78.544L257.64 88.912C256.2 95.536 255.48 98.896 255.48 98.992C255.48 99.28 255.288 99.52 254.904 99.712L254.616 100H228.552C210.984 100 202.008 99.712 201.624 99.136C201.144 98.56 201.048 96.688 201.336 93.52C201.336 93.04 201.384 92.752 201.48 92.656C201.576 92.368 205.56 89.632 213.432 84.448L228.552 74.656C233.352 71.488 236.712 68.944 238.632 67.024C241.8 63.856 243.384 60.4 243.384 56.656C243.384 54.16 242.664 51.904 241.224 49.888C237.768 45.28 231.624 42.976 222.792 42.976C220.776 42.976 219.432 43.072 218.76 43.264C217.032 43.744 215.832 44.224 215.16 44.704L214.296 45.136L215.16 46C217.56 48.112 218.184 50.752 217.032 53.92C216.936 54.208 216.792 54.544 216.6 54.928C216.12 56.08 215.112 57.04 213.576 57.808C211.368 58.96 209.112 58.96 206.808 57.808C204.888 56.848 203.64 55.264 203.064 53.056C202.68 51.712 202.776 49.984 203.352 47.872C203.928 45.856 204.696 44.32 205.656 43.264C209.112 38.656 215.496 35.872 224.808 34.912Z"
                    fill="var(--color-secondary)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_10">
                    <rect width="300" height="300" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="link-text">Quadratic Equations</span>
            </a>
          </li>

          // <li className="nav-item">
          //   <a href="#home" className="nav-link">
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       width="32"
          //       height="32"
          //       viewBox="0 0 305 305"
          //       fill="none"
          //     >
          //       <g clipPath="url(#clip0_6_37)">
          //         <rect
          //           x="169.653"
          //           y="143.835"
          //           width="37.0176"
          //           height="140.475"
          //           rx="10"
          //           transform="rotate(90 169.653 143.835)"
          //           fill="var(--color-secondary)"
          //         />
          //         <rect
          //           x="219.539"
          //           y="48.4508"
          //           width="37.0176"
          //           height="71.63"
          //           rx="10"
          //           transform="rotate(44.142 219.539 48.4508)"
          //           fill="var(--color-primary)"
          //         />
          //         <rect
          //           x="213.01"
          //           y="50.1849"
          //           width="37.0176"
          //           height="189.034"
          //           rx="10"
          //           fill="var(--color-primary)"
          //         />
          //         <rect
          //           x="81.2061"
          //           y="91.8071"
          //           width="37.0176"
          //           height="140.475"
          //           rx="10"
          //           fill="var(--color-primary)"
          //         />
          //       </g>
          //       <defs>
          //         <clipPath id="clip0_6_37">
          //           <rect width="305" height="305" fill="white" />
          //         </clipPath>
          //       </defs>
          //     </svg>
          //     <span className="link-text">A.P</span>
          //   </a>
          // </li>

          <li className="nav-item">
            <a href="#coordinate" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 300 300"
                fill="none"
              >
                <g>
                  <g>
                    <line
                      id="Line 1"
                      x1="97"
                      y1="36"
                      x2="97"
                      y2="260"
                      stroke="var(--color-secondary)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 3"
                      x1="35"
                      y1="93"
                      x2="259"
                      y2="93"
                      stroke="var(--color-secondary)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 4"
                      x1="36"
                      y1="204"
                      x2="260"
                      y2="204"
                      stroke="var(--color-secondary)"
                      strokeWidth="10"
                    />
                    <line
                      id="Line 2"
                      x1="206"
                      y1="46"
                      x2="206"
                      y2="270"
                      stroke="var(--color-secondary)"
                      strokeWidth="10"
                    />
                  </g>
                  <g>
                    <rect
                      id="box"
                      x="38"
                      y="38"
                      width="224"
                      height="224"
                      stroke="var(--color-primary)"
                      strokeWidth="20"
                      strokeLinejoin="round"
                    />
                    <line
                      id="y"
                      x1="152"
                      y1="38"
                      x2="152"
                      y2="262"
                      stroke="var(--color-primary)"
                      strokeWidth="20"
                    />
                    <path
                      id="x"
                      d="M258 148H36"
                      stroke="var(--color-primary)"
                      strokeWidth="20"
                    />
                  </g>
                </g>
              </svg>
              <span className="link-text">Coordinate Geo</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fa-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="link-text">About</span>
            </a>
          </li>

          <li className="nav-item cursor-pointer" onClick={toggleModal}>
            <div className="nav-link">
              <svg
                id="gear"
                xmlns="http://www.w3.org/2000/svg"
                className="fa-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="link-text">Settings</span>
            </div>
          </li>
        </ul>
      </nav>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modelOpen && <Modal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
