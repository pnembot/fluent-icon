import type { SVGProps } from "react";

export function BackpackAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a2.5 2.5 0 0 0-2.5 2.5v.044A6.001 6.001 0 0 0 4 10v5a3 3 0 0 0 3 3h3.257a5.503 5.503 0 0 1-.657-1H7a2 2 0 0 1-2-2v-2h2v1.5a.5.5 0 0 0 1 0V13h1.207c.099-.349.23-.683.393-1H5v-2a5 5 0 0 1 9.903-.985c.358.025.707.086 1.043.177A6.006 6.006 0 0 0 12.5 4.544V4.5A2.5 2.5 0 0 0 10 2Zm0 2a6.05 6.05 0 0 0-1.466.18a1.5 1.5 0 0 1 2.932 0C10.996 4.063 10.506 4 10 4Zm1.337 6a5.48 5.48 0 0 1 1.545-.758c.076-.165.118-.349.118-.542A1.7 1.7 0 0 0 11.3 7H8.7A1.7 1.7 0 0 0 7 8.7A1.3 1.3 0 0 0 8.3 10h3.037ZM8 8.7a.7.7 0 0 1 .7-.7h2.6a.7.7 0 0 1 .7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3Zm11 5.8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default BackpackAdd;
