import type { SVGProps } from "react";

export function PeopleSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.75 9a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5ZM17 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm-8 8c0-1.704.775-3.228 1.993-4.237A1.991 1.991 0 0 0 10 10H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.953 0 1.733-.132 2.371-.347A5.522 5.522 0 0 1 9 14.5Zm3.065-3.058a2 2 0 0 1-1.43 2.478l-.462.118a4.734 4.734 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422c.258.204.537.378.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.31 4.31 0 0 0-.821.497l.156.557Zm2.434 4.058a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default PeopleSettingsFilled;
