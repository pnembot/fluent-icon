import type { SVGProps } from "react";

export function CopySelect(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 3a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H8Zm-1 9a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H8a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0v.5Zm0-5.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3ZM16 3a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1h.5Zm0 10a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5Zm1.5-7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5Zm-7-4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM10 13.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4 6h1v1H4a1 1 0 0 0-1 1v6.5A2.5 2.5 0 0 0 5.5 17H12a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H5.5A3.5 3.5 0 0 1 2 14.5V8a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}
export default CopySelect;
