import type { SVGProps } from "react";

export function KeyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 7.5C7 4.424 9.424 2 12.5 2S18 4.424 18 7.5S15.576 13 12.5 13a5.758 5.758 0 0 1-1.5-.18V13a1 1 0 0 1-1 1H9v1a1 1 0 0 1-1 1H7v.5A1.5 1.5 0 0 1 5.5 18h-2A1.5 1.5 0 0 1 2 16.5v-1.586c0-.398.158-.78.44-1.06l4.54-4.541c.134-.134.2-.368.142-.638A5.618 5.618 0 0 1 7 7.5ZM15 6a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default KeyFilled;
