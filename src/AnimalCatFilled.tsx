import type { SVGProps } from "react";

export function AnimalCatFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.97 18H13v-1.5a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 0 1 3.5 3.5V18h.25c.472 0 .9-.191 1.21-.5h.04v-.041a1.71 1.71 0 0 0 .465-1.175v-7.61c1.61-.064 2.573-1.85 1.713-3.238l-.502-.81a2.12 2.12 0 0 0-1.802-1.004h-1.435v-.636A.986.986 0 0 0 12.953 2a2.445 2.445 0 0 0-2.444 2.446v3.456c-1.278.126-2.243.73-2.952 1.582c-.44.528-.779 1.148-1.04 1.798c-.227.46-.386.959-.464 1.485l-.013.059c-.276 1.182-.373 2.358-.403 3.232c-.012.374-.012.696-.008.942H4.97a1.971 1.971 0 0 1-1.44-3.317l.92-.987a3.589 3.589 0 0 0-.086-4.984l-.903-.903a.5.5 0 1 0-.707.707l.903.903a2.587 2.587 0 0 1 .062 3.595l-.92.987A2.973 2.973 0 0 0 4.97 18Z"
      />
    </svg>
  );
}
export default AnimalCatFilled;
