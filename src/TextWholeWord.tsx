import React, { SVGProps } from "react";

export function TextWholeWord(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5 15a.5.5 0 0 0 .5-.5v-.391A2.764 2.764 0 0 0 14 15a3.28 3.28 0 0 0 3-3.5A3.279 3.279 0 0 0 14 8a2.766 2.766 0 0 0-2 .891V4a.5.5 0 0 0-1 0v10.5a.5.5 0 0 0 .5.5ZM14 9a2.29 2.29 0 0 1 2 2.5a2.29 2.29 0 0 1-2 2.5a2.29 2.29 0 0 1-2-2.5A2.29 2.29 0 0 1 14 9Zm-9.129 5.884A3.716 3.716 0 0 0 8 14.089v.411a.5.5 0 0 0 1 0v-4.038a2.445 2.445 0 0 0-1.276-2.409a3.881 3.881 0 0 0-1.868-.365a4.019 4.019 0 0 0-1.58.365a.5.5 0 0 0 .448.894a3.05 3.05 0 0 1 1.17-.26a2.9 2.9 0 0 1 1.382.26A1.353 1.353 0 0 1 8 10.265a5.733 5.733 0 0 0-1.4-.249a3.923 3.923 0 0 0-2.375.568a2.361 2.361 0 0 0 .646 4.3Zm-.094-3.467a2.931 2.931 0 0 1 1.769-.4c.498.025.989.13 1.454.308v1.464a3.235 3.235 0 0 1-2.871 1.129a1.361 1.361 0 0 1-.352-2.501ZM19 16v.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 16.5V16a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V16a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default TextWholeWord;
