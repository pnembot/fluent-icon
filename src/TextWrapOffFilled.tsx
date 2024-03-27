import type { SVGProps } from "react";

export function TextWrapOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.146 2.146a.5.5 0 0 1 .708 0l15 15a.5.5 0 0 1-.708.708L14.293 15H12.35l.225.27a.75.75 0 0 1-1.152.96l-1.25-1.5a.75.75 0 0 1 0-.96l1.25-1.5a.752.752 0 0 1 .068-.071L9.291 10H2.75a.75.75 0 0 1 0-1.5h5.043L4.293 5H2.75a.75.75 0 0 1 0-1.5h.043l-.647-.646a.5.5 0 0 1 0-.708ZM10.621 8.5h5.129a3.25 3.25 0 0 1 1.159 6.287L15.62 13.5h.129a1.75 1.75 0 1 0 0-3.5H12.12l-1.5-1.5ZM7.121 5l-1.5-1.5H17.25a.75.75 0 0 1 0 1.5H7.121ZM2.75 13.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
      />
    </svg>
  );
}
export default TextWrapOffFilled;
