import type { SVGProps } from "react";

export function CalendarShieldFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 7v1.61a3.06 3.06 0 0 1-.613-.185c-.458-.193-.92-.512-1.381-.995A1.387 1.387 0 0 0 14 7h3ZM3 7h11c-.364 0-.729.143-1.003.43c-.84.874-1.691 1.237-2.597 1.237c-.811 0-1.4.673-1.4 1.416v2.51l.005.282v.008c.047 1.413.434 2.67 1.2 3.71c.104.14.214.276.33.407H5.5A2.5 2.5 0 0 1 3 14.5V7Zm11.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9ZM16 9.347a4.056 4.056 0 0 0 1.6.32c.193 0 .355.142.392.332l.008.084v2.501c0 2.682-1.313 4.506-3.873 5.395a.385.385 0 0 1-.254 0c-.725-.252-1.35-.579-1.873-.979a4.96 4.96 0 0 1-.99-1c-.627-.85-.964-1.903-1.006-3.15L10 12.584v-2.5c0-.23.18-.417.4-.417c1.223 0 2.323-.51 3.318-1.545a.389.389 0 0 1 .566 0c.54.563 1.11.97 1.716 1.225Z"
      />
    </svg>
  );
}
export default CalendarShieldFilled;
