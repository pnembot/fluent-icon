import React, { SVGProps } from "react";

export function TentFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.4 2.818a.5.5 0 0 0-.767 0c-1.197 1.435-3.558 3.14-4.916 3.898a.5.5 0 0 0-.251.368L3.375 15H2.5a.5.5 0 0 0 0 1h3.936c.033.007.066.01.1.01h6.906a.498.498 0 0 0 .1-.01H17.5a.5.5 0 0 0 0-1h-.841l-1.09-7.916a.5.5 0 0 0-.252-.368c-1.358-.758-3.72-2.463-4.916-3.898ZM7.516 15.01c.839-1.22 1.704-2.786 2.485-5.261c.706 2.233 1.493 3.776 2.486 5.261H7.514Z"
      />
    </svg>
  );
}
export default TentFilled;
