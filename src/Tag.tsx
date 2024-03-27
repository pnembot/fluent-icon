import type { SVGProps } from "react";

export function Tag(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-2.87-5a2 2 0 0 0-1.426.584L3.022 9.249a2 2 0 0 0-.002 2.83l4.949 4.948a2 2 0 0 0 2.828 0l6.631-6.63a2 2 0 0 0 .586-1.418l-.008-4.95a2 2 0 0 0-1.986-1.997L11.13 2Zm-.72 1.292A1 1 0 0 1 11.123 3l4.89.032a1 1 0 0 1 .993.999l.008 4.95a1 1 0 0 1-.293.708l-6.63 6.631a1 1 0 0 1-1.415 0l-4.949-4.948a1 1 0 0 1 .001-1.415l6.682-6.665Z"
      />
    </svg>
  );
}
export default Tag;
