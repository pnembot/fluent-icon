import type { SVGProps } from "react";

export function TagReset(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM9.704 2.584A2 2 0 0 1 11.129 2l4.89.032a2 2 0 0 1 1.988 1.997l.007 4.95a2 2 0 0 1-.586 1.417l-.152.152a4.996 4.996 0 0 0-1.025-.389l.47-.47a1 1 0 0 0 .293-.708l-.008-4.95a1 1 0 0 0-.993-.999L11.123 3a1 1 0 0 0-.713.292L3.728 9.957a1 1 0 0 0 0 1.415l4.948 4.948a1 1 0 0 0 1.414 0l.07-.069c.088.344.214.679.374.998a2 2 0 0 1-2.565-.222L3.02 12.08a2 2 0 0 1 .002-2.83l6.682-6.665Zm3.15 7.27a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L11.707 12H15a3 3 0 1 1-3 3a.5.5 0 1 0-1 0a4 4 0 1 0 4-4h-3.293l1.147-1.146Z"
      />
    </svg>
  );
}
export default TagReset;
