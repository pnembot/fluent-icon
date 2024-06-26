import type { SVGProps } from "react";

export function PeopleListFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 10a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5Zm3.75 2.5c0-.481.227-.91.58-1.184A1.99 1.99 0 0 0 10 11H3.5a2 2 0 0 0-2 2s0 4 5.25 4c1.953 0 3.18-.554 3.95-1.25c.052-.09.113-.173.182-.25a1.494 1.494 0 0 1-.382-1c0-.384.144-.735.382-1a1.494 1.494 0 0 1-.382-1Zm6.5-5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0ZM12 12a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Z"
      />
    </svg>
  );
}
export default PeopleListFilled;
