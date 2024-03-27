import type { SVGProps } from "react";

export function ClockDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 1a8 8 0 1 1-.589 15.979a5.5 5.5 0 0 0-7.39-7.39A8 8 0 0 1 11 1Zm-.5 3a.5.5 0 0 0-.5.5v5l.008.09a.5.5 0 0 0 .492.41h3l.09-.008A.5.5 0 0 0 13.5 9H11V4.5l-.008-.09A.5.5 0 0 0 10.5 4ZM10 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L5.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708L4.793 14.5l-1.147 1.146a.5.5 0 0 0 .708.708L5.5 15.207l1.146 1.147a.5.5 0 0 0 .708-.708L6.207 14.5l1.147-1.146Z"
      />
    </svg>
  );
}
export default ClockDismissFilled;
