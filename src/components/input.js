import styles from './input.module.css';
const Input = () => {
    return (
        <form className={styles.inputform}>
            <div className={styles.name}>
                <label>Name:</label>
                <input name="name" type="text" placeholder="Enter text here" />
            </div>

            <div className={styles.email}>
                <label>Email:</label>
                <input name="email" type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.password}>
                <label>Password:</label>
                <input name="password" type="password" placeholder="Enter your password" />
            </div>
            <button className={styles.button} >Submit </button>
        </form>


    );
}
export default Input;