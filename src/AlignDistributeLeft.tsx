import type { SVGProps } from "react";

export function AlignDistributeLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M1 14.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13Zm7 0a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13ZM4.5 13A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h1A1.5 1.5 0 0 1 7 4.5v7A1.5 1.5 0 0 1 5.5 13h-1ZM4 11.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v7Zm6-2a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 14 9.5v-3A1.5 1.5 0 0 0 12.5 5h-1A1.5 1.5 0 0 0 10 6.5v3Zm1.5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-1Z"
      />
    </svg>
  );
}
export default AlignDistributeLeft;
