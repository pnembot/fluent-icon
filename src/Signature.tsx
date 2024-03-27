import type { SVGProps } from "react";

export function Signature(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.021 2.772a2.445 2.445 0 1 1 3.458 3.457L14.207 7.5l.086.086a2 2 0 0 1 0 2.829l-1.44 1.439a.5.5 0 0 1-.707-.707l1.44-1.44a1 1 0 0 0 0-1.414l-.086-.086l-6.646 6.647a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.595-.643l1.25-3.75a.5.5 0 0 1 .12-.195l8.626-8.625Zm2.75.707a1.445 1.445 0 0 0-2.042 0L4.187 12.02l-.925 2.774l2.982-.745l8.527-8.527a1.445 1.445 0 0 0 0-2.043ZM3.217 16.867l.051.038C4.011 17.445 5.112 18 6.5 18c.743 0 1.424-.26 2.029-.604c.603-.344 1.163-.79 1.661-1.195l.117-.095c.464-.378.862-.701 1.228-.917c.403-.238.644-.268.807-.214c.265.088.416.293.679 1.169c.087.292.243.61.471.867c.229.257.569.49 1.008.49c.474 0 .943-.229 1.305-.442c.239-.141.495-.318.703-.46c.103-.07.193-.133.264-.18c.268-.173.494-.285.649-.353c.077-.034.136-.057.174-.07l.04-.014l.006-.002a.5.5 0 0 0-.281-.96h-.001l-.003.002l-.007.002l-.021.007l-.07.023a3.57 3.57 0 0 0-.24.096a5.602 5.602 0 0 0-.79.43c-.117.077-.23.154-.342.232a9.27 9.27 0 0 1-.589.385c-.341.202-.61.303-.797.303c-.06 0-.15-.03-.26-.154a1.34 1.34 0 0 1-.261-.49c-.24-.8-.5-1.556-1.32-1.83c-.588-.196-1.16.023-1.632.301c-.435.257-.892.63-1.337.992l-.13.106c-.502.407-1.004.804-1.526 1.102c-.52.296-1.027.473-1.534.473c-.746 0-1.396-.2-1.934-.47l-1.349.337ZM17.5 15.5l-.14-.48l.14.48Z"
      />
    </svg>
  );
}
export default Signature;
