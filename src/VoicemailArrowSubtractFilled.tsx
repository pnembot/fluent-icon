import type { SVGProps } from "react";

export function VoicemailArrowSubtractFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 8a2 2 0 0 1 1.735 1.005A5.475 5.475 0 0 1 18 10.257V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.207A5.504 5.504 0 0 1 9 14.5a5.49 5.49 0 0 1 2.015-4.255A2.02 2.02 0 0 1 11.268 9H8.732A2 2 0 1 1 7 8h6Zm-7 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm13 4.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-7 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default VoicemailArrowSubtractFilled;
