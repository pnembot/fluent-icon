import type { SVGProps } from "react";

export function FolderArrowUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m8.067 3.3l1.319.99l-1.953 2.054a.5.5 0 0 1-.362.156H2v-1A2.5 2.5 0 0 1 4.5 3h2.667c.324 0 .64.105.9.3Zm.091 3.733L10.565 4.5H15.5a2.5 2.5 0 0 1 2.495 2.336L18 7v3.257A5.5 5.5 0 0 0 9.6 17H4.5A2.5 2.5 0 0 1 2 14.5v-7h5.07a1.5 1.5 0 0 0 1.088-.467ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.146-2.353l-.003-.003a.497.497 0 0 0-.348-.144h-.006a.498.498 0 0 0-.35.146l-2 2a.5.5 0 0 0 .707.708L14 13.707V16.5a.5.5 0 1 0 1 0v-2.793l1.146 1.147a.5.5 0 1 0 .707-.707l-2-2Z"
      />
    </svg>
  );
}
export default FolderArrowUpFilled;
