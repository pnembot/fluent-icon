import type { SVGProps } from "react";

export function BoxEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m17.421 4.992l-3.046 1.219l-7.5-3L8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.303a1.5 1.5 0 0 1 .364.208Zm-7.42 2.969l3.028-1.212l-7.5-3l-2.586 1.035a1.499 1.499 0 0 0-.364.208L10 7.961ZM2.034 5.852A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518c.118.047.239.088.36.122l.372-1.485c.02-.08.042-.158.068-.236V8.838L2.035 5.852ZM18 6.176v2.957a2.87 2.87 0 0 0-2.898.707L10.5 14.442V8.838l7.465-2.986c.023.105.035.214.035.324Zm-7.02 9.2l4.83-4.829a1.87 1.87 0 1 1 2.644 2.645l-4.83 4.83a2.197 2.197 0 0 1-1.02.577l-1.498.375a.89.89 0 0 1-1.079-1.079l.375-1.498c.096-.386.296-.739.578-1.02Z"
      />
    </svg>
  );
}
export default BoxEditFilled;
