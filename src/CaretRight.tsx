import type { SVGProps } from "react";

export function CaretRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.628 14.982A1 1 0 0 1 7 14.204V5.797a1 1 0 0 1 1.628-.778l4.723 3.814a1.5 1.5 0 0 1 0 2.334l-4.723 3.815ZM8 5.797v8.407l4.723-3.815a.5.5 0 0 0 0-.778L8 5.797Z"
      />
    </svg>
  );
}
export default CaretRight;
