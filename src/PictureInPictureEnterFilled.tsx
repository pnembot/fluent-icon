import type { SVGProps } from "react";

export function PictureInPictureEnterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 3A2.75 2.75 0 0 0 2 5.75v6.5A2.75 2.75 0 0 0 4.75 15H9v-2.5a2.5 2.5 0 0 1 2.5-2.5h6c.171 0 .338.017.5.05v-4.3A2.75 2.75 0 0 0 15.25 3H4.75Zm.604 2.646L8 8.293V6.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.793L4.646 6.354a.5.5 0 1 1 .708-.708ZM18 11.086a1.497 1.497 0 0 0-.5-.086h-6a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1-1.415Z"
      />
    </svg>
  );
}
export default PictureInPictureEnterFilled;
