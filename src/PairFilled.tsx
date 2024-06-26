import type { SVGProps } from "react";

export function PairFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 3.5a1.5 1.5 0 0 0 .75 1.3v6.4a1.5 1.5 0 1 0 2.05 2.05h1.95v1.95a1.5 1.5 0 1 0 2.05 2.05h6.4a1.5 1.5 0 1 0 2.05-2.05V8.8a1.5 1.5 0 1 0-2.05-2.05h-1.95V4.8a1.5 1.5 0 1 0-2.05-2.05H4.8A1.5 1.5 0 0 0 2 3.5Zm6.8 12.25a1.507 1.507 0 0 0-.55-.55v-1.95h2.95a1.5 1.5 0 1 0 2.05-2.05V8.25h1.95c.132.228.322.418.55.55v6.4a1.507 1.507 0 0 0-.55.55H8.8ZM4.25 11.2V4.8a1.51 1.51 0 0 0 .55-.55h6.4c.132.228.322.418.55.55v1.95H8.8A1.5 1.5 0 1 0 6.75 8.8v2.95H4.8a1.507 1.507 0 0 0-.55-.55Zm7.5 0a1.507 1.507 0 0 0-.55.55H8.25V8.8a1.51 1.51 0 0 0 .55-.55h2.95v2.95Z"
      />
    </svg>
  );
}
export default PairFilled;
