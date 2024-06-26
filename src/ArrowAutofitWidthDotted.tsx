import type { SVGProps } from "react";

export function ArrowAutofitWidthDotted(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m15.192 16.142l1.7-1.641l-1.7-1.641a.5.5 0 0 1 .694-.72l1.886 1.821a.75.75 0 0 1 0 1.08l-1.886 1.82a.5.5 0 1 1-.694-.72ZM17 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5a.5.5 0 0 0 1 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.5a.5.5 0 1 0 1 0V5Zm-2 9.503a.5.5 0 0 1-.5.5H13a.5.5 0 1 1 0-1h1.5a.5.5 0 0 1 .5.5Zm-8 .5a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0 0 1H7Zm4-.5a.5.5 0 0 1-.5.5h-1a.5.5 0 1 1 0-1h1a.5.5 0 0 1 .5.5Zm-6.19 1.639L3.11 14.5l1.7-1.641a.5.5 0 0 0-.695-.72L2.23 13.961a.75.75 0 0 0 0 1.08l1.886 1.82a.5.5 0 1 0 .694-.72Z"
      />
    </svg>
  );
}
export default ArrowAutofitWidthDotted;
