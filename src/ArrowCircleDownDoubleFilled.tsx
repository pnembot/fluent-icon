import type { SVGProps } from "react";

export function ArrowCircleDownDoubleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.354 13.854L9 12.207a.5.5 0 1 0-.707-.707l-.793.793V6.5a.5.5 0 0 0-1 0v5.793l-.793-.793a.5.5 0 1 0-.707.707l1.646 1.647a.5.5 0 0 0 .708 0ZM18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-4.646 3.854L15 12.207a.5.5 0 1 0-.707-.707l-.793.793V6.5a.5.5 0 0 0-1 0v5.793l-.793-.793a.5.5 0 1 0-.707.707l1.646 1.647a.5.5 0 0 0 .708 0Z"
      />
    </svg>
  );
}
export default ArrowCircleDownDoubleFilled;
