import React, { SVGProps } from "react";

export function VideoClipOff(props: SVGProps<SVGSVGElement>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l.739.738A2.495 2.495 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11c.241 0 .474-.034.695-.098l.951.952a.5.5 0 0 0 .708-.708l-15-15ZM15.293 16H4.5A1.5 1.5 0 0 1 3 14.5v-9c0-.489.234-.923.596-1.197L8 8.707v3.943a.5.5 0 0 0 .776.417l2.156-1.428L15.292 16ZM9.918 7.797l2.716 2.716l.142-.095a.5.5 0 0 0-.01-.84l-2.848-1.78ZM17 14.5c0 .117-.013.23-.039.34l.777.776A2.49 2.49 0 0 0 18 14.5v-9A2.5 2.5 0 0 0 15.5 3H5.121l1 1H15.5A1.5 1.5 0 0 1 17 5.5v9Z"
      />
    </svg>
  );
}
export default VideoClipOff;
