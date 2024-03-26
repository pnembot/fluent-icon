import React, { SVGProps } from "react";

export function ResizeImage(props: SVGProps<SVGSVGElement>) {
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
        d="M5 2a3 3 0 0 0-3 3v3.5a.5.5 0 0 0 1 0V5a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 0-1H5Zm6.5 0a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5Zm6.5 9.5a.5.5 0 0 0-1 0V15a2 2 0 0 1-2 2h-3.5a.5.5 0 0 0 0 1H15a3 3 0 0 0 3-3v-3.5Zm-17 1A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .51-.152.983-.414 1.379L6.56 14.854a1.5 1.5 0 0 0-2.122 0l-3.025 3.025A2.488 2.488 0 0 1 1 16.5v-4Zm7 .25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-5.879 5.836c.396.262.87.414 1.379.414h4c.51 0 .983-.152 1.379-.414L5.854 15.56a.5.5 0 0 0-.708 0l-3.025 3.025Z"
      />
    </svg>
  );
}
export default ResizeImage;
