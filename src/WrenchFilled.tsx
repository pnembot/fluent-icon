import type { SVGProps } from "react";

export function WrenchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 2a4.5 4.5 0 0 0-4.418 5.36l-6.425 6.658a2.357 2.357 0 0 0 3.374 3.293l6.365-6.448a4.5 4.5 0 0 0 5.49-5.374a.5.5 0 0 0-.84-.241L14.5 7.793L12.208 5.5l2.545-2.545a.5.5 0 0 0-.242-.84A4.513 4.513 0 0 0 13.501 2Z"
      />
    </svg>
  );
}
export default WrenchFilled;
