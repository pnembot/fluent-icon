import type { SVGProps } from "react";

export function ProhibitedMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 9a7 7 0 1 1 14 0A7 7 0 0 1 2 9Zm7-6a6 6 0 0 0-4.582 9.874l8.456-8.456A5.976 5.976 0 0 0 9 3Zm0 12a6 6 0 0 0 4.582-9.874l-8.456 8.456A5.976 5.976 0 0 0 9 15Zm2 3a6.968 6.968 0 0 1-3.994-1.25a8.011 8.011 0 0 0 3.066.179a6 6 0 0 0 6.856-6.856a8.072 8.072 0 0 0-.178-3.067A7 7 0 0 1 11 18Z"
      />
    </svg>
  );
}
export default ProhibitedMultiple;
