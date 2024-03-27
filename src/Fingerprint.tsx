import type { SVGProps } from "react";

export function Fingerprint(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.717 3.95c1.537-.741 4.817-1.437 8.51.969a.5.5 0 1 0 .546-.838c-4.037-2.63-7.697-1.897-9.49-1.031a.5.5 0 1 0 .434.9Zm-1.808.641a.5.5 0 0 1-.143.693c-.523.344-1.11 1.085-1.335 1.469a.5.5 0 0 1-.862-.506c.27-.46.95-1.34 1.648-1.799a.5.5 0 0 1 .692.143Zm5.591-.05a.5.5 0 1 0 0 1c1.656 0 5.514 1.376 6.51 6.553a.5.5 0 0 0 .981-.188c-1.098-5.712-5.423-7.365-7.49-7.365Zm-1.155 6.261c-.87.706-1.527 2.685.558 6.456a.5.5 0 0 1-.876.484c-2.148-3.886-1.778-6.526-.313-7.716c1.424-1.157 3.67-.655 4.283 1.324c.081.263.146.578.21.893l.033.157c.08.38.168.776.298 1.175c.259.793.676 1.572 1.481 2.166a.5.5 0 1 1-.594.805c-1.027-.758-1.539-1.746-1.838-2.66a11.873 11.873 0 0 1-.326-1.282l-.034-.167a8.995 8.995 0 0 0-.186-.792c-.389-1.257-1.786-1.583-2.696-.843Zm6.154 1.17a.5.5 0 1 0-.998.055c.098 1.808 1.216 2.746 1.846 2.949a.5.5 0 0 0 .306-.952c-.227-.073-1.077-.648-1.154-2.051ZM11 12.5a.5.5 0 1 0-1 0c0 1.045.129 1.851.437 2.638c.304.774.772 1.504 1.405 2.4a.5.5 0 1 0 .817-.576c-.628-.89-1.035-1.535-1.291-2.19c-.252-.641-.368-1.317-.368-2.272ZM7.97 8.79c-1.716 1.328-2.702 4.142-1.022 7.485a.5.5 0 0 1-.894.45c-1.87-3.722-.832-7.072 1.303-8.726c1.061-.821 2.39-1.216 3.727-1c1.342.218 2.637 1.044 3.643 2.557a.5.5 0 1 1-.833.554c-.875-1.317-1.941-1.956-2.97-2.123c-1.035-.168-2.09.133-2.954.803Zm.487-2.996a.5.5 0 0 0-.342-.94c-4.68 1.7-5.79 6.186-5.358 9.217a.5.5 0 0 0 .99-.142c-.391-2.739.622-6.65 4.71-8.135Z"
      />
    </svg>
  );
}
export default Fingerprint;
