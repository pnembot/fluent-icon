import type { SVGProps } from "react";

export function LinkEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 4.5A.5.5 0 0 0 8 4H6l-.22.006A4 4 0 0 0 6 11.999h2l.09-.008a.5.5 0 0 0-.09-.992H6l-.198-.006A3 3 0 0 1 6 5h2l.09-.008A.5.5 0 0 0 8.5 4.5ZM17.997 8a4 4 0 0 0-4-4h-2l-.089.008a.5.5 0 0 0 .09.992h2l.197.006a3 3 0 0 1 2.8 3.126c.339.107.662.279.95.515c.034-.21.052-.427.052-.647Zm-4-.5H6l-.09.008a.5.5 0 0 0 .09.991h7.999l.09-.008a.5.5 0 0 0-.09-.991Zm-4.02 6.876l4.83-4.829a1.87 1.87 0 0 1 2.644 2.645l-4.829 4.828a2.197 2.197 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.497c.097-.387.296-.74.578-1.021Z"
      />
    </svg>
  );
}
export default LinkEdit;
