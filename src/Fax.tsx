import type { SVGProps } from "react";

export function Fax(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4.5A1.5 1.5 0 0 1 6.5 3h7A1.5 1.5 0 0 1 15 4.5V7h-1V4.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V8h5.5a2.49 2.49 0 0 0-.45 1H5a1 1 0 0 0-1 1v5.5a.5.5 0 0 0 .5.5h6.55c.075.37.231.71.45 1h-7A1.5 1.5 0 0 1 3 15.5V10a2 2 0 0 1 2-2V4.5Zm7 5A1.5 1.5 0 0 1 13.5 8h2A1.5 1.5 0 0 1 17 9.5v6a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-6Zm1.5-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-2Zm-7.875 1a.625.625 0 1 1 0 1.25a.625.625 0 0 1 0-1.25Zm0 2.25a.625.625 0 1 1 0 1.25a.625.625 0 0 1 0-1.25ZM8.5 13a.625.625 0 1 0-1.25 0a.625.625 0 0 0 1.25 0Zm-.625-3a.625.625 0 1 1 0 1.25a.625.625 0 0 1 0-1.25Z"
      />
    </svg>
  );
}
export default Fax;
