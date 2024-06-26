import type { SVGProps } from "react";

export function SelectAllOnFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.33 2.624a.5.5 0 0 0-.706.047l-3.148 3.597l-1.622-1.622a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .73-.025l3.5-4a.5.5 0 0 0-.047-.705ZM4.267 17A2 2 0 0 0 6 18h8a4 4 0 0 0 4-4V6a2 2 0 0 0-1-1.732V14a3 3 0 0 1-3 3H4.268Z"
      />
    </svg>
  );
}
export default SelectAllOnFilled;
