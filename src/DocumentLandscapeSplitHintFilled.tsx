import type { SVGProps } from "react";

export function DocumentLandscapeSplitHintFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H4a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0V6Zm1 9a1 1 0 0 1-1-1v-.5a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 0 0-1H4ZM2.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5Zm4-4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM6 15.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm6-7V4h-1.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5H16a2 2 0 0 0 2-2v-4h-4.5A1.5 1.5 0 0 1 12 8.5Zm1 0V4.058c.242.07.465.2.646.381l3.915 3.915c.181.181.311.404.38.646H13.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentLandscapeSplitHintFilled;
