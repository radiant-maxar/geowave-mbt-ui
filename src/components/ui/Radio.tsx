import * as React from 'react'
import * as $ from 'classnames'

import styles from './Radio.less'


export const Radio = ({
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
            type="radio"
            disabled={disabled}
            onChange={() => onChange && !disabled && onChange(!checked)}
        />
        <svg viewBox="0 0 10 10">
            <circle
                className={$(styles.ring, classes && classes.ring)}
                cx="5"
                cy="5"
                r="4"
            />
            {(checked === true || checked === null) && (
                <circle
                    className={$(styles.dot, classes && classes.dot)}
                    cx="5"
                    cy="5"
                    r="2"
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
    ring?: string
    dot?: string
}
