import type { SVGProps } from "react";

export function HardDriveFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 10c-.588 0-1.136.169-1.599.461l2.25-5.249A2 2 0 0 1 6.489 4h7.104c.742 0 1.43.41 1.763 1.088c.544 1.106 1.53 3.207 2.333 5.432A2.987 2.987 0 0 0 16 10H4Zm12 1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H3.987A2 2 0 0 1 2 14v-1a2 2 0 0 1 2-2h12Zm-.5 3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default HardDriveFilled;
