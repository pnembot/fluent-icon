import type { SVGProps } from "react";

export function PersonSwap(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.287 0 .571-.01.85-.028L8.879 17c-1.684-.016-3.16-.379-4.205-1.046C3.623 15.283 3 14.31 3 13c0-.553.448-1 1.009-1H14c.255 0 .489.096.665.253a1.5 1.5 0 0 1 1.079-.233A2 2 0 0 0 14 11H4.009Zm7.845 6.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L10.707 15h5.586l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L16.293 16h-5.586l1.147 1.146a.5.5 0 0 1 0 .708Z"
      />
    </svg>
  );
}
export default PersonSwap;
