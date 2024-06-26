import type { SVGProps } from "react";

export function DocumentLandscape(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 18 9.414V14Zm-2 1a1 1 0 0 0 1-1v-4h-3.5A1.5 1.5 0 0 1 12 8.5V5H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12Zm-3-9.793V8.5a.5.5 0 0 0 .5.5h3.293L13 5.207Z"
      />
    </svg>
  );
}
export default DocumentLandscape;
