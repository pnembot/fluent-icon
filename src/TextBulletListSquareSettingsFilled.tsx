import type { SVGProps } from "react";

export function TextBulletListSquareSettingsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9.6a5.47 5.47 0 0 0-2.5-.6c-1.177 0-2.268.37-3.163 1H9.5a.5.5 0 0 0 0 1h.757A5.477 5.477 0 0 0 9 14.5c0 .9.216 1.75.6 2.5H5.75A2.75 2.75 0 0 1 3 14.25v-8.5ZM6.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9 7.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm3.066 3.942a2 2 0 0 1-1.43 2.478l-.462.118a4.704 4.704 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.423c.258.203.537.377.835.517l.325-.344a2 2 0 0 1 2.91.002l.337.358c.292-.135.568-.302.822-.498l-.156-.556a2 2 0 0 1 1.43-2.478l.46-.118a4.731 4.731 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.318 4.318 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.316 4.316 0 0 0-.822.497l.157.557ZM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default TextBulletListSquareSettingsFilled;
