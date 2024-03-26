import React, { SVGProps } from "react";

export function TabDesktopImage(props: SVGProps<SVGSVGElement>) {
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
        d="M2.996 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-2.833c.148-.31.251-.647.302-1h2.531a1.5 1.5 0 0 0 1.5-1.5V7h-6.5a1.5 1.5 0 0 1-1.5-1.5V4h-2.5a1.5 1.5 0 0 0-1.5 1.5v2.536c-.353.05-.69.155-1 .303V5.5Zm13 .5v-.5a1.5 1.5 0 0 0-1.5-1.5h-5.5v1.5a.5.5 0 0 0 .5.5h6.5ZM2 11.5A2.5 2.5 0 0 1 4.5 9h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .51-.152.983-.414 1.379L7.56 13.854a1.5 1.5 0 0 0-2.122 0l-3.025 3.025A2.488 2.488 0 0 1 2 15.5v-4Zm7 .25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm-5.879 5.836c.396.262.87.414 1.379.414h4c.51 0 .983-.152 1.379-.414L6.854 14.56a.5.5 0 0 0-.708 0l-3.025 3.025Z"
      />
    </svg>
  );
}
export default TabDesktopImage;