import type { SVGProps } from "react";

export function ArrowUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.133 9.16a.5.5 0 1 0 .738.675l5.631-6.168v13.831a.5.5 0 1 0 1 0V3.67l5.628 6.165a.5.5 0 0 0 .739-.674l-6.314-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.133 9.16Z"
      />
    </svg>
  );
}
export default ArrowUp;
