import type { SVGProps } from "react";

export function ReplayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6.5v-3a.5.5 0 0 1 1 0v1.207a7.978 7.978 0 0 1 5.406-2.685a7.96 7.96 0 0 1 2.531.214a8.003 8.003 0 0 1 1.713 14.885a7.952 7.952 0 0 1-3.147.863a7.95 7.95 0 0 1-5.15-1.472a7.977 7.977 0 0 1-3.28-5.426a8.034 8.034 0 0 1-.059-1.604a.5.5 0 1 1 .998.064A6.973 6.973 0 0 0 3 10c0 3.1 2.015 5.73 4.808 6.65a6.995 6.995 0 0 0 3.141.285a6.987 6.987 0 0 0 2.325-.746a7.003 7.003 0 0 0-3.795-13.17a7.106 7.106 0 0 0-1.923.42A7.02 7.02 0 0 0 4.255 6H6a.5.5 0 0 1 0 1H3.5a.502.502 0 0 1-.5-.5Zm4.5 1.467c0-.93.98-1.535 1.812-1.117l4.04 2.033c.917.462.917 1.772 0 2.234l-4.04 2.032A1.25 1.25 0 0 1 7.5 12.034V7.967Z"
      />
    </svg>
  );
}
export default ReplayFilled;
