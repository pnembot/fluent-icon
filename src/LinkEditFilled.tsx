import type { SVGProps } from "react";

export function LinkEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.998 8a4 4 0 0 0-4-4h-2l-.1.007a.75.75 0 0 0 .1 1.493h2l.165.005A2.5 2.5 0 0 1 16.498 8v.023a2.855 2.855 0 0 1 1.448.624c.034-.21.052-.427.052-.647ZM8.75 4.75A.75.75 0 0 0 8 4H6l-.2.005a4 4 0 0 0 .2 7.994h2l.102-.007A.75.75 0 0 0 8 10.5H6l-.164-.005A2.5 2.5 0 0 1 6 5.5h2l.101-.007a.75.75 0 0 0 .648-.743Zm5 2.5h-7.5l-.101.006A.75.75 0 0 0 6.25 8.75h7.499l.101-.006a.75.75 0 0 0-.101-1.493Zm-3.77 7.126l4.829-4.829a1.87 1.87 0 0 1 2.644 2.645l-4.829 4.828a2.197 2.197 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.497c.097-.387.296-.74.578-1.021Z"
      />
    </svg>
  );
}
export default LinkEditFilled;
