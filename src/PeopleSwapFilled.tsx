import type { SVGProps } from "react";

export function PeopleSwapFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.75a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0Zm1.352 4.776L9.44 13.44a1.5 1.5 0 0 0 0 2.122l.647.646C9.321 16.674 8.25 17 6.75 17C1.5 17 1.5 13 1.5 13a2 2 0 0 1 2-2H10c.521 0 .996.2 1.352.526ZM14.5 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm-1.646 2.854a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L11.707 15h5.586l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L17.293 14h-5.586l1.147-1.146Z"
      />
    </svg>
  );
}
export default PeopleSwapFilled;
