import type { SVGProps } from "react";

export function SaveMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.621a2 2 0 0 0-.586-1.414l-1.621-1.621A2 2 0 0 0 11.379 3H5ZM4 5a1 1 0 0 1 1-1h1v1.5A1.5 1.5 0 0 0 7.5 7h2A1.5 1.5 0 0 0 11 5.5V4h.379a1 1 0 0 1 .707.293l1.621 1.621a1 1 0 0 1 .293.707V13a1 1 0 0 1-1 1v-3.5A1.5 1.5 0 0 0 11.5 9h-5A1.5 1.5 0 0 0 5 10.5V14a1 1 0 0 1-1-1V5Zm3 .5V4h3v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Zm5 5V14H6v-3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5ZM8.5 17a3.489 3.489 0 0 1-2.45-1h7.45a2.5 2.5 0 0 0 2.5-2.5V6.05c.618.632 1 1.497 1 2.45v5a3.5 3.5 0 0 1-3.5 3.5h-5Z"
      />
    </svg>
  );
}
export default SaveMultiple;
