import type { SVGProps } from "react";

export function CaretLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.372 14.982A1 1 0 0 0 13 14.204V5.797a1 1 0 0 0-1.628-.778L6.649 8.833a1.5 1.5 0 0 0 0 2.334l4.723 3.815ZM12 5.797v8.407l-4.722-3.815a.5.5 0 0 1 0-.778L12 5.797Z"
      />
    </svg>
  );
}
export default CaretLeft;
