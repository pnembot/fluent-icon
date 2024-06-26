import type { SVGProps } from "react";

export function TextBaseline(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.461 3.806a.5.5 0 0 0-.921 0l-4 9.5a.5.5 0 1 0 .92.388L8.017 10h3.968l1.555 3.694a.5.5 0 1 0 .922-.388l-4-9.5ZM11.563 9H8.438L10 5.288L11.563 9ZM2.5 16a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
      />
    </svg>
  );
}
export default TextBaseline;
