import type { SVGProps } from "react";

export function TextboxRotate90Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM7.5 6.706v6.588c0 .39-.336.706-.75.706S6 13.684 6 13.294V6.706c0-.39.336-.706.75-.706s.75.316.75.706ZM9.75 6c.414 0 .75.316.75.706v3.588c0 .39-.336.706-.75.706S9 10.684 9 10.294V6.706c0-.39.336-.706.75-.706Zm3 0c.414 0 .75.316.75.706v6.588c0 .39-.336.706-.75.706s-.75-.316-.75-.706V6.706c0-.39.336-.706.75-.706Z"
      />
    </svg>
  );
}
export default TextboxRotate90Filled;
