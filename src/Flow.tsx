import type { SVGProps } from "react";

export function Flow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-2.96 1.505a3 3 0 1 1 .003 1.003a1.5 1.5 0 0 0-1.328 1.245l-.443 2.658a2.5 2.5 0 0 1-2.313 2.084a3 3 0 1 1-.002-1.003a1.5 1.5 0 0 0 1.328-1.245l.443-2.658a2.5 2.5 0 0 1 2.313-2.084ZM5 11a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"
      />
    </svg>
  );
}
export default Flow;
