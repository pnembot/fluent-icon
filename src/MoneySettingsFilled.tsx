import type { SVGProps } from "react";

export function MoneySettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h5.522A5.5 5.5 0 0 1 16 9.207V5.5A1.5 1.5 0 0 0 14.5 4h-11ZM6 6a2 2 0 0 1-2 2H3V7h1a1 1 0 0 0 1-1V5h1v1Zm3 4.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5ZM3 11v-1h1a2 2 0 0 1 2 2v1H5v-1a1 1 0 0 0-1-1H3Zm10-5a1 1 0 0 0 1 1h1v1h-1a2 2 0 0 1-2-2V5h1v1Zm-8.915 9h4.937a5.5 5.5 0 0 0 .185 1H5.5a1.5 1.5 0 0 1-1.415-1ZM18 7.5v2.757a5.508 5.508 0 0 0-1-.657V6.085A1.5 1.5 0 0 1 18 7.5Zm-5.935 3.943a2 2 0 0 1-1.43 2.478l-.462.118a4.733 4.733 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.258.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.702 4.702 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.31 4.31 0 0 0-.821.497l.156.557Zm2.434 4.058a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default MoneySettingsFilled;
