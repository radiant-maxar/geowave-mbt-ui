import * as React from 'react'
import * as $ from 'classnames'

import styles from './Checkbox.less'


export const Checkbox = ({
    className,
    checked,
    classes,
    disabled,
    onChange,
}: IProps) => (
    <span
        className={$(
            styles.root,
            className,
            checked === true && styles.isChecked,
            checked === null && styles.isIndeterminate,
            disabled && styles.isDisabled,
        )}
        onClick={() => onChange && !disabled && onChange(!checked)}>
        <input
            type="checkbox"
            disabled={disabled}
            onChange={() => onChange && !disabled && onChange(!checked)}
        />
        <svg viewBox="0 0 16 16">
            {checked === true && (
                <polyline
                    className={$(styles.check, classes && classes.check)}
                    points="13.3578157 5 6.48796896 12 2.5 8.07925674"
                />
            )}
            {checked === null && (
                <rect
                    className={$(styles.dash, classes && classes.dash)}
                    x="4"
                    y="7"
                    width="8"
                    height="2"
                />
            )}
        </svg>
    </span>
)


interface IProps {
    className?: string

    classes?: IClasses
    checked?: boolean
    disabled?: boolean

    onChange?(value: boolean): void
}


interface IClasses {
    check?: string
    dash?: string
}
