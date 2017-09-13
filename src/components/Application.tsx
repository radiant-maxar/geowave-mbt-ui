import * as React from 'react'
import * as $ from 'classnames'
import { inject, observer } from 'mobx-react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import styles from './Application.less'

import { MercuryAnimation, DiscAnimation } from './ui/ActivityIndicator'
import { Button } from './ui/Button'
import { Checkbox } from './ui/Checkbox'

import { IStore } from '../store'
import { Menu, MenuDivider, MenuHeader, MenuItem } from './ui/Menu'
import { Tab, Tabs } from './ui/Tabs'
import { Radio } from './ui/Radio'
import { ProgressBar } from './ui/ProgressBar'


const Home = () => (
    <main>
        <h1>new-webapp</h1>
        <p>Hello World</p>
    </main>
)


const NotFound = (props) => (
    <main>
        <h1>Not Found!</h1>
        <pre>{JSON.stringify(props, null, 4)}</pre>
    </main>
)


const UISandbox = () => (
    <main>
        <h1>UI Sandbox</h1>
        <ul className={styles.sandbox}>
            <li>
                <h2>&lt;ActivityIndicator /&gt;</h2>

                <div style={{ padding: '15px' }}>
                    <MercuryAnimation />
                </div>

                <div style={{ padding: '15px' }}>
                    <DiscAnimation />
                </div>
            </li>

            <li>
                <h2>&lt;Button /&gt;</h2>

                <Button
                    icon={<svg viewBox="0 0 10 10" style={{width: '1em', height: '1em'}}><circle cx="5" cy="5" r="3" fill="red" /></svg>}
                />
                {' '}

                <Button
                    icon={<svg viewBox="0 0 10 10" style={{width: '1em', height: '1em'}}><path fill="green" d="M2.87867966,5 L5,7.12132034 L7.12132034,5 L5,2.87867966 L2.87867966,5 Z"/></svg>}
                    label="wat"
                />
                {' '}

                <Button
                    primary
                    label="Do it"
                />
                {' '}

                <Button
                    danger
                    label="Oh no"
                />
            </li>

            <li>
                <h2>&lt;Checkbox /&gt;</h2>

                <label>
                    <Checkbox checked={true}/> Checked
                </label>
                {' '}

                <label>
                    <Checkbox checked={false}/> Unchecked
                </label>
                {' '}

                <label>
                    <Checkbox checked={null}/> Indeterminate
                </label>
                <br/>

                <label>
                    <Checkbox disabled checked={true}/> Checked (disabled)
                </label>
                {' '}

                <label>
                    <Checkbox disabled checked={false}/> Unchecked (disabled)
                </label>
                {' '}

                <label>
                    <Checkbox disabled checked={null}/> Indeterminate (disabled)
                </label>
            </li>

            <li>
                <h2>&lt;Menu /&gt;</h2>

                <Menu>
                    <MenuHeader
                        label="With Icons"
                    />
                    <MenuItem
                        icon={<svg viewBox="0 0 10 10" style={{width: '1em', height: '1em'}}><path fill="green" d="M2.87867966,5 L5,7.12132034 L7.12132034,5 L5,2.87867966 L2.87867966,5 Z"/></svg>}
                        label="Lorem"
                    />
                    <MenuItem
                        icon={<svg viewBox="0 0 10 10" style={{width: '1em', height: '1em'}}><path fill="green" d="M2.87867966,5 L5,7.12132034 L7.12132034,5 L5,2.87867966 L2.87867966,5 Z"/></svg>}
                        label="Ipsum"
                    />
                    <MenuItem
                        icon={<svg viewBox="0 0 10 10" style={{width: '1em', height: '1em'}}><path fill="green" d="M2.87867966,5 L5,7.12132034 L7.12132034,5 L5,2.87867966 L2.87867966,5 Z"/></svg>}
                        label="Dolor"
                    />
                    <MenuDivider />
                    <MenuHeader
                        label="Without Icons"
                    />
                    <MenuItem
                        label="Something selectable"
                    />
                    <MenuItem
                        selected
                        label="Something selected"
                    />
                    <MenuItem
                        disabled
                        label="Something disabled"
                    />
                    <MenuDivider />
                    <MenuHeader
                        label="Nested Things"
                    />
                    <MenuItem
                        icon={<svg viewBox="0 0 10 10" style={{width: '1em', height: '1em'}}><circle cx="5" cy="5" r="3" fill="red" /></svg>}
                        label="Nest"
                    >
                        <MenuItem label="Alpha"/>
                        <MenuItem label="Bravo"/>
                        <MenuItem label="Neeeeeest">
                            <MenuItem label="Charlie"/>
                            <MenuItem label="Delta"/>
                        </MenuItem>
                        <MenuItem label="Recursion">
                            <MenuItem label="Can">
                                <MenuItem label="Be">
                                    <MenuItem label="Very">
                                        <MenuItem label="Annoying"/>
                                    </MenuItem>
                                </MenuItem>
                            </MenuItem>
                        </MenuItem>
                    </MenuItem>
                </Menu>
            </li>

            <li>
                <h2>&lt;ProgressBar &gt;</h2>

                <ProgressBar value={25} />
                <br/>

                <ProgressBar value={50} />
                <br/>

                <ProgressBar value={75} />
                <br/>

                <ProgressBar />
                <br/>

                <ProgressBar value={25}>
                    Lorem Ipsum Dolor
                </ProgressBar>
                <br/>

                <ProgressBar value={50}>
                    Lorem Ipsum Dolor
                </ProgressBar>
                <br/>

                <ProgressBar value={75}>
                    Lorem Ipsum Dolor
                </ProgressBar>
                <br/>

                <ProgressBar>
                    Lorem Ipsum Dolor
                </ProgressBar>
            </li>

            <li>
                <h2>&lt;Radio /&gt;</h2>

                <label>
                    <Radio checked={true} /> Checked
                </label>
                {' '}

                <label>
                    <Radio checked={false} /> Unchecked
                </label>
                {' '}

                <label>
                    <Radio checked={null} /> Indeterminate
                </label>
                <br/>

                <label>
                    <Radio disabled checked={true} /> Checked (Disabled)
                </label>
                {' '}

                <label>
                    <Radio disabled checked={false} /> Unchecked (Disabled)
                </label>
                {' '}

                <label>
                    <Radio disabled checked={null} /> Indeterminate (Disabled)
                </label>
            </li>

            <li>
                <h2>&lt;Tabs /&gt;</h2>

                <Tabs value="charlie">
                    <Tab value="alpha" label="Alpha">Now viewing <strong>Alpha</strong></Tab>
                    <Tab value="bravo" label="Bravo">Now viewing <strong>Bravo</strong></Tab>
                    <Tab value="charlie" label="Charlie">Now viewing <strong>Charlie</strong></Tab>
                    <Tab value="delta" label="Delta">Now viewing <strong>Delta</strong></Tab>
                </Tabs>
            </li>
        </ul>
    </main>
)


export class Application extends React.Component<IPropsInternal, never> {
    componentDidMount() {
        this.props.fetchRevision()
    }

    render() {
        return (
            <BrowserRouter>
                <main className={$({
                    [styles.root]: true,
                    [styles.isRed]: this.props.isRed,
                    'some-global-thing': true,
                })}>
                    <header>
                        <Link to="/">Home</Link>
                        {' | '}
                        <Link to="/sandbox">UI Sandbox</Link>
                        {' | '}
                        <Link to={`/noooooooooooo`}>¯\_(ツ)_/¯</Link>
                    </header>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/sandbox" component={UISandbox}/>
                        <Route component={NotFound}/>
                    </Switch>

                    <footer>
                        <pre>this.props.$data = {JSON.stringify(this.props.$data, null, 4)}</pre>
                        <Button
                            label="Clicky"
                            onClick={this.onToggleClick}
                        />
                    </footer>
                </main>
            </BrowserRouter>
        )
    }

    private onToggleClick = () => {
        this.props.toggleRed()
    }
}


export default inject(({ store }: { store: IStore }) => ({
    isRed: store.isRed,
    $data: store,

    fetchRevision() {
        store.fetchRevision()
    },

    toggleRed() {
        store.toggleRed()
    },
}))(observer<IPropsExternal>(Application))


/*
 * Types
 */

interface IPropsExternal {
    className?: any
}


interface IPropsInternal extends IPropsExternal {
    $data: any
    isRed: boolean

    fetchRevision(): void

    toggleRed(): void
}
