import type { SVGProps } from "react";

export function ClockArrowDownload(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 1a8 8 0 1 1-.589 15.979a5.48 5.48 0 0 0 .383-.982a7 7 0 1 0-6.79-6.79a5.384 5.384 0 0 0-.983.382A8 8 0 0 1 11 1Zm-.5 3a.5.5 0 0 1 .492.41L11 4.5V9h2.5a.5.5 0 0 1 .09.992L13.5 10h-3a.5.5 0 0 1-.492-.41L10 9.5v-5a.5.5 0 0 1 .5-.5ZM1 14.5a4.5 4.5 0 0 1 4-4.473v3.766l-.646-.647a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 1 0-.708-.707L6 13.793v-3.766A4.5 4.5 0 1 1 1 14.5Zm7 2a.5.5 0 0 0-.5-.5h-4a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default ClockArrowDownload;
