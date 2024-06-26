import type { SVGProps } from "react";

export function DualScreenMirror(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h5.5v10H4a1 1 0 0 1-1-1V6Zm7.5 9V5H16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5.5ZM6.25 8a.5.5 0 0 1 .432.248l1.75 3A.5.5 0 0 1 8 12H4.5a.5.5 0 0 1-.432-.752l1.75-3A.5.5 0 0 1 6.25 8Zm.88 3l-.88-1.508L5.37 11h1.76Zm7.052-2.752l1.75 3A.5.5 0 0 1 15.5 12H12a.5.5 0 0 1-.432-.752l1.75-3a.5.5 0 0 1 .864 0ZM14.629 11l-.879-1.508L12.87 11h1.76Z"
      />
    </svg>
  );
}
export default DualScreenMirror;
