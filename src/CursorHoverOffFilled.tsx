import type { SVGProps } from "react";

export function CursorHoverOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.242 1.241A2 2 0 0 0 2 6v7a2 2 0 0 0 2 2h5v-4.5c0-.229.052-.448.146-.646l.854.853V17.5a.5.5 0 0 0 .91.287l1.571-2.245l2.781.427l1.884 1.885a.5.5 0 0 0 .708-.708l-8-8l-7-7Zm11.212 12.628l-1.74-.268a.5.5 0 0 0-.486.207l-.84 1.2v-4.206l3.066 3.067Zm2.84.01A2 2 0 0 0 18 13V6a2 2 0 0 0-2-2H6.121l10.784 10.784Z"
      />
    </svg>
  );
}
export default CursorHoverOffFilled;
