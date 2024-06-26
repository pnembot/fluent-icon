import type { SVGProps } from "react";

export function WindowWrench(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.624a1.383 1.383 0 0 0-.993-.594H16V7H4v7a2 2 0 0 0 2 2h2.492a2.493 2.493 0 0 0-.443 1H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm10.242 5.361a.387.387 0 0 0-.35-.337a3.518 3.518 0 0 0-3.723 4.676l-2.727 2.726a1.508 1.508 0 0 0 2.132 2.132l2.726-2.726a3.518 3.518 0 0 0 4.676-3.724c-.042-.366-.48-.471-.742-.21l-.975.975a1.508 1.508 0 0 1-2.132-2.132l.975-.975a.489.489 0 0 0 .14-.405Z"
      />
    </svg>
  );
}
export default WindowWrench;
