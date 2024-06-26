import type { SVGProps } from "react";

export function ArrowEject(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.598 5.2a.5.5 0 0 1 .8 0l4.499 6.001a.5.5 0 0 1-.4.8H5.503a.5.5 0 0 1-.4-.8l4.495-6Zm1.6-.6c-.6-.8-1.8-.8-2.4 0l-4.496 6.002c-.74.989-.035 2.4 1.2 2.4h8.995c1.236 0 1.941-1.412 1.2-2.4L11.199 4.6ZM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H4Z"
      />
    </svg>
  );
}
export default ArrowEject;
