import type { SVGProps } from "react";

export function PhonePagination(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 15a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Z"
      />
    </svg>
  );
}
export default PhonePagination;
