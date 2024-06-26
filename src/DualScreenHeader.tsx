import type { SVGProps } from "react";

export function DualScreenHeader(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm7.5 9V7H3v7a1 1 0 0 0 1 1h5.5Zm1-8v8H16a1 1 0 0 0 1-1V7h-6.5Z"
      />
    </svg>
  );
}
export default DualScreenHeader;
