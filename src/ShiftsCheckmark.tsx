import type { SVGProps } from "react";

export function ShiftsCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v3.6a5.463 5.463 0 0 1 1-.393V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.207c-.099.349-.23.683-.393 1H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm3 7.257c.27.224.52.472.743.743H12.5a.5.5 0 0 0 0-1H10V6.5a.5.5 0 0 0-1 0v3.757Zm1 4.243a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L4.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default ShiftsCheckmark;
