import type { SVGProps } from "react";

export function DualScreenVerticalScrollFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5v12Zm-1-12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5V4Zm7.354 7.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647l1.646-1.647a.5.5 0 0 1 .708 0Zm0-3a.5.5 0 0 1-.708.708L14.5 7.207l-1.646 1.647a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2Z"
      />
    </svg>
  );
}
export default DualScreenVerticalScrollFilled;
