import type { SVGProps } from "react";

export function ArrowEjectFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.199 4.6c-.6-.8-1.801-.8-2.401 0l-4.496 6.002c-.74.989-.035 2.4 1.2 2.4h8.995c1.236 0 1.941-1.412 1.2-2.4L11.199 4.6ZM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H4Z"
      />
    </svg>
  );
}
export default ArrowEjectFilled;
