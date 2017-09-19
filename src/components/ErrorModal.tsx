import * as React from 'react'
import * as $ from 'classnames'

import ErrorIcon from 'react-icons/lib/fa/exclamation-circle'
import { Button } from './ui/Button'

import styles from './ErrorModal.less'

import { IError } from '../store/index'


export const ErrorModal = ({
    className,
    children,
    error,
    onDismiss,
}: IProps) => (
    <div className={$(styles.root, className)}>
        <div className={styles.heading}>
            <ErrorIcon className={styles.headingIcon} />
            <span className={styles.headingText}>{error.heading}</span>
        </div>
        <div className={styles.body}>{error.message}</div>
        {process.env.NODE_ENV === 'development' && error.cause && (
            <pre className={styles.stacktrace}>
                    {error.cause.stack}
                </pre>
        )}
        <div className={styles.controls}>
            {children
                ? children
                : <Button
                    className={styles.dismissButton}
                    label="Dismiss"
                    onClick={onDismiss}
                />
            }
        </div>
    </div>
)


interface IProps {
    className?: string
    children?: any

    error: IError

    onDismiss(): void
}
