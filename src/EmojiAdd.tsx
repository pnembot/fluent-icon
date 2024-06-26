import type { SVGProps } from "react";

export function EmojiAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 1a8 8 0 0 1 7.979 8.589a5.464 5.464 0 0 0-.982-.383a7 7 0 1 0-6.79 6.79c.096.343.224.671.382.983A8 8 0 1 1 9 1ZM6.155 11.427a4.003 4.003 0 0 0 3.183 1.17a5.462 5.462 0 0 0-.267 1.014a4.997 4.997 0 0 1-3.626-1.479a.5.5 0 0 1 .71-.705ZM11.5 6.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm12.5 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default EmojiAdd;
