import type { SVGProps } from "react";

export function BubbleMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 4.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0ZM9.172 15.595a3.502 3.502 0 0 0 6.825-1.094a3.5 3.5 0 0 0-3.085-3.476a6.009 6.009 0 0 1-3.74 4.57ZM12 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0ZM7.029 7.505a.5.5 0 0 0 .304.638c.71.251 1.274.814 1.525 1.524a.5.5 0 1 0 .942-.334A3.508 3.508 0 0 0 7.667 7.2a.5.5 0 0 0-.638.305Z"
      />
    </svg>
  );
}
export default BubbleMultipleFilled;
