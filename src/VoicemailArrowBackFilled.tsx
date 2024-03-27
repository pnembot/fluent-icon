import type { SVGProps } from "react";

export function VoicemailArrowBackFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M6 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm7-2a2 2 0 0 1 1.735 1.005A5.475 5.475 0 0 1 18 10.257V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.207A5.504 5.504 0 0 1 9 14.5a5.49 5.49 0 0 1 2.015-4.255A2.02 2.02 0 0 1 11.268 9H8.732A2 2 0 1 1 7 8h6Zm1.5 11a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.499.499 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default VoicemailArrowBackFilled;
