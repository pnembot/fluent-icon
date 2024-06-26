import type { SVGProps } from "react";

export function PersonEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c1.05.669 2.398 1.049 3.87 1.165c.01-.102.026-.205.052-.309l.17-.678c-1.413-.093-2.646-.442-3.554-1.022C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h7.934l1-1H5.009Zm5.97 4.377l4.83-4.83a1.87 1.87 0 1 1 2.645 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default PersonEdit;
