import React, { SVGProps } from "react";

export function SaveImage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17 6.125v2.91A3.529 3.529 0 0 0 16.5 9H16V6.125a.965.965 0 0 0-.289-.711l-2.125-2.125A.962.962 0 0 0 13 3.008V5.5a1.507 1.507 0 0 1-.922 1.383A1.327 1.327 0 0 1 11.5 7h-4a1.507 1.507 0 0 1-1.383-.922A1.327 1.327 0 0 1 6 5.5V3H5a.972.972 0 0 0-.703.289a1.081 1.081 0 0 0-.219.32A.856.856 0 0 0 4 4v10a.972.972 0 0 0 .078.391c.052.118.123.226.211.32a.854.854 0 0 0 .313.211c.127.049.262.075.398.078v-4.5a1.507 1.507 0 0 1 .922-1.383c.181-.082.379-.122.578-.117h5.992a3.489 3.489 0 0 0-2.442 1H6.5a.505.505 0 0 0-.5.5V15h3v1H5a1.884 1.884 0 0 1-.758-.156a2.2 2.2 0 0 1-.64-.422A1.9 1.9 0 0 1 3 14.039V4c-.001-.26.052-.519.156-.758a2.2 2.2 0 0 1 .422-.642a1.9 1.9 0 0 1 .622-.436c.24-.105.499-.16.761-.164h7.914c.262 0 .523.05.766.148c.244.099.465.248.648.438l2.125 2.125c.186.185.332.405.43.648c.099.244.152.503.156.766ZM7 3v2.5a.505.505 0 0 0 .5.5h4a.505.505 0 0 0 .5-.5V3H7Zm3 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .51-.152.983-.414 1.379l-3.025-3.025a1.5 1.5 0 0 0-2.122 0l-3.025 3.025A2.488 2.488 0 0 1 10 16.5v-4Zm7 .25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-5.879 5.836c.396.262.87.414 1.379.414h4c.51 0 .983-.152 1.379-.414l-3.025-3.025a.5.5 0 0 0-.708 0l-3.025 3.025Z"
      />
    </svg>
  );
}
export default SaveImage;
