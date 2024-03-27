import React, { SVGProps } from "react";

export function SpeakerNoneFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M10.317 2.273c.612-.568 1.59-.177 1.674.622l.006.111v13.988c0 .835-.952 1.286-1.595.804l-.085-.071l-3.872-3.594a.5.5 0 0 0-.247-.124L6.105 14H3.497a1.5 1.5 0 0 1-1.493-1.356l-.007-.144v-5a1.5 1.5 0 0 1 1.356-1.493L3.497 6h2.608a.5.5 0 0 0 .265-.076l.075-.057l3.872-3.594zm3.534 5.373l1.646 1.647l1.646-1.647a.5.5 0 1 1 .708.708L16.204 10l1.647 1.646a.5.5 0 0 1-.707.708l-1.647-1.647l-1.646 1.647a.5.5 0 0 1-.708-.708L14.79 10l-1.646-1.646a.5.5 0 0 1 .707-.708z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default SpeakerNoneFilled;
