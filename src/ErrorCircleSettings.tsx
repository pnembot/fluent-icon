import type { SVGProps } from "react";

export function ErrorCircleSettings(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 10a8 8 0 1 0-7.411 7.979a5.462 5.462 0 0 1-.383-.982a7 7 0 1 1 6.79-6.79c.343.096.671.224.983.382c.014-.195.021-.391.021-.589Zm-7.342 2.89a.75.75 0 1 0-.442 1.078c.11-.378.258-.739.442-1.079Zm-.166-6.48a.5.5 0 0 0-.992.09V11l.008.09A.5.5 0 0 0 10.5 11V6.5l-.008-.09Zm1.143 8.51a2 2 0 0 0 1.43-2.478l-.155-.557c.254-.195.529-.362.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.343c.298.14.578.314.835.518l-.126.422a2 2 0 0 0 1.456 2.519l.349.082a4.697 4.697 0 0 1 .01 1.017l-.46.118a2 2 0 0 0-1.431 2.478l.156.556c-.254.196-.53.363-.822.498l-.337-.358a2 2 0 0 0-2.91-.002l-.325.345a4.32 4.32 0 0 1-.835-.518l.127-.423a2 2 0 0 0-1.456-2.519l-.35-.083a4.715 4.715 0 0 1-.01-1.016l.461-.118Zm4.865.58a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default ErrorCircleSettings;
