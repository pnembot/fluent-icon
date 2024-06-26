import type { SVGProps } from "react";

export function CalligraphyPenErrorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Zm0 2.875c.116 0 .231-.004.345-.01a2.507 2.507 0 0 1-.198.425l-3.463 5.907c-.158.27-.401.473-.684.584v-7.04a1 1 0 0 0 .456-1.16A5.478 5.478 0 0 0 14.5 11ZM9 5.5c0 1.35.486 2.587 1.294 3.544a1 1 0 0 0-.794 1.822v7.04a1.372 1.372 0 0 1-.684-.584l-3.463-5.907a2.5 2.5 0 0 1-.102-2.335l1.232-2.6A1.75 1.75 0 0 1 5 4.75v-2a.75.75 0 0 1 1.5 0v2c0 .138.112.25.25.25h2.272A5.57 5.57 0 0 0 9 5.5Z"
      />
    </svg>
  );
}
export default CalligraphyPenErrorFilled;
