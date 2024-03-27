import type { SVGProps } from "react";

export function DockLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        d="M12 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM6.001 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.001V4zM12 4H7.001v8H12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default DockLeft;
