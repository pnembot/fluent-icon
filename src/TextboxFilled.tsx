import type { SVGProps } from "react";

export function TextboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM6 6.75c0-.414.316-.75.706-.75h6.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706C6.316 7.5 6 7.164 6 6.75Zm0 3c0-.414.316-.75.706-.75h3.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706c-.39 0-.706-.336-.706-.75ZM6.706 12h6.588c.39 0 .706.336.706.75s-.316.75-.706.75H6.706c-.39 0-.706-.336-.706-.75s.316-.75.706-.75Z"
      />
    </svg>
  );
}
export default TextboxFilled;
