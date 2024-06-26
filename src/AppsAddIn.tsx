import type { SVGProps } from "react";

export function AppsAddIn(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 3a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V6h2a.5.5 0 0 0 0-1h-2V3ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-11A1.5 1.5 0 0 1 4.5 3H9a1.5 1.5 0 0 1 1.5 1.5v5h5A1.5 1.5 0 0 1 17 11v4.5a1.5 1.5 0 0 1-1.5 1.5h-11Zm6-6.5V16h5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5h-5Zm-1 5.5v-5.5H4v5a.5.5 0 0 0 .5.5h5Zm0-11.5A.5.5 0 0 0 9 4H4.5a.5.5 0 0 0-.5.5v5h5.5v-5Z"
      />
    </svg>
  );
}
export default AppsAddIn;
