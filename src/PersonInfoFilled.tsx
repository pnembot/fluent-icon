import type { SVGProps } from "react";

export function PersonInfoFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01Zm9.866 1.5a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0Zm1.125 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm-5-2a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm1 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0Z"
      />
    </svg>
  );
}
export default PersonInfoFilled;
