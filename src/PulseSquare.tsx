import type { SVGProps } from "react";

export function PulseSquare(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.97 6.332a.5.5 0 0 0-.938-.008L6.654 10H5.5a.5.5 0 0 0 0 1H7a.5.5 0 0 0 .468-.324l1.02-2.721l2.041 5.713a.5.5 0 0 0 .918.056L12.81 11h1.69a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.447.276l-.976 1.952L8.97 6.332ZM5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5ZM4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z"
      />
    </svg>
  );
}
export default PulseSquare;
