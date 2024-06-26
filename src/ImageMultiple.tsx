import type { SVGProps } from "react";

export function ImageMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 7.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2v6c0 .37.101.718.277 1.016l3.309-3.309a2 2 0 0 1 2.828 0l3.31 3.309A2 2 0 0 0 14 12V6a2 2 0 0 0-2-2H6Zm3.707 6.414a1 1 0 0 0-1.414 0l-3.309 3.31A2 2 0 0 0 6 14h6c.37 0 .718-.101 1.016-.277l-3.309-3.309ZM8 17a2.992 2.992 0 0 1-2.236-1H12.5a3.5 3.5 0 0 0 3.5-3.5V5.764c.614.55 1 1.348 1 2.236v4.5a4.5 4.5 0 0 1-4.5 4.5H8Z"
      />
    </svg>
  );
}
export default ImageMultiple;
