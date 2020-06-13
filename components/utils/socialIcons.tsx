import { ReactElement } from "react";

type TsocialIcons = {
  [social: string]: (props: Props) => ReactElement;
};
type Props = {
  className: string;
};

const socialIcons: TsocialIcons = {
  codepen: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
      <line x1="12" y1="22" x2="12" y2="15.5"></line>
      <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
      <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
      <line x1="12" y1="2" x2="12" y2="8.5"></line>
    </svg>
  ),
  facebook: ({className}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  github: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  gitlab: ({className}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
    </svg>
  ),
  instagram: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
    </svg>
  ),
  linkedin: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  slack: ({className}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z"></path>
      <line x1="12.57" y1="5.99" x2="16.15" y2="16.39"></line>
      <line x1="7.85" y1="7.61" x2="11.43" y2="18.01"></line>
      <line x1="16.39" y1="7.85" x2="5.99" y2="11.43"></line>
      <line x1="18.01" y1="12.57" x2="7.61" y2="16.15"></line>
    </svg>
  ),
  stackoverflow: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.913 16.041v6.848h17.599v-6.848M7.16 18.696h8.925M7.65 13.937l8.675 1.8M9.214 9.124l8.058 3.758M12.086 4.65l6.849 5.66M15.774 1.111l5.313 7.162" />
    </svg>
  ),
  telegram: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.509 1.793.997 3.592 1.48 5.388.16.36.506.494.864.498l-.002.018s.281.028.555-.038a2.1 2.1 0 0 0 .933-.517c.345-.324 1.28-1.244 1.811-1.764l3.999 2.952.032.018s.442.311 1.09.355c.324.022.75-.04 1.116-.308.37-.27.613-.702.728-1.196.342-1.492 2.61-12.285 2.997-14.072l-.01.042c.27-1.006.17-1.928-.455-2.474a1.654 1.654 0 0 0-1.034-.407z" />
    </svg>
  ),
  twitch: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>
  ),
  twitter: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  ),
  youtube: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  ),
  email: ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  dribbble: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        style={{ fontVariationSettings: "normal" }}
        cx="12.004"
        cy="12"
        r="9.39"
        paint-order="stroke fill markers"
      />
      <path
        style={{ fontVariationSettings: "normal" }}
        d="M5.858 19.136s2.343-5.79 8.161-6.422c5.818-.633 7.442.479 7.442.479M2.68 10.839s4.91.752 10.112-1.11c5.202-1.863 5.887-4.601 5.887-4.601"
      />
      <path
        style={{ fontVariationSettings: "normal" }}
        d="M8.533 3.208s2.888 2.73 5.339 9.235c2.451 6.505 2.344 8.4 2.344 8.4"
      />
    </svg>
  ),
  behance: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        paint-order="stroke fill markers"
        strokeLinejoin="miter"
        strokeWidth="2"
        style={{ fontVariationSettings: "normal" }}
        d="M1.774 18.063V5.466h5.51c1.978 0 3.116 1.326 3.055 2.806-.043 1.049-.711 2.988-2.643 2.988h-5.93H7.73c1.224 0 3.532 1.13 3.532 3.532 0 2.4-1.873 3.27-3.318 3.27zm12.57-4.459h7.89s.012-4.18-4.167-4.18c-5.237 0-5.277 9.11-.3 9.11 3.06 0 3.935-1.806 3.935-1.806M15.526 5.823h4.987"
      />
    </svg>
  ),
  freepik: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M5.737 17.28s3.423.84 7.61.162c4.188-.676 6.862-2.57 6.862-2.57s.28 3.943-4.967 5.33c-5.248 1.388-8.543.657-9.506-2.923zm-.62-3.104s4.491 1.361 8.728.344c4.237-1.016 5.94-2.568 5.94-2.568s-1.81-6.448-7.405-5.648c-5.597.8-8.061 4.414-7.263 7.872z"
        style={{ fontVariationSettings: "normal" }}
        strokeLinejoin="round"
      />
      <path
        d="M1.265 12.607c.159-1.98.561-3.898 2.08-5.701m5.148-3.29c2.006-.66 3.968-1.157 6.446-.844m5.202 2.98c1.192 1.275 1.963 2.163 2.594 3.815"
        style={{ fontVariationSettings: "normal" }}
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <circle
        r=".989"
        cy="10.404"
        cx="14.746"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="9.637"
        cy="11.305"
        r="1.477"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  adobestock: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        style={{ fontVariationSettings: "normal" }}
        d="M2.235 2.235h19.53v19.53H2.235z"
      />
      <path
        style={{ fontVariationSettings: "normal" }}
        d="M6.165 16.659s3.16 1.2 4.602-.17c1.37-1.3.787-3.163-.754-4.05-1.68-.969-3.284-1.788-3.036-3.536.446-3.138 4.386-1.851 4.386-1.851M15.792 7.794v7.774c0 1.023.635 1.766 2.043 1.624M17.826 10.04h-3.582"
      />
    </svg>
  ),
  shutterstock: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect ry="5" rx="5" height="20" width="20" y="2" x="2" />
      <path
        d="M7.728 11.725V9.032c0-1.025.824-1.85 1.849-1.85h2.815m3.88 5.093v2.693a1.845 1.845 0 0 1-1.849 1.85h-2.815"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  ),
  "123rf": () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        style={{ fontVariationSettings: "normal" }}
        d="M7.48 3.826c-.702 0-1.345.388-1.675 1.008l-.711 1.334a4.214 4.214 0 0 1-1.614 1.67l-.388.224a2.207 2.207 0 0 0-1.104 1.913v8.607c0 .878.712 1.592 1.59 1.592h1.186c.468 0 .916-.19 1.244-.524l1.478-1.504c.266-.27.628-.421 1.006-.421h7.04c.378 0 .74.151 1.005.421l1.478 1.504c.329.334.778.524 1.247.524h1.183c.879 0 1.592-.714 1.592-1.592V9.975c0-.79-.422-1.518-1.106-1.912l-.388-.225a4.214 4.214 0 0 1-1.613-1.67l-.711-1.334a1.899 1.899 0 0 0-1.676-1.008z"
        strokeLinejoin="miter"
      />
      <circle cx="12" cy="12.467" r="2.723" />
    </svg>
  ),
  dreamstime: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M19.834 20.994s4.824-4.08 2.044-12.03C19.252 1.456 6.822-1.223 2.508 7.566c-3.936 8.023 2.18 14.46 7.88 14.374 4.889-.075 8.475-3.226 7.813-8.604-.76-6.18-6.73-6.816-9.275-4.184-2.256 2.334-1.816 7.034.873 7.823 2.241.844 4.661-1.265 3.161-3.215"
        style={{ fontVariationSettings: "normal" }}
        stroke="currentColor"
        strokeLinejoin="bevel"
        paintOrder="stroke fill markers"
      />
    </svg>
  ),
  paypal: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M7.144 19.532l1.049-5.751c.11-.606.691-1.002 1.304-.948 2.155.192 6.877.1 8.818-4.002 2.554-5.397-.59-7.769-6.295-7.769H7.43a1.97 1.97 0 0 0-1.944 1.655L2.77 19.507a.857.857 0 0 0 .846.994h2.368a1.18 1.18 0 0 0 1.161-.969zM7.967 22.522a.74.74 0 0 0 .666.416h2.313c.492 0 .923-.351 1.003-.837l.759-4.601c.095-.523.597-.866 1.127-.819 1.86.166 5.567-.118 6.85-3.821.554-1.6.705-2.954.408-4.018"
        style={{ fontVariationSettings: "normal" }}
        stroke="currentColor"
        strokeLinejoin="miter"
      />
    </svg>
  ),
  devto: ({ className }) => (
    <svg
      strokeLinejoin="round"
      className={className}
      strokeLinecap="round"
      strokeWidth="0"
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 400 500"
      height="34"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"></path>
    </svg>
  ),
  cv: ({ className }) => (
    <svg
      className={className}
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 560 560"
      height="24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path d="M437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148    C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962    c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216    h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40    c59.551,0,108,48.448,108,108S315.551,256,256,256z"></path>{" "}
      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
    </svg>
  ),
};

export default socialIcons;
