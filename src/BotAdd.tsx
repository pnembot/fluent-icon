import type { SVGProps } from "react";

export function BotAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm3.5-4a.5.5 0 0 0-1 0V3h-3A1.5 1.5 0 0 0 5 4.5v4A1.5 1.5 0 0 0 6.5 10h4.837a5.475 5.475 0 0 1 3.572-.985c.059-.16.091-.334.091-.515v-4A1.5 1.5 0 0 0 13.5 3h-3v-.5ZM6.5 4h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5Zm2 7.5h1.39c-.205.314-.378.65-.516 1.003H5.309a.81.81 0 0 0-.809.81v.437c0 .69.131 1.456.802 2.069c.652.594 1.9 1.123 4.295 1.177c.183.358.405.694.659 1.002h-.006V18h-.5v-.002c-2.616-.033-4.195-.595-5.122-1.44c-.875-.8-1.089-1.777-1.123-2.556H3.5v-.69c0-.999.81-1.809 1.81-1.809H8.5V11.5Zm10.5 3a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default BotAdd;
