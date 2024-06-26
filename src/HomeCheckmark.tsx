import type { SVGProps } from "react";

export function HomeCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.354 8.851a.5.5 0 0 0-.708-.707L9 11.79l-1.646-1.647a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4Zm-2.351-6.467a1.5 1.5 0 0 0-2.005 0l-5.5 4.943A1.5 1.5 0 0 0 3 8.443V15.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V8.443a1.5 1.5 0 0 0-.497-1.116l-5.5-4.943Zm-1.337.744a.5.5 0 0 1 .668 0l5.5 4.943a.5.5 0 0 1 .166.372V15.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V8.443a.5.5 0 0 1 .166-.372l5.5-4.943Z"
      />
    </svg>
  );
}
export default HomeCheckmark;
