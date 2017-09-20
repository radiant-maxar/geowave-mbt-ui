import * as React from 'react'
import * as $ from 'classnames'
import MapIcon from 'react-icons/lib/fa/map'

import { Menu, MenuItem } from './ui/Menu'

import styles from './BasemapPicker.less'

import { listBasemaps } from '../primary-map'


export class BasemapPicker extends React.Component<IProps, IState> {
    state = {
        isOpen: false,
    }

    componentDidMount() {
        window.addEventListener('click', this.onWindowClick)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick)
    }

    render() {
        return(
            <div className={$(styles.root, this.props.className, this.state.isOpen && styles.isOpen)} onClick={e => e.stopPropagation()}>
                <button className={styles.button} onClick={this.toggleOpen}>
                    <MapIcon className={styles.buttonIcon} />
                </button>
                <Menu className={styles.menu}>
                    {listBasemaps().map(label => (
                        <MenuItem
                            key={label}
                            className={styles.menuItem}
                            label={label}
                            selected={label === this.props.value}
                            onClick={() => this.emitOnChange(label)}
                        />
                    ))}
                </Menu>
            </div>
        )
    }

    private onWindowClick = () => {
        if (!this.state.isOpen) {
            return  // Nothing to do
        }

        this.setState({ isOpen: false })
    }

    private toggleOpen = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        this.setState({ isOpen: !this.state.isOpen })
    }

    private emitOnChange = (value: string) => {
        if (this.props.value === value) {
            return  // Nothing to do
        }

        this.props.onChange(value)
    }
}


interface IProps {
    className?: string

    value: string

    onChange(value: string): void
}


interface IState {
    isOpen?: boolean
}
