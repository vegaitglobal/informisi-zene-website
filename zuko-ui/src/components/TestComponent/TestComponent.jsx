import styles from './TestComponent.css'

export default function TestComponent({testProperty = "default value"}){
    return <p >{testProperty}</p>
}