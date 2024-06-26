import type { SVGProps } from "react";

export function Emoji(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14Zm-2.845 9.427a4.011 4.011 0 0 0 5.512.17l.178-.17a.5.5 0 0 1 .767.636l-.057.07l-.023.022a5.011 5.011 0 0 1-7.087-.023a.5.5 0 0 1 .71-.705ZM12.5 7.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"
      />
    </svg>
  );
}
export default Emoji;
