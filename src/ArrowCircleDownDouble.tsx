import type { SVGProps } from "react";

export function ArrowCircleDownDouble(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m9 12.207l-1.646 1.647a.5.5 0 0 1-.708 0L5 12.207a.5.5 0 1 1 .707-.707l.793.793V6.5a.5.5 0 0 1 1 0v5.793l.793-.793a.5.5 0 1 1 .707.707ZM10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0a7 7 0 0 1 14 0Zm-3.646 3.854L15 12.207a.5.5 0 1 0-.707-.707l-.793.793V6.5a.5.5 0 0 0-1 0v5.793l-.793-.793a.5.5 0 1 0-.707.707l1.646 1.647a.5.5 0 0 0 .708 0Z"
      />
    </svg>
  );
}
export default ArrowCircleDownDouble;
