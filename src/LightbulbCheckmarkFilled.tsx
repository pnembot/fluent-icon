import type { SVGProps } from "react";

export function LightbulbCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.147-1.854a.5.5 0 0 0-.707 0L13.5 6.293l-.647-.647a.5.5 0 1 0-.707.708l1 1a.5.5 0 0 0 .707 0l3-3a.5.5 0 0 0 0-.708ZM14.5 11c.17 0 .34-.008.507-.023c-.325.49-.73.962-1.211 1.417a.599.599 0 0 0-.145.213l-.026.081L13.31 14H6.689l-.313-1.311a.595.595 0 0 0-.171-.295c-1.39-1.312-2.133-2.77-2.2-4.355l-.002-.43C4.107 4.494 6.753 2 10 2c.085 0 .169.002.253.005A5.5 5.5 0 0 0 14.5 11Zm-1.427 4l-.384 1.605c-.184.771-.866 1.33-1.671 1.39L9.125 18c-.819 0-1.535-.516-1.777-1.262l-.037-.133L6.928 15h6.145Z"
      />
    </svg>
  );
}
export default LightbulbCheckmarkFilled;
