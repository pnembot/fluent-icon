import type { SVGProps } from "react";

export function BarcodeScannerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.75A2.75 2.75 0 0 1 4.75 3h.75a.75.75 0 0 1 0 1.5h-.75c-.69 0-1.25.56-1.25 1.25v.75a.75.75 0 0 1-1.5 0v-.75Zm11.75-2A.75.75 0 0 1 14.5 3h.75A2.75 2.75 0 0 1 18 5.75v.75a.75.75 0 0 1-1.5 0v-.75c0-.69-.56-1.25-1.25-1.25h-.75a.75.75 0 0 1-.75-.75Zm-11 9a.75.75 0 0 1 .75.75v.75c0 .69.56 1.25 1.25 1.25h.75a.75.75 0 0 1 0 1.5h-.75A2.75 2.75 0 0 1 2 14.25v-.75a.75.75 0 0 1 .75-.75Zm14.5 0a.75.75 0 0 1 .75.75v.75A2.75 2.75 0 0 1 15.25 17h-.75a.75.75 0 0 1 0-1.5h.75c.69 0 1.25-.56 1.25-1.25v-.75a.75.75 0 0 1 .75-.75ZM5.5 6a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 5.5 6Zm3.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5ZM11.5 6a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 11.5 6Zm3.75.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z"
      />
    </svg>
  );
}
export default BarcodeScannerFilled;
