import type { SVGProps } from "react";

export function PeopleProhibitedFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 9a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-8 8c0-1.704.775-3.228 1.993-4.237A1.991 1.991 0 0 0 10 10H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.953 0 1.733-.132 2.371-.347A5.522 5.522 0 0 1 9 14.5Zm1 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.484 3.484 0 0 1 11 14.5Zm3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 18Z"
      />
    </svg>
  );
}
export default PeopleProhibitedFilled;
