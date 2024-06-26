import type { SVGProps } from "react";

export function VideoPersonStar(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v4.757a5.503 5.503 0 0 0-1-.657V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6v-1.5A1.5 1.5 0 0 1 7.5 12h2.1a5.465 5.465 0 0 0-.393 1H7.5a.5.5 0 0 0-.5.5V15h2.022a5.5 5.5 0 0 0 .185 1H3.5A1.5 1.5 0 0 1 2 14.5v-9Zm10.5 3c0 .337-.067.659-.188.952a5.517 5.517 0 0 0-2.043 1.534A2.5 2.5 0 1 1 12.5 8.5ZM10 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm9 4.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.024-2.64a.494.494 0 0 0-.952 0l-.477 1.532H12c-.484 0-.686.647-.294.944l1.25.947l-.477 1.532c-.15.48.378.88.77.583l1.25-.947l1.25.947c.392.297.92-.103.77-.583l-.477-1.532l1.25-.947c.392-.297.19-.944-.294-.944h-1.545l-.478-1.531Z"
      />
    </svg>
  );
}
export default VideoPersonStar;
