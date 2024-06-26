import type { SVGProps } from "react";

export function DumbbellFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.331 3.126a1.985 1.985 0 0 0-3 .225a2.409 2.409 0 0 0-2.126 4.075l1.01 1.012l-1.068 1.068l1.366 1.366l1.069-1.068l1.011 1.011a2.409 2.409 0 0 0 4.075-2.126a1.985 1.985 0 0 0 .225-3l-.598-.599l.524-.524A.966.966 0 0 0 15.453 3.2l-.524.524l-.598-.598Zm.27 3.546a.5.5 0 1 1-.707.708l-1.272-1.273a.5.5 0 0 1 .707-.707L14.6 6.672Zm-10.58 2.53a2.412 2.412 0 0 1 3.408 0l3.388 3.389a2.409 2.409 0 0 1-2.126 4.075a1.985 1.985 0 0 1-3 .225l-.599-.598l-.541.541a.966.966 0 1 1-1.366-1.365l.541-.542l-.598-.598a1.985 1.985 0 0 1 .225-3a2.406 2.406 0 0 1 .669-2.127Zm2.944 5.814a.5.5 0 0 0 0-.707l-1.273-1.272a.5.5 0 0 0-.707.707l1.272 1.272a.5.5 0 0 0 .708 0Z"
      />
    </svg>
  );
}
export default DumbbellFilled;
