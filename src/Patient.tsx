import type { SVGProps } from "react";

export function Patient(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4ZM9 6a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm-2.5 8.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Zm10-1H6a1 1 0 0 0-1 1v8h2v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h2V4a1 1 0 0 0-1-1Zm-2 7H8v2h4v-2Zm-7 3v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3H5Z"
      />
    </svg>
  );
}
export default Patient;
