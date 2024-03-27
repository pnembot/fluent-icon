import type { SVGProps } from "react";

export function DocumentBriefcaseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-3.55c.033-.162.05-.329.05-.5v-4a2.5 2.5 0 0 0-2.042-2.458A2.5 2.5 0 0 0 6.5 9h-2c-.171 0-.338.017-.5.05V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM3 11.5v.5h-.5A1.5 1.5 0 0 0 1 13.5v4A1.5 1.5 0 0 0 2.5 19h6a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 8.5 12H8v-.5A1.5 1.5 0 0 0 6.5 10h-2A1.5 1.5 0 0 0 3 11.5Zm1.5-.5h2a.5.5 0 0 1 .5.5v.5H4v-.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default DocumentBriefcaseFilled;
