import type { SVGProps } from "react";

export function PeopleToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 3.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5ZM3.5 5.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0ZM14.5 9a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Zm-3.26 1.43A1.99 1.99 0 0 0 10 10H3.5a2 2 0 0 0-2 2v.084a1.717 1.717 0 0 0 .012.175a3.948 3.948 0 0 0 .67 1.806C2.883 15.08 4.237 16 6.75 16c.887 0 1.63-.115 2.25-.307v-1.059c-.564.221-1.297.366-2.25.366c-2.237 0-3.258-.799-3.745-1.503a2.948 2.948 0 0 1-.498-1.336a1.608 1.608 0 0 1-.006-.083l-.001-.017V12a1 1 0 0 1 1-1H10c.212 0 .409.066.57.178c.15-.06.309-.106.472-.136c.04-.215.107-.42.198-.611ZM14.5 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3ZM12 12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5Zm4 4.5h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default PeopleToolbox;
