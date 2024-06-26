import type { SVGProps } from "react";

export function LineHorizontal5Error(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 6a.5.5 0 0 0 0 1h7.757a5.53 5.53 0 0 1 1.08-1H2.5Zm0 3h6.707a5.48 5.48 0 0 0-.185 1H2.5a.5.5 0 0 1 0-1Zm0 3h6.707c.099.349.23.683.393 1H2.5a.5.5 0 0 1 0-1Zm0-9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15ZM19 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Z"
      />
    </svg>
  );
}
export default LineHorizontal5Error;
