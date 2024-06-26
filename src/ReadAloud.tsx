import type { SVGProps } from "react";

export function ReadAloud(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.061 2.26a.5.5 0 0 1 .678-.199c1.914 1.044 4.733 3.161 5.258 7.884a.5.5 0 0 1-.994.11c-.475-4.277-2.99-6.16-4.742-7.116a.5.5 0 0 1-.2-.678ZM8.463 4.31a.5.5 0 0 0-.926 0l-4.5 11a.5.5 0 1 0 .926.38L5.5 11.931V12h5v-.068l1.537 3.757a.5.5 0 1 0 .926-.378l-4.5-11ZM10.119 11H5.88L8 5.82L10.118 11Zm2.13-6.434a.5.5 0 0 0-.497.868c1.599.914 2.522 2.519 2.753 4.137a.5.5 0 0 0 .99-.142c-.269-1.882-1.346-3.777-3.247-4.863Z"
      />
    </svg>
  );
}
export default ReadAloud;
