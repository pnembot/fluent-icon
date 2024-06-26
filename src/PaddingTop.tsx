import type { SVGProps } from "react";

export function PaddingTop(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm3 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1ZM9.854 4.146a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 1 0 .708.708L9 5.707V15.5a.5.5 0 0 0 1 0V5.707l3.646 3.647a.5.5 0 0 0 .708-.708l-4.5-4.5ZM3.5 17a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12Z"
      />
    </svg>
  );
}
export default PaddingTop;
