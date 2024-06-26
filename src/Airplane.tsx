import type { SVGProps } from "react";

export function Airplane(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m8.782 8.29l-.685-5.484A1.162 1.162 0 0 1 9.106 1.51l.072-.007l.168-.002a1.5 1.5 0 0 1 1.374.899l2.512 5.742l2.752-.09A1.951 1.951 0 0 1 17.99 9.79l.01.145V10c0 1.077-.873 1.95-1.96 1.95l-2.807-.092l-2.513 5.743a1.5 1.5 0 0 1-1.374.899H9.25a1.162 1.162 0 0 1-1.153-1.306l.685-5.485l-2.142-.071l-.958 1.676A1.361 1.361 0 0 1 4.5 14a1 1 0 0 1-1-1v-1.466l-.161-.013a1.534 1.534 0 0 1-.001-3.042l.162-.013V7a1 1 0 0 1 1-1c.489 0 .94.262 1.182.686l.958 1.675l2.142-.071Zm.564-5.79l-.116.001a.162.162 0 0 0-.14.181l.82 6.57l-3.84.129l-1.256-2.199A.362.362 0 0 0 4.5 7v2.432l-.984.034a.534.534 0 0 0 0 1.068l.984.032V13l.076-.008a.361.361 0 0 0 .238-.174l1.256-2.2l3.84.129l-.822 6.59c0 .09.072.163.162.163h.096a.5.5 0 0 0 .458-.3l2.785-6.364l3.46.115A.95.95 0 0 0 17 10v-.032a.95.95 0 0 0-.983-.918l-3.43.113L9.805 2.8a.5.5 0 0 0-.458-.3Z"
      />
    </svg>
  );
}
export default Airplane;
