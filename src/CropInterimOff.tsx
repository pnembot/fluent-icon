import type { SVGProps } from "react";

export function CropInterimOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m3.019 3.726l-.873-.872a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.205-1.206c-.85.54-1.86.852-2.941.852a5.485 5.485 0 0 1-4-1.725v.725a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.855A4.489 4.489 0 0 0 13 16.5a4.48 4.48 0 0 0 2.212-.58l-1.938-1.939A2 2 0 0 1 11.267 13H5.733a2 2 0 1 1-1.959-2.987l.463-4.164A2 2 0 0 1 3.02 3.726Zm8 8L5.274 5.98a1.997 1.997 0 0 1-.047.006l-.463 4.164A2 2 0 0 1 6 12h5a1.9 1.9 0 0 1 .019-.274Zm.754-5.739l.459 4.123l2.627 2.628a2 2 0 0 0-1.632-2.726l-.463-4.163A2 2 0 1 0 10.268 3H6.732a2 2 0 0 0-2.47-.86l.867.868a1 1 0 0 1 .863.863l.867.867C6.95 4.51 7 4.261 7 4h3a2 2 0 0 0 1.773 1.987Zm4.92 8.585l.716.716a5.501 5.501 0 0 0-3.56-8.723l.116 1.039a4.502 4.502 0 0 1 2.728 6.968ZM12 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm-9 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}
export default CropInterimOff;
