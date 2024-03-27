import type { SVGProps } from "react";

export function HeartCircleHint(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.44 2.152a8.037 8.037 0 0 1 3.12 0a.5.5 0 0 1-.193.981a7.037 7.037 0 0 0-2.734 0a.5.5 0 0 1-.194-.98Zm-5.7 5.894a.5.5 0 0 1 .393.587a7.036 7.036 0 0 0 0 2.734a.5.5 0 0 1-.98.194a8.038 8.038 0 0 1 0-3.122a.5.5 0 0 1 .587-.393Zm14.52 0a.5.5 0 0 1 .588.393a8.032 8.032 0 0 1 0 3.122a.5.5 0 0 1-.981-.194a7.042 7.042 0 0 0 0-2.734a.5.5 0 0 1 .393-.587ZM8.046 17.26a.5.5 0 0 1 .587-.393a7.042 7.042 0 0 0 2.734 0a.5.5 0 1 1 .194.98a8.033 8.033 0 0 1-3.122 0a.5.5 0 0 1-.393-.587Zm6.4-13.913a8.04 8.04 0 0 1 2.207 2.208a.5.5 0 1 1-.831.556a7.032 7.032 0 0 0-1.933-1.933a.5.5 0 0 1 .557-.83Zm-8.198.138a.5.5 0 0 1-.137.693a7.037 7.037 0 0 0-1.933 1.933a.5.5 0 0 1-.83-.556a8.037 8.037 0 0 1 2.206-2.208a.5.5 0 0 1 .694.138Zm10.268 10.267a.5.5 0 0 1 .137.694a8.033 8.033 0 0 1-2.207 2.207a.5.5 0 0 1-.557-.83a7.035 7.035 0 0 0 1.933-1.934a.5.5 0 0 1 .694-.137Zm-13.032 0a.5.5 0 0 1 .694.137a7.038 7.038 0 0 0 1.933 1.933a.5.5 0 1 1-.557.831a8.036 8.036 0 0 1-2.207-2.207a.5.5 0 0 1 .137-.694ZM11.22 8.3a1.045 1.045 0 0 1 1.507 1.445L10 12.76L7.27 9.745A1.045 1.045 0 0 1 8.777 8.3l.871.856a.5.5 0 0 0 .701 0l.871-.856Zm2.249-.628c-.78-.861-2.12-.9-2.95-.085l-.52.511l-.52-.512a2.045 2.045 0 0 0-2.95 2.83l3.1 3.424a.5.5 0 0 0 .74 0l3.1-3.423a2.044 2.044 0 0 0 0-2.745Z"
      />
    </svg>
  );
}
export default HeartCircleHint;
