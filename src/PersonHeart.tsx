import type { SVGProps } from "react";

export function PersonHeart(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.955 0 1.876-.102 2.72-.313l-.78-.854c-.604.11-1.255.167-1.94.167c-1.735 0-3.257-.364-4.327-1.047C3.623 15.283 3 14.31 3 13c0-.553.448-1 1.009-1h5.29a3.396 3.396 0 0 1 .689-1h-5.98Zm10.49 1.003l-.628-.493a2.394 2.394 0 0 0-3.244 3.5l3.503 3.83a.5.5 0 0 0 .738 0l3.504-3.83a2.394 2.394 0 0 0-3.244-3.5l-.629.493Z"
      />
    </svg>
  );
}
export default PersonHeart;
