import type { SVGProps } from "react";

export function BinFullFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.752 2.932a.5.5 0 1 0-.504-.864l-12 7A.5.5 0 0 0 2 9.5v6A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5v-6a.5.5 0 0 0-.5-.5H17V6.5A1.5 1.5 0 0 0 15.5 5h-2A1.5 1.5 0 0 0 12 6.5V7H9.5A1.5 1.5 0 0 0 8 8.5V9H4.35l10.402-6.068ZM12 8v1H9v-.5a.5.5 0 0 1 .5-.5H12Zm1 1V6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V9h-3Z"
      />
    </svg>
  );
}
export default BinFullFilled;
