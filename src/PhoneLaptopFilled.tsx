import type { SVGProps } from "react";

export function PhoneLaptopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3h11A1.5 1.5 0 0 1 17 4.5v7a1.5 1.5 0 0 1-1.5 1.5H10V8a2 2 0 0 0-2-2H3V4.5ZM10 15h7.5a.5.5 0 0 0 0-1H10v1ZM2 8.5A1.5 1.5 0 0 1 3.5 7h4A1.5 1.5 0 0 1 9 8.5v8A1.5 1.5 0 0 1 7.5 18h-4A1.5 1.5 0 0 1 2 16.5v-8ZM5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1H5Z"
      />
    </svg>
  );
}
export default PhoneLaptopFilled;
