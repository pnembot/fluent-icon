import type { SVGProps } from "react";

export function DocumentBulletListFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5Zm-4 4a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm2-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm3-8V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DocumentBulletListFilled;
