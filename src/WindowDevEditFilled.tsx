import type { SVGProps } from "react";

export function WindowDevEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.75A2.75 2.75 0 0 1 4.75 2h8.497a2.75 2.75 0 0 1 2.75 2.75v4.483c-.325.14-.63.342-.895.608l-.605.605V6H3.5v7.248c0 .69.56 1.25 1.25 1.25h5.694l-.171.172A3.197 3.197 0 0 0 9.475 16H4.75A2.75 2.75 0 0 1 2 13.248V4.75Zm6.354 3.104a.5.5 0 1 0-.707-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .707-.708L6.208 10l2.146-2.146Zm1.792 5a.5.5 0 0 1 0-.708L12.293 10l-2.147-2.146a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 0 1-.708 0Zm5.663-2.306l-4.83 4.83a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default WindowDevEditFilled;
