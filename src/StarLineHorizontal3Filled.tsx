import type { SVGProps } from "react";

export function StarLineHorizontal3Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.898 2.9a1 1 0 0 0-1.794 0l-1.93 3.91l-4.317.628a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l4.862-2.559V13.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1-.073-2.998l-1.531-3.103Zm1.604 7.1a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5Zm-.5-2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 5.5a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5Z"
      />
    </svg>
  );
}
export default StarLineHorizontal3Filled;
