import type { SVGProps } from "react";

export function SlideGridFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7Zm1 3.5a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1H5ZM10.5 7a1 1 0 0 1 1-1H15a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1V7Zm1 3.5a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1h-3.5ZM2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4Z"
      />
    </svg>
  );
}
export default SlideGridFilled;
