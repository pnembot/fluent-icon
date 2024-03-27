import type { SVGProps } from "react";

export function ArrowPrevious(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 5a.5.5 0 0 0-.492.41L5.5 5.5v9a.5.5 0 0 0 .992.09l.008-.09v-9A.5.5 0 0 0 6 5Zm7.854.146a.5.5 0 0 0-.638-.057l-.07.057l-4.5 4.5a.5.5 0 0 0-.057.638l.057.07l4.5 4.5a.5.5 0 0 0 .765-.638l-.057-.07L9.707 10l4.147-4.146a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default ArrowPrevious;
