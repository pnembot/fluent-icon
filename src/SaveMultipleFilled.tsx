import type { SVGProps } from "react";

export function SaveMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 5.5V3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2v-4.502C5 9.668 5.673 9 6.5 9h5a1.5 1.5 0 0 1 1.5 1.5V15a2 2 0 0 0 2-2V6.621a2 2 0 0 0-.586-1.414l-1.621-1.621A2 2 0 0 0 11.379 3H11v2.5A1.5 1.5 0 0 1 9.5 7h-2A1.5 1.5 0 0 1 6 5.5Zm1 0V3h3v2.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Zm5 9.5H6v-4.502c0-.275.223-.498.5-.498h5a.5.5 0 0 1 .5.5V15Zm-3.5 2a3.489 3.489 0 0 1-2.45-1h7.45a2.5 2.5 0 0 0 2.5-2.5V6.05c.618.632 1 1.497 1 2.45v5a3.5 3.5 0 0 1-3.5 3.5h-5Z"
      />
    </svg>
  );
}
export default SaveMultipleFilled;
