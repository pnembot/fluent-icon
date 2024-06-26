import type { SVGProps } from "react";

export function CloudErrorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.647 6.246C14.415 3.923 12.817 2 10 2S5.587 3.908 5.353 6.246h-.07C3.468 6.246 2 7.758 2 9.623C2 11.488 3.47 13 5.282 13h2.49a5.75 5.75 0 0 1 10.217-3.094c.007-.093.011-.188.011-.283c0-1.865-1.47-3.377-3.282-3.377h-.071ZM18 13.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM13.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25Z"
      />
    </svg>
  );
}
export default CloudErrorFilled;
