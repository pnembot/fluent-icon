import type { SVGProps } from "react";

export function BookOpenMicrophone(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 16c-.456.607-1.182 1-2 1H3.5A1.5 1.5 0 0 1 2 15.5v-11A1.5 1.5 0 0 1 3.5 3H8c.818 0 1.544.393 2 1c.456-.607 1.182-1 2-1h4.5A1.5 1.5 0 0 1 18 4.5v7c0-.818-.393-1.544-1-2v-5a.5.5 0 0 0-.5-.5H12a1.5 1.5 0 0 0-1.5 1.5v9c0 .524.27.986.677 1.254c.128.443.323.858.572 1.234A2.497 2.497 0 0 1 10 16ZM3 4.5v11a.5.5 0 0 0 .5.5H8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 8 4H3.5a.5.5 0 0 0-.5.5Zm14.426 11.594A2.49 2.49 0 0 0 18 14.5a.5.5 0 0 1 1 0a3.501 3.501 0 0 1-3 3.465v.535a.5.5 0 0 1-1 0v-.535A3.512 3.512 0 0 1 12.337 16A3.486 3.486 0 0 1 12 14.5a.5.5 0 0 1 1 0a2.49 2.49 0 0 0 .574 1.594c.458.553 1.15.906 1.925.906h.002c.775 0 1.467-.353 1.925-.906ZM14 11.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3Z"
      />
    </svg>
  );
}
export default BookOpenMicrophone;
