import type { SVGProps } from "react";

export function PersonMail(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18v-1c-1.735 0-3.257-.364-4.327-1.047C3.623 15.283 3 14.31 3 13c0-.553.448-1 1.009-1h5.259a2 2 0 0 1 1.728-1H4.009Zm10.5 4.927l-4.496-2.623A1.5 1.5 0 0 1 11.5 12h6a1.5 1.5 0 0 1 1.5 1.5v.009l-4.49 2.418Zm.228 1.013L19 14.645V17.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3.046l4.248 2.478a.5.5 0 0 0 .49.008Z"
      />
    </svg>
  );
}
export default PersonMail;
