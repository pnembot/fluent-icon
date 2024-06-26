import type { SVGProps } from "react";

export function SaveEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2v-5.5A1.5 1.5 0 0 1 6.5 10h6.444l1.159-1.16A2.87 2.87 0 0 1 17 8.135V6.62a2 2 0 0 0-.586-1.414l-1.621-1.621A2 2 0 0 0 13.379 3H13v3.5A1.5 1.5 0 0 1 11.5 8h-4A1.5 1.5 0 0 1 6 6.5V3H5Zm6.944 8l-2.67 2.67a3.2 3.2 0 0 0-.841 1.485l-.375 1.498a1.85 1.85 0 0 0-.054.347H6v-5.5a.5.5 0 0 1 .5-.5h5.444ZM7 3h5v3.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V3Zm7.81 6.548l-4.83 4.83a2.197 2.197 0 0 0-.578 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.194 2.194 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644Z"
      />
    </svg>
  );
}
export default SaveEditFilled;
