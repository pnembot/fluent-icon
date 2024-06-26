import type { SVGProps } from "react";

export function ReadingListAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.25a1.25 1.25 0 0 1 2.29-.692a.5.5 0 1 0 .833-.555A2.25 2.25 0 1 0 4.25 7.5a.504.504 0 0 0 .066-.004a.505.505 0 0 0 .065.004H15.5a.5.5 0 0 0 0-1H4.381a.504.504 0 0 0-.065.004a.505.505 0 0 0-.066-.004C3.56 6.5 3 5.94 3 5.25ZM8.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Zm-3 5a.5.5 0 0 0 0 1h5.837c.895-.63 1.986-1 3.163-1h-9Zm-3 2.5h7.39a5.483 5.483 0 0 0-.515 1H2.5a.5.5 0 0 1 0-1Zm3 2.5h3.522a5.571 5.571 0 0 0 0 1H5.501a.5.5 0 0 1 0-1Zm13.5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default ReadingListAdd;
