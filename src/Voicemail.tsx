import type { SVGProps } from "react";

export function Voicemail(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.732 9A2 2 0 1 1 7 8h6a2 2 0 1 1-1.732 1H8.732ZM6 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0Zm7-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6Z"
      />
    </svg>
  );
}
export default Voicemail;
