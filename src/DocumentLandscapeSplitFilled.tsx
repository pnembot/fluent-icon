import type { SVGProps } from "react";

export function DocumentLandscapeSplitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 8.5V4h-2v12h6a2 2 0 0 0 2-2v-4h-4.5A1.5 1.5 0 0 1 12 8.5ZM9 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5v12Zm4-7.5V4.058c.242.07.465.2.646.381l3.915 3.915c.181.18.311.404.38.646H13.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentLandscapeSplitFilled;
