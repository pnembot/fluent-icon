import React, { SVGProps } from "react";

export function NotebookLightning(props: SVGProps<SVGSVGElement>) {
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
        d="M5 2a2 2 0 0 0-2 2v5.6a5.463 5.463 0 0 1 1-.393V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2.6a5.507 5.507 0 0 1-.657 1H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm0 3.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2ZM6 6v1h6V6H6Zm10 0h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16V6Zm0 3.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16V9.5Zm0 3.5h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16V13Zm-6 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-5.631.84c.16 0 .28.15.243.307l-.238 1.006c-.063.269.243.46.435.27l2.565-2.53c.262-.259.089-.723-.27-.723h-.236a.25.25 0 0 1-.239-.325l.309-.979c.057-.18-.07-.366-.25-.366H4.86a.263.263 0 0 0-.243.171l-1.096 2.783c-.073.184.055.386.242.386h.606Z"
      />
    </svg>
  );
}
export default NotebookLightning;
