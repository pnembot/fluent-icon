import type { SVGProps } from "react";

export function ReadingListAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 5.497a1.002 1.002 0 0 1 1.837-.555a.75.75 0 0 0 1.248-.832A2.502 2.502 0 1 0 4.597 8h10.677a.75.75 0 0 0 0-1.5H4.597l-.048.001a.765.765 0 0 0-.047-.001A1.002 1.002 0 0 1 3.5 5.497ZM9.748 4a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5ZM5.75 9a.75.75 0 0 0 0 1.5h4.975A5.481 5.481 0 0 1 14.5 9H5.75Zm-3 2.5h7.139c-.298.458-.53.963-.682 1.5H2.75a.75.75 0 0 1 0-1.5Zm3 2.5h3.272a5.571 5.571 0 0 0 .069 1.5H5.75a.75.75 0 0 1 0-1.5Zm13.25.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 1 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default ReadingListAddFilled;
