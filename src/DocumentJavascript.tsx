import type { SVGProps } from "react";

export function DocumentJavascript(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H8.5c.219-.29.375-.63.45-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.5c-.081.061-.16.127-.232.198A1.504 1.504 0 0 0 4 11.085V4Zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5Zm-8 5a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0V16a.5.5 0 0 0-1 0v.5a1.5 1.5 0 0 0 3 0v-4a.5.5 0 0 0-.5-.5ZM5 13.5a1.5 1.5 0 0 1 3 0a.5.5 0 0 1-1 0a.5.5 0 0 0-1 0v.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 8 16.118v.382a1.5 1.5 0 0 1-3 0a.5.5 0 0 1 1 0a.5.5 0 0 0 1 0v-.382a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 5 13.882V13.5Z"
      />
    </svg>
  );
}
export default DocumentJavascript;
