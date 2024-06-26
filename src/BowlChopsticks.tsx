import type { SVGProps } from "react";

export function BowlChopsticks(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.926 2.238a.5.5 0 0 0-.852.524L7.913 9H2.5a.5.5 0 0 0-.5.5v.5a8 8 0 0 0 16 0v-.5a.5.5 0 0 0-.5-.5h-5.413L7.926 2.238a.5.5 0 0 0-.852.524L10.913 9H9.087L4.926 2.238ZM3.29 12A7.002 7.002 0 0 1 3 10h14c0 .695-.101 1.366-.29 2H3.29Zm.384 1h12.652a7 7 0 0 1-12.652 0Z"
      />
    </svg>
  );
}
export default BowlChopsticks;
