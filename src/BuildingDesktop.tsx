import React, { SVGProps } from "react";

export function BuildingDesktop(props: SVGProps<SVGSVGElement>) {
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
        d="M3 3.25A.25.25 0 0 1 3.25 3h5.5a.25.25 0 0 1 .25.25v2.5C9 6.44 9.56 7 10.25 7h1.5a.25.25 0 0 1 .25.25V8h1v-.75C13 6.56 12.44 6 11.75 6h-1.5a.25.25 0 0 1-.25-.25v-2.5C10 2.56 9.44 2 8.75 2h-5.5C2.56 2 2 2.56 2 3.25v10.5c0 .69.56 1.25 1.25 1.25H7v-1H3.25a.25.25 0 0 1-.25-.25V3.25ZM7.25 8.5a.75.75 0 0 1 .643.364c-.319.315-.568.7-.72 1.132A.75.75 0 0 1 7.25 8.5Zm-2.5-3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM5.5 7A.75.75 0 1 1 4 7a.75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM8 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM8 11a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v1h1.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H12v-1h-2a2 2 0 0 1-2-2v-4Zm2 5h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm4 2v-1h-1v1h1Z"
      />
    </svg>
  );
}
export default BuildingDesktop;
