import { DetailedHTMLProps, forwardRef, ForwardedRef, InputHTMLAttributes } from 'react'

const SwitchInput_ = (
  { label = '', name = '', ...rest }: IProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div className="{s.Container}">
      <label htmlFor={name}>{label}</label>

      <div className="{s.SliderContainer}">
        <input
          className="{s.SwitchInput}"
          id={name}
          name={name}
          ref={ref}
          type="checkbox"
          {...rest}
        />

        <div className="{s.Slider}" />
      </div>
    </div>
  )
}

export const SwitchInput = forwardRef(SwitchInput_)

interface ICustomProps {
  label?: string
}
type IProps = ICustomProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// .Container {
//   display: flex;
//   align-items: center;
//   column-gap: 10px;
// }

// .SliderContainer {
//   position: relative;
//   height: 24px;
//   width: 40px;
//   background: var(--color-theme-1-light);
//   border-radius: 25px;
//   border: 1px solid var(--color-theme-1);
// }

// .SwitchInput {
//   position: absolute;
//   z-index: 2;
//   height: 100%;
//   width: 100%;
//   opacity: 0;
// }

// .Slider:before {
//   position: absolute;
//   z-index: 1;
//   bottom: 2px;
//   left: 2px;
//   height: 18px;
//   width: 18px;
//   background: var(--soft-gray);
//   border-radius: 50%;
//   content: '';
//   transition: 0.4s;
// }

// .SwitchInput:checked + .Slider:before {
//   background: var(--color-theme-1);
//   transform: translateX(16px);
// }
