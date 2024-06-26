import type { SVGProps } from "react";

export function ProhibitedNoteFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.998 10.17L18 10a8 8 0 1 0-8.844 7.956A2.993 2.993 0 0 1 9 17v-.576a6.47 6.47 0 0 1-3.035-1.328l1.564-1.565h.001l7.566-7.566A6.473 6.473 0 0 1 16.5 10h.5c.35 0 .686.06.998.17Zm-3.963-5.266l-9.131 9.131a6.5 6.5 0 0 1 9.131-9.131ZM10 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4Zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1h-4Z"
      />
    </svg>
  );
}
export default ProhibitedNoteFilled;
