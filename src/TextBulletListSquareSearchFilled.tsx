import type { SVGProps } from "react";

export function TextBulletListSquareSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v8.5A2.75 2.75 0 0 1 14.25 17h-4.129l-1.56-1.56A4.47 4.47 0 0 0 8.973 14H13.5a.5.5 0 0 0 0-1H8.973A4.5 4.5 0 0 0 3 9.256V5.75ZM6.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9 7.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-5 7c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}
export default TextBulletListSquareSearchFilled;
