import type { SVGProps } from "react";

export function Person6(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM3 13c0-1.113.903-2 2.009-2h9.041a3.512 3.512 0 0 0-.713 1H5.009C4.448 12 4 12.447 4 13c0 1.309.622 2.284 1.673 2.953C6.743 16.636 8.265 17 10 17c1.108 0 2.129-.148 3-.433c.007.347.064.681.165.997c-.961.294-2.04.436-3.165.436c-1.855 0-3.583-.386-4.865-1.203C3.833 15.967 3 14.69 3 13Zm12 .5a1.5 1.5 0 0 1 2.625-.992a.5.5 0 0 0 .75-.662A2.5 2.5 0 0 0 14 13.5v3a2.5 2.5 0 1 0 1-2v-1Zm1.5 4.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  );
}
export default Person6;
