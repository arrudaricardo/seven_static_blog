import style from "../styles/404.module.css";

const _404 = () => {
  return (
    <div className={style.error404}>
      <p className={style.img}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-cloud-drizzle"
        >
          <line x1="8" y1="19" x2="8" y2="21"></line>
          <line x1="8" y1="13" x2="8" y2="15"></line>
          <line x1="16" y1="19" x2="16" y2="21"></line>
          <line x1="16" y1="13" x2="16" y2="15"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="12" y1="15" x2="12" y2="17"></line>
          <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
        </svg>
      </p>
      <div className={style.banner}>
        <h1 className={style.bannerH1}>404</h1>
        <p>notFound</p>
        <p className={style.bannerP}>
          <a href="">
            <svg
              className={style.imgSvg}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default _404;
