import type { SVGProps } from "react";

export function CameraOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.502 4.209L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-.95-.95c-.22.062-.452.096-.691.096h-11a2.5 2.5 0 0 1-2.5-2.5v-8a2.5 2.5 0 0 1 1.497-2.291ZM15.292 16l-2.84-2.84A4 4 0 0 1 6.84 7.547L4.306 5.013a1.5 1.5 0 0 0-1.3 1.486V14.5a1.5 1.5 0 0 0 1.5 1.5h10.788Zm-3.554-3.555L7.555 8.262a3 3 0 0 0 4.184 4.184Zm-3.3-6.128l.785.785a3.004 3.004 0 0 1 3.675 3.675l.785.785a4 4 0 0 0-5.246-5.246Zm8.567 8.183c0 .118-.014.233-.04.344l.776.775a2.49 2.49 0 0 0 .264-1.119v-8a2.5 2.5 0 0 0-2.5-2.5h-1.69l-.585-1.17A1.5 1.5 0 0 0 11.888 2H8.124a1.5 1.5 0 0 0-1.34.826L6.194 4h-.073l.79.79a.5.5 0 0 0 .038-.065l.728-1.449A.5.5 0 0 1 8.124 3h3.764a.5.5 0 0 1 .447.276l.723 1.447a.5.5 0 0 0 .448.276h1.999a1.5 1.5 0 0 1 1.5 1.5V14.5Z"
      />
    </svg>
  );
}
export default CameraOff;
