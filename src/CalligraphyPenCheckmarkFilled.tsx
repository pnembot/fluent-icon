import type { SVGProps } from "react";

export function CalligraphyPenCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.146-1.854a.5.5 0 0 0-.708 0L13.5 6.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708ZM14.5 11c.112 0 .224-.003.335-.01a2.5 2.5 0 0 1-.198.425l-3.463 5.907a1.372 1.372 0 0 1-.674.58v-7.036a1 1 0 0 0 .456-1.16A5.478 5.478 0 0 0 14.5 11ZM9 5.5c0 1.35.486 2.587 1.294 3.544a1 1 0 0 0-.794 1.822v7.044a1.372 1.372 0 0 1-.694-.588l-3.463-5.907a2.5 2.5 0 0 1-.102-2.335L6.7 6h-.2A1.5 1.5 0 0 1 5 4.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h2.522A5.57 5.57 0 0 0 9 5.5Z"
      />
    </svg>
  );
}
export default CalligraphyPenCheckmarkFilled;
