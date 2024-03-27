import type { SVGProps } from "react";

export function ReadAloudFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.842 2.141a.75.75 0 0 1 1.017-.3c1.954 1.067 4.85 3.243 5.386 8.076a.75.75 0 1 1-1.49.166c-.463-4.167-2.901-5.99-4.614-6.924a.75.75 0 0 1-.3-1.018ZM8.694 4.216a.75.75 0 0 0-1.388 0l-4.5 11a.75.75 0 0 0 1.388.568L5.64 12.25h4.72l1.446 3.534a.75.75 0 0 0 1.388-.568l-4.5-11Zm1.053 6.534H6.254L8 6.48l1.747 4.27Zm2.625-6.401a.75.75 0 0 0-.744 1.302c1.523.87 2.408 2.403 2.63 3.955a.75.75 0 1 0 1.484-.212c-.278-1.948-1.393-3.916-3.37-5.045Z"
      />
    </svg>
  );
}
export default ReadAloudFilled;
