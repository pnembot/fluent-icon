import type { SVGProps } from "react";

export function DocumentTextToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.95 11a2.489 2.489 0 0 0-.45-1h5a.5.5 0 0 1 0 1H8.95Zm1.55 1c.219.29.375.63.45 1h2.55a.5.5 0 0 0 0-1h-3Zm3 2H11v1h2.5a.5.5 0 0 0 0-1ZM5 4v5h-.5c-.171 0-.338.017-.5.05V4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2h-3.05c.033-.162.05-.329.05-.5V17h3a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1Zm6.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5ZM3 12v-.5A1.5 1.5 0 0 1 4.5 10h2A1.5 1.5 0 0 1 8 11.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 12H3Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM8 16h2v1.5A1.5 1.5 0 0 1 8.5 19h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default DocumentTextToolbox;
