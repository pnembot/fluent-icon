import type { SVGProps } from "react";

export function TextboxAlignBottomFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9ZM6.706 14h6.588c.39 0 .706-.336.706-.75s-.316-.75-.706-.75H6.706c-.39 0-.706.336-.706.75s.316.75.706.75Zm0-3h6.588c.39 0 .706-.336.706-.75s-.316-.75-.706-.75H6.706c-.39 0-.706.336-.706.75s.316.75.706.75Z"
      />
    </svg>
  );
}
export default TextboxAlignBottomFilled;
