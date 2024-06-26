import type { SVGProps } from "react";

export function TextboxAlignTopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM6.706 6h6.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706C6.316 7.5 6 7.164 6 6.75S6.316 6 6.706 6Zm0 3h6.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706c-.39 0-.706-.336-.706-.75S6.316 9 6.706 9Z"
      />
    </svg>
  );
}
export default TextboxAlignTopFilled;
