import type { SVGProps } from "react";

export function BotFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.69 11.503c1 0 1.81.81 1.81 1.81v.689h-.005c-.034.78-.248 1.757-1.123 2.555C14.416 17.43 12.765 18 10 18c-2.766 0-4.416-.57-5.372-1.443c-.875-.798-1.089-1.776-1.123-2.555H3.5v-.69c0-.999.81-1.809 1.81-1.809h9.38ZM6.5 3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h7A1.5 1.5 0 0 0 15 8.5v-4A1.5 1.5 0 0 0 13.5 3h-3v-.5A.48.48 0 0 0 10 2c-.276 0-.5.23-.5.5V3h-3ZM7 6.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z"
      />
    </svg>
  );
}
export default BotFilled;
