import type { SVGProps } from "react";

export function CatchUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.453 7.27a.5.5 0 0 1 .909.04l2.35 5.758c.485 1.188 2.142 1.258 2.725.115l1.23-2.411a.5.5 0 0 1 .446-.273h.972a1.5 1.5 0 1 0 0-1h-.973a1.5 1.5 0 0 0-1.336.819l-1.23 2.41a.5.5 0 0 1-.908-.038l-2.35-5.759c-.485-1.188-2.142-1.258-2.725-.115l-1.23 2.41a.5.5 0 0 1-.445.273h-.973a1.5 1.5 0 1 0 0 1h.973a1.5 1.5 0 0 0 1.336-.818l1.23-2.41Z"
      />
    </svg>
  );
}
export default CatchUp;
