import type { SVGProps } from "react";

export function LotteryFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.437 3.25A5.01 5.01 0 0 0 10.001 5a5.01 5.01 0 0 0-2.437-1.75A2.996 2.996 0 0 1 10.001 2c1.003 0 1.892.493 2.436 1.25Zm-8.81 7.97a6.504 6.504 0 0 1 5.85-5.2a4 4 0 1 0-5.85 5.199Zm12.747 0a4 4 0 1 0-5.85-5.199a6.504 6.504 0 0 1 5.85 5.199ZM15.5 12.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Zm-7.5-2a.5.5 0 0 0 .5.5h2.24c-.102.146-.21.31-.32.485c-.483.772-1.028 1.846-1.166 2.953a.5.5 0 1 0 .992.124c.112-.893.567-1.819 1.022-2.547a11.097 11.097 0 0 1 .843-1.168l.012-.014l.004-.004A.5.5 0 0 0 11.75 10H8.5a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default LotteryFilled;
