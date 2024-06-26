import type { SVGProps } from "react";

export function ArrowSyncCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16Zm3.5-8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.696a3.498 3.498 0 0 0-5.609-.53a.5.5 0 1 0 .746.667A2.5 2.5 0 0 1 12.293 9H11.5a.5.5 0 1 0 0 1h2Zm-7.5.5v2a.5.5 0 0 0 1 0v-.696a3.498 3.498 0 0 0 5.609.53a.5.5 0 0 0-.745-.668A2.5 2.5 0 0 1 7.708 11H8.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default ArrowSyncCircleFilled;
