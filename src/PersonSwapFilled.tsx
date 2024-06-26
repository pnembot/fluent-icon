import type { SVGProps } from "react";

export function PersonSwapFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.287 0 .571-.01.85-.028l-1.41-1.411a1.5 1.5 0 0 1 0-2.122l2-2A1.5 1.5 0 0 1 12.914 14h1.17a1.5 1.5 0 0 1 1.659-1.98A2 2 0 0 0 14 11H4.009Zm7.845 6.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L10.707 15h5.586l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L16.293 16h-5.586l1.147 1.146a.5.5 0 0 1 0 .708Z"
      />
    </svg>
  );
}
export default PersonSwapFilled;
