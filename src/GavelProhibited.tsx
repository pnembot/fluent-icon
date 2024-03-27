import type { SVGProps } from "react";

export function GavelProhibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.44 5.283a1.5 1.5 0 0 0 .225 2.307l1.766 1.183l-5.853 5.853a1.976 1.976 0 1 0 2.795 2.795l3.679-3.678a5.46 5.46 0 0 1 .855-2.27l-5.241 5.241a.977.977 0 0 1-1.381-1.38L9.278 9.34l.744.499a.5.5 0 0 1 .137.137l.436.65a5.53 5.53 0 0 1 .77-.647l-.375-.56a1.5 1.5 0 0 0-.411-.41L8.866 7.86l3.04-3.04l1.227 1.704c.095.131.21.246.34.34l1.705 1.229l-.91.91a5.577 5.577 0 0 1 1.312.102l.42-.42l.788.567c.118.085.187.21.204.342c.323.165.628.361.911.584a1.501 1.501 0 0 0-.53-1.737l-3.315-2.388a.5.5 0 0 1-.113-.113l-2.387-3.315a1.5 1.5 0 0 0-2.278-.184L6.44 5.283Zm.782 1.476a.5.5 0 0 1-.076-.769l2.841-2.84a.5.5 0 0 1 .76.061l.567.79L8.02 7.293l-.797-.535ZM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.484 3.484 0 0 1 11 14.5Zm3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 18Z"
      />
    </svg>
  );
}
export default GavelProhibited;
