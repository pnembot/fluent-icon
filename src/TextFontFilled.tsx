import type { SVGProps } from "react";

export function TextFontFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.999 2c.31 0 .59.192.7.482l2.27 5.939c.02.04.035.082.048.125l.037.099l-.793 2.127L7.776 9.5H4.221l-.772 2.021a.75.75 0 0 1-1.401-.536l3.25-8.503a.75.75 0 0 1 .7-.482ZM4.795 8h2.407L6 4.85L4.795 8Zm7.908-2.51a.75.75 0 0 0-1.405 0L7.193 16.5h-.438a.75.75 0 0 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-.461l.747-2.003h4.919l.746 2.003h-.455a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.444L12.703 5.49Zm1.197 7.507h-3.8L12 7.899l1.9 5.098Z"
      />
    </svg>
  );
}
export default TextFontFilled;
