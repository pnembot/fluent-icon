import type { SVGProps } from "react";

export function TextBulletListSquarePerson(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v3.651a2.98 2.98 0 0 0-1-.36V5.75A1.75 1.75 0 0 0 14.25 4h-8.5A1.75 1.75 0 0 0 4 5.75v8.5c0 .966.784 1.75 1.75 1.75h5.3c-.033.162-.05.329-.05.5c0 .167.013.334.038.5H5.75A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3Zm3.75 7h3.764a2.997 2.997 0 0 0-.593 1H9.5a.5.5 0 0 1 0-1Zm0 3h3.17c.132.373.336.711.594 1H9.5a.5.5 0 0 1 0-1Zm-2-5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm8 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default TextBulletListSquarePerson;
