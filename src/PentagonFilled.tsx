import type { SVGProps } from "react";

export function PentagonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.761 1.658a2.5 2.5 0 0 0-3.37-.01L2.822 6.7a2.5 2.5 0 0 0-.672 2.702l2.149 5.947a2.5 2.5 0 0 0 2.351 1.65h6.827a2.5 2.5 0 0 0 2.369-1.702L17.87 9.28a2.5 2.5 0 0 0-.68-2.64l-5.43-4.981Z"
      />
    </svg>
  );
}
export default PentagonFilled;
